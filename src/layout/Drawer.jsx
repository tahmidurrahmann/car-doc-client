import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { AiOutlineLogout } from 'react-icons/ai';

const Drawer = () => {

    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    return (
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
    );
};

export default Drawer;