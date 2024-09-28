import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects() : Promise<Project[]>{

    const client = createClient({
        projectId: '66b71yf4',
        dataset: 'production',
        apiVersion:"2024-04-17",
        useCdn:false
        
    })

    return client.fetch(
        groq`*[_type == "project"] | order(_updatedAt desc) {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            githuburl,
            content
          }`
    )
}
