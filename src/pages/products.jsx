import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";



function Products(){
    return(
    <>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image= "./../assets/quilha.jpg"
                  alt="quilha de surf"
                />
                <CardContent>   
                    <Typography variant="h6" sx={{color:"primary.main"}}>
                        Quilha
                    </Typography>

                    <Typography variant="body2" color="black">
                        descrição do produto
                    </Typography>

                    <Typography variant="body1" color="black" sx={{mt:0.3}}>
                        R$
                    </Typography>

                </CardContent>             
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" variant="contained">
                    ver produto
                </Button>
            </CardActions>
        </Card> 
        
        
    </>    

    );
}

export default Products;
