import {getProjects} from "@/sanity/sanity-utils"
import Image from "next/image"
import { PortableText } from '@portabletext/react';
import { FaGithubSquare } from "react-icons/fa";

const  Portfolio = async () => {
  const projects = await getProjects();
  return (
    <>
      <section id="projects" className="mx-2 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] ">
        <div className="container mx-auto">

         
          <div className="flex flex-wrap -mx-4">
            {projects.map((project)=>(

            <PortfolioCard
              ImageHref={project.image}
              title={project.name}
              button={project.url}
              buttonHref={project.githuburl}
              content={project.content}
            />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  ImageHref,
  title,
  button,
  buttonHref,
  content
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px] mx-2">
            <Image width={600} height={200}  src={ImageHref} alt="image" className="w-full" />
          </div>
          <div className="border-2 border-teal-700 relative z-10 mx-7 -mt-20 rounded-lg bg-white  py-[34px] px-3 text-center shadow-portfolio ">
           
            <h3 className="text-dark  mb-5 text-xl font-bold">{title}</h3>
            <PortableText value={content} />
            <div className=" flex justify-center">

           

            <a
              href={buttonHref}
              className="m-2  flex  rounded-md border border-stroke text-white bg-teal-700  py-[10px] px-7 text-sm font-medium transition hover:text-black hover:bg-white duration-700 ease-in-out"
            >
              GitHub <FaGithubSquare className="ml-2 mt-1" />
            </a>
            <a
              href={button}
              className="m-2  flex  rounded-md border border-stroke  py-[10px] px-7 text-sm font-medium transition hover:text-teal-600 duration-700 ease-in-out"
            >
              Demo app
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
