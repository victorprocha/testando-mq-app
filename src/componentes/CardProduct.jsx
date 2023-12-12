import { Button, Card, CardActionArea   , CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


function CardProduct ({item}){
    const navigate = useNavigate();
    function handleClick(){
        navigate(`/product-detail/${item.id}`);
    }

    return(
    <>
        <Card sx={{ minHeight: 350, backgroundColor: "secondary.main" }}>
            <CardActionArea>
                <CardMedia 
                  component="img"
                  height="160"
                  image= "./../assets/quilha.jpg"
                  alt="quilha de surf"
                />
                <CardContent 
                  sx={{display: "flex", 
                  flexDirection: "column", 
                  minHeight: 200, 
                  justifyContent: "space-between"}} >   

                 <Stack>
                    <Typography variant="h6" sx={{color:"primary.main"}}>
                            {item.title}
                     </Typography>

                     <Typography variant="body2" color="black">
                            {item.description}
                     </Typography>
                 </Stack>

                    <Typography variant="body1" color="black" sx={{mt:0.3}}>
                        R$ {item.price}
                    </Typography>

                    <Button  onClick={handleClick}
                        size="small"
                        color="primary" 
                        variant="contained">
                            ver produto
                    </Button>

                </CardContent>             
            </CardActionArea>
        </Card> 
        
        
    </>    

    );
}

export default CardProduct;