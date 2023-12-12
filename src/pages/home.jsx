
import {useEffect, useState } from 'react';
import CardCategories from './../componentes/Card';
import {Grid, Typography, Container,} from '@mui/material/';
import categorias from '../data/categorias';


function Home() {
  
  return (
    <>
    
    
    <Typography variant='h4' color={'primary'}>
      Produtos Fitlife - Categorias
    </Typography>
    <Grid container spacing={2} mt={5} >

       {categorias.map((item, index) => (
         <Grid item xs={12} md={6} lg={4} xl={3} key={index} >
            <CardCategories item={item}/>   
         </Grid>
        ))}        

      </Grid>
    
  
    </>
  )
}

export default Home
