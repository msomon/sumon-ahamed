
"use client"
import React from 'react';
import uiDesign from '@/assets/ui-design.svg'
import webDEvelopment from '@/assets/web-development.svg'
import appDevelopment from '@/assets/app-development.svg'
import research from '@/assets/research.svg'
import Image from 'next/image';


const AboutMe = () => {
    return (
        <div id='about' className='lg:mt-20 sm:mt-10  w-full md:w-full lg:w-3/5 mx-auto aboutme '>
            <div className='my-3 p-5 lg:mt-20 sm:mt-10 '>
            <h1 className='text-5xl underline decoration-green-500 mb-4'>About</h1>

    <p className='my-4 whitespace-normal '>

    Hello! I am Sumon Ahamed, a passionate MERN stack web developer with a knack for turning ideas into reality through code. With a solid foundation in HTML, CSS, and JavaScript, I specialize in crafting dynamic and user-friendly web applications. </p>

   <p className='mb-3'>💻 My expertise extends to React.js for building interactive user interfaces and Node.js for server-side development. I thrive on utilizing MongoDB and Firebase for database management, ensuring seamless data handling and retrieval.I also use the Next.js framework because it offers built-in support for API routes, enabling me to create backend functionality within the same project structure.</p>

   <p className='mb-2'> I am well-versed in version control systems like GitHub for collaborative development and deployment platforms like Vercel for efficient project hosting.🚀 Whether it is developing robust web applications or refining user interfaces, I am dedicated to delivering high-quality solutions that meet both client needs and industry standards. </p>


<p>Lets connect and collaborate on exciting projects together!</p>
            <h1 className='text-3xl my-4'>What I Do</h1>
            </div>

      <div className='mt-3 grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-3 mx-auto '>

      <div className="uicard sm:w-[300px] md:w-full lg:w-full  flex flex-col  card card-side shadow-xl gap-3 lg:p-5 p-3 mx-auto ">
       <figure><Image className='h-32 w-72 p-6 items-center ' src={uiDesign} alt="Movie"/></figure>
     <div className="card-body ">
    <h2 className="card-title">Ui/Ux Design</h2>
    <p className='flex-wrap'>My role revolves around crafting seamless digital experiences for users. User Interface (UI) design focuses on the aesthetic appeal and functionality of digital interfaces, ensuring elements like buttons, icons, and layouts are intuitive and visually engaging.</p>
  </div> 
</div>
      <div className="uicard sm:w-[300px] flex flex-col md:w-full lg:w-full  card card-side shadow-xl gap-3 lg:p-5 p-1 mx-auto ">
       <figure><Image className='h-32 w-80 p-2 items-center ' src={webDEvelopment} alt="Movie"/></figure>
     <div className="card-body ">
    <h2 className="card-title">Web Development</h2>
    <p className='flex-wrap'>My primary responsibility is to build and maintain websites and implementing designs, ensuring responsiveness, optimizing performance, and often collaborating with designers and stakeholders to achieve project goals.</p>
  </div> 
</div>
      <div className="uicard sm:w-[300px] flex flex-col md:w-full lg:w-full  card card-side shadow-xl gap-3 lg:p-5 p-3 mx-auto ">
       <figure><Image className='h-32 w-72 p-6 items-center ' src={appDevelopment} alt="Movie"/></figure>
     <div className="card-body ">
    <h2 className="card-title">App Development</h2>
    <p className='flex-wrap'> I design, build, and maintain applications for mobile devices or desktop platforms and utilize programming languages like React-Native to create functional and user-friendly software solutions.</p>
  </div> 
</div>
      <div className="uicard sm:w-[300px] flex flex-col md:w-full lg:w-full  card card-side shadow-xl gap-3 lg:p-5 p-3 mx-auto ">
       <figure><Image className='h-32 w-72 p-6 items-center ' src={research} alt="Movie"/></figure>
     <div className="card-body ">
    <h2 className="card-title">Resarch</h2>
    <p className='flex-wrap'>I also researches emerging technologies, frameworks, and best practices to enhance website performance, security, and user experience.I stay updated to implement innovative solutions and optimize development processes.</p>
  </div> 
</div>

  
      

     
             
             
             
              </div>
 


        </div>
    );
};

export default AboutMe;