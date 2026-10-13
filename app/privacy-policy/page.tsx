import { Metadata } from "next";
import { getRoute, BRAND_NAME, SITE_URL, EMAIL } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/shared";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const routeConfig = getRoute("/privacy-policy")!;
export const metadata: Metadata = buildMetadata(routeConfig);

export default function Page() {
  return (
    <div>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Privacy Policy", href: routeConfig.path }])]} />
      <PageHero title="Privacy Policy" subtitle={`How ${BRAND_NAME} collects, uses, and protects your information on ${SITE_URL}.`} badge="Legal" breadcrumbs={[{ label: "Privacy Policy", href: routeConfig.path }]} />
      <section className="py-24 px-4 max-w-3xl mx-auto prose prose-invert text-brand-white/80 leading-relaxed space-y-6">
        <p>Last updated: October 2026</p>
        <h2 className="text-xl font-bold text-brand-gold">1. Information We Collect</h2>
        <p>We collect information you provide directly to us when booking a call, filling out our contact form, or chatting with us on WhatsApp (including name, phone number, email address, and business details).</p>
        <h2 className="text-xl font-bold text-brand-gold">2. How We Use Your Information</h2>
        <p>We use your information to provide our marketing services, communicate regarding strategy calls, and send relevant updates. We never sell your data.</p>
        <h2 className="text-xl font-bold text-brand-gold">3. Contact Us</h2>
        <p>If you have any questions about this privacy policy, please contact us at <a href={`mailto:${EMAIL}`} className="text-brand-gold hover:underline">{EMAIL}</a>.</p>
      </section>
    </div>
  );
}
