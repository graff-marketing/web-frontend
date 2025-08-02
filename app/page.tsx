import JoinWaitlist from "@/components/landing/JoinWaitlist";
import Image from "next/image";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
