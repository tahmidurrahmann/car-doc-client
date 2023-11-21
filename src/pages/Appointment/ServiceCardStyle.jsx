import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const ServiceCardStyle = ({ item }) => {

    let [isOpen, setIsOpen] = useState(true);
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const navigate = useNavigate();

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const {
        register, handleSubmit} = useForm()
    
      const onSubmit = async (data) => {
        const appointData = {
            date : data?.date,
            name : data?.name,
            email : user?.email,
            number : data?.number,
            service : item?.service,
        }
        const res = await axiosSecure.post('/appointments', appointData);
        if(res?.data?.insertedId){
            toast.success("You successfully appoint a service")
            navigate("/dashboard/myAppointment")
        }
      }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="mt-10" src={item?.imageUrl} alt="Shoes" /></figure>
            <div className="text-center space-y-4">
                <h2 className="text-xl font-bold mt-8">{item?.service}</h2>
                <p>{item?.time}</p>
                <div className="card-actions justify-center">
                    <div className="flex items-center justify-center">
                        <button
                            type="button"
                            onClick={openModal}
                            className="mb-8 bg-[#F7A582] text-white font-bold px-6 py-3 rounded-lg"
                        >
                            Book Appointment
                        </button>
                    </div>
                    <Transition show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                Cavity Protection
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <input className="input input-bordered w-full mt-4" type="text" defaultValue={item?.time} name="" id="" required
                                                    {...register("date")}
                                                    />
                                                    <input className="input input-bordered w-full mt-4" placeholder="Full Name" type="text" name="" id="" required 
                                                    {...register("name")}/>
                                                    <input className="input input-bordered w-full mt-4" type="number" name="" placeholder="Phone Number" id="" required
                                                    {...register("number")} />
                                                    <input className="input input-bordered w-full mt-4" type="email" name="" placeholder="Email" id="" required 
                                                    {...register("email")}/>
                                                    <input className="bg-[#07332F] py-2 text-white font-bold rounded-lg w-full mt-4" type="submit" required />
                                                    </form>
                                            </div>

                                            <div className="mt-4">
                                                <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardStyle;