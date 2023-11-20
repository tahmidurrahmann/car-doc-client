import Container from "../../../Container/Container";
import banner1 from "../../../assets/Rectangle 20075.png"
import banner2 from "../../../assets/Rectangle 20076.png"
import banner3 from "../../../assets/Rectangle 20077.png"

const Banner = () => {
    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-20 text-white py-32 lg:py-40">
                <div className="md:col-span-3 lg:col-span-5 space-y-4 text-center">
                    <h1 className="md:text-left text-2xl md:text-4xl lg:text-7xl font-semibold">Your Best Medical Help Center</h1>
                    <p className="md:text-left font-semibold text-xs md:text-lg">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                </div>
                <div className="md:col-span-3 ml-6 relative">
                    <img className="w-40 lg:w-60" src={banner3} alt="" />
                    <img className="w-40 lg:w-60 absolute left-20 lg:left-28 top-28" src={banner2} alt="" />
                    <img className="w-40 lg:w-60 absolute lg:left-64 left-40 bottom-6 md:bottom-10 lg:bottom-16" src={banner1} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Banner;