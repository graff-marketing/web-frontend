import Features from "@/components/landing/Features";
import JoinWaitlist from "@/components/landing/JoinWaitlist";
import Image from "next/image";
import { LuQuote } from "react-icons/lu";

export default function Home() {
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
          <JoinWaitlist />
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
            <p className="text-sm">Austrian-American<br />consultant and educator</p>
          </div>
        </div>
      </div>

      {/** Features */}
      <div id="features" className="bg-[#FFA500] -mx-8 p-8 flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Features</h1>
        <p className="max-w-2/3 text-xl">
          Graff unifies your ad performance from platforms like Facebook, Instagram, TikTok, and Google — helping you uncover insights, cut waste, and grow faster.
        </p>
        <Features />
        <JoinWaitlist />
      </div>

      {/** Integrations */}
      <div id="integrations" className="flex flex-col gap-4 pb-8 items-center">
        <h1 className="text-5xl font-bold">Integrations</h1>
        <Image
          src="/assets/integrations.svg"
          alt="integrations"
          width={500}
          height={500}
        />
        <JoinWaitlist />
      </div>
    </div>
  );
}
