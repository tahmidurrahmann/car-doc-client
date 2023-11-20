import { Outlet } from "react-router-dom";
import Main from "./layout/Main";

const App = () => {
    return (
        <div>
            <Main>
                <Outlet></Outlet>
            </Main>
        </div>
    );
};

export default App;