import Drawer from "./Drawer";
import Navbar from "./Navbar";

const Main = ({ children }) => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Navbar></Navbar>
                    {children}
                </div>
                <Drawer></Drawer>
            </div>
        </div>
    );
};

export default Main;