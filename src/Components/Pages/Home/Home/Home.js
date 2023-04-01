import React from "react";
import Banner from "../Banner/Banner";
import FirstSection from "../FirstSection/FirstSection";
import IslamicBooks from "../IslamicBook/IslamicBooks";

const Home = () => {
  return (
    <div className="pb-20">
      <Banner />
      <FirstSection />
      <IslamicBooks />
    </div>
  );
};

export default Home;
