import { useState } from "react"
import BlogContext from "../BlogContext/BlogContext"


const BlogProvider = (props) => {

    const [currentBlog, setCurrentBlog] = useState(null)

    const blogChangeHandler = (newObject) => {
        setCurrentBlog(newObject)
    }

    const ValueProvider = {
        currentBlog,
        blogChangeHandler
    }

    return(
        <BlogContext.Provider value={ValueProvider}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogProvider