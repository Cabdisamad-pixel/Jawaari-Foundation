import { createContext } from "react";



const BlogContext = createContext({
    currentBlog : {},
    blogChangeHandler : () => {}
})


export default BlogContext