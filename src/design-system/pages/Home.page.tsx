import { PromoBanner } from "@molecules/PromoBanner";
import { BestSellingSection } from "@organisms/BestSellingSection";
import { BrandsStrip } from "@organisms/BrandsStrip";
import { CategoriesSection } from "@organisms/CategoriesSection";
import { HeroCarousel } from "@organisms/HeroCarousel";
import { TrendingProductsSection } from "@organisms/TrendingProductsSection";
import { HomeTemplate } from "@templates/Home.template";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const navigate = useNavigate();

  return (
    <HomeTemplate onSearch={setSearchTerm}>
      <HeroCarousel
        slides={[
          {
            id: "computer",
            title: "Intelectial Digital Computer",
            subtitle: "Hot Deal In This Week",
            price: "$97",
            imageSrc: "/images/hero/hero-composition.png",
          },
          {
            id: "watch",
            title: "Smart Digital Watch",
            subtitle: "Hot Deal In This Week",
            price: "$97",
            imageSrc: "/images/hero/watch.png",
          },
        ]}
        autoPlayMs={6000}
      />

      <CategoriesSection />

      <TrendingProductsSection />

      <PromoBanner
        subtitle="Enhance Your Music Experience"
        title={"Enhance Your Music\nExperience"}
        ctaText="Check it Out!"
        imageSrc="/images/promo/headphones.png"
        onCtaClick={() => navigate("/shop")}
      />

      <BestSellingSection />
      <BrandsStrip />
    </HomeTemplate>
  );
}
