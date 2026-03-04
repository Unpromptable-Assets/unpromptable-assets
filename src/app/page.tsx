import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemAgitation from "@/components/ProblemAgitation";
import HowItWorks from "@/components/HowItWorks";
import WhatWeBuild from "@/components/WhatWeBuild";
import Qualifying from "@/components/Qualifying";
import ObjectionHandling from "@/components/ObjectionHandling";
import Testimonials from "@/components/Testimonials";
import MeetTheTeam from "@/components/MeetTheTeam";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemAgitation />
        <HowItWorks />
        <WhatWeBuild />
        <Qualifying />
        <ObjectionHandling />
        <Testimonials />
        <MeetTheTeam />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
