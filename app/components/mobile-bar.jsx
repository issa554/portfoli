"use client"
import { useState } from "react";
import MenuIcon from "./icons/MenuIcon"
import Link from "next/link";
import Close from "./icons/Close"
export default function mobileBar({links}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div>

        <div className={`${isMenuOpen ? "block ":"hidden"} z-50 flex flex-col items-center justify-center fixed inset-0 bg-white`}>
        <button
          onClick={toggleMenu}
          type="button"
          className=" absolute top-8 right-8 inline-flex items-center p-2 w-10 h-10 justify-center text-2xl duration-300 ease-in-out text-red-500 rounded-lg  hover:bg-red-100  "
          
          >
      <Close />
        </button>
        <div className=" flex items-center justify-center">

        <ul className="font-medium flex  flex-col space-y-5">
            {links.map((link)=>(
               <li>
               <Link
                         onClick={toggleMenu}

                 href={link.url}
                 className="tracking-[.25em]  flex rounded-lg  bg-transparent  font-bold text-3xl duration-700 ease-in-out text-gray-400  p-2   hover:bg-gray-200 hover:text-teal-300 "
               >
                 {link.name}
               </Link>
             </li>
            ))}
           
          </ul>
            </div>

        </div>
     
    
          <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-md text-gray-900 rounded-lg md:hidden hover:bg-gray-100  "
          
          >
      <MenuIcon />
        </button>
            </div>
  )
}
