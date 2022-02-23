import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export const Footer = () => {
   return(
      <Box style={{padding:10, display:"flex", alignContent:"center", justifyContent:"flex-end", alignItems:"center"}}>
        <div>
          <span style={{marginRight:2, verticalAlign: "super"}}> Numero de contacto (031) 4356789 correo de contacto universidad@uni.com</span>
           <FacebookIcon style={{marginRight:8}} />
           <TwitterIcon style={{marginRight:8}}/>
           <InstagramIcon style={{marginRight:8}}/>
           <LinkedInIcon />
         </div>     
      </Box>
   );
}