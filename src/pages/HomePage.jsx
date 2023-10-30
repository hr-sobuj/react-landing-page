import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import AboutSection from "../container/HomeContainer/AboutSection";
import Blog from "../container/HomeContainer/Blog";
import FAQ from "../container/HomeContainer/FAQ";
import HeroSection from "../container/HomeContainer/HeroSection";
import Newsletter from "../container/HomeContainer/Newsletter";
import Portfolio from "../container/HomeContainer/Portfolio";
import Services from "../container/HomeContainer/Services";
import Testimonials from "../container/HomeContainer/Testimonials";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Services />
      <Testimonials />
      <Portfolio />
      <Blog />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
}
