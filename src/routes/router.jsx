import { createBrowserRouter } from "react-router-dom";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import App from "../App";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Appointment from "../pages/Appointment/Appointment";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        errorElement : <Error></Error>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/about",
                element : <About></About>
            },
            {
                path : "/appointment",
                element : <Appointment></Appointment>,
            },
        ]
    },
    {
        path : "/login",
        element : <Login></Login>
    },
    {
        path : "/register",
        element : <Register></Register>
    },
])

export default router;