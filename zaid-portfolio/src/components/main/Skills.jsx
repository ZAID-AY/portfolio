import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import React from "react";
import { motion } from "framer-motion"

export default function Skills() {
  return (
    <Box id="skills">
      <Box>
        {useMediaQuery("(max-width:470px)") && (
          <Box sx={{ bgcolor: "#eff1f7", p: "20px" }}>
            <Box display={"flex"} alignItems={"center"} gap={1} m={"10px"}>
              <ImportantDevicesIcon
                sx={{ fontSize: "40px", color: "#rgb(38 35 52)" }}
              />
              <Typography sx={{ fontSize: "28px", color: "#0d1321" }}>
                Skills
              </Typography>
            </Box>
            <Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                sx={{ p: 2, mt: 4 }}
                className="box"
                gap={2}
              >
                <Typography sx={{ fontFamily: "SUSE", fontSize: "24px" }}>
                  Front-End
                </Typography>
                <Box textAlign={"center"}>
                  <Typography sx={{ fontFamily: "SUSE", fontSize: "13px" }}>
                    HTML
                  </Typography>
                  <CircularProgress
                    variant="determinate"
                    value={95}
                    sx={{ color: "#1d2d44", mt: 1 }}
                  />
                </Box>
                <Box textAlign={"center"}>
                  <Typography sx={{ fontFamily: "SUSE", fontSize: "13px" }}>
                    CSS
                  </Typography>
                  <CircularProgress
                    variant="determinate"
                    value={85}
                    sx={{ color: "#1d2d44", mt: 1 }}
                  />
                </Box>
                <Box textAlign={"center"}>
                  <Typography sx={{ fontFamily: "SUSE", fontSize: "13px" }}>
                    JS
                  </Typography>
                  <CircularProgress
                    variant="determinate"
                    value={55}
                    sx={{ color: "#1d2d44", mt: 1 }}
                  />
                </Box>
                <Box textAlign={"center"}>
                  <Typography sx={{ fontFamily: "SUSE", fontSize: "13px" }}>
                    TAILWIND/BOOTSTRAP
                  </Typography>
                  <CircularProgress
                    variant="determinate"
                    value={65}
                    sx={{ color: "#1d2d44", mt: 1 }}
                  />
                </Box>
                <Box textAlign={"center"}>
                  <Typography sx={{ fontFamily: "SUSE", fontSize: "13px" }}>
                    REACT/MATERIAL UI
                  </Typography>
                  <CircularProgress
                    variant="determinate"
                    value={35}
                    sx={{ color: "#1d2d44", mt: 1 }}
                  />
                </Box>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{ p: 2, mt: 4 }}
                flexDirection={"column"}
                justifyContent={"space-between"}
                className="box"
                gap={2}
              >
                <Typography sx={{ fontFamily: "SUSE", fontSize: "24px" }}>
                  Back-End
                </Typography>
                <Box textAlign={"center"}>
                  <Typography sx={{ fontFamily: "SUSE", fontSize: "13px" }}>
                    SQL SERVER
                  </Typography>
                  <CircularProgress
                    variant="determinate"
                    value={65}
                    sx={{ color: "#1d2d44", mt: 1 }}
                  />
                </Box>
                <Box textAlign={"center"}>
                  <Typography sx={{ fontFamily: "SUSE", fontSize: "13px" }}>
                    MySQL
                  </Typography>
                  <CircularProgress
                    variant="determinate"
                    value={65}
                    sx={{ color: "#1d2d44", mt: 1 }}
                  />
                </Box>
                <Box textAlign={"center"}>
                  <Typography sx={{ fontFamily: "SUSE", fontSize: "13px" }}>
                    MongoDB
                  </Typography>
                  <CircularProgress
                    variant="determinate"
                    value={10}
                    sx={{ color: "#1d2d44", mt: 1 }}
                  />
                </Box>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{ p: 2, mt: 4 }}
                flexDirection={"column"}
                justifyContent={"space-between"}
                className="box"
                gap={2}
              >
                <Typography sx={{ fontFamily: "SUSE", fontSize: "24px" }}>
                  UI/UX
                </Typography>
                <Box textAlign={"center"}>
                  <Typography sx={{ fontFamily: "SUSE", fontSize: "13px" }}>
                    Figma
                  </Typography>
                  <CircularProgress
                    variant="determinate"
                    value={75}
                    sx={{ color: "#1d2d44", mt: 1 }}
                  />
                </Box>
                <Box textAlign={"center"}>
                  <Typography sx={{ fontFamily: "SUSE", fontSize: "13px" }}>
                    Adobe XD
                  </Typography>
                  <CircularProgress
                    variant="determinate"
                    value={75}
                    sx={{ color: "#1d2d44", mt: 1 }}
                  />
                </Box>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{ p: 2, mt: 4 }}
                flexDirection={"column"}
                justifyContent={"space-between"}
                className="box"
                gap={2}
              >
                <Typography sx={{ fontFamily: "SUSE", fontSize: "24px" }}>
                  Others
                </Typography>
                <Box>
                  <Typography sx={{ fontFamily: "SUSE", fontSize: "13px" }}>
                    Git & Github
                  </Typography>
                  <CircularProgress
                    variant="determinate"
                    value={35}
                    sx={{ color: "#1d2d44", mt: 1 }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        )}
        {useMediaQuery("(min-width:1024px)") && (
          <Box sx={{ bgcolor: "#eff1f7", p: "100px" }} mt={"60px"}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <ImportantDevicesIcon
                sx={{ fontSize: "40px", color: "#rgb(38 35 52)" }}
              />
              <Typography sx={{ fontSize: "28px", color: "#0d1321" }}>
                Skills
              </Typography>
            </Box>
            <Box>
              <motion.div initial={{opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0}}
  transition={{ duration: 0.8 }}
 >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                  sx={{ p: 2, mt: 4 }}
                  className="box"
                >
                  <Typography sx={{ fontFamily: "SUSE", fontSize: "18px" }}>
                    Front-End
                  </Typography>
                  <Box textAlign={"center"}>
                    <Typography sx={{ fontFamily: "SUSE", fontSize: "20px" }}>
                      HTML
                    </Typography>
                    <CircularProgress
                      variant="determinate"
                      value={95}
                      sx={{ color: "#1d2d44", mt: 1 }}
                    />
                  </Box>
                  <Box textAlign={"center"}>
                    <Typography sx={{ fontFamily: "SUSE", fontSize: "20px" }}>
                      CSS
                    </Typography>
                    <CircularProgress
                      variant="determinate"
                      value={85}
                      sx={{ color: "#1d2d44", mt: 1 }}
                    />
                  </Box>
                  <Box textAlign={"center"}>
                    <Typography sx={{ fontFamily: "SUSE", fontSize: "20px" }}>
                      JS
                    </Typography>
                    <CircularProgress
                      variant="determinate"
                      value={55}
                      sx={{ color: "#1d2d44", mt: 1 }}
                    />
                  </Box>
                  <Box textAlign={"center"}>
                    <Typography sx={{ fontFamily: "SUSE", fontSize: "20px" }}>
                      TAILWIND/BOOTSTRAP
                    </Typography>
                    <CircularProgress
                      variant="determinate"
                      value={65}
                      sx={{ color: "#1d2d44", mt: 1 }}
                    />
                  </Box>
                  <Box textAlign={"center"}>
                    <Typography sx={{ fontFamily: "SUSE", fontSize: "20px" }}>
                      REACT/MATERIAL UI
                    </Typography>
                    <CircularProgress
                      variant="determinate"
                      value={35}
                      sx={{ color: "#1d2d44", mt: 1 }}
                    />
                  </Box>
                </Box>
              </motion.div>
              <motion.div initial={{opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0}}
  transition={{ duration: 0.8 }}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  sx={{ p: 2, mt: 4 }}
                  justifyContent={"space-around"}
                  className="box"
                >
                  <Typography
                    sx={{ fontFamily: "SUSE", fontSize: "18px", ml: "-63px" }}
                  >
                    Back-End
                  </Typography>
                  <Box textAlign={"center"}>
                    <Typography sx={{ fontFamily: "SUSE", fontSize: "20px" }}>
                      SQL SERVER
                    </Typography>
                    <CircularProgress
                      variant="determinate"
                      value={65}
                      sx={{ color: "#1d2d44", mt: 1 }}
                    />
                  </Box>
                  <Box textAlign={"center"}>
                    <Typography sx={{ fontFamily: "SUSE", fontSize: "20px" }}>
                      MySQL
                    </Typography>
                    <CircularProgress
                      variant="determinate"
                      value={65}
                      sx={{ color: "#1d2d44", mt: 1 }}
                    />
                  </Box>
                  <Box textAlign={"center"}>
                    <Typography sx={{ fontFamily: "SUSE", fontSize: "20px" }}>
                      MongoDB
                    </Typography>
                    <CircularProgress
                      variant="determinate"
                      value={10}
                      sx={{ color: "#1d2d44", mt: 1 }}
                    />
                  </Box>
                </Box>
              </motion.div>
              <motion.div initial={{opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0}}
  transition={{ duration: 0.8 }}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  sx={{ p: 2, mt: 4 }}
                  justifyContent={"space-around"}
                  className="box"
                >
                  <Typography
                    sx={{ fontFamily: "SUSE", fontSize: "18px", ml: "-136px" }}
                  >
                    UI/UX
                  </Typography>
                  <Box textAlign={"center"}>
                    <Typography sx={{ fontFamily: "SUSE", fontSize: "20px" }}>
                      Figma
                    </Typography>
                    <CircularProgress
                      variant="determinate"
                      value={75}
                      sx={{ color: "#1d2d44", mt: 1 }}
                    />
                  </Box>
                  <Box textAlign={"center"}>
                    <Typography sx={{ fontFamily: "SUSE", fontSize: "20px" }}>
                      Adobe XD
                    </Typography>
                    <CircularProgress
                      variant="determinate"
                      value={75}
                      sx={{ color: "#1d2d44", mt: 1 }}
                    />
                  </Box>
                </Box>
              </motion.div>
              <motion.div initial={{opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0}}
  transition={{ duration: 0.8 }}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  sx={{ p: 2, mt: 4 }}
                  justifyContent={"space-around"}
                  className="box"
                >
                  <Typography
                    sx={{ fontFamily: "SUSE", fontSize: "18px", ml: "-261px" }}
                  >
                    Others
                  </Typography>
                  <Box>
                    <Typography sx={{ fontFamily: "SUSE", fontSize: "20px" }}>
                      Git & Github
                    </Typography>
                    <CircularProgress
                      variant="determinate"
                      value={35}
                      sx={{ color: "#1d2d44", mt: 1 }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
