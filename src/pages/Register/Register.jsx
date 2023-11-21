import Lottie from "lottie-react";
import animation from "../../assets/Animation - 1700378841837.json"
import Container from "../../Container/Container";
import logo from "../../assets/Group 1.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { getAuth, updateProfile } from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const imgbb_api_key = import.meta.env.VITE_IMGBB_API_KEY;
const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${imgbb_api_key}`;

const Register = () => {

    const auth = getAuth(app);
    const location = useLocation();
    const navigate = useNavigate();

    const {
        register, handleSubmit, formState: { errors } } = useForm();

    const { createUser, googleLogin, user } = useAuth();
    let from = location.state?.from?.pathname || "/";

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const getImageFile = data.photo[0];
        const imageFile = { image: getImageFile };

        const res = await axiosPublic.post(imageUploadUrl, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        const image = res.data?.data?.display_url;

        console.log(email, password, name, imageFile);
        createUser(email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: image
                }).then(async () => {
                    const postEmailPass = {
                        email: email,
                        name: name,
                    }
                    const res = await axiosSecure.post("/users", postEmailPass)
                    console.log(res?.data);
                    toast.success("User Created Successfully")
                    navigate(from, { replace: true })
                }).catch((error) => {
                    toast.error(error.message)
                });
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        const postEmailPass = {
            email: user?.email,
            name: user?.displayName,
        }
        googleLogin()
            .then(async () => {
                const res = await axiosSecure.post("/users", postEmailPass)
                console.log(res?.data);
                toast.success("Google login successful")
                navigate(from, { replace: true })
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
                            <h1 className="text-center text-white font-bold text-xl md:text-2xl">Sign Up to Doc House</h1>
                            <div className="form-control lg:w-1/2 lg:mx-auto">
                                <label className="label">
                                    <span className="label-text  text-xl font-semibold text-white">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })}
                                    placeholder="Enter your name" className="input input-bordered" />
                                {errors.name?.type === "required" && (
                                    <p className="text-red-500">Name is required</p>
                                )}
                            </div>
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
                                <input type="password" {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/ })} placeholder="Enter your password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-500">Password is required</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-500">Password cannot exceed 20 characters</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-500">Password cannot less than 6 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-500">Password must contain One uppercase,One lowercase, One digit and one special character.</p>
                                )}
                            </div>
                            <div className="form-control lg:w-1/2 lg:mx-auto">
                                <input type="file" {...register("photo", { required: true })} className="mt-3 file-input file-input-bordered" />
                                {errors.photo?.type === "required" && (
                                    <p className="text-red-500">Photo is required</p>
                                )}
                            </div>
                            <div className="form-control mt-6 lg:w-1/2 lg:mx-auto">
                                <button className={`rounded-lg bg-[#F7A582] py-3 text-white font-bold`}>Create Account</button>
                            </div>
                            <p className="text-white font-semibold text-center my-3">Already registered? Go to <Link to="/login"><span className="font-bold text-[#F7A582]"> SIGN IN</span></Link></p>
                            <p onClick={handleGoogleSignIn} className="text-white flex gap-2 border w-1/4 mx-auto items-center text-lg font-bold justify-center my-3 p-3 rounded-lg hover:bg-white hover:text-black">Sign in with <FaGoogle></FaGoogle></p>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;