// @ts-nocheck
import {
  Box,
  Container,
  IconButton,
  Link,
  TableContainer,
  Typography,
} from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from '@mui/material/useMediaQuery';

const Header1 = () => {
  return (
    <Container>
      {useMediaQuery("(min-width:1024px)") && (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={3}
          mb={3}
        >
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <ComputerIcon sx={{ color: "#1D1E20" }} />

            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1D1E20",
                fontFamily: "SUSE",
              }}
            >
              ZAID
            </Typography>
          </Box>

          <Box display={"flex"} gap={3}>
            <Link
              underline={"none"}
              sx={{
                color: "#0d1321",
                "&:hover": { cursor: "pointer" },
              }}
              href="#"
              
            >
              Home
            </Link>
            <Link
              underline={"none"}
              sx={{
                color: "#0d1321",
                "&:hover": { cursor: "pointer" },
              }}
              href="#about"
            >
              About
            </Link>
            <Link
              underline={"none"}
              sx={{
                color: "#0d1321",
                "&:hover": { cursor: "pointer" },
              }}
              href="#skills"
            >
              Skills
            </Link>
            <Link
              underline={"none"}
              sx={{
                color: "#0d1321",
                "&:hover": { cursor: "pointer" },
              }}
              href="#projects"
            >
              Projects
            </Link>
            <Link
              underline={"none"}
              sx={{
                color: "black",
                "&:hover": { cursor: "pointer" },
              }}
              href="#contact"
            >
              Contact
            </Link>
          </Box>
        </Box>
      )}
      {useMediaQuery("(min-width:480px)") && (
        <Box display={"none"} mt={2}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <ComputerIcon sx={{ color: "#1D1E20" }} />

            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#1D1E20",
                fontFamily: "SUSE",
              }}
            >
              ZAID
            </Typography>
          </Box>

          <Box display={"flex"} gap={3}>
            <Link
              underline={"none"}
              sx={{
                color: "#0d1321",
                "&:hover": { cursor: "pointer" },
              }}
            >
              Home
            </Link>
            <Link
              underline={"none"}
              sx={{
                color: "#0d1321",
                "&:hover": { cursor: "pointer" },
              }}
            >
              About
            </Link>
            <Link
              underline={"none"}
              sx={{
                color: "#0d1321",
                "&:hover": { cursor: "pointer" },
              }}
            >
              Skills
            </Link>
            <Link
              underline={"none"}
              sx={{
                color: "#0d1321",
                "&:hover": { cursor: "pointer" },
              }}
            >
              Projects
            </Link>
            <Link
              underline={"none"}
              sx={{
                color: "black",
                "&:hover": { cursor: "pointer" },
              }}
            >
              Contact
            </Link>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Header1;
