import { Link, Outlet } from "react-router-dom";
import { Box, Container, Grid, Stack, } from "@mui/material";

function LayoutAuth(){
    return(
        <>
        <Grid container>
          <Grid item lg={8}>
            <Container
            maxWidth={"lg"}
            sx={{
             mt:4,
             minHeight:"80vh", 
             display:"flex",
             flexDirection:"column",
             alignItems:"center",
             justifyContent:"center",
             }} 
            >

          <Stack direction={"column"}
           alignItems={"flex-start "}
           width={"50%"}
           height={"100%"}
           >
            <Link to="/">
              <Box
              component="img"
              sx={{ height: 80, width:"auto"}}
              alt="Logo Fitlife"
              src="./../../assets/fitlife-logo.png"
              />
            </Link>
            <Outlet/>  
          </Stack>      
        
            </Container>
          </Grid>
          <Grid item lg={4}>
            <Box sx={{backgroundImage:"url('/assets/fundo.jpg')",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            height:"100vh",
            }} />
          </Grid>
        </Grid>
        </>
    )
}

export default LayoutAuth;