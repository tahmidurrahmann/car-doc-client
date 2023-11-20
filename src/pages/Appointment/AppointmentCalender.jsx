import appointmentImg1 from "../../assets/chair 1.jpg"

const AppointmentCalender = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center my-10">
            <div className="flex-1">

            </div>
            <div className="flex-1 p-10 lg:p-0">
                <img className="rounded-lg" src={appointmentImg1} alt="" />
            </div>
        </div>
    );
};

export default AppointmentCalender;