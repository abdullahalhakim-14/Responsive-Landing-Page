import "./Hero.css"
const Hero = ({ title, describtion, placeholder, btn }) => {
    return (
        <div className="hero">
            <h1> {title} </h1>
            <p> {describtion} </p>
            <div className="email-box">
                <input type="email" placeholder={placeholder} />
                <input type="submit" value={btn} />
            </div>
        </div>
    );
};

export default Hero;
