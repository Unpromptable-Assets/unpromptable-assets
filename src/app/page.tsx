import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatWeBuild from "@/components/WhatWeBuild";
import Qualifying from "@/components/Qualifying";
import ObjectionHandling from "@/components/ObjectionHandling";
import Testimonials from "@/components/Testimonials";
import OurMission from "@/components/OurMission";
import MeetTheTeam from "@/components/MeetTheTeam";
import Newsletter from "@/components/Newsletter";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeBuild />
        <HowItWorks />
        <Qualifying />
        <ObjectionHandling />
        <Testimonials />
        <OurMission />
        <MeetTheTeam />
        <Newsletter />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
