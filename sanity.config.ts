import {defineConfig} from "sanity"
import {deskTool} from "sanity/desk"
import schemas from "./sanity/schemas"

const config = defineConfig({
    title: 'std',
    projectId: '66b71yf4',
    dataset: 'production',
    apiVersion:"2024-4-17",
    basePath:"/admin-edit-std",
    plugins:[deskTool()],
    schema:{types : schemas},
    
})

export default config