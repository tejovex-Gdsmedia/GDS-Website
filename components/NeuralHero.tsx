"use client";
import React, { useEffect, useRef } from "react";

export default function NeuralHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cx = canvas.getContext("2d")!;
    let W = 0, H = 0;
    let pts: Pt[] = [];
    let animId: number;
    const mouse = { x: -999, y: -999 };
    const GOLD = "rgba(201,150,58,";
    const WHITE = "rgba(255,255,255,";

    function resize() {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    class Pt {
      x=0; y=0; vx=0; vy=0; r=0; a=0; ph=0; gold=false;
      constructor(scatter=false) { this.init(scatter); }
      init(full: boolean) {
        this.x  = Math.random() * W;
        this.y  = full ? Math.random() * H : -10;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = Math.random() * 0.25 + 0.08;
        this.r  = Math.random() * 1.8 + 0.6;
        this.a  = Math.random() * 0.55 + 0.2;
        this.ph = Math.random() * Math.PI * 2;
        this.gold = Math.random() > 0.65;
      }
      tick() {
        const dx = this.x - mouse.x, dy = this.y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < 130 && d > 0) {
          const f = (130 - d) / 130 * 0.55;
          this.vx += (dx / d) * f;
          this.vy += (dy / d) * f;
        }
        this.vx *= 0.96; this.vy *= 0.96;
        this.x += this.vx; this.y += this.vy;
        this.ph += 0.025;
        if (this.y > H + 10 || this.x < -60 || this.x > W + 60) this.init(false);
      }
      draw() {
        const r = this.r * (1 + Math.sin(this.ph) * 0.28);
        const a = this.a  * (0.65 + Math.sin(this.ph) * 0.35);
        cx.beginPath();
        cx.arc(this.x, this.y, r, 0, Math.PI * 2);
        if (this.gold) {
          cx.shadowColor = "#C9963A"; cx.shadowBlur = 10;
          cx.fillStyle = `${GOLD}${a})`;
        } else {
          cx.shadowBlur = 0;
          cx.fillStyle = `${WHITE}${a * 0.4})`;
        }
        cx.fill();
        cx.shadowBlur = 0;
      }
    }

    function links() {
      const MAX = 170;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < MAX) {
            const a = (1 - d / MAX) * 0.22;
            const g = pts[i].gold || pts[j].gold;
            cx.beginPath();
            cx.strokeStyle = g ? `${GOLD}${a})` : `${WHITE}${a * 0.35})`;
            cx.lineWidth = g ? 0.9 : 0.4;
            cx.moveTo(pts[i].x, pts[i].y); cx.lineTo(pts[j].x, pts[j].y);
            cx.stroke();
          }
        }
        const md = Math.hypot(pts[i].x - mouse.x, pts[i].y - mouse.y);
        if (md < 200) {
          const a = (1 - md / 200) * 0.65;
          cx.beginPath();
          cx.strokeStyle = `${GOLD}${a})`;
          cx.lineWidth = 1.1;
          cx.moveTo(pts[i].x, pts[i].y); cx.lineTo(mouse.x, mouse.y);
          cx.stroke();
        }
      }
    }

    function initPts() {
      const n = Math.min(90, Math.floor(W * H / 10000));
      pts = Array.from({ length: n }, () => new Pt(true));
    }

    function frame() {
      cx.clearRect(0, 0, W, H);
      links();
      pts.forEach(p => { p.tick(); p.draw(); });
      animId = requestAnimationFrame(frame);
    }

    const onResize = () => { resize(); initPts(); };
    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onTouch = (e: TouchEvent) => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; };

    resize(); initPts(); frame();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  const cornerStyle = (pos: React.CSSProperties, border: React.CSSProperties): React.CSSProperties => ({
    position: "fixed", width: 48, height: 48, zIndex: 30, pointerEvents: "none", opacity: 0.5, ...pos, ...border
  });

  return (
    <>
      <canvas ref={canvasRef} style={{ position:"fixed", top:0, left:0, width:"100%", height:"100%", zIndex:0, pointerEvents:"none" }} />

      {/* Scanlines */}
      <div style={{ position:"fixed", inset:0, zIndex:1, pointerEvents:"none", background:"repeating-linear-gradient(0deg,transparent 0px,transparent 3px,rgba(0,0,0,0.08) 3px,rgba(0,0,0,0.08) 4px)" }} />

      {/* Corner markers */}
      <div style={cornerStyle({ top:20, left:20 }, { borderTop:"1.5px solid #C9963A", borderLeft:"1.5px solid #C9963A" })} />
      <div style={cornerStyle({ top:20, right:20 }, { borderTop:"1.5px solid #C9963A", borderRight:"1.5px solid #C9963A" })} />
      <div style={cornerStyle({ bottom:20, left:20 }, { borderBottom:"1.5px solid #C9963A", borderLeft:"1.5px solid #C9963A" })} />
      <div style={cornerStyle({ bottom:20, right:20 }, { borderBottom:"1.5px solid #C9963A", borderRight:"1.5px solid #C9963A" })} />

      {/* Orbit rings */}
      <div style={{ position:"fixed", top:"50%", left:"50%", transform:"translate(-50%,-50%)", zIndex:2, pointerEvents:"none" }}>
        {([
          { size:380, dur:"22s", dir:"normal" },
          { size:560, dur:"36s", dir:"reverse" },
          { size:720, dur:"52s", dir:"normal" },
        ] as const).map((ring, i) => (
          <div key={i} style={{ position:"absolute", top:"50%", left:"50%", width:ring.size, height:ring.size, transform:"translate(-50%,-50%)", borderRadius:"50%", border:"1px solid rgba(201,150,58,0.07)", animation:`neuralSpin ${ring.dur} linear infinite ${ring.dir}` }}>
            <div style={{ position:"absolute", width:5, height:5, borderRadius:"50%", background:"#C9963A", top:-2.5, left:"50%", transform:"translateX(-50%)", boxShadow:"0 0 10px #C9963A,0 0 24px rgba(201,150,58,0.4)" }} />
          </div>
        ))}
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes neuralSpin { to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes neuralBob  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-11px)} }
        @keyframes neuralIn   { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      {/* Floating cards */}
      <NeuralCard pos={{ top:"16%", left:"3%" }}     delay="1.5s" label="ROI Generated"  value="847%"  sub="avg client ROI increase"     barW="84%" />
      <NeuralCard pos={{ top:"32%", right:"3%" }}    delay="1.8s" label="AI Accuracy"    value="98.7%" sub="content generation score"     spark={[35,52,41,68,55,72,61,88,70,95,82,100]} />
      <NeuralCard pos={{ bottom:"24%", left:"3%" }}  delay="2.1s" label="WhatsApp Reply" value="<30s"  sub="avg AI response time"         barW="95%" />
      <NeuralCard pos={{ bottom:"18%", right:"3%" }} delay="2.4s" label="Avg ROAS"       value="6.4x"  sub="across active campaigns"      spark={[28,45,38,60,50,70,56,78,65,88,75,100]} />

      <NeuralStream />
    </>
  );
}

