import { AppBar, Box, Container, Toolbar, TextField, InputAdornment, Button, Stack, useTheme, useMediaQuery } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


function Header () {

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return(
       <AppBar 
       position="static"
       elevation={0} 
       sx={{backgroundColor: "white", height: "15vh"}}>
        <Container maxWidth={"xl"}>
          <Toolbar sx={{
            display: "flex", 
            justifyContent: "space-between", 
            alignItems:"center", }}>
            <Box
          
             sx={{height: 80}}
            > </Box>

            {isUpMd && 
            
            <Stack direction={"row"} spacing={2} width={600}>

                <TextField
                  fullWidth
                  id="input-search"
                  placeholder="Pesquisar produto"
                  sx={{backgroundColor:"rgba(188, 184,186,0.2)"}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon/>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />

                <Button 
                variant="contained" 
                color="primary"
                sx={{color:"white"}}
                >
                  Pesquisar
                </Button>
            </Stack> }

            <Button 
            variant="contained" 
            color="secondary"
            size= {isUpMd ? 'large' : 'small'}
            sx={{color:"primary.main", height:50}}
            >
              Entrar no Sistema
            </Button>

          </Toolbar>
        </Container>
       </AppBar>
    );
}

export default Header;