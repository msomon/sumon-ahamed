"use client"


import React, { useEffect } from 'react';

import Manufecturer from "@/assets/electronics-manufacturer2.png"
import Wearhouse from "@/assets/somon electronics2.jpg"
import Photographer from "@/assets/photographer.jpg"
import Image from 'next/image';
import { motion } from 'framer-motion';
import Aos from 'aos';
import "aos/dist/aos.css"
import Link from 'next/link';

const Projects = () => {

    useEffect( ()=>{
        Aos.init({
            disable: 'mobile',
            delay: 100,
          });
    })
    return (
        <div className=' w-full md:w-ful lg:w-4/5 mx-auto mt-20 '>
           <h1 className='text-center text-3xl font-bold text-primary my-10'>My Projects</h1> 


     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mb-10 '>

     

    <div className="projectsCard card card-compact min-w-[250px] max-w-[400px] bg-base-100 shadow-xl mx-auto mb-8 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"
     >
    <figure className=''>
        <Image className='mt-2 p-3 h-[250px] min-w-[230px] max-w-[350px] ' src={Manufecturer} alt="Shoes" />
        </figure>
    <div className="card-body">
    <h2 className="card-title justify-center">Electronics Manufecturer </h2>
    <div className='flex justify-evenly'>
    <Link className='btn btn-secondary ' target="_blank" href={"https://electronics-manufacturer.web.app"} >live</Link>
    <Link className='btn' target="_blank" href={"https://github.com/msomon/manufacturer-website-client"} >Clint Code</Link>
    <Link className='btn ' target='_blank' href={"https://github.com/msomon/manufacturer-website-server"} >Server Code</Link>
    </div>
   
  </div>
</div>

    <div className="projectsCard card card-compact min-w-[250px] max-w-[400px] bg-base-100 shadow-xl mx-auto mb-8" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"
     >
    <figure className=''>
        <Image className='mt-2 p-3 h-[250px] min-w-[230px] max-w-[350px] ' src={Wearhouse} alt="Shoes" />
        </figure>
    <div className="card-body">
    <h2 className="card-title justify-center">Wearhouse Management</h2>
    <div className='flex justify-evenly'>
    <Link className='btn btn-secondary ' target="_blank" href={"https://electronics-warehouse-59bbd.web.app/"} >live</Link>
    <Link className='btn' target="_blank" href={"https://github.com/msomon/electronics-warehouse-management-clint"} >Clint Code</Link>
    <Link className='btn ' target='_blank' href={"https://github.com/msomon/electronics-warehouse-management-server"} >Server Code</Link>
    </div>
   
  </div>
</div>

    <div className="projectsCard card card-compact min-w-[250px] max-w-[400px] bg-base-100 shadow-xl mx-auto mb-8" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"
     >
    <figure className=''>
        <Image className='mt-2 p-3 h-[250px] min-w-[230px] max-w-[350px] ' src={Photographer} alt="Shoes" />
        </figure>
    <div className="card-body">
    <h2 className="card-title justify-center">Photographer Website</h2>
    <div className='flex justify-evenly'>
    <Link className='btn btn-secondary ' target="_blank" href={"/"} >live</Link>
    <Link className='btn' target="_blank" href={"https://github.com/msomon/photographer-somon"} >Github</Link>
    
    </div>
   
  </div>
</div>






  

           </div>
        </div>
    );
};

export default Projects;