function NeuralCard({ pos, delay, label, value, sub, barW, spark }: {
  pos: React.CSSProperties;
  delay: string;
  label: string;
  value: string;
  sub: string;
  barW?: string;
  spark?: number[];
}) {
  return (
    <div style={{ position:"fixed", zIndex:25, minWidth:168, background:"rgba(10,10,10,0.88)", border:"1px solid rgba(201,150,58,0.22)", backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)", padding:"18px 22px", opacity:0, animation:`neuralIn 0.7s ease ${delay} forwards, neuralBob 5s ease-in-out 2.7s infinite`, ...pos }}>
      <div style={{ fontFamily:"monospace", fontSize:9, letterSpacing:"0.18em", textTransform:"uppercase", color:"#C9963A", marginBottom:7 }}>{label}</div>
      <div style={{ fontFamily:"sans-serif", fontSize:28, fontWeight:700, lineHeight:1, color:"#fff" }}>{value}</div>
      <div style={{ fontFamily:"monospace", fontSize:9, color:"rgba(255,255,255,0.5)", marginTop:5 }}>{sub}</div>
      {barW && (
        <div style={{ height:2, background:"rgba(201,150,58,0.15)", marginTop:12, overflow:"hidden", position:"relative" }}>
          <div style={{ position:"absolute", top:0, left:0, height:"100%", background:"#C9963A", animation:`neuralBar 1.6s cubic-bezier(.22,1,.36,1) 3s forwards`, width:0 } as React.CSSProperties} />
          <style>{`@keyframes neuralBar { to { width: ${barW}; } }`}</style>
        </div>
      )}
      {spark && (
        <div style={{ display:"flex", alignItems:"flex-end", gap:3, height:22, marginTop:10 }}>
          {spark.map((v, i) => (
            <div key={i} style={{ flex:1, borderRadius:1, height:`${v}%`, background: i === spark.length-1 ? "#F0C060" : "rgba(201,150,58,0.25)" }} />
          ))}
        </div>
      )}
    </div>
  );
}

function NeuralStream() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let idx = 0;
    const LINES = [
      "> init.ai_engine()", "> load.models: 3/3", "> scan.target(IN)",
      "> build.funnel(auto)", "> deploy.whatsapp()", "> track.leads: ON",
      "> roas.target: 6.4x", "> content.gen: AI++", "> seo.optimizer()",
      "> meta.ads.live()", "> analytics.live", "> ab.test: active",
      "> leads.qualify(AI)", "> crm.sync: ok", "> roi.calc: 847%",
      "> brand.kit.loaded", "> copy.ai.write()", "> pixels.firing()",
    ];
    const interval = setInterval(() => {
      const line = document.createElement("div");
      line.textContent = LINES[idx++ % LINES.length];
      line.style.whiteSpace = "nowrap";
      if (Math.random() > 0.75) line.style.color = "rgba(201,150,58,0.55)";
      el.appendChild(line);
      if (el.children.length > 22) el.removeChild(el.firstChild!);
    }, 520);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} style={{ position:"fixed", right:0, top:0, bottom:0, width:180, zIndex:5, pointerEvents:"none", display:"flex", flexDirection:"column", justifyContent:"center", padding:"24px 20px", overflow:"hidden", fontFamily:"monospace", fontSize:"9.5px", lineHeight:1.9, color:"rgba(201,150,58,0.28)", maskImage:"linear-gradient(to bottom,transparent,black 15%,black 85%,transparent)", WebkitMaskImage:"linear-gradient(to bottom,transparent,black 15%,black 85%,transparent)" }} />
  );
}
