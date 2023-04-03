import React from "react";
import Banner from "../Banner/Banner";
import FirstSection from "../HomeSection/FirstSection/FirstSection";
import IslamicBooks from "../HomeSection/IslamicBook/IslamicBooks";
import Novels from "../HomeSection/Novel/Novels";
import Footer from "../../../Share/Footer";
import Test from "../../Test/Test";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Test />
      <Novels />
      <FirstSection />
      <IslamicBooks />
      <Footer />
    </div>
  );
};

export default Home;
