import { useParams } from "react-router-dom";
import CardCategories from './../componentes/Card';
import {Grid, Typography, Container, Stack,} from '@mui/material/';
import categorias from '../data/categorias';
import CardProduct from "../componentes/CardProduct";
import products from "../data/products";
import { useEffect, useState } from "react";


function Products(){
    const {categories} = useParams();
    const [productData, setProductsData] = useState([]);
    
    useEffect(()=>{
        const filterArray = products.filter(item => item.category === categories);
        setProductsData(filterArray);
    },[categories]);


    return(
    <>
    <Container maxWidth={"lg"} sx={{mt:4}}> 
     <Stack spacing={1}>
            <Typography variant= "h2" color={"primary"}>
            {categories}
            </Typography>
            <Typography variant= "h5" color={"primary"}>
            {productData.length} Produtos encontrados
            </Typography>
        </Stack>
        <Grid container spacing={2} mt={5} >
            {productData.map((item, index) => (
                <Grid item xs={12} md={6} lg={4} xl={3} key={index} >
                <CardProduct item ={item}/>    
                </Grid>     
            ) )}
            
          </Grid>   
     </Container>
    </>

    );
}

export default Products;
