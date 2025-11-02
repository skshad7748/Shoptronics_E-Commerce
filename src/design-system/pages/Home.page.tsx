import { PromoBanner } from "@molecules/PromoBanner";
import { BestSellingSection } from "@organisms/BestSellingSection";
import { BrandsStrip } from "@organisms/BrandsStrip";
import { CategoriesSection } from "@organisms/CategoriesSection";
import { HeroCarousel } from "@organisms/HeroCarousel";
import { TrendingProductsSection } from "@organisms/TrendingProductsSection";
import { HomeTemplate } from "@templates/Home.template";
import React from "react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  return (
    <HomeTemplate onSearch={setSearchTerm}>
      {/* <Hero
        title="Intelectial Digital Computer"
        subtitle="Hot Deal In This Week"
        price="$97"
        imageSrc="../../../public/images/hero/banner-mockup 1.png"
        onBuy={() => console.log("Buy Now")}
      /> */}

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

      <CategoriesSection onSelect={(id) => console.log("selected:", id)} />

      <TrendingProductsSection />

      <PromoBanner
        subtitle="Enhance Your Music Experience"
        title={"Enhance Your Music\nExperience"}
        ctaText="Check it Out!"
        imageSrc="/images/promo/headphones.png"
        onCtaClick={() => console.log("promo CTA")}
      />

      <BestSellingSection />
      <BrandsStrip />
    </HomeTemplate>
  );
}
