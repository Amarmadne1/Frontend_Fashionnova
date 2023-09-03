import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
import { women_jeans } from "../Data/Women/women_jeans";
import { men_shirt } from "../Data/Men/men_shirt";

const Homepage = () => {
  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-10">
        <HomeProductSection data={mens_kurta} section={"Men's Kurtas"} />
        <HomeProductSection data={men_shirt} section={"Men's Shirts"} />
        <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
        <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />
        <HomeProductSection data={women_jeans} section={"Women's jeans"} />
        <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />
      </div>
    </div>
  );
};

export default Homepage;
