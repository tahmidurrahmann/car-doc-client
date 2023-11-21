import useAppointment from "../../../hooks/useAppointment";
import Loader from "../../../loader/Loader";

const MyAppointment = () => {

    const [appointments, isPending] = useAppointment();
    console.log(appointments);

    if (isPending) {
        return <Loader></Loader>
    }

    return (
        <div>
            <div className="overflow-x-auto max-w-screen-xl mx-auto space-y-5">
            <h1 className="text-3xl font-bold m-4">My Appointment</h1>
                <table className="table my-4 md:my-10">
                    <thead>
                        <tr className="bg-[#E6E6E6]">
                            <th>#</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((item, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item?.name}</td>
                                <td>{item?.service}</td>
                                <td>{item?.date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;