import { useNavigate } from "react-router-dom"
import Header from "../Header/Header"
import BlogStyle from './Blog.module.css'
import { Navigate } from "react-router-dom"
import { useContext } from "react"
import BlogContext from '../../Store/BlogContext/BlogContext';

const Blog = () => {

    const ctx = useContext(BlogContext);

    const navigate = useNavigate()

    const listOfBlogs = [
        {
            id: 1,
            Title: 'Health Food',
            dateBlog: new Date('2024-12-5'),
            content: [
                {
                    topic: "What is Health Food?",
                    AboutTopic: "Health food refers to natural, minimally processed foods that provide essential nutrients for the body. These foods are rich in vitamins, minerals, fiber, and healthy fats while being low in added sugars, saturated fats, and artificial ingredients. Unlike fast food or highly processed snacks, health food helps maintain overall well-being, boosts energy levels, and reduces the risk of chronic illnesses. Common examples include fresh fruits, vegetables, whole grains, legumes, lean proteins, and healthy oils."
                },
                {
                    topic: "Benefits of Eating Health Food",
                    AboutTopic: "Consuming a diet rich in health foods has both short-term and long-term advantages. A stronger immune system can be achieved through antioxidant-rich foods like citrus fruits and garlic. Heart health improves with whole grains, nuts, and omega-3 fatty fish. Digestion works smoothly with fiber from beans, oats, and greens. Weight management becomes easier with nutrient-dense but lower-calorie meals. Finally, sharper brain function is supported by foods like blueberries, walnuts, and avocados."
                },
                {
                    topic: "Examples of Health Foods",
                    AboutTopic: "Adding health foods into your diet is simple and practical. Fruits like apples, bananas, and berries provide natural sugars and vitamins. Vegetables such as broccoli, spinach, and carrots are nutrient-dense. Protein sources like eggs, lentils, and chicken breast build muscle and keep you full. Whole grains such as brown rice, oats, and quinoa improve digestion and energy. Healthy fats from olive oil, nuts, and salmon support both the heart and brain."
                },
                {
                    topic: "Common Myths About Health Food",
                    AboutTopic: "There are many misconceptions about health food. Some people believe it is too expensive, but affordable staples like rice, beans, and seasonal fruits are healthy and cheap. Others think healthy food doesn’t taste good, but flavor can be improved with spices and herbs. Many fear they must give up favorite meals, but balance allows occasional treats. Another myth is that organic always means healthy, yet organic cookies are still high in sugar."
                },
                {
                    topic: "Tips for Including Health Food",
                    AboutTopic: "Shifting to health food can start with small changes. Replace sugary drinks with water or fresh juice. Include at least one serving of vegetables with every meal. Prepare snacks like nuts or yogurt ahead of time. Cook at home to control ingredients and portions. Experiment with easy recipes such as smoothies, roasted vegetables, or overnight oats to add variety and make healthy eating more enjoyable."
                },
                {
                    topic: "The Bigger Picture",
                    AboutTopic: "Health food is not just about dieting, but about building a sustainable lifestyle. It should be combined with exercise, quality sleep, and stress management for complete wellness. This approach prevents chronic diseases like diabetes, high blood pressure, and obesity. Choosing healthy meals is therefore both a personal and long-term investment in your body and mind."
                },
                {
                    topic: "Conclusion",
                    AboutTopic: "Health food is a foundation for living a longer, more energetic life. By consistently choosing nutritious whole foods over processed ones, you can greatly improve your health. Even small steps, such as adding vegetables or drinking more water, have a powerful impact over time. The key is not perfection but consistency—making health food a regular part of your lifestyle."
                }
            ]
            ,
            image: 'https://i.pinimg.com/1200x/38/45/c1/3845c1490aa4232fa3389cf6ce5db52c.jpg',
            header: 'Boost Your Health with Nutritious Foods',
            Description: 'Discover the benefits of eating whole, natural foods that fuel your body and mind.'
        },
        {
            id: 2,
            Title: 'Nature Child',
            dateBlog: new Date('2024-12-5'),
            content: [
                {
                    topic: "What is Nature Child?",
                    AboutTopic: "Nature Child refers to practices, habits, and products that promote a harmonious connection with the natural environment. This concept emphasizes spending time outdoors, nurturing a love for plants and wildlife, and choosing eco-friendly, sustainable lifestyle choices. Activities like gardening, mindful observation of nature, and eco-conscious consumption contribute to physical and mental well-being while fostering respect for the planet."
                },
                {
                    topic: "Benefits of Embracing Nature Child",
                    AboutTopic: "Integrating Nature Child practices into daily life offers multiple benefits. Spending time in green spaces reduces stress and anxiety while boosting mood. Exposure to sunlight improves vitamin D levels and supports bone health. Physical activity in nature enhances fitness and cardiovascular health. Nature-focused mindfulness and hobbies promote mental clarity, creativity, and emotional resilience."
                },
                {
                    topic: "Examples of Nature Child Activities",
                    AboutTopic: "Living as a Nature Child can be simple and rewarding. Gardening, planting trees, or maintaining indoor plants brings nature closer. Walking, hiking, or cycling outdoors supports fitness and mental health. Observing birds, wildlife, or natural landscapes fosters curiosity and learning. Choosing eco-friendly products, reducing waste, and practicing sustainable living habits make a positive environmental impact."
                },
                {
                    topic: "Common Myths About Nature Child",
                    AboutTopic: "There are misconceptions about embracing a Nature Child lifestyle. Some think it requires expensive gear or memberships, yet simple outdoor activities are free. Others believe spending time in nature is only for the young, but all ages benefit. Some fear it demands a drastic lifestyle change, but small daily actions create meaningful habits. Another myth is that it only involves plants, while wildlife observation, eco-friendly choices, and mindful living are also key aspects."
                },
                {
                    topic: "Tips for Becoming a Nature Child",
                    AboutTopic: "Starting your Nature Child journey can begin with small steps. Spend at least 15 minutes outdoors daily. Add plants to your living space for a natural touch. Participate in local clean-up or tree-planting events. Reduce single-use plastics and choose sustainable products. Explore nature-focused hobbies like birdwatching, journaling outdoors, or hiking to make it enjoyable and consistent."
                },
                {
                    topic: "The Bigger Picture",
                    AboutTopic: "Being a Nature Child is about creating a balanced lifestyle that respects both personal well-being and the environment. Combining outdoor activity, sustainable choices, and mindfulness enhances health, reduces stress, and builds long-term ecological awareness. This approach encourages a harmonious relationship with nature while nurturing body, mind, and planet."
                },
                {
                    topic: "Conclusion",
                    AboutTopic: "Nature Child is a lifestyle that supports holistic wellness and environmental stewardship. By consistently engaging with nature and adopting eco-conscious habits, you strengthen your health and contribute positively to the planet. Small steps, such as planting a garden, spending time outdoors, or making sustainable choices, have lasting effects. The key is regular practice, making nature a natural part of everyday life."
                }
            ]
            ,
            image: 'https://i.pinimg.com/736x/a5/da/19/a5da19fc17989de53fd036486c8e4a75.jpg',
            header: 'Growing Up Close to Nature',
            Description: 'Explore the joys and benefits of connecting children with the natural world.'
        },

    ]

    const blogDetailsHandler = (expectedObject) => {

        ctx.blogChangeHandler(expectedObject)
        navigate('/BlogDetails')
    }

    return (
        <>
            <Header />
            <div className={BlogStyle.BlogHeader}>
                <h1>Our Blogs</h1>
                <p>
                    Welcome to our blog – sharing stories on healthy foods, caring for children, scholarships, and the lasting benefits of knowledge through donations.
                </p>
            </div>
            <div className={BlogStyle.BlogContainer}>

                {listOfBlogs.map((obj) => {
                    return <div onClick={() => blogDetailsHandler(obj)} className={BlogStyle.Blog}>
                        <img src={obj.image} alt="" />
                        <h4>{obj.Title}</h4>
                        <h6>{obj.dateBlog.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</h6>
                        <p>{obj.Description}</p>
                    </div>
                })}
            </div>
        </>
    )

}
export default Blog