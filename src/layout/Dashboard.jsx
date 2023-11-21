import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    let isAdmin = true;
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-7">
                <div className="md:col-span-2 lg:col-span-1">
                    <div className="shadow-2xl md:min-h-screen">
                        <div className="flex justify-center items-center py-10">
                            {isAdmin ?
                                <div>
                                    <h1 className="text-4xl font-bold text-left">Dashboard</h1>
                                    <div className="flex flex-col my-10 space-y-4 justify-center items-center">
                                        <NavLink
                                            to="/dashboard/allUsers"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#F7A582]" : "text-black font-bold text-lg"
                                            }
                                        >
                                            All Users
                                        </NavLink>
                                        <NavLink
                                            to="/dashboard/addDoctor"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#F7A582]" : "text-black font-bold text-lg"
                                            }
                                        >
                                            Add Doctors
                                        </NavLink>
                                        <NavLink
                                            to="/dashboard/manageDoctors"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#F7A582]" : "text-black font-bold text-lg"
                                            }
                                        >
                                            Manage Doctors
                                        </NavLink>
                                        <NavLink
                                            to="/"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#F7A582]" : "text-black font-bold text-lg"
                                            }
                                        >
                                            Home
                                        </NavLink>
                                    </div>
                                </div>
                                :
                                <NavLink
                                    to="/dashboard/myAppointment"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#F7A582]" : "text-black font-bold text-lg"
                                    }
                                >
                                    My Appointments
                                </NavLink>}
                        </div>
                    </div>
                </div>
                <div className="md:col-span-5 lg:col-span-6">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;