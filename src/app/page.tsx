
import HERO from "@/components/home/hero";
import HOWITWORKS from "@/components/home/card"
import TOKENCROUSEL from "@/components/home/pricing";
import TOKENHERO from "@/components/home/tokenhero";
import TOKENFEATURE from "@/components/home/tokenfeature";
import TOKENABOUT from "@/components/home/tokenabout";
import FAQ from "@/components/home/faq";
import TOKEN from "@/components/home/deploytoken"


export default function Home() {
  return (

    <main>
      <HERO />
      <HOWITWORKS />
      <TOKENCROUSEL />
      <TOKENHERO />
      <TOKENFEATURE />
      <TOKENABOUT />
      <FAQ />
      <TOKEN />
    </main>


  );
}
