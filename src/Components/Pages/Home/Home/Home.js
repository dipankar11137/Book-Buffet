import React from "react";
import Banner from "../Banner/Banner";
import FirstSection from "../HomeSection/FirstSection/FirstSection";
import IslamicBooks from "../HomeSection/IslamicBook/IslamicBooks";
import Novels from "../HomeSection/Novel/Novels";

const Home = () => {
  return (
    <div className="pb-20">
      <Banner />
      <FirstSection />
      <IslamicBooks />
      <Novels />
    </div>
  );
};

export default Home;
