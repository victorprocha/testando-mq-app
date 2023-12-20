import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container, Divider } from "@mui/material";
import Footer from "./Footer";

function Layout(){
    return(
        <>
          <Header/>
          <Divider/>
          <Container maxWidth={"lg"} sx={{mt:4 , minHeight:"80vh", display:"flex", flexDirection:"column"}} >
            <Outlet/>
            <Footer/>
          </Container>
        </>
    )
}

export default Layout;