// Content for the four GDS Media service sub-pages, transcribed verbatim from
// "public/service page/GDS Media Service Pages Content (with FAQs) (1).pdf".
// Do not rewrite this copy — it is approved, SEO-written client content.

export interface ServiceListItem {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServicePageContent {
  path: string;
  badge: string;
  seoTitle: string;
  metaDescription: string;
  hero: {
    h1: string;
    subheading: string;
    primaryButtonLabel: string;
    trustLine: string;
  };
  problem: {
    heading: string;
    paragraphs: string[];
  };
  whatWeDo: {
    heading: string;
    items: ServiceListItem[];
  };
  whyGds: {
    heading: string;
    items: ServiceListItem[];
  };
  process: {
    heading: string;
    steps: ServiceProcessStep[];
  };
  whoFor: {
    heading: string;
    items: string[];
  };
  faqs: ServiceFaq[];
  closingCta: {
    heading: string;
    text: string;
    primaryButtonLabel: string;
  };
}

export const performanceMarketingContent: ServicePageContent = {
  path: "/services/performance-marketing",
  badge: "Performance Marketing",
  seoTitle: "Performance Marketing Agency in Mumbai | Meta, Google & YouTube Ads | GDS Media",
  metaDescription:
    "Meta, Google and YouTube ads built to turn browsers into buyers. GDS Media runs AI-assisted performance marketing for Indian businesses, with clear tracking and monthly reporting.",
  hero: {
    h1: "Performance Marketing That Turns Browsers Into Buyers",
    subheading:
      "Meta, Google and YouTube ads, managed by a team that tracks every rupee from click to customer. No vanity metrics. No guesswork.",
    primaryButtonLabel: "Book Your Strategy Call",
    trustLine: "Trusted by clinics, real-estate firms, B2B companies and retail brands across Mumbai and India.",
  },
  problem: {
    heading: "The problem we solve",
    paragraphs: [
      "Most businesses don't have an ad problem. They have a leak problem. Budget goes into boosted posts, broad targeting and pretty creatives, while leads arrive late, unqualified, or not at all.",
      "We fix the whole path: the ad, the audience, the landing page, the follow-up on WhatsApp, and the report that tells you what actually worked.",
    ],
  },
  whatWeDo: {
    heading: "What we run for you",
    items: [
      {
        title: "Meta Ads (Facebook and Instagram)",
        description:
          "Lead-generation, WhatsApp-click and sales campaigns with structured creative testing, so winners scale and losers stop costing you money.",
      },
      {
        title: "Google Ads",
        description:
          "Search, Performance Max, Display and local campaigns that capture people who are already looking for what you sell.",
      },
      {
        title: "Landing pages and lead forms",
        description: "Fast, mobile-first pages built to convert, not just to look good.",
      },
      {
        title: "Remarketing",
        description: "Bring back visitors who didn't enquire the first time, across Meta, Google and YouTube.",
      },
    ],
  },
  whyGds: {
    heading: "Why GDS Media",
    items: [
      {
        title: "AI-assisted optimisation",
        description: "We use AI to analyse creatives, audiences and search terms faster than manual review allows.",
      },
      {
        title: "Lead quality over lead volume",
        description: "We optimise for enquiries that turn into appointments and sales, not just cheap form fills.",
      },
      {
        title: "Built for Indian MSMEs",
        description: "Local language creatives, WhatsApp-first journeys and budgets that make sense for growing businesses.",
      },
      {
        title: "Transparent reporting",
        description: "You see spend, leads, cost per lead and cost per sale, in plain language, every month.",
      },
      {
        title: "No lock-in mindset",
        description: "You own your ad accounts, pixels and data from day one.",
      },
    ],
  },
  process: {
    heading: "How it works",
    steps: [
      { title: "Discovery call (30 minutes)", description: "We understand your offer, margins, customers and current numbers." },
      { title: "Audit and strategy", description: "We review your ad accounts, tracking and funnel, then share a clear channel plan and budget split." },
      { title: "Setup and launch", description: "Pixel and conversion tracking, audiences, creatives, landing pages and WhatsApp flows go live together." },
      { title: "Test and optimise", description: "Weekly creative and audience tests. We pause what drains budget and scale what brings qualified leads." },
      { title: "Report and scale", description: "A monthly review with clear next steps, so growth is planned, not accidental." },
    ],
  },
  whoFor: {
    heading: "Who this is for",
    items: [
      "Clinics, hospitals and aesthetic centres that need a steady flow of appointments",
      "Real estate developers and advisors generating site-visit leads",
      "B2B and IT service companies building a qualified pipeline",
      "Retail, automobile and local service businesses driving walk-ins and calls",
      "Training academies and institutes filling batches",
    ],
  },
  faqs: [
    {
      question: "How much should I spend on ads to get started?",
      answer:
        "It depends on your industry and goal. Most local businesses start with a monthly ad budget they are comfortable testing for 60 to 90 days, which is enough data to learn what works. We recommend a budget in the strategy call after reviewing your market and competition. Our management fee is separate from your ad spend.",
    },
    {
      question: "Do you manage Meta Ads or Google Ads, or both?",
      answer:
        "Both, plus YouTube. We choose the channel mix based on how your customers buy. People actively searching usually respond to Google. People who need to be introduced to an offer usually respond to Meta and YouTube. Many businesses benefit from both working together.",
    },
    {
      question: "How soon will I see results?",
      answer:
        "You can see the first leads within days of launch. Stable, predictable results usually take 6 to 8 weeks, because the first weeks are used for testing creatives, audiences and keywords. We share progress weekly so nothing is hidden.",
    },
    {
      question: "Who owns the ad accounts and data?",
      answer: "You do. Your ad accounts, pixels, audiences and reports stay in your name. If we ever stop working together, you keep everything.",
    },
    {
      question: "How do you make sure the leads are good quality?",
      answer:
        "We use lead form questions, landing page filters, conversion tracking and WhatsApp qualification flows to screen enquiries. We also review lead quality with your team and optimise toward the leads that actually become customers.",
    },
    {
      question: "Do you create the ad creatives too?",
      answer:
        "Yes. Our in-house creative team makes static ads, videos, UGC-style content and AI-generated videos. Fresh creatives are included in your plan, because ad fatigue is one of the biggest reasons performance drops.",
    },
    {
      question: "Can you connect ads to WhatsApp?",
      answer:
        "Yes. We run click-to-WhatsApp ads and set up automated replies, lead qualification and follow-up, so every enquiry gets a quick response even outside working hours.",
    },
    {
      question: "Do you offer long-term contracts?",
      answer:
        "We prefer earning your trust month after month. We recommend a minimum of 3 months so there is enough time to test and optimise properly. Please confirm current terms on your strategy call.",
    },
    {
      question: "What reports will I get?",
      answer:
        "A simple monthly report covering spend, leads, cost per lead, sales or appointments where trackable, top creatives, and the plan for next month. A short review call is included.",
    },
    {
      question: "Will you work with my existing agency or in-house team?",
      answer: "Yes. We can run ads alongside your team, or take over fully after an audit of your current accounts.",
    },
  ],
  closingCta: {
    heading: "Ready to Stop Wasting Ad Budget?",
    text: "Book a free 30-minute strategy call. We'll audit your current ads and show you exactly where the leaks are. No fluff, no hard sell.",
    primaryButtonLabel: "Book Your Strategy Call",
  },
};

export const seoContentContent: ServicePageContent = {
  path: "/services/seo-content",
  badge: "SEO & Content",
  seoTitle: "SEO & Content Marketing Agency in Mumbai | Google, Local SEO & AI Search | GDS Media",
  metaDescription:
    "Keyword-rich SEO and content strategies that build authority and drive organic traffic. Technical SEO, local SEO, blogs and AI search (AEO/GEO) from GDS Media.",
  hero: {
    h1: "SEO & Content That Builds Authority and Drives Organic Traffic",
    subheading:
      "Get found on Google, Maps and AI answers like ChatGPT and Google AI Overviews, by customers who are already searching for what you sell.",
    primaryButtonLabel: "Get a Free SEO Audit",
    trustLine: "SEO and content for doctors, clinics, real estate, B2B and local service businesses.",
  },
  problem: {
    heading: "The problem we solve",
    paragraphs: [
      "Paid ads stop the moment the budget stops. Organic visibility keeps working while you sleep. But most business websites are invisible, because the pages are thin, the technical setup is broken, the Google Business Profile is neglected, and the content answers nothing customers actually ask.",
      "We build search visibility that compounds: more of the right people finding you, trusting you, and contacting you.",
    ],
  },
  whatWeDo: {
    heading: "What we do",
    items: [
      { title: "SEO audit and strategy", description: "A full review of technical health, keywords, content and competitors, ending in a prioritised action plan." },
      { title: "Technical SEO", description: "Site speed, Core Web Vitals, indexing, schema markup, mobile experience and fixing crawl errors." },
      { title: "On-page SEO and service pages", description: "Keyword-mapped service and location pages with clear structure, strong headings, FAQs and calls to action." },
      { title: "Local SEO", description: "Google Business Profile optimisation, citations, reviews strategy, local landing pages and map ranking tracking." },
      { title: "Content marketing", description: "Blogs, guides and FAQs written around real customer questions, reviewed for accuracy and written in a human voice." },
      { title: "AEO and GEO (AI search optimisation)", description: "Content and schema structured so ChatGPT, Perplexity and Google AI Overviews can understand and cite your brand." },
      { title: "Link building and digital PR", description: "Relevant, quality backlinks and local mentions that strengthen your authority." },
      { title: "Healthcare and specialised content", description: "Fact-checked, patient-friendly content for doctors and clinics, written responsibly." },
    ],
  },
  whyGds: {
    heading: "Why GDS Media",
    items: [
      { title: "Search intent first", description: "We write for what people want to know and do, not just for keywords." },
      { title: "SEO, AEO and GEO together", description: "One strategy that works for Google, Maps and AI answer engines." },
      { title: "Human, not robotic", description: "Every piece is edited to read naturally and reviewed for facts before it goes live." },
      { title: "Local expertise", description: "We know how to win local searches in Mumbai, Mira Road, Borivali and other Indian markets." },
      { title: "Clear reporting", description: "Rankings, traffic, calls, direction requests and leads, tracked and shared every month." },
    ],
  },
  process: {
    heading: "How it works",
    steps: [
      { title: "Audit and research", description: "Technical audit, keyword research, competitor gap analysis and a review of your search intent opportunities." },
      { title: "Strategy and keyword mapping", description: "Every keyword is mapped to the right page, with a content plan and priorities." },
      { title: "Fix and build", description: "Technical fixes, page optimisation, new service pages and Google Business Profile updates." },
      { title: "Create and publish", description: "Blogs, FAQs and guides go live on a steady calendar, each optimised for search and AI answers." },
      { title: "Track and improve", description: "Monthly reporting on rankings, traffic and enquiries, with continuous updates to what is working." },
    ],
  },
  whoFor: {
    heading: "Who this is for",
    items: [
      "Doctors, clinics and hospitals that want more patient enquiries from Google",
      "Local service businesses that need to show up on Google Maps",
      "B2B and IT companies building authority and inbound leads",
      "Real estate and professional services firms competing in crowded markets",
      "E-commerce and retail brands that want lower dependence on paid ads",
    ],
  },
  faqs: [
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO is a compounding investment. Most businesses see early movement in 2 to 3 months, and meaningful growth in 4 to 6 months, depending on competition, your website's current health and how consistently content is published.",
    },
    {
      question: "What is the difference between SEO, local SEO and AEO?",
      answer:
        'SEO helps your website rank on Google. Local SEO helps your business appear on Google Maps and in "near me" searches. AEO (Answer Engine Optimisation) and GEO (Generative Engine Optimisation) help your content get picked up by AI tools such as ChatGPT, Perplexity and Google AI Overviews. We combine all three.',
    },
    {
      question: "Can you guarantee the number one rank on Google?",
      answer:
        "No honest agency can. Google's rankings depend on many factors outside anyone's control. What we guarantee is a clear strategy, consistent execution, transparent reporting and a focus on the traffic and enquiries that matter to your business.",
    },
    {
      question: "What do you need from me to get started?",
      answer:
        "Access to your website, Google Business Profile, Google Search Console and Analytics, plus a short call to understand your services, locations and customers. We handle the rest.",
    },
    {
      question: "Do you write the content, or do I need to provide it?",
      answer:
        "We write it. Our process includes keyword research, drafting, editing for natural readability and fact-checking. For specialised fields like healthcare, we work from your inputs and keep claims responsible. You approve everything before it goes live.",
    },
    {
      question: "How many blogs or pages will you publish each month?",
      answer:
        "That depends on your plan and goals. A typical plan includes a mix of new service pages, blogs and FAQ updates each month. We recommend quality and relevance over volume, and we'll agree the exact deliverables on the strategy call.",
    },
    {
      question: "Will you work on my Google Business Profile too?",
      answer: "Yes. We optimise your categories, services, photos, posts, Q&A and review strategy, and track your local map rankings over time.",
    },
    {
      question: "Is AI-written content safe for SEO?",
      answer:
        "Content that is helpful, accurate and well edited can perform well, whether or not AI assisted the drafting. We use AI for research and speed, then edit by humans for accuracy, brand voice and usefulness. We never publish generic, unchecked content.",
    },
    {
      question: "What is a monthly SEO report?",
      answer:
        "A plain-language summary of what we did, how your rankings and traffic moved, how many calls and leads came from search, and what we plan to do next month.",
    },
    {
      question: "I already have a website. Do I need a new one?",
      answer: "Not necessarily. We start with an audit. If your site can be fixed and improved, we do that. We only recommend a rebuild if the current site is holding your growth back.",
    },
  ],
  closingCta: {
    heading: "Ready to Be the Business Customers Find First?",
    text: "Get a free SEO audit and a clear 90-day plan. We'll show you where you stand, what's holding you back and what to fix first.",
    primaryButtonLabel: "Get a Free SEO Audit",
  },
};

