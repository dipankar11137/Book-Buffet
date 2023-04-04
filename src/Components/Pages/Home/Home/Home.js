import React from "react";
import Banner from "../Banner/Banner";
import FirstSection from "../HomeSection/FirstSection/FirstSection";
import IslamicBooks from "../HomeSection/IslamicBook/IslamicBooks";
import Novels from "../HomeSection/Novel/Novels";
import Footer from "../../../Share/Footer";
import Test from "../../Test/Test";
import OurBooks from "../HomeSection/OurBooks/OurBooks";
import Contact from "../HomeSection/Contact/Contact";
import RecommendedBooks from "../HomeSection/Recommended Books/RecommendedBooks";
import Button from "../HomeSection/Button/Button";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Test />
      <Novels />
      <FirstSection />
      <IslamicBooks />
      <OurBooks />
      <RecommendedBooks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
