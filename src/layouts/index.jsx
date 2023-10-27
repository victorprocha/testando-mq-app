import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Divider } from "@mui/material";

function Layout(){
    return(
        <>
          <Header/>
          <Divider/>
          <Outlet/>
        </>
    )
}

export default Layout;