export const brandCreativeContent: ServicePageContent = {
  path: "/services/brand-creative",
  badge: "Brand & Creative",
  seoTitle: "Creative Agency in Mumbai | UGC Ads, AI Videos, Video Editing & Design | GDS Media",
  metaDescription:
    "Creatives that stop the scroll and build trust instantly. UGC ads, AI influencer videos, video editing and graphic design for Indian brands, from GDS Media.",
  hero: {
    h1: "Creatives That Stop the Scroll and Build Trust Instantly",
    subheading:
      "Scroll-stopping ads, videos and brand design, made to earn attention in the first three seconds and trust in the next thirty.",
    primaryButtonLabel: "See How We Create",
    trustLine: "Creative built for ads, social media, websites and WhatsApp, in one consistent brand look.",
  },
  problem: {
    heading: "The problem we solve",
    paragraphs: [
      "Great targeting cannot save a forgettable creative. Most Indian businesses post inconsistent designs, reuse the same ad for months, and look different on every platform. Customers notice, and they scroll past.",
      "We give your brand a clear identity and a steady supply of fresh creatives that look credible, feel human and are built to perform in ads.",
    ],
  },
  whatWeDo: {
    heading: "What we create",
    items: [
      { title: "UGC-style ads", description: "Authentic, creator-style videos that feel like a real recommendation, not an advertisement." },
      { title: "AI influencer videos", description: "Consistent AI presenters that deliver your message at scale, without studio shoots or repeated talent costs." },
      { title: "AI social media content videos", description: "Reels, Shorts and story content produced faster and at lower cost, while staying on brand." },
      { title: "AI product and service explainer videos", description: "Short, clear videos that explain what you offer and why it matters." },
      { title: "Video editing", description: "Reels, ad cuts, testimonials, podcasts and long-form edits with captions, hooks and clean pacing." },
      { title: "Graphic design", description: "Ad creatives, social posts, carousels, brochures, presentations and sales collateral." },
      { title: "Brand identity", description: "Logo refresh, colour and typography guidelines, tone of voice and templates, so every touchpoint looks like one brand." },
      { title: "Landing page and website visuals", description: "Banners, hero graphics and product visuals that support conversion." },
    ],
  },
  whyGds: {
    heading: "Why GDS Media",
    items: [
      { title: "Creative built for performance", description: "Our designers and editors work alongside the ads team, so creatives are made for results, not just for looks." },
      { title: "Speed without shortcuts", description: "AI-assisted production gets you more variations faster, so we can test more and learn quicker." },
      { title: "Hook-first thinking", description: "Every video and ad is planned around the opening three seconds." },
      { title: "One consistent brand", description: "Same look, same voice, across Instagram, Facebook, YouTube, Google, WhatsApp and your website." },
      { title: "Made for the Indian audience", description: "Language, culture and context that feel familiar, including Hindi, English and regional options." },
    ],
  },
  process: {
    heading: "How it works",
    steps: [
      { title: "Brand and audience discovery", description: "We learn your brand, audience, competitors and what has worked before." },
      { title: "Creative direction", description: "You get a clear concept, tone, hooks and format plan before production begins." },
      { title: "Production", description: "Our team writes, designs, shoots, edits or generates the assets using the right mix of human and AI tools." },
      { title: "Review and revision", description: "You review drafts and request changes, so the final output feels right." },
      { title: "Deliver and test", description: "Assets are delivered in platform-ready sizes. When paired with our ads service, we test variations and learn what wins." },
    ],
  },
  whoFor: {
    heading: "Who this is for",
    items: [
      "Brands that need a steady monthly flow of social and ad creatives",
      "Clinics, academies and service businesses building trust through video",
      "Startups and MSMEs that cannot afford full-time design and video teams",
      "E-commerce and retail businesses launching products and offers",
      "Personal brands, doctors and founders who want to look credible online",
    ],
  },
  faqs: [
    {
      question: "What types of creatives do you make?",
      answer:
        "Static ads, carousels, UGC-style videos, AI influencer videos, explainer videos, reels, edited long-form videos, brand kits, brochures and presentations. If it is visual and helps your brand, we can usually make it.",
    },
    {
      question: "What are AI influencer videos?",
      answer:
        "These are videos presented by a realistic AI-generated person who speaks your script in a natural style. They are useful when you need many video variations quickly, want a consistent on-screen presenter, or do not want to arrange repeated shoots.",
    },
    {
      question: "Will AI videos look fake?",
      answer:
        "Quality depends on the script, the tools and the editing. We design AI videos to look natural and on brand, and we advise honestly when a real person or a live shoot would work better for your business.",
    },
    {
      question: "Do you handle video shoots?",
      answer:
        "We can plan and direct shoots, and we also work with the footage you already have. For many businesses a mix works best: a few real shoots, extended with edited and AI-assisted content.",
    },
    {
      question: "How many revisions are included?",
      answer: "Every plan includes revision rounds, so the final output matches your expectations. Exact numbers depend on the package and are confirmed before we begin.",
    },
    {
      question: "How long does it take to get creatives?",
      answer: "Static designs usually take a few working days. Video timelines depend on length and complexity. We share a clear delivery schedule at the start of every project.",
    },
    {
      question: "Can you work with my existing brand guidelines?",
      answer: "Yes. We follow your colours, fonts and tone. If you do not have guidelines, we can create a simple brand kit first.",
    },
    {
      question: "Do you create content in Hindi and regional languages?",
      answer: "Yes. We create in Hindi, English and Hinglish, and can support regional languages based on your audience.",
    },
    {
      question: "Do I own the final files?",
      answer:
        "Yes. Once the project is paid for, the final creatives are yours to use. Rights for stock music, fonts or AI-generated elements follow the licences of the tools used, and we will tell you if anything needs attention.",
    },
    {
      question: "Can creatives be combined with ads management?",
      answer: "Yes, and that is where results are strongest. The creative team and the ads team share learnings, so winning hooks and formats are repeated and improved.",
    },
  ],
  closingCta: {
    heading: "Ready for Creatives People Actually Stop For?",
    text: "Tell us about your brand and goals. We'll share ideas, formats and a simple plan for your first month of creatives.",
    primaryButtonLabel: "Book Your Strategy Call",
  },
};

