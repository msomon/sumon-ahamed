"use client"


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Nextjs from "@/assets/nextjs.svg"
import Tailwind from "@/assets/tailwind_css.svg"
import Responsive from "@/assets/responsive.svg"
import Fontawesome from "@/assets/fontawesome.svg"
import ContactForm from "@/assets/form.svg"
import FramerMotion from "@/assets/framer-motion.svg"
import Review from './review';

const Features = () => {


  

    return (

      <div>
        <div className=' w-full md:w-ful lg:w-3/5 mx-auto mt-0 md:mt-14 lg:mt-18 '>
           <h1 className='text-center text-3xl font-bold text-primary mb-8 lg:mb-14'>Features</h1> 


     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center mb-5 '>


     <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="200" className="projectsCard card card-compact min-w-[200px] max-w-[300px] bg-base-100 shadow-xl mx-auto mb-8 p-2" 
     >
    <figure className=''>
        <Image src={Nextjs} className='mt-2 p-3 h-[250px] min-w-[190px] max-w-[290px] ' alt="Shoes" />
        </figure>
    <div className="card-body">
    <h2 className="card-title justify-center">Next JS 14+</h2>
    <p>We used latest react Nextjs vertion ^14+. Max Components are Reusable for you. It is a awesome design made by React NextJS. </p>
   
  </div>
</div>

     

    <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="300" className="projectsCard card card-compact min-w-[200px] max-w-[300px] bg-base-100 shadow-xl mx-auto mb-8 p-2 " 
     >
    <figure className=''>
        <Image  src={Tailwind} className='mt-2 p-3 h-[200px] min-w-[190px] max-w-[290px] ' alt="Shoes" />
        </figure>
    <div className="card-body">
    <h2 className="card-title justify-center">Tailwind+</h2>
    <p>Tailwind, the popular front-end framework, simplifies responsive web design with its extensive library of pre-built components, grid system, and CSS utilities, allowing developers to create modern and mobile-friendly websites quickly. </p>
  </div>
</div>

   


    <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="400" className="projectsCard card card-compact min-w-[200px] max-w-[300px] bg-base-100 shadow-xl mx-auto mb-8 p-2 " 
     >
    <figure className=''>
        <Image src={Responsive} className='mt-2 p-3 h-[220px] min-w-[190px] max-w-[290px] ' alt="Shoes" />
        </figure>
    <div className="card-body">
    <h2 className="card-title justify-center">Responsive Design</h2>
    <p>Responsive web design, or RWD, is a design approach that addresses the range of devices and device sizes, enabling automatic adaption to the screen, whether the content is viewed on a tablet, phone, television, or watch.</p>
   
  </div>
</div>
    <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="200" className="projectsCard card card-compact min-w-[200px] max-w-[300px] bg-base-100 shadow-xl mx-auto mb-8 p-2 " 
     >
    <figure className=''>
        <Image src={Fontawesome} className='mt-2 p-3 h-[250px] min-w-[190px] max-w-[290px] ' alt="Shoes" />
        </figure>
    <div className="card-body">
    <h2 className="card-title justify-center">Font Awesome Icon</h2>
    <p>Font Awesome is a widely used icon library that provides a vast collection of scalable vector icons that can be easily customized and integrated into web applications.</p>
   
  </div>
</div>
    <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="300" className="projectsCard card card-compact min-w-[200px] max-w-[300px] bg-base-100 shadow-xl mx-auto mb-8 p-2" 
     >
    <figure className=''>
        <Image src={ContactForm} className='mt-2 p-3 h-[260px] min-w-[190px] max-w-[290px] ' alt="Shoes" />
        </figure>
    <div className="card-body">
    <h2 className="card-title justify-center">Working Contact Form</h2>
    <p>Now user can input, validates data, and sends messages, enhancing user engagement and facilitating effective communication.</p>
   
   
  </div>
</div>
    <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="400" className="projectsCard card card-compact min-w-[200px] max-w-[300px] bg-base-100 shadow-xl mx-auto mb-8 p-2 " 
     >
    <figure className=''>
        <Image src={FramerMotion} className='mt-2 p-3 h-[250px] min-w-[190px] max-w-[290px] ' alt="Shoes" />
        </figure>
    <div className="card-body">
    <h2 className="card-title justify-center">Framer Motion</h2>
    <p>The Framer Motion Filtering Layout is a visually engaging and interactive user interface design that incorporates Framer Motion, a popular animation library for React applications.</p>
   
  </div>
</div>
</div>
</div>

        </div>
    );
};

export default Features;