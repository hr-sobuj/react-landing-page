import AboutSection from "../container/HomeContainer/AboutSection";
import HeroSection from "../container/HomeContainer/HeroSection";
import Services from "../container/HomeContainer/Services";
import Testimonials from "../container/HomeContainer/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <Testimonials />
    </>
  );
}