export const analyticsCroContent: ServicePageContent = {
  path: "/services/analytics-cro",
  badge: "Analytics & CRO",
  seoTitle: "Analytics & Conversion Rate Optimization (CRO) Services in Mumbai | GDS Media",
  metaDescription:
    "Track every click and optimise every conversion point. GA4, Google Tag Manager, Meta Pixel, dashboards and CRO testing to turn more of your visitors into customers.",
  hero: {
    h1: "Track Every Click. Optimise Every Conversion Point.",
    subheading:
      "Stop guessing which ad, page or message brings customers. We set up clean tracking, build clear dashboards and improve your website so more visitors become enquiries and sales.",
    primaryButtonLabel: "Get a Free Tracking & CRO Audit",
    trustLine: "Accurate data and higher conversion rates, without increasing your ad spend.",
  },
  problem: {
    heading: "The problem we solve",
    paragraphs: [
      "Most businesses spend on marketing without knowing which part is working. Pixels fire twice or not at all. Leads arrive with no source. Website forms are long, pages load slowly and visitors leave without acting.",
      "When the data is wrong, every decision is a guess. We fix the measurement first, then improve the experience, so each rupee of marketing works harder.",
    ],
  },
  whatWeDo: {
    heading: "What we do",
    items: [
      { title: "Tracking setup and audit", description: "GA4, Google Tag Manager, Meta Pixel and Conversions API, Google Ads conversion tracking, and call and WhatsApp click tracking, all verified end to end." },
      { title: "Lead source and CRM tracking", description: "Connect ads, forms and WhatsApp enquiries to your CRM or Google Sheets, so you know which campaign produced which lead and which lead became a sale." },
      { title: "Custom dashboards", description: "One clear Looker Studio dashboard combining Google Ads, Meta Ads, SEO and website data, in plain language." },
      { title: "Conversion rate optimisation (CRO)", description: "Landing page and website improvements based on data, user behaviour and best practice." },
      { title: "A/B testing", description: "Structured tests on headlines, offers, forms, layouts and calls to action, with clear results." },
      { title: "Funnel analysis", description: "Find exactly where visitors drop off, from ad click to form submission to follow-up." },
      { title: "Website speed and UX review", description: "Mobile experience, page speed and usability fixes that remove friction." },
      { title: "Automated reporting", description: "Weekly or monthly reports delivered automatically, so you always see the same numbers on time." },
    ],
  },
  whyGds: {
    heading: "Why GDS Media",
    items: [
      { title: "Measurement before optimisation", description: "We make sure your numbers are right before we change anything." },
      { title: "Marketing and automation under one roof", description: "Our ads, SEO and WhatsApp automation teams use the same data, so insights turn into action quickly." },
      { title: "Plain-language reporting", description: "No jargon dashboards. You see what you spent, what you got and what to do next." },
      { title: "Small tests, steady gains", description: "We improve conversion rates through continuous, measured experiments rather than one-time redesigns." },
      { title: "Built for the full journey", description: "We track beyond the click, including calls, WhatsApp chats, appointments and sales wherever possible." },
    ],
  },
  process: {
    heading: "How it works",
    steps: [
      { title: "Tracking and funnel audit", description: "We review your current tags, events, conversions, forms and reports, and list what is missing or broken." },
      { title: "Fix and set up tracking", description: "We implement clean, verified tracking across ads, website, calls and WhatsApp." },
      { title: "Build your dashboard", description: "You get one live view of traffic, leads, cost per lead and conversions." },
      { title: "Find the drop-offs", description: "We analyse behaviour data and funnel stages to prioritise what to improve first." },
      { title: "Test and improve", description: "We run A/B tests, ship improvements and report the results, then repeat." },
    ],
  },
  whoFor: {
    heading: "Who this is for",
    items: [
      "Businesses spending on ads who cannot tell which campaign actually produces sales",
      "Clinics and service businesses getting many enquiries but few bookings",
      "B2B firms with long sales cycles that need lead source visibility",
      "E-commerce and lead-gen websites with traffic but low conversion rates",
      "Teams tired of manual, inconsistent reports",
    ],
  },
  faqs: [
    {
      question: "What is conversion rate optimisation (CRO)?",
      answer:
        "CRO is the process of improving your website or landing page so a higher percentage of visitors take the action you want, such as filling a form, calling or booking. If 100 people visit and 2 enquire, your conversion rate is 2%. CRO aims to raise that number without paying for more traffic.",
    },
    {
      question: "Why is tracking important for my business?",
      answer:
        "Without accurate tracking you cannot tell which ads, keywords or pages produce leads and sales. You may keep spending on what looks good and cut what actually works. Good tracking lets you put your budget where the results are.",
    },
    {
      question: "Which tools do you use?",
      answer:
        "Google Analytics 4, Google Tag Manager, Google Search Console, Looker Studio, Meta Pixel and Conversions API, Google Ads conversion tracking, and heatmap and session recording tools. We also connect data to your CRM or Google Sheets when needed.",
    },
    {
      question: "Can you track WhatsApp and phone call enquiries?",
      answer:
        "Yes. We track clicks on WhatsApp buttons, click-to-call actions, and where possible link enquiries to the campaign that produced them, so these are not lost in reports.",
    },
    {
      question: "Can you connect my leads to a CRM?",
      answer:
        "Yes. We can integrate your website forms, ad lead forms and WhatsApp conversations with your CRM or a Google Sheet, so every lead is recorded with its source and status. We can also set up automatic follow-ups.",
    },
    {
      question: "How long does it take to see CRO results?",
      answer:
        "Tracking fixes show value immediately because your data becomes reliable. Conversion improvements typically show within 4 to 8 weeks, depending on your traffic volume. Low-traffic sites need more time to reach meaningful test results.",
    },
    {
      question: "Do I need a lot of traffic for A/B testing?",
      answer: "Testing works best with steady traffic. If your site has low traffic, we focus first on best-practice improvements and bigger changes, and run formal tests as volume grows.",
    },
    {
      question: "Will you redesign my entire website?",
      answer: "Usually not. We focus on the pages that matter most, such as landing pages, service pages and forms, and make targeted improvements. A full redesign is only suggested when the data shows it is needed.",
    },
    {
      question: "What will my dashboard show?",
      answer: "Spend, impressions, clicks, leads, cost per lead, conversions, top campaigns and pages, traffic sources and, where connected, bookings or sales. We can tailor it to the numbers your team cares about.",
    },
    {
      question: "Is my data safe with you?",
      answer:
        "Your analytics, ad accounts and dashboards stay in your ownership, and we only request the access level needed to do the work. We follow good practice for permissions, and we can discuss your data and privacy requirements on a call.",
    },
  ],
  closingCta: {
    heading: "Ready to Know Exactly What's Working?",
    text: "Get a free tracking and conversion audit. We'll show you what is broken, what is missing and the quickest wins to turn more visitors into customers.",
    primaryButtonLabel: "Get a Free Tracking & CRO Audit",
  },
};
