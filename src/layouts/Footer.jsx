import { Stack, Typography } from "@mui/material";

function Footer (){
    return <Stack direction={"row"} flexDirection={"flex-start"} position={"sticky"} sx={{mt:"auto",  pb:3, pt:2}} >
        <Typography variant="h6">
            Feito por Victor Rocha
        </Typography>
    </Stack>

};

export default Footer;