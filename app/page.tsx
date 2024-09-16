import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Project from "./components/Project"
import { Analytics } from "@vercel/analytics/react"
export default function Home() {
  return (
 <div>
 <Hero />
 <Experience />
 <Project />
   <Analytics />
 </div>
  );
}
