import Image from "next/image"
import heroImage from "@/public/heroImage.png"
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
    <div className=" w-full p-3 rounded  md:p-8">
        <Image src={heroImage} />
    </div>
  </div>
  <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
    <div className="text-left">
      <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-black sm:text-5xl sm:leading-none md:text-6xl">
        Hello , I'm <span className="text-teal-700">Issa</span> 

      </h2>
      <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
      Computer Science Student at birzeit university 
      <br />
      and Web Devloper
      </p>
      {/* <div className="mt-5 sm:flex md:mt-8">
        <div className="rounded-md shadow">
          <a
            href=""
            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-teal-500 border border-transparent rounded-md hover:bg-teal-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
          >
            Download my CV
          </a>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a
            href=""
            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-teal-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-teal-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
          >
            Contact me
          </a>
        </div>
      </div> */}
      <div className="mx-auto flex justify-between w-1/3 mt-3">
        {
          media.map((item)=>(

        <Link href={item.url} className="text-3xl text-black hover:text-teal-700">
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
