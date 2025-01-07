
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HERO = () => {
  return (
    <section>
      <div className="bg-black flex flex-col items-center justify-center px-4 py-20">
        <div className="w-48 h-48 mb-4 flex items-center justify-center">
          <img
            src="/images/logo-img-2.png"
            alt="Kaichain Logo"
            width={800}
            height={600}
            className="h-[300px] w-[300px] invert-[0.2] sepia-[0.7] brightness-200 hue-rotate-[340deg] object-contain"
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
          KAICHAIN Token Generator
        </h1>
        <div className="max-w-2xl text-center space-y-4 mb-12">
          <p className="text-lg md:text-xl text-white/90">
            Create a KRC20 Token in less than a minute with Token Generator for
            Kaichain Network.
          </p>
          <p className="text-lg md:text-xl text-white/90">
            No login. No setup. No coding required.
          </p>
        </div>
        <Button
          variant="outline"
          className="border-[#FF9800] text-[#FF9800] bg-black hover:bg-[#FF9800]/10 hover:text-[#FF9800] px-8 py-6 text-lg"
        >
          <Link href="/create-token">Create KRC20 Token</Link>
        </Button>
      </div>
    </section>
  );
};
export default HERO;
