'use client';

import HeroSection from "./Hero";
import MissionSection from "./Mission";
import ProgramsSection from "./Programs";
import TestimonialsSection from "./Testimonials";
import AnnualReports from "./AnnualReports";
import CallToAction from "./CallToAction";
import Partners from "./Partners";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO SECTION */}
      <HeroSection />

      {/* MISSION SECTION */}
      <MissionSection />

        {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* PROGRAMS & PROJECTS */}
      {/* <ProgramsSection /> */}

    

      {/* ANNUAL REPORTS */}
      <AnnualReports />

      {/* CALL TO ACTION */}
      {/*<CallToAction />*/}

      {/* PARTNERS */}
     {/* <Partners />*/}
    </main>
  );
}
