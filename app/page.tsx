import Image from "next/image";

import { Banner } from "./components/Banner";
import Testinomial from "./components/testinomial"
import Wrapper from "./components/wrapper";
import AboutSection from "./components/AboutSection";
import AppDownloadSection from "./components/AppDownloadSection";
import OpeningTimesSection from "./components/OpeningTimeSection";
import TeamSection from "./components/TeamSection"
import Slider from "./components/Slider";
import TestimonialSlider from "./components/TestimonialSlider";
import NewsSection from "./components/NewsSection";


export default function Home() {
  return (
    <div>

      <Banner />
      <Testinomial />
      <Wrapper
        title="Get Weekly Recipe Tips"
        subtitle="Delivered Fresh to Your Inbox!"
        backgroundImage="/images/top-view-food-banquet.jpg"
        placeholderText="Your Email Address"
        buttonIcon="fa-paper-plane"
      />
      <AboutSection />
      <AppDownloadSection
        title="Download Our App"
        description="Get the best food experience by downloading our app from the store."
        googlePlayLink="https://play.google.com/store/apps/details?id=example"
        appStoreLink="https://apps.apple.com/app/example"
        phoneImage1="/images/app-1.png"
        phoneImage2="/images/app-2.png"
      />


      <OpeningTimesSection />
      <TeamSection />
      <Slider />
      <TestimonialSlider />
      <NewsSection/>

    </div>
  );
}
