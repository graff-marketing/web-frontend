import JoinWaitlist from "@/components/landing/JoinWaitlist";
import Image from "next/image";
import { LuCircleArrowLeft, LuCircleArrowRight, LuQuote } from "react-icons/lu";

export default function Home() {
  const features = [
    { 
      name: "Unified Analytics Hub",
      tag: "See the full picture instantly.",
      image: "/assets/features/analytics.avif",
      description: "Track performance across all your social and ad platforms in one dashboard. No more switching tabs or exporting spreadsheets, just clear, connected insights." 
    },
    { 
      name: "Smart Budget Optimization",
      tag: "Spend less. Perform better.",
      image: "/assets/features/budget.avif",
      description: "Track performance across all your social and ad platforms in one dashboard. No more switching tabs or exporting spreadsheets, just clear, connected insights." 
    },
    { 
      name: "Predictive AI Insights",
      tag: "Know what's next—before it happens.",
      image: "/assets/features/ai_prediction.webp",
      description: "Leverage machine learning to forecast campaign performance, audience shifts, and emerging trends. Make proactive, data-backed decisions with confidence." 
    },
    { 
      name: "Cross-Platform ROI Tracking",
      tag: "Understand what really drives growth.",
      image: "/assets/features/social_apps.jpg",
      description: "Graff helps you attribute conversions and revenue to the right channels, creatives, and campaigns—giving you clarity on where to double down." 
    },
    { 
      name: "Custom Dashboards & Reports",
      tag: "Tailored to your team, your goals.",
      image: "/assets/features/status-report.png",
      description: "Build views that match your KPIs. Whether you're a marketer, agency, or founder—create and share dashboards that deliver insights, not clutter." 
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/** Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 py-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">All your data.<br />One intelligent dashboard.</h1>
          <p className="text-2xl max-w-[1200px] mt-auto">
            Graff unifies your ad analytics across multiple platforms
            into a single powerful dashboard helping you optimize performance and drive business growth.
          </p>
          <div>
            <JoinWaitlist />
          </div>
        </div>
        <div>
          <Image
            src="/assets/analytics.png"
            alt="analytics image"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/** Quote */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <LuQuote size={64} />
          <p className="text-3xl font-semibold">What gets measured gets managed.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex w-[64px] h-[64px] rounded-full">
            <Image
              src="/assets/peter_drucker.jpg"
              alt="image of peter drucker"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="font-semibold text-xl">Peter Drucker</p>
            <p className="text-sm">Austrian-American<br/>consultant and educator</p>
          </div>
        </div>
      </div>

      {/** Features */}
      <div className="bg-[#FFA500] -mx-8 p-8 flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Features</h1>
        <p className="max-w-2/3 text-xl">
          Graff unifies your ad performance from platforms like Facebook, Instagram, TikTok, and Google — helping you uncover insights, cut waste, and grow faster.
        </p>

        <div className="flex ml-auto gap-8">
          <LuCircleArrowLeft size={40} />
          <LuCircleArrowRight size={40} />
        </div>

        <div className="flex gap-4">
          {features.map((feature, index) => (
            <div key={index}>
              <Image
                src={feature.image}
                alt={feature.name}
                width={100}
                height={100}
              />
              <p>{index} {feature.name}</p>
              <p>{feature.tag}</p>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/** Integrations */}
      <div className="flex flex-col gap-4 pb-8 items-center">
        <h1 className="text-3xl font-bold">Integrations</h1>
        <Image
          src="/assets/integrations.svg"
          alt="integrations"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
