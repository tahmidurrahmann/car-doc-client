import AppointmentBanner from "./AppointmentBanner";
import AppointmentCalender from "./AppointmentCalender";
import AppointmentService from "./AppointmentService";

const Appointment = () => {
    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            <AppointmentCalender></AppointmentCalender>
            <AppointmentService></AppointmentService>
        </div>
    );
};

export default Appointment;