import React from "react";
import AboutBanner from "../components/AboutBanner";
import AboutSection from "../components/AboutSection";
import HeroBanner from "../components/HeroBanner";
import TeamSection from "../components/TeamSection";
export default function About (){
    return(
        <div>
            <AboutBanner />
            <AboutSection />
            <HeroBanner/>
            <TeamSection/>
        </div>
    )
}