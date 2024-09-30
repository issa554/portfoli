import Image from "next/image"
import heroImage from "@/public/heroimage.webp"
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link"
export default function Hero() {

  const media =[
    {
      icon:<BsLinkedin />,
      url:"https://www.linkedin.com/in/issa-abed-29ba67288/"
    },
    {
      icon:<FaFacebookSquare />,
      url:"https://www.facebook.com/issaabed118/"
    },
    {
      icon:<FaGithubSquare />,
      url:"https://github.com/issa554"
    }
  ]

  return (
    <div>
        <div className="md:flex-row-reverse flex flex-col items-center max-w-screen-xl px-4 mx-auto  sm:px-6 p-8">
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded md:p-8">
  {/* Bubble behind the image */}
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="w-full h-full  custom-animate-pulse absolute inline-flex rounded-full">
    <svg viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#0D9488" d="M28.9,-47.1C35.1,-35.3,36.1,-23.7,39.4,-12.9C42.6,-2.2,48.1,7.6,50.1,20.9C52.1,34.1,50.6,50.8,41.6,62.2C32.7,73.6,16.3,79.7,-0.9,80.9C-18.1,82.1,-36.2,78.4,-40.9,65.7C-45.6,52.9,-37,31,-40,14.7C-43.1,-1.7,-57.8,-12.7,-56.7,-19.1C-55.5,-25.5,-38.4,-27.4,-26.3,-37.4C-14.2,-47.3,-7.1,-65.4,2.1,-68.3C11.3,-71.2,22.7,-59,28.9,-47.1Z" transform="translate(630 600) scale(11)" />
</svg>




    </div>
  </div>
  
  {/* Image */}
  <Image src={heroImage} alt="Photo" className="relative z-10 " />
</div>
  </div>
  <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
    <div className="text-left">
      <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-black sm:text-5xl sm:leading-none md:text-6xl">
        Hello , Im <span className="text-teal-700">Issa</span> 

      </h2>
      <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
      Computer Science Student at birzeit university 
      <br />
      and Web Devloper
      </p>
      <div className="mt-5 sm:flex md:mt-8">
        <div className="rounded-md shadow">
          <a
            href="https://drive.google.com/file/d/1RmGVNQRRHWcyVwkIEu5a3Jh6NnsWVKmH/view?usp=sharing"
            target="_blank"
            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-teal-500 border border-transparent rounded-md hover:bg-teal-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
          >
            View my CV
          </a>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link
          disabled
            href=""
            className="cursor-not-allowed  flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-teal-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-teal-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
          >
            Contact me
          </Link>
        </div>
      </div>
      <div className="mx-auto flex justify-between w-1/3 mt-4 border-t-2 border-teal-200 p-2">
        {
          media.map((item)=>(

        <Link key={item.url} href={item.url} className="text-3xl text-black hover:text-teal-700">
        {item.icon}
        
        </Link>
          ))
        }
        
        
      </div>
    </div>
  </div>

</div>

    </div>
  )
}
