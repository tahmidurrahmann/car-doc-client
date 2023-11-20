import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useService = () => {

    const axiosPublic = useAxiosPublic();
    
    const {data : services = [], isPending} = useQuery({
        queryKey : ["services"],
        queryFn : async () => {
            const res = await axiosPublic.get('/services');
            return res?.data
        }
    })

    return [services, isPending]
};

export default useService;