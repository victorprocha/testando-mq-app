import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


function CardProduct ({item}){
    const navigate = useNavigate();
    function handleClick(){
        navigate(`/product-detail/${item.id}`);
    }

    return(
    <>
        <Card sx={{ maxWidth: 345, backgroundColor: "secondary.main" }}>
            <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image= "./../assets/quilha.jpg"
                  alt="quilha de surf"
                />
                <CardContent>   
                    <Typography variant="h6" sx={{color:"primary.main"}}>
                        {item.title}
                    </Typography>

                    <Typography variant="body2" color="black">
                        {item.description}
                    </Typography>

                    <Typography variant="body1" color="black" sx={{mt:0.3}}>
                        R$ {item.price}
                    </Typography>

                </CardContent>             
            </CardActionArea>
            <CardActions>
                <Button  onClick={handleClick}
                 size="small"
                 color="primary" 
                 variant="contained">
                    ver produto
                </Button>
            </CardActions>
        </Card> 
        
        
    </>    

    );
}

export default CardProduct;