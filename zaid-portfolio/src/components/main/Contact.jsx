import { Box, Button, InputAdornment, TextField, Typography, useMediaQuery } from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { AccountCircle } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import SendIcon from '@mui/icons-material/Send';
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Box>
      
        {useMediaQuery("(max-width:470px)") && (
         <Box sx={{ bgcolor: "#eff1f7"}} id="contact">
        <Box sx={{p: "20px" }}>
          <Box display={"flex"} alignItems={"center"} gap={1} m={"10px"}>
            <ConnectWithoutContactIcon sx={{ fontSize: "40px", color: "#rgb(38 35 52)" }} />
            <Typography
              sx={{ fontSize: "28px", color: "#0d1321", fontFamily: "SUSE" }}
            >
              Contact Me
            </Typography>
          </Box>
          
            
                <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={2}>
               <TextField id="filled-basic" label="Full Name" variant="filled" type="text" sx={{width:"50vh"}}/>
               <TextField id="filled-basic" label="Phone Number" variant="filled" type="text" sx={{width:"50vh"}}/>
               <TextField id="filled-basic" label="Email" variant="filled" type="email" sx={{width:"50vh"}}/>
               <TextField
               id="filled-multiline-flexible"
               label="Message"
               multiline
               rows={4}
               variant="filled"
               sx={{width:"50vh"}}
             />
             <Button sx={{fontFamily: "SUSE" , mt:2,color:"#000", border:"2px solid #000",borderRadius:"25px","&:hover":{background:"#000",color:"#fff"}}}>
               Send<SendIcon />
             </Button>
             </Box>
        </Box>
       </Box>
        )}
        {useMediaQuery("(min-width:1024px)") && (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          className="box"
        >
             
             <motion.div initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}>
              <Box>
              <Typography sx={{
                 color: "#000",
                 fontSize: "20px",
                 fontFamily: "SUSE",
                 p: "30px",
               }}>
               
              
               Feel Free To Contact Me
              </Typography>
              <Box display={"flex"} alignItems={"center"} ml={5}>
               <EmailIcon sx={{ color: "#rgb(38 35 52)" }} />
               <Typography
                 sx={{
                   color: "#000",
                   fontSize: "16px",
                   fontFamily: "SUSE",
                   p: "20px",
                 }}
               >
                 zaidayoub045@gmail.com
               </Typography>
              </Box>
              <Box display={"flex"} alignItems={"center"} ml={5}>
               <PhoneIcon sx={{ color: "#rgb(38 35 52)" }} />
               <Typography
                 sx={{
                   color: "#000",
                   fontSize: "16px",
                   fontFamily: "SUSE",
                   p: "20px",
                 }}
               >
                 +212 629362762
               </Typography>
              </Box>
             < Box display={"flex"} alignItems={"center"} ml={5}>
               <MyLocationIcon sx={{ color: "#rgb(38 35 52)" }} />
               <Typography
                 sx={{
                   color: "#000",
                   fontSize: "16px",
                   fontFamily: "SUSE",
                   p: "20px",
                 }}
               >
                 Casablanca
               </Typography>
             </Box>
              </Box>
             </motion.div>
              <motion.div initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }} >
          
                 <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={2}
                 >
             <TextField id="filled-basic" label="Full Name" variant="filled" type="text" sx={{width:"50vh"}}/>
             <TextField id="filled-basic" label="Phone Number" variant="filled" type="text" sx={{width:"50vh"}}/>
             <TextField id="filled-basic" label="Email" variant="filled" type="email" sx={{width:"50vh"}}/>
             <TextField
             id="filled-multiline-flexible"
             label="Message"
             multiline
             rows={4}
             variant="filled"
             sx={{width:"50vh"}}
           />
           <Button sx={{fontFamily: "SUSE" , mt:2,color:"#000", border:"2px solid #000",borderRadius:"25px","&:hover":{background:"#000",color:"#fff"}}}>
             Send<SendIcon />
           </Button>
           </Box>
         </motion.div>
          </Box>
        )}
    </Box>
       
     
    

  );
}
