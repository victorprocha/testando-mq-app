
import {useEffect, useState } from 'react';
import CardCategories from './../componentes/Card';
import {Grid, Typography, Container,} from '@mui/material/';

const categorias = ["Proteínas", "Termogênicos", "Acessórios", "Roupas"];

function Home() {

  const [clicked, setClicked] = useState(null);
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState(categorias);

  useEffect( () => {
    const filterArray = categorias.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setCategories(filterArray);
  }, [query]);
  
  return (
    <>
    
    <Container maxWidth={"lg"} sx={{mt:4}}>
    <Typography variant='h4' color={'primary'}>
      Produtos Fitlife - Categorias
    </Typography>
    <Grid container spacing={2} mt={5} >

       {categories.map((item, index) => (
         <Grid item xs={12} md={6} lg={4} xl={3} key={index} >
            <CardCategories title={item}/>   
         </Grid>
        ))}        

      </Grid>
    </Container>
  
    </>
  )
}

export default Home
