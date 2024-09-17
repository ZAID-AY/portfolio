import { Box, Button, Container, Link, Typography, useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion"

const Hero = () => {
  return (
    
     <Box>
      
      {useMediaQuery("(max-width:470px)") && (
         <Box  sx={{bgcolor:"rgb(38 35 52)"}}>
         <Box sx={{width: "50%", p: "40px", mt:"60px" , ml:"50px"}} >
           <Box>
             <Typography
               sx={{
                 fontFamily: "SUSE",
                 fontSize: "29px",
                 color: "rgb(255 255 222)",
                 fontWeight: "600",
                 
               }}
             >
               AYOUB ZAID
             </Typography>
             <Typography sx={{ fontSize: "20px", color: "rgb(255 255 222)", fontWeight: "700" ,fontFamily: "SUSE"}}>
               Web Developer & UI/UI designer...
             </Typography>
           </Box>
         
           <Typography sx={{fontFamily: "SUSE", color: "rgb(255 255 222)",fontSize:"14px" ,textAlign:"justify"}}>
             Hi, I'm a passionate web developer and UI/UX designer. With a keen eye
             for detail and a love for creating beautiful, responsive websites, I
             specialize in crafting seamless user experiences. Let's build something
             amazing together.
           </Typography>
           <Box p={"20px"} display={"flex"} gap={1}>
             <Link href="#">
               <FacebookIcon sx={{color:"rgb(255 255 222)",fontSize:"30px","&:hover": { color: "rgb(165 111 252);"}}}/>
             </Link>
         
             <Link href="#">
               <GitHubIcon  sx={{color:"rgb(255 255 222)",fontSize:"30px","&:hover": { color: "rgb(165 111 252);"}}}/>
             </Link>
         
             <Link href="#">
               <WhatsAppIcon sx={{color:"rgb(255 255 222)",fontSize:"30px","&:hover": { color: "rgb(165 111 252);"}}} />
             </Link>
             <Link href="#">
               <LinkedInIcon  sx={{color:"rgb(255 255 222)",fontSize:"30px","&:hover": { color: "rgb(165 111 252);"}}}/>
             </Link>
           </Box>
           
           
         </Box>
       </Box>
      )}
      {useMediaQuery("(min-width:1024px)") && (
         <Box  sx={{bgcolor:"rgb(38 35 52)"}}>
         <Box sx={{width: "50%", p: "40px", mt:"60px" , ml:"50px"}} >
           <Box>
           
             <motion.div initial={{opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0}}
  transition={{ duration: 0.8 }}>
               <Typography
                sx={{
                  fontFamily: "SUSE",
                  fontSize: "29px",
                  color: "rgb(255 255 222)",
                  fontWeight: "600",
                  
                }}
              >
                AYOUB ZAID
              </Typography>
            
              <Typography sx={{ fontSize: "20px", color: "rgb(255 255 222)", fontWeight: "700" ,fontFamily: "SUSE"}}>
               Web Developer & UI/UI designer...
             </Typography>
          </motion.div>
             
            
           </Box>
              <motion.div initial={{opacity: 0, x: 300 }}
  whileInView={{ opacity: 1, x: 0}}
  transition={{ duration: 0.8 }}>
                  <Typography sx={{fontFamily: "SUSE", color: "rgb(255 255 222)",fontSize:"14px" ,textAlign:"justify"}}>
                I'm a passionate web developer and UI/UX designer. With a keen eye
                or detail and a love for creating beautiful, responsive websites, I
                pecialize in crafting seamless user experiences. Let's build something
                mazing together.
                ypography</Typography>
              </motion.div>
           
           <Box p={"20px"} display={"flex"} gap={1}>
             <Link href="#">
               <FacebookIcon sx={{color:"rgb(255 255 222)",fontSize:"30px","&:hover": { color: "rgb(165 111 252);"}}}/>
             </Link>
         
             <Link href="#">
               <GitHubIcon  sx={{color:"rgb(255 255 222)",fontSize:"30px","&:hover": { color: "rgb(165 111 252);"}}}/>
             </Link>
         
             <Link href="#">
               <WhatsAppIcon sx={{color:"rgb(255 255 222)",fontSize:"30px","&:hover": { color: "rgb(165 111 252);"}}} />
             </Link>
             <Link href="#">
               <LinkedInIcon  sx={{color:"rgb(255 255 222)",fontSize:"30px","&:hover": { color: "rgb(165 111 252);"}}}/>
             </Link>
           </Box>
           
           
         </Box>
       </Box>
      )}
     </Box>

    
  );
};

export default Hero;
