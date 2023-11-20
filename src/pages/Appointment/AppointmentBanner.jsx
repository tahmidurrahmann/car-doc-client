import Container from "../../Container/Container";

const AppointmentBanner = () => {
    return (
        <div className="bg-[#07332F] py-10 md:py-20 space-y-4">
            <Container>
                <h1 className="text-white">Home/Appointment</h1>
                <p className="text-white font-bold text-3xl">Appointment</p>
            </Container>
        </div>
    );
};

export default AppointmentBanner;