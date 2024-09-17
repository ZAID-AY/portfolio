import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Box id="projects">
      {useMediaQuery("(max-width:470px)") && (
        <Box sx={{p: "20px" }}>
          <Box display={"flex"} alignItems={"center"} gap={1} m={"10px"}>
            <TerminalIcon sx={{ fontSize: "40px", color: "rgb(38 35 52)" }} />
            <Typography
              sx={{ fontSize: "28px", fontFamily: "SUSE", color: "#0d1321" }}
            >
              Projects
            </Typography>
          </Box>

          <Box
            sx={{ p: 1, mt: 4 }}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={3}
          >
            <Card sx={{ maxWidth: 345 }} className="box">
              <CardMedia
                // @ts-ignore
                sx={{
                  height: 140,
                  borderRadius: "15px 0  15px 0",
                  borderRadius: "15px 0  15px 0",
                }}
                image="./src/images/project1.jpg"
              />

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  sx={{ fontFamily: "SUSE" }}
                >
                  Project 1
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                  laboriosam!
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="box">
              <CardMedia
                sx={{ height: 140, borderRadius: "15px 0  15px 0" }}
                image="./src/images/project1.jpg"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  sx={{ fontFamily: "SUSE" }}
                >
                  Project 2
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                  laboriosam!
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="box">
              <CardMedia
                sx={{ height: 140, borderRadius: "15px 0  15px 0" }}
                image="./src/images/project1.jpg"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  sx={{ fontFamily: "SUSE" }}
                >
                  Project 3
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                  laboriosam!
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{ p: 1, mt: 4 }}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={3}
          >
            <Card sx={{ maxWidth: 345 }} className="box">
              <CardMedia
                sx={{ height: 140, borderRadius: "15px 0  15px 0" }}
                image="./src/images/project1.jpg"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  sx={{ fontFamily: "SUSE" }}
                >
                  Project 4
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                  laboriosam!
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="box">
              <CardMedia
                sx={{ height: 140, borderRadius: "15px 0  15px 0" }}
                image="./src/images/project1.jpg"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  sx={{ fontFamily: "SUSE" }}
                >
                  Project 5
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                  laboriosam!
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="box">
              <CardMedia
                sx={{ height: 140, borderRadius: "15px 0  15px 0" }}
                image="./src/images/project1.jpg"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  sx={{ fontFamily: "SUSE" }}
                >
                  Project 6
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                  laboriosam!
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={2}
          >
            <Button
              sx={{
                fontFamily: "SUSE",
                mt: 2,
                color: "#000",
                border: "2px solid #000",
                borderRadius: "25px",
                "&:hover": { background: "#000", color: "#fff" },
              }}
            >
              Visit my GitHub
            </Button>
          </Box>
        </Box>
      )}
      {useMediaQuery("(min-width:1024px)") && (
        <Box sx={{ bgcolor: "", p: "100px" }}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <TerminalIcon sx={{ fontSize: "40px", color: "rgb(38 35 52)" }} />
            <Typography
              sx={{ fontSize: "28px", fontFamily: "SUSE", color: "#0d1321" }}
            >
              Projects
            </Typography>
          </Box>

          <Box
            sx={{ p: 2, mt: 4, ml: 4 }}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"row"}
            gap={3}
          >
            <Card sx={{ maxWidth: 345 }} className="box">
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <CardMedia
                  // @ts-ignore
                  sx={{
                    height: 140,
                    borderRadius: "15px 0  15px 0",
                 
                  }}
                  image="./src/images/project1.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{ fontFamily: "SUSE" }}
                  >
                    Project 1
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Et, laboriosam!
                  </Typography>
                </CardContent>{" "}
              </motion.div>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="box">
              <motion.div initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <CardMedia
                  sx={{ height: 140, borderRadius: "15px 0  15px 0" }}
                  image="./src/images/project1.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{ fontFamily: "SUSE" }}
                  >
                    Project 2
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                    laboriosam!
                  </Typography>
                </CardContent>
              </motion.div>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="box">
              <motion.div  initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <CardMedia
                  sx={{ height: 140, borderRadius: "15px 0  15px 0" }}
                  image="./src/images/project1.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{ fontFamily: "SUSE" }}
                  >
                    Project 3
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                    laboriosam!
                  </Typography>
                </CardContent>
              </motion.div>
            </Card>
          </Box>
          <Box
            sx={{ p: 2, mt: 4, ml: 4 }}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"row"}
            gap={3}
          >
            <Card sx={{ maxWidth: 345 }} className="box">
              <motion.div  initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <CardMedia
                  sx={{ height: 140, borderRadius: "15px 0  15px 0" }}
                  image="./src/images/project1.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{ fontFamily: "SUSE" }}
                  >
                    Project 4
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                    laboriosam!
                  </Typography>
                </CardContent>
              </motion.div>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="box">
              <motion.div  initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <CardMedia
                  sx={{ height: 140, borderRadius: "15px 0  15px 0" }}
                  image="./src/images/project1.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{ fontFamily: "SUSE" }}
                  >
                    Project 5
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                    laboriosam!
                  </Typography>
                </CardContent>
              </motion.div>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="box">
              <motion.div  initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <CardMedia
                  sx={{ height: 140, borderRadius: "15px 0  15px 0" }}
                  image="./src/images/project1.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{ fontFamily: "SUSE" }}
                  >
                    Project 6
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                    laboriosam!
                  </Typography>
                </CardContent>
              </motion.div>
            </Card>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={2}
          >
       
             <Button
               sx={{
                 fontFamily: "SUSE",
                 mt: 2,
                 color: "#000",
                 border: "2px solid #000",
                 borderRadius: "25px",
                 "&:hover": { background: "#000", color: "#fff" },
               }}
             >
               Visit my GitHub
             </Button>
        
          </Box>
        </Box>
      )}
    </Box>
  );
}
