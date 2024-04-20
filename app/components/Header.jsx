import MobileBar from "./mobile-bar"
import Image from "next/image";
import logo from "@/public/logo.png"
import Link from "next/link";
export default function Header() {
  const links = [
    {
      name:"Home",
      url:"/"
    },
    {
      name:"Skills",
      url:"#skills"
    },
    {
      name:"Projects",
      url:"#projects"
    }
  ]
  return (
    <nav className="bg-transparent text-black border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
        >
          <Image
          width={60}
          height={60}
            src={logo}
            alt="My Logo"
          />
        
        </Link>
        <MobileBar links={links} />
        <div className="hidden md:block w-auto">
          <ul className="font-medium flex p-0 rounded-lg  flex-row space-x-8  mt-0 border-0  border-gray-700 ">
            {links.map((link)=>(

            <li>
              <Link
                href={link.url}
                className="tracking-[.25em] block  bg-transparent  px-3 text-black font-bold text-lg duration-300 ease-in-out hover:text-teal-300 hover:border-b border-double border-teal-300 "
                aria-current="page"
              >
                {link.name}
              </Link>
            </li>
            ))}
         
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
