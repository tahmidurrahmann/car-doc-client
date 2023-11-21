import appointmentImg1 from "../../assets/chair 1.jpg"
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Container from "../../Container/Container";

const AppointmentCalender = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <Container>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center my-10">
                <div className="flex-1">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="flex-1 p-10 lg:p-0">
                    <img className="rounded-lg" src={appointmentImg1} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default AppointmentCalender;