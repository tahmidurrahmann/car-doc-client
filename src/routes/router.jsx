import { createBrowserRouter } from "react-router-dom";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import App from "../App";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Appointment from "../pages/Appointment/Appointment";
import PrivateRoute from "../private/PrivateRoute";
import Dashboard from "../layout/Dashboard";
import MyAppointment from "../pages/Dashboard/MyAppointment/MyAppointment";

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
                element : <PrivateRoute><Appointment></Appointment></PrivateRoute>,
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
    {
        path : "dashboard",
        element : <Dashboard></Dashboard>,
        children : [
            // user 
            {
                path : "myAppointment",
                element : <MyAppointment></MyAppointment>
            }
            // admin
        ]
    }
])

export default router;