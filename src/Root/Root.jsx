import { Outlet } from "react-router-dom";
import Nav from "../NavBar/Nav";

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="w-10/12 mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;