import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import MyContacts from "./MyContacts";
import {Outlet} from "react-router-dom";

export default function MainLayout(){
    return(
        <>
            <MyHeader/>

            <Outlet />

            {/*<MyContacts />*/}
            <MyFooter />

        </>
    )
}