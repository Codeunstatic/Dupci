import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustSignals from "./components/TrustSignals";
import ProblemSection from "./components/ProblemSection";
import JourneySection from "./components/JourneySection";
import DarkAgentsSection from "./components/DarkAgentsSection";
import PillarsSection from "./components/PillarsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ClosingCta from "./components/ClosingCta";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="top" className="min-h-screen bg-[#fffefb] overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <TrustSignals />
        <ProblemSection />
        <JourneySection />
        <DarkAgentsSection />
        <PillarsSection />
        <TestimonialsSection />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
