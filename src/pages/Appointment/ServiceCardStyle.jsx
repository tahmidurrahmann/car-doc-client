const ServiceCardStyle = ({ item }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="mt-10" src={item?.imageUrl} alt="Shoes" /></figure>
            <div className="text-center space-y-4">
                <h2 className="text-xl font-bold mt-8">{item?.service}</h2>
                <p>{item?.time}</p>
                <div className="card-actions justify-center">
                    {/* <button className="mb-8 bg-[#F7A582] text-white font-bold px-6 py-3 rounded-lg">Book Appointment</button> */}
                    
                    <button className="mb-8 bg-[#F7A582] text-white font-bold px-6 py-3 rounded-lg" onClick={() => document.getElementById('my_modal_3').showModal()}>Book Appointment</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-left text-lg">Cavity Protection</h3>
                            <input className="input input-bordered w-full mt-4" type="text" defaultValue={item?.time} name="" id="" />
                            <input className="input input-bordered w-full mt-4" placeholder="Full Name" type="text"  name="" id="" required/>
                            <input className="input input-bordered w-full mt-4" type="number"  name="" placeholder="Phone Number" id="" required/>
                            <input className="input input-bordered w-full mt-4" type="email"  name="" placeholder="Email" id="" required/>
                            <input className="bg-[#07332F] py-2 text-white font-bold rounded-lg w-full mt-4" type="submit" required/>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardStyle;