import { Outlet } from "react-router-dom";
import LayOut from "./LayOut";


const MainLayOut = () => {
    return (
       <LayOut>
        <Outlet></Outlet>
       </LayOut>
    );
};

export default MainLayOut;