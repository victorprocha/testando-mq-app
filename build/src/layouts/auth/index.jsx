import { Link, Outlet } from "react-router-dom";
import { Box, Container, Grid, Stack, useMediaQuery, } from "@mui/material";
import { useTheme } from "@emotion/react";

function LayoutAuth(){
   const theme = useTheme();
   const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

    return(
        <>
        <Grid container>
          <Grid item lg={8} md={12} xs={12}>
            <Container
            maxWidth="xl"
              sx={{
              mt:4,
              minHeight:"90vh", 
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"center",
              }} 
              >

            <Stack 
            direction={"column"}
            alignItems={isUpMd ? "flex-start" : "center"}
            width={isUpMd ? "50%" : "100%"}
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
          {isUpMd &&(
             <Grid item lg={4}>
             <Box sx={{backgroundImage:"url('/assets/fundo.jpg')",
             backgroundRepeat:"no-repeat",
             backgroundSize:"cover",
             height:"100%",
             }} />
           </Grid>
          )}
        </Grid>
        </>
    )
}

export default LayoutAuth;