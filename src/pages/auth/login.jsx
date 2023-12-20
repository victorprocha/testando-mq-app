import { Button, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from "react";



function Login(){
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   function handleSubmit(){
      console.log(email, password)
   }

    return(
        <Stack
        direction={"column"}
        spacing={0.9}
        width={"100%"}
        alignItems={"center"}
        mt={4}
        >
         <Typography variant="h5" fontWeight={"bold"} color="primary">
            Entrar no Sistema
         </Typography>
         <Typography variant="h6" color="primary" mt={1}>
            Bem vindo ao nosso sistema!
         </Typography>
         <Stack spacing={3} width={"100%"}>
            <TextField value={email} onChange={(e)=> setEmail(e.target.value)} fullWidth label = "Email"/>
            <TextField value={password} onChange={(e)=> setPassword(e.target.value)} fullWidth label = "Senha"/>
         </Stack>
         <Typography 
         variant="body2"
         component={Link}
         to="/"
         sx={{ textDecoration: "none"}}
         >
            Esqueci minha senha
         </Typography>
         <Button variant="contained" size="large" onClick={handleSubmit}>
            Entrar
         </Button>
         <Typography variant="body2">ou entre com suas redes sociais </Typography>
         <Button
          variant="contained"
          color="primary"
          sx={{color:"white"}}
          startIcon={<GoogleIcon sx={{color:"white"}}/>}
         >
            Continue com google
         </Button>
         <Typography variant="body1" color="primary">
            Não tem uma conta?
         </Typography>
         <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{textDecoration:"none"}}
         >
            Cadastrar
         </Typography>
        </Stack>
    )
}



export default Login;