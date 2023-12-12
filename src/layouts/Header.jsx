import { AppBar, Box, Container, Toolbar, TextField, InputAdornment, Button, Stack, useTheme, useMediaQuery, Autocomplete } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import products from "./../data/products";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";



function Header () {

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleSubmit(){
    navigate({
      pathname:"/products",
      search: createSearchParams({
        q: value,
      }).toString(),
    })  
  }

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
          
            > </Box>

            {isUpMd && 
            
            <Stack direction={"row"} spacing={2} width={600}>

              <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  fullWidth 
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onInputChange={(event, newInputValue) => {
                    setValue(newInputValue);
                  }}

                  options={products.map((option) => option.title)}
                  renderInput={(params) => 
                    <TextField
                    {...params}
                    fullWidth
                    id="input-search"
                    placeholder="Pesquisar produto"
                    sx={{backgroundColor:"rgba(188, 184,186,0.2)"}}
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon/>
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />}
                />

                

                <Button 
                onClick={handleSubmit}
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