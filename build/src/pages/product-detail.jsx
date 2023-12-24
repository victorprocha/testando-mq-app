import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import CardProduct from "../componentes/CardProduct";

function ProductDetail(){

    const {id} = useParams();
    const [productData, setProductsData] = useState();
    const [imageShow, setImageShow] = useState('');
    const [open, setOpen] = useState(false);
    const [arrayImageShow, setArrayImageShow] = useState([]);
    const [otherProducts, setOtherProducts] = useState ([]);



    useEffect(() =>{
        const filterArray = products.filter(
            item => 
            ((item.category === productData?.category) && item.id !== productData?.id
            ));
            setOtherProducts(filterArray);
    }, [productData]);
    
    useEffect(() =>{
        const filterProduct = products.find(item => item.id === parseInt(id));
        setProductsData(filterProduct);
        setImageShow(filterProduct.listImages[0]);
    }, [id]);

    function handleShowImage(){
        const arrayImage = [];
        const newArrayImage = productData?.listImages?.filter(
            item => item !== imageShow);
            arrayImage.push({src: imageShow});
            newArrayImage?.forEach(image =>{
            arrayImage.push({src: image});
        })
        setArrayImageShow(arrayImage);
        setOpen(true);
    }

    return(
        <>
            <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={arrayImageShow}
            />
         <Grid container>
            <Grid item sm={12} md={7} order={{ xs: 2, sm: 2, md: 1 }}>
                <Grid container>
                    <Grid 
                        item sm={12} 
                        xs={12} 
                        md={2}
                        order={{ xs: 2, sm: 2, md: 1 }}>

                            <Grid container>
                                {productData?.listImages.map((item, index)=>(
                            <Grid 
                            key={index} 
                            item sm={4} 
                            xs={4} 
                            md={12}
                            order={{ xs: 2, sm: 2, md: 1 }}>
                                <Box sx={{width:"100%", height:"auto"}} >
                                    <IconButton onClick={()=>setImageShow(item)} sx={{width:"100%", height:"auto"}}>
                                    <img src={item} alt={"imagem do produto"} 
                                    height={"auto"} width={"100%"}
                                    style={{borderRadius:"20px", overflow:"hidden"}}
                                    />
                                    </IconButton>
                                </Box>
                        </Grid>
                        ))}
                            </Grid>
                        
                    </Grid>
        
    
                    <Grid item sm={12} xs={12} md={10} order={{ xs: 1, sm: 1, md: 2 }}>
                        <IconButton 
                        onClick={handleShowImage}
                          sx={{width:"100%", height:"auto"}}>
                            <img src={imageShow} alt="imagem do produto" 
                            height={"auto"} width={"100%"}
                            style={{borderRadius:"20px", overflow:"hidden"}}
                            />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item sm={12} md={5} order={{ xs: 1, sm: 1, md: 2 }}>
                <Stack spacing={3}>
                <Typography variant="h4" sx={{color:"primary.main"}}>
                            {productData?.title}
                        </Typography>

                        <Typography variant="h6" color="black" sx={{mt:0.3}}>
                            R$ {productData?.price}
                        </Typography>

                        <Typography variant="body2" color="black">
                            {productData?.description}
                        </Typography>
                </Stack>
            </Grid>

            <Grid item sm={12} mt={2} order={{ xs: 3, sm: 3 }}>
                <Typography variant="h2" color="primary">
                     Produtos da mesma categoria
                </Typography>

                <Grid container mt={5} mb={3} spacing={5}>

                    {otherProducts.length > 0 &&
                    otherProducts.slice(0, 3).map((item, index) => (
                        <Grid item xs={12} md={6} lg={4} xl={4} key={index}>
                        <CardProduct item ={item}/>    
                        </Grid>     
                    ) )}
               </Grid>

            </Grid>
        </Grid>
        </>
    )
}

export default ProductDetail;