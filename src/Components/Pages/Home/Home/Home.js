import React from "react";
import Footer from '../../../Share/Footer';
import Test from '../../Test/Test';
import Banner from '../Banner/Banner';
import Contact from '../HomeSection/Contact/Contact';
import FirstSection from '../HomeSection/FirstSection/FirstSection';
import IslamicBooks from '../HomeSection/IslamicBook/IslamicBooks';
import Novels from '../HomeSection/Novel/Novels';
import OurBooks from '../HomeSection/OurBooks/OurBooks';
import RecommendedBooks from '../HomeSection/Recommended Books/RecommendedBooks';

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
