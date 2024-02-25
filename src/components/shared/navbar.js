

import Link from "next/link";

const Navbar = () => {
    

    return (

       


        <div className="text-neutral fixed top-0 w-full mx-auto z-30 ">

    <ul className=" navbar list-none ml-0 md:mx-auto lg:mx-auto lg:gap-12 md:gap-8 gap-2  mt-2 flex justify-center items-center w-full md:w-[500px]  lg:w-[500px] rounded-lg h-14 p-1 ">


    <li  className="hover:bg-green-400 p-2 rounded text-sm font-bold "><Link href="/">HOME</Link></li>
    <li  className="hover:bg-green-400 p-2 rounded text-sm font-bold "><Link href="/aboutme">ABOUT</Link></li>
    <li className="hover:bg-green-400 p-2 rounded text-sm font-bold "><Link  href="/projects">PROJECTS</Link></li>
    <li  className="hover:bg-green-400 p-2 rounded text-sm font-bold "><Link href="/contact">CONTACT</Link></li>
    
    </ul>
    
</div>
  );
};

export default Navbar;