import Sign from "../components/Sign/Sign"
const SignIn = () => {
    return (
        <div>
            <Sign
                title="Sign In"
                describtion="Enter your email and password to sign in !"
                email="Enter your email"
                password="Enter your Password"
                btn1="Sign In"
                details="Don't have an account?"
                btn2="Sign up"
            />
        </div>
    )
}

export default SignIn
