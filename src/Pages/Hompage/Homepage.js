import React from "react";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import ColorCards from "../../Components/Card/ColorCards";
import bannerImage from "../../images/womenbg.jpg";
import dealsoftheday from "../../Contants/dealsoftheday.js";
import phonedeals from "../../Contants/phonedeals.js";

export default function Home() {
  return (
    <div>
      <Banner bannerImage={bannerImage}>
        <p>Super Deals at 999 Rs</p>
        <span>
          <a href="/">Click Here</a> to check more
        </span>
      </Banner>

      <Card
        card={dealsoftheday}
        title="Deals Of the Day"
        subtitle="Deals Refresh Every 8 Hours"
      />
      <ColorCards />
      <Card card={phonedeals} title="2GUD" />
    </div>
  );
}
