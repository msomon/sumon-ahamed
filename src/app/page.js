import Navbar from '@/components/shared/navbar';
import React from 'react';
import Home from '@/components/pages/home';
import '../components/style/style.css'
import Projects from '@/components/pages/projects';
import AboutMe from '@/components/pages/aboutMe';
import Features from '@/components/pages/features';
import Review from '@/components/pages/review';
import Reviews from '@/components/pages/Reviews';
import Contact from '@/components/pages/contact';


const Page = () => {
  return (
    <div className=' home'>
     <Home></Home>
     <AboutMe></AboutMe>
     <Projects></Projects>
     <Features></Features>
     <Reviews></Reviews>
     <Contact></Contact>
    </div>
  );
};

export default Page;