import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import Industries from "@/components/Industries";
import TryItNow from "@/components/TryItNow";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-lh-bg min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <SocialProof />
      <Industries />
      <TryItNow />
      <FinalCTA />
      <Footer />
    </main>
  );
}
