"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export interface OrbitalTypeProps {
  /** Words/phrases distributed across the rings. */
  words?: string[];
  className?: string;
}

const DEFAULT_WORDS = [
  "PERFORMANCE MARKETING",
  "AI & AUTOMATION",
  "SEO & CONTENT",
  "BRAND & CREATIVE",
  "ANALYTICS & CRO",
  "WHATSAPP & SOCIAL",
  "META ADS",
  "GOOGLE ADS",
  "LEAD-TO-SALE",
  "AI AD FILMS",
  "GDS MEDIA",
  "GROWTH ENGINE",
];

const RING_COLOR = "rgba(0,141,187,0.35)"; // brand-blue
const TEXT_COLOR = "#172B4D"; // brand-ink
const ACCENT_COLOR = "#FF9810"; // brand-orange

// A flat plane carrying the word's texture, later oriented to face
// radially outward from the globe's centre (see `orientOutward` below) so
// it reads like a flag standing on the sphere's surface and rotates with
// it — rather than a sprite, which always billboards flat to the camera
// regardless of the globe's rotation (the cause of the "messy" look).
function makeTextPlane(text: string): THREE.Mesh {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  const fontSize = 40;
  ctx.font = `700 ${fontSize}px 'Manrope', sans-serif`;
  const metrics = ctx.measureText(text);
  const padX = 20;
  canvas.width = Math.ceil(metrics.width + padX * 2);
  canvas.height = fontSize * 1.6;

  ctx.font = `700 ${fontSize}px 'Manrope', sans-serif`;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.colorSpace = THREE.SRGBColorSpace;

  const scale = 0.0052;
  const geometry = new THREE.PlaneGeometry(canvas.width * scale, canvas.height * scale);
  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false });
  return new THREE.Mesh(geometry, material);
}

// Orients a mesh already positioned on the globe so its face points
// straight outward from the centre (and hides once rotated to the far
// side of the sphere, since MeshBasicMaterial culls its back face).
function orientOutward(mesh: THREE.Object3D) {
  mesh.lookAt(0, 0, 0);
}

export default function OrbitalType({ words = DEFAULT_WORDS, className = "" }: OrbitalTypeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6.4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    const globe = new THREE.Group();
    scene.add(globe);

    // Core sphere — faint wireframe
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.6, 2),
      new THREE.MeshBasicMaterial({ color: 0x008dbb, wireframe: true, transparent: true, opacity: 0.18 }),
    );
    globe.add(core);

    // Rings — each is a tilted circle of radius `r`, carrying its own
    // share of the words evenly spaced around its circumference.
    const ringConfigs = [
      { r: 2.3, tiltX: -Math.PI / 7, tiltZ: Math.PI / 10 },
      { r: 2.3, tiltX: Math.PI / 6, tiltZ: -Math.PI / 9 },
      { r: 2.3, tiltX: Math.PI / 2.1, tiltZ: Math.PI / 14 },
    ];
    const wordGroup = new THREE.Group();
    const wordsPerRing = Math.ceil(words.length / ringConfigs.length);

    ringConfigs.forEach((cfg, ringIndex) => {
      // Guide line
      const curve = new THREE.EllipseCurve(0, 0, cfg.r, cfg.r, 0, Math.PI * 2, false, 0);
      const points = curve.getPoints(128).map((p) => new THREE.Vector3(p.x, 0, p.y));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: new THREE.Color(RING_COLOR), transparent: true, opacity: 0.55 });
      const ringLine = new THREE.LineLoop(geometry, material);
      ringLine.rotation.x = cfg.tiltX;
      ringLine.rotation.z = cfg.tiltZ;
      globe.add(ringLine);

      // This ring's words, evenly spaced around its circle
      const ringWords = words.slice(ringIndex * wordsPerRing, ringIndex * wordsPerRing + wordsPerRing);
      const ringGroup = new THREE.Group();
      ringGroup.rotation.x = cfg.tiltX;
      ringGroup.rotation.z = cfg.tiltZ;
      ringWords.forEach((word, i) => {
        const angle = (i / ringWords.length) * Math.PI * 2 + ringIndex * 0.6;
        const plane = makeTextPlane(word);
        plane.position.set(Math.cos(angle) * cfg.r, 0, Math.sin(angle) * cfg.r);
        orientOutward(plane);
        ringGroup.add(plane);
      });
      wordGroup.add(ringGroup);
    });
    globe.add(wordGroup);

    // A few accent points
    for (let i = 0; i < 10; i++) {
      const phi = Math.acos(1 - 2 * ((i + 0.5) / 10));
      const theta2 = Math.PI * 2 * 0.618 * i;
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.035, 8, 8),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(ACCENT_COLOR) }),
      );
      dot.position.set(
        Math.sin(phi) * Math.cos(theta2) * 2.75,
        Math.cos(phi) * 2.75,
        Math.sin(phi) * Math.sin(theta2) * 2.75,
      );
      globe.add(dot);
    }

    let width = container.clientWidth;
    let height = container.clientHeight;
    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    // Drag-to-spin, with autorotation and inertia
    let autoSpin = true;
    let velocityX = 0;
    let velocityY = 0.0022;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      autoSpin = false;
      lastX = e.clientX;
      lastY = e.clientY;
      container.setPointerCapture(e.pointerId);
      container.style.cursor = "grabbing";
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      velocityY = dx * 0.0025;
      velocityX = dy * 0.0025;
      globe.rotation.y += velocityY;
      globe.rotation.x += velocityX;
    };
    const endDrag = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      container.style.cursor = "grab";
      try {
        container.releasePointerCapture(e.pointerId);
      } catch {
        /* no-op */
      }
    };

    container.style.cursor = "grab";
    container.style.touchAction = "none";
    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);

    let raf = 0;
    const animate = () => {
      if (!dragging) {
        if (autoSpin) {
          globe.rotation.y += 0.0022;
        } else {
          // momentum decay, then resume gentle autorotation
          velocityX *= 0.94;
          velocityY *= 0.94;
          globe.rotation.x += velocityX;
          globe.rotation.y += velocityY;
          if (Math.abs(velocityX) < 0.0003 && Math.abs(velocityY) < 0.0003) {
            autoSpin = true;
            velocityY = 0.0022;
          }
        }
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [words]);

  return <div ref={containerRef} className={`w-full h-full select-none ${className}`} aria-hidden="true" />;
}
