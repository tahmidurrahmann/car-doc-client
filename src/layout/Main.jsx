import { NavLink } from "react-router-dom";
import logo from "../assets/Group 1.svg"
import useAuth from "../hooks/useAuth";
import { AiOutlineLogout } from "react-icons/ai";

const Main = ({ children }) => {

    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                        <div className="shadow-2xl bg-[#07332F]">
                            <div className="w-full navbar container mx-auto">
                                <div className="flex-none lg:hidden">
                                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                    </label>
                                </div>
                                <div className="flex-1 px-2 mx-2"><img className="w-[35px]" src={logo} alt="" /><span className="text-2xl font-bold ml-1"><span className="text-[#F7A582]">Doc</span> <span className="text-white">House</span></span></div>
                                <div className="flex-none hidden lg:block">
                                    <ul className="menu menu-horizontal flex justify-center items-center gap-6">
                                        {/* Navbar menu content here */}
                                        <NavLink
                                            to="/"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#F7A582]" : "text-white"
                                            }
                                        >
                                            Home
                                        </NavLink>
                                        <NavLink
                                            to="/about"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#F7A582]" : "text-white"
                                            }
                                        >
                                            About
                                        </NavLink>
                                        <NavLink
                                            to="/appointment"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#F7A582]" : "text-white"
                                            }
                                        >
                                            Appointment
                                        </NavLink>
                                        {user ? <div className="flex justify-center items-center">
                                            <div className="dropdown dropdown-bottom dropdown-end">
                                                <label tabIndex={0} className="m-1"><img className="w-[40px] rounded-full" src={user?.photoURL} alt="" /></label>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <h1 className="text-center text-primary font-bold">{user?.displayName}</h1>
                                                    <button className="bg-[#DD2955] px-2 py-1 rounded-full text-white font-semibold justify-center flex items-center gap-2" onClick={handleLogout}>Logout<AiOutlineLogout /></button>
                                                </ul>
                                            </div>
                                        </div> : <NavLink
                                            to="/login"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#F7A582]" : "text-white"
                                            }
                                        >
                                            Login
                                        </NavLink>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="p-4 w-60 flex flex-col gap-4 pt-32 items-center min-h-full bg-[#ffffffd9]">
                        {/* Sidebar content here */}
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#F7A582] text-xl font-bold" : "text-black text-xl font-bold"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#F7A582] text-xl font-bold" : "text-black text-xl font-bold"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/appointment"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#F7A582] text-xl font-bold" : "text-black text-xl font-bold"
                            }
                        >
                            Appointment
                        </NavLink>
                        {user ? <div className="flex justify-center items-center">
                            <div className="dropdown dropdown-bottom">
                                <label tabIndex={0} className="m-1"><img className="w-[40px] rounded-full" src={user?.photoURL} alt="" /></label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <h1 className="text-center text-primary font-bold">{user?.displayName}</h1>
                                    <button className="bg-[#DD2955] px-2 py-1 rounded-full text-white font-semibold justify-center flex items-center gap-2" onClick={handleLogout}>Logout<AiOutlineLogout /></button>
                                </ul>
                            </div>
                        </div> : <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#F7A582]" : "text-white"
                            }
                        >
                            Login
                        </NavLink>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;