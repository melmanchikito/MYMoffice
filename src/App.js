import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

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
        <Hero />
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
