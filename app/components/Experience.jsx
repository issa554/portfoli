import { MdVerifiedUser } from "react-icons/md";

export default function Experience() {
  return (

    <div id="skills">
        <h1 className="text-4xl text-center text-teal-500 font-bold">
            My Skills : 
        </h1>
    <div className=" md:flex-row flex flex-col items-center max-w-screen-xl px-4 mx-auto  sm:px-6 p-8">
        <div className="border-2 rounded-xl p-0 border-teal-600 w-full h-full m-2  items-center  md:w-1/2 md:pb-20 md:pl-10 ">
            <h1 className="text-center text-2xl text-teal-900 font-bold pt-4">
                Frontend Development
            </h1>
            <div className="h-full grid grid-cols-1 md:grid-cols-2 ml-10 gap-4">
                <div className="ml-1 flex text-xl flex-row ">
                <MdVerifiedUser className="mt-1 mr-2 " />
                <span >
                    HTML & CSS
                    </span>
                </div>
                <div className="ml-1 flex text-xl flex-row ">
                <MdVerifiedUser className="mt-1 mr-2 " />
                <span >
                    JavaScript
                    </span>
                </div>
                <div className="ml-1 flex text-xl flex-row ">
                <MdVerifiedUser className="mt-1 mr-2 " />
                <span >
                Tailwind CSS
                    </span>
                </div>
                <div className="ml-1 flex text-xl flex-row">
                <MdVerifiedUser className="mt-1 mr-2 " />
                <span >
                    React JS
                    </span>
                </div>
                <div className="ml-1 flex text-xl flex-row">
                <MdVerifiedUser className="mt-1 mr-2 " />
                <span >
                    Next JS
                    </span>
                </div>
              
          
            </div>

        </div>
        <div className="border-2 rounded-xl p-0 border-teal-600 w-full h-full m-2  items-center  md:w-1/2 md:pb-20 md:pl-10 ">
            <h1 className="text-center text-2xl text-teal-900 font-bold pt-4">
                Backend Development
            </h1>
            <div className="h-full grid grid-cols-1 md:grid-cols-2 ml-10 gap-4">
                <div className="ml-1 flex text-xl flex-row">
                <MdVerifiedUser className="mt-1 mr-2 " />
                <span >
                    Spring Boot
                    </span>
                </div>
                <div className="ml-1 flex text-xl flex-row">
                <MdVerifiedUser className="mt-1 mr-2 " />
                <span >
                    MySQL
                    </span>
                </div>
                <div className="ml-1 flex text-xl flex-row">
                <MdVerifiedUser className="mt-1 mr-2 " />
                <span >
                    MongoDB
                    </span>
                </div>
                <div className="ml-1 flex text-xl flex-row">
                <MdVerifiedUser className="mt-1 mr-2 " />
                <span >
                Prisma ORM
                    </span>
                </div>
              
          
            </div>

        </div>
      
    </div>
    </div>
  )
}
