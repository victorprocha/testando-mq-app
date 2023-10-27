import {Card, Typography, Stack, Box, IconButton} from '@mui/material/';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

function CardCategories ({title}){
   
    return(
      <Card 
      variant="outlined"
      sx={{backgroundColor: "secondary.main", 
           height: "200px",
           p: 4,
           borderRadius: 3,}}
      >
        <Stack 
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{height:"100%"}}>
          <Stack direction={"column"}>
          <Typography variant='h5' color={"primary"}>
           {title} 
          </Typography>
          <Typography variant='body2'color={"primary"}>
           18 produtos encontrados
          </Typography>
          </Stack>
          <Box sx={{
            height:"40px",
            width:"40px",
            backgroundColor:"primary.main",
            borderRadius: 2,
          }}>
          <Link to={"/products"}>
            <IconButton sx={{color: "white"}}>
              <ArrowForwardIosIcon/>
            </IconButton>
          </Link>
                      
          </Box>
        </Stack>
      </Card>
    )
}

export default CardCategories;

