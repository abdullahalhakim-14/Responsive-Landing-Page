import './blog.css'
const Blog = ({ title, items }) => {
    return (
        <div className="blog">
            <h1> {title} </h1>
            <div className="cotainer">
                <div className="cards">
                    {items?.map((item, index) => {
                        return (
                            <div key={index} className="card" >
                                <img src={item.img} />
                                <div className="text">
                                    <h5> {item.author} </h5>
                                    <div className="details">
                                        <h3> {item.suptitle} </h3>
                                        <i> {item.icon} </i>
                                    </div>
                                    <p> {item.description} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Blog
