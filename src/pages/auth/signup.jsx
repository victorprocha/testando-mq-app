import { Button, FormHelperText, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import { Formik } from "formik";
import * as Yup from 'yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";


function Signup(){
   const [visible, setVisible] = useState(false);

   function handleVisible(){
      setVisible(!visible);
   }

    return(
        <Stack
        direction={"column"}
        spacing={1}
        width={"100%"}
        alignItems={"center"}
        mt={3}
        >
         <Typography variant="h5" fontWeight={"bold"} color="primary">
            Cadastrar-se
         </Typography>
         <Typography variant="h6" color="primary">
            Junte-se ao time 
         </Typography>
         <Formik  initialValues={{ email: '', password: '' }}
         validationSchema={Yup.object().shape({
            email: Yup.string().email('E-mail invalido').required('O e-mail é obrigatório'),
            password:Yup.string().required("A senha é obrigatória")
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
          }}
         >
            {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
          }) => (
            <form noValidate onSubmit={handleSubmit} style={{width:"100%"}}>
               <Stack spacing={1.5} width={"100%"}>
                  <TextField 
                  name="email"
                  type="email"
                  id="email"
                  value={values.email} 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  fullWidth label = "Email"/>
                  {touched.email && errors.email && (
                  <FormHelperText error>{errors.email}</FormHelperText>
                  )}

                  <TextField 
                  name="password"
                  type={visible ? "text" : "password"}
                  id="password"
                  value={values.password} 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  fullWidth 
                  label = "Senha"
                  InputProps={{
                     endAdornment: (
                       <InputAdornment position="end">
                        <IconButton onClick={handleVisible}>
                         {visible? <VisibilityOffIcon/> : <VisibilityIcon/>}
                        </IconButton>
                       </InputAdornment>
                     ),
                   }}
                  />

                 <TextField 
                  name="password"
                  type={visible ? "text" : "password"}
                  id="password"
                  value={values.password} 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  fullWidth 
                  label = "Digite novamente sua senha"
                  />

                   {touched.password && errors.password && (
                  <FormHelperText error>{errors.password}</FormHelperText>
                  )}
               </Stack>

               <Stack direction={"column"} spacing={1} mt={1}>
                  <Button variant="contained" size="large" type="submit">
                     Entrar
                  </Button>
               </Stack>
            </form>
            )}
         </Formik>
 
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
            Já tem uma conta?
         </Typography>
         <Typography
          variant="body1"
          component={Link}
          to="/auth/login"
          sx={{textDecoration:"none"}}
         >
            Clique para fazer login
         </Typography>
        </Stack>
    )
}



export default Signup;