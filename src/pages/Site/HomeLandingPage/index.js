import React from 'react';
import AboutSection from '../../../components/LandingPage/Sections/AboutSection';
import AreasExpertiseSection from '../../../components/LandingPage/Sections/AreasExpertiseSection';
import ContactFormSection from '../../../components/LandingPage/Sections/ContactFormSection';
import HeroSection from '../../../components/LandingPage/Sections/HeroSection';
import HeroTopicsSection from '../../../components/LandingPage/Sections/HeroTopicsSection';
import ImageSlider from '../../../components/LandingPage/Sections/ImageSlider';
import MapSection from '../../../components/LandingPage/Sections/MapSection';
import PortfolioSection from '../../../components/LandingPage/Sections/PortfolioSection';

export default () => {
    return (
        <>
            <HeroSection />
            <HeroTopicsSection />
            <AboutSection />
            <ImageSlider />
            <AreasExpertiseSection />
            <PortfolioSection />
            <MapSection />
            <ContactFormSection />
        </>
    );
};