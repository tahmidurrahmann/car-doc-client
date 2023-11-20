import Lottie from "lottie-react";
import animation from "../../assets/Animation - 1700378841837.json"
import Container from "../../Container/Container";
import logo from "../../assets/Group 1.svg"
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Login = () => {

    const { signInUser, googleLogin, user } = useAuth();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const [disabled, setDisabled] = useState(true);

    const {
        register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        signInUser(email, password)
        .then(async ()=>{
            toast.success("Login successful")
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    const handleValidateCaptcha = (e) => {
        const captchaValue = e.target.value;
        if (validateCaptcha(captchaValue)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    const handleGoogleSignIn = () => {
        const postEmailPass = {
            email : user?.email,
            name : user?.displayName,
        }
        googleLogin()
        .then(async ()=>{
            const res = await axiosSecure.post("/users", postEmailPass)
            console.log(res?.data);
            toast.success("Google login successful")
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    return (
        <div className="bg-[#07332F]">
            <div className="md:flex py-6 hidden px-24 lg:px-52 gap-2 fixed z-10"><img className="w-[35px]" src={logo} alt="" /><span className="text-2xl font-bold ml-1"><span className="text-[#F7A582]">Doc</span> <span className="text-white">House</span></span></div>
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10 min-h-screen">
                    <Lottie className="col-span-2" animationData={animation} loop={true} />
                    <div className="col-span-2 flex justify-center items-center">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-center text-white font-bold text-xl md:text-2xl">Sign in to Doc House</h1>
                            <div className="form-control lg:w-1/2 lg:mx-auto">
                                <label className="label">
                                    <span className="label-text  text-xl font-semibold text-white">Username or Email Address</span>
                                </label>
                                <input type="email" {...register("email", { required: true })}
                                    placeholder="Enter your username or address" className="input input-bordered" />
                                {errors.email?.type === "required" && (
                                    <p className="text-red-500">Email is required</p>
                                )}
                            </div>
                            <div className="form-control lg:w-1/2 lg:mx-auto">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-white">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} placeholder="Enter your password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-500">Password is required</p>
                                )}
                            </div>
                            <div className="form-control lg:w-1/2 lg:mx-auto">
                                <div className=" text-white my-3">
                                    <LoadCanvasTemplate />
                                </div>
                                <input onBlur={handleValidateCaptcha} type="text" placeholder="Enter captcha code" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 lg:w-1/2 lg:mx-auto">
                                <button disabled={disabled} className={`rounded-lg py-3 text-white font-bold ${disabled ? "bg-gray-300" : "bg-[#F7A582]"}`}>Login</button>
                            </div>
                            <p className="text-white font-semibold text-center my-3">Please register at first. Go to <Link to="/register"><span className="font-bold text-[#F7A582]">SIGN UP</span></Link></p>
                            <p onClick={handleGoogleSignIn} className="text-white flex gap-2 border w-1/4 mx-auto items-center text-lg font-bold justify-center my-3 p-3 rounded-lg hover:bg-white hover:text-black">Sign in with <FaGoogle></FaGoogle></p>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;