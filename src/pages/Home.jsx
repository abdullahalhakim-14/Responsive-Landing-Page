import { MdArrowOutward } from "react-icons/md";
import Blog from "../components/Blog/Blog";
import Hero from "../components/Hero/Hero"




const Home = () => {

    let items = [
        {
            img: "/assets/img/Blog1.jpg",
            author: "Alec Whitten • 1 Jan 2023",
            suptitle: "Bill Walsh leadership lessons",
            icon: <MdArrowOutward />,
            description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?'
        },
        {
            img: "/assets/img/Blog2.jpg",
            author: "Demi WIlkinson • 1 Jan 2023",
            suptitle: "PM mental models",
            icon: <MdArrowOutward />,
            description: 'Mental models are simple expressions of complex processes or relationships.'
        },
        {
            img: "/assets/img/Blog3.jpg",
            author: "Candice Wu • 1 Jan 2023",
            suptitle: "What is Wireframing?",
            icon: <MdArrowOutward />,
            description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.'
        },
        {
            img: "/assets/img/Blog4.jpg",
            author: "Natali Craig • 1 Jan 2023",
            suptitle: "How collaboration makes us better designers",
            icon: <MdArrowOutward />,
            description: 'Collaboration can make our teams stronger, and our individual designs better.'
        },
        {
            img: "/assets/img/Blog5.jpg",
            author: "Drew Cano • 1 Jan 2023",
            suptitle: "Our top 10 Javascript frameworks to use",
            icon: <MdArrowOutward />,
            description: 'JavaScript frameworks make development easy with extensive features and functionalities.'
        },
        {
            img: "/assets/img/Blog6.jpg",
            author: "Orlando Diggs • 1 Jan 2023",
            suptitle: "Podcast: Creating a better CX Community",
            icon: <MdArrowOutward />,
            description: 'Starting a community doesn’t need to be complicated, but how do you get started?'
        },
    ]


    return (
        <div>
            <Hero
                title="Stories and interviews"
                describtion="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
                placeholder="Enter your email"
                btn="Subscribe"
            />
            <Blog
                title="All Blog Posts"
                items={items}
            />
        </div>
    );
};

export default Home;
