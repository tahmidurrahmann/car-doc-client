import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Container from '../../Container/Container';
import ServiceCard from './ServiceCard';
import image1 from "../../assets/003-smile.jpg";
import image2 from "../../assets/006-broken-tooth.jpg";
import image3 from "../../assets/Group (1).jpg";
import image4 from "../../assets/Group 34963.jpg";
import image5 from "../../assets/Group.jpg";
import image6 from "../../assets/Flat.jpg";
import ServiceCardStyle from './ServiceCardStyle';
import useService from '../../hooks/useService';
import Loader from '../../loader/Loader';

const AppointmentService = () => {

    const [services, isPending] = useService();
    const orthodontics = services.filter(item => item.service === "Teeth Orthodontics");
    const pediatric = services.filter(item => item.service === "Pediatric Dental");
    const cavity = services.filter(item => item.service === "Cavity Protection");
    const oral = services.filter(item => item.service === "Oral Surgery");
    const cleaning = services.filter(item => item.service === "Teeth Cleaning");
    const cosmetic = services.filter(item => item.service === "Cosmetic Dentistry");

    if (isPending) {
        return <Loader></Loader>
    }

    return (
        <Container>
            <div className="my-10 md:my-20">
                <h1 className="text-center font-bold text-3xl ">Please select a service.</h1>
                <Tabs>
                    <TabList>
                        <div className='grid grid-cols-1 md:my-10 md:grid-cols-3 2xl:grid-cols-6 gap-6'>
                            <Tab><ServiceCard image={image2} name="Teeth Orthodontics"></ServiceCard></Tab>
                            <Tab><ServiceCard image={image1} name="Pediatric Dental"></ServiceCard></Tab>
                            <Tab><ServiceCard image={image3} name="Cavity Protection"></ServiceCard></Tab>
                            <Tab><ServiceCard image={image4} name="Oral Surgery"></ServiceCard></Tab>
                            <Tab><ServiceCard image={image5} name="Teeth Cleaning"></ServiceCard></Tab>
                            <Tab><ServiceCard image={image6} name="Cosmetic Dentistry"></ServiceCard></Tab>
                        </div>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                            {
                                orthodontics.map(item => <ServiceCardStyle key={item._id} item={item}></ServiceCardStyle>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                            {
                                pediatric.map(item => <ServiceCardStyle key={item._id} item={item}></ServiceCardStyle>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                            {
                                cavity.map(item => <ServiceCardStyle key={item._id} item={item}></ServiceCardStyle>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                            {
                                oral.map(item => <ServiceCardStyle key={item._id} item={item}></ServiceCardStyle>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                            {
                                cleaning.map(item => <ServiceCardStyle key={item._id} item={item}></ServiceCardStyle>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                            {
                                cosmetic.map(item => <ServiceCardStyle key={item._id} item={item}></ServiceCardStyle>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </Container>
    );
};

export default AppointmentService;