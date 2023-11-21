import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAppointment = () => {
    
    const axiosSecure = useAxiosSecure();
    const  {user} = useAuth();

    const {data : appointments = [], isPending} = useQuery({
        queryKey : ["appointments", user?.email],
        queryFn : async () => {
            const res = await axiosSecure.get(`/appointments?email=${user?.email}`);
            return res?.data;
        }
    })

    return [appointments, isPending]
};

export default useAppointment;