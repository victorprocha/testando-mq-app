import { useParams, useSearchParams } from "react-router-dom";
import CardCategories from './../componentes/Card';
import {Grid, Typography, Container, Stack,} from '@mui/material/';
import categorias from '../data/categorias';
import CardProduct from "../componentes/CardProduct";
import products from "../data/products";
import { useEffect, useState } from "react";


function Products(){
    const {categories} = useParams();
    const [productData, setProductsData] = useState([]);
    const [categoryData, setCategoryData] = useState();   
    let [searchParams, setSearchParams] = useSearchParams();
    const queryParams = searchParams.get("q")
    
    useEffect(()=>{
        if(categories){
            const filterArray = products.filter(item => item.category === categories);
            const filterCategory = categorias.find((item) => item.url === categories);
            setCategoryData(filterCategory)
            setProductsData(filterArray);
        }
        if(queryParams){
            const filterProduct = products.filter(
                (item) => item.title.toLowerCase().includes(queryParams.toLowerCase())
                );
            setProductsData(filterProduct);

        }

    },[categories, queryParams]);


    return(
    <>
    <Container maxWidth={"lg"} sx={{mt:4}}> 
     <Stack spacing={1}>
            <Typography variant= "h2" color={"primary"}>
            {categories ? categoryData?.title : "Resultados de " + queryParams}
            </Typography>
            <Typography variant= "h5" color={"primary"}>
            {productData.length} Produtos encontrados
            </Typography>
        </Stack>
        <Grid container spacing={2} mt={5} >
            {productData &&
             productData.map((item, index) => (
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
