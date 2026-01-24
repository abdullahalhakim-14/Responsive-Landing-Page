import { Link } from "react-router";
import "./Sign.css"
const Sign = ({ title, describtion, text, email, password, btn1, details, btn2 }) => {
    return (
        <div className="container">
            <div className="sign">
                <div className="head">
                    <h1> {title} </h1>
                    <p> {describtion} </p>
                </div>
                <div className="email">
                    {text && <input type="text" placeholder={text} />}
                    <input type="email" placeholder={email} />
                    <input type="password" placeholder={password} />
                    <input type="submit" value={btn1} />
                </div>
                <div className="register">
                    <p> {details} </p>
                    <Link to="/signup" className="signup" >
                        {btn2}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sign
