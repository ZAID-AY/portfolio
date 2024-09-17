import { Box, Button, Container, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
export default function About() {
  return (
    <Container id="about">
      <Box display={"flex"} alignItems={"center"} gap={1}  mt={"60px"}>
        <InfoIcon sx={{ fontSize: "40px", color: "rgb(38 35 52)" }} />
        <Typography sx={{ fontSize: "28px",color:"#0d1321",fontFamily: "SUSE" }}>About Me</Typography>
      </Box>

      <Box sx={{p:2,mt:4}} className="box" display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Typography sx={{ textAlign: "justify" ,fontFamily: "SUSE"}}>
          I am a passionate web developer and UI/UX designer with a keen eye for
          detail and a love for creating beautiful, responsive websites.
          Specializing in crafting seamless user experiences, I use HTML, CSS
          (with frameworks like Bootstrap and Tailwind), and JavaScript. My
          technical skills extend to SQL, PHP, and a bit of React JS. As a
          designer, I excel in using Figma and Adobe XD to bring creative
          visions to life. Proficient with Git and GitHub, I ensure efficient
          version control and collaboration throughout the development process.
        </Typography>
        
        <Button sx={{fontFamily: "SUSE" , mt:4,color:"#000", border:"2px solid #000",borderRadius:"25px","&:hover":{background:"#000",color:"#fff"}}}>Download Resumé</Button>
      </Box>
    </Container>
  );
}
