import React from "react";
import HeroSection from "../components/home/HeroSection";
import QuoteSection from "../components/home/QuoteSection";
import FeaturedBooks from "../components/home/FeaturedBooks";
// import CategoriesSection from '../components/home/CategoriesSection';
import NewsletterSection from "../components/home/NewsletterSection";
import CallToAction from "../components/home/CallToAction";

function HomePage() {
  return (
    <div className="bg-[#fefaf6] min-h-screen font-['Lato',sans-serif]">
      <HeroSection />
      <QuoteSection />
      <FeaturedBooks />
      {/* <CategoriesSection /> */}
      <NewsletterSection />
      <CallToAction />
    </div>
  );
}

export default HomePage;
