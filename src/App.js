import Header from "./components/Header/Header";
import HeroVideo from "./components/Hero/HeroVideo";

import Categories from "./components/Sections/Categories";
import Featured from "./components/Sections/Featured";
import Features from "./components/Sections/Features";
import Testimonials from "./components/Sections/Testimonials";
import CTA from "./components/Sections/CTA";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main id="top">
        <HeroVideo />
        <Categories />
        <Featured />
        <Features />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
