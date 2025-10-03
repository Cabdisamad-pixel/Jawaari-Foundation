import { useContext } from "react"
import BlogContext from "../../../Store/BlogContext/BlogContext"
import BlogDetailsStyle from './BlogDetails.module.css'
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';

const BlogDetails = () => {

    // accessing the context
    const ctx = useContext(BlogContext);

    const object = {
        cabdi: <p>waa aniga cabdisamad maxamed</p>
    }
    return (
        <>
            <Header/>
            <div className={BlogDetailsStyle.container}>
                
                <div className={BlogDetailsStyle.Image} style={{backgroundImage:`url(${ctx.currentBlog.image})`}}>
                    <div className={BlogDetailsStyle.innerShadowImage}>
                        <h1>{ctx.currentBlog?.Title}</h1>
                    </div>
                </div>
                <div className={BlogDetailsStyle.Topics}>
                    {ctx.currentBlog.content.map((obj) => {
                        return <div className={BlogDetailsStyle.SubTopic}>
                            <h2>{obj.topic}</h2>
                            <p>{obj.AboutTopic}</p>
                        </div>
                    })}
                </div>
            </div>

            <Footer/>

        </>
    )
}

export default BlogDetails