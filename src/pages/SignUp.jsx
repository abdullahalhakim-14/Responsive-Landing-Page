import Sign from "../components/Sign/Sign"
const SignUp = () => {
    return (
        <div>
            <Sign
                title="Sign Up"
                describtion="Enter your email and username , password to sign up!"
                text="Enter your username"
                email="Enter your email"
                password="Enter your Password"
                btn1="Sign Up"
                details="Have an account?"
                btn2="Log in"
            />
        </div>
    )
}

export default SignUp
