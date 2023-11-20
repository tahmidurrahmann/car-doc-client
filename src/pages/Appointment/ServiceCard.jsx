const ServiceCard = ({ image, name }) => {
    return (
        <div>
            <div className="flex h-[110px] justify-center items-center gap-3 shadow bg-white p-5 rounded-lg">
                <img className="bg-[#FF415559]" src={image} alt="" />
                <p className="text-[#3B3A3A] font-bold text-xl">{name}</p>
            </div>
        </div>
    );
};

export default ServiceCard;