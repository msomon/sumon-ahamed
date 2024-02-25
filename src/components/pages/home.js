
'use client'
import React from 'react';
import Myimage from '@/assets/sumon2 (1) .png'
import { motion } from 'framer-motion';
import Typical from 'react-typical'
import Image from 'next/image';
import "../style/style.css"
import Link from 'next/link';

const Home = () => {
  
  return (

    <div>
    
    <div  className=' flex lg:flex-row lg:mt-32 md:mt-24 mt-12 '>

        {/* <div className=' z-30  w-[100px] h-42 rounded-lg fixed left-0 justify-center items-center text-center hidden lg:block bg-green-400 mt-20 '>

        <ul className=" list-none mx-1   mt-2 justify-center items-center">
    <li  className="hover:bg-green-400 p-2 rounded text-sm font-bold "><Link href="/">HOME</Link></li>
    <li  className="hover:bg-green-400 p-2 rounded text-sm font-bold "><Link href="/aboutme">ABOUT</Link></li>
    <li className="hover:bg-green-400 p-2 rounded text-sm font-bold "><Link  href="/projects">PROJECTS</Link></li>
    <li  className="hover:bg-green-400 p-2 rounded text-sm font-bold"><Link href="/blogs">BLOGS </Link></li>
    <li  className="hover:bg-green-400 p-2 rounded text-sm font-bold "><Link href="/contactme">CONTACT</Link></li>
    </ul>
          
          </div> */}

      <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 gap-6  mt-10 w-full lg:w-4/5 items-center justify-center mx-auto mb-14 '>

    <div className=' justify-center items-center mx-auto '>
        
  <h3 className='text-3xl font-bold text-accent '> Hi I am <br />
   <span  className='text-yellow-500 '>Sumon Ahamed</span> </h3>
   
   <div> 
    <h3 className='text-xl mt-2 align-center text-accent'>I,m a 
   <span className='text-accent ml-2 font-bold '> 
   {" "}
   <h1>
{" "}
<Typical
loop={Infinity}
steps={[
"Junior web developer",
2500,
"Mern stack developer",
2500,
"Javascript developer",
2500,

]}

/>
   </h1>
   </span>
  </h3>
  </div>
       
  <h4 className='font-bold text-sm mt-2 text-accent'>PHONE : (+880)1748572428</h4>
  <h4 className='font-bold text-sm mt-2 text-accent'>EMAIL : mdsumon123ahamed@gmail.com</h4>
  <h4 className='font-bold text-sm mt-2 text-accent'>ADDRESS : Dhaka,Bangladesh</h4>
  <Link className='' href="https://drive.google.com/file/d/1BYs6kYJ-BqTW6WJfMhDtfLtOFGMRpKE7/view?usp=sharing" download  target="_blank" ><button className='btn hover:border-4 hover:border-red-400  resumeButton mt-4'>Download Resume</button></Link>

          
          
          
          </div>

<div className='justify-center items-center mx-auto relative'>
<motion.div  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }} >
    


<div className='z-10 shadow-xl shadow-orange-500  image-bg h-[300px] relative w-[280px] lg:w-[300px]'>

<Image className=' absolute bottom-3 right-2 rounded-full 
  z-20 w-[350px] h-[300px]   ' width={0} height={0} src={Myimage} alt="my image"></Image>

</div>


</motion.div>
</div> 
     </div>

</div>

    </div>
  );
};

export default Home;
