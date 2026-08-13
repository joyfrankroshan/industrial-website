import HeaderImg from "/src/assets/header-removebg-preview.png";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  Divider,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const blue = "#3358D3";

const navLinks = ["Services", "Why Hogist", "Pricing", "Location", "FAQ"];

export default function Sidebar({ open, onClose }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "80vw", sm: 340, md: 380 },
          maxWidth: 400,
          p: { xs: 2.5, sm: 4 },
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            bgcolor: "#e80200",
            color: "white",
            height: { xs: 48, sm: 60 },
            width: { xs: 48, sm: 60 },
            "&:hover": { bgcolor: "#e80200", color: "white" },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          component="img"
          src={HeaderImg}
          alt="Hogist Logo"
          sx={{
            height: { xs: 44, sm: 60 },
            mt: 2,
            display: "block",
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 5, mt: 3 }}>
          {navLinks.map((label, i) => (
            <Box key={label}>
              <Typography
                sx={{
                  fontWeight:  800,
                  fontSize: { xs: "15px", sm: "16px" },
                  fontFamily: "Inter Tight, sans-serif",
                }}
              >
                {label}
              </Typography>
              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "15px",
              bgcolor: blue,
              color: "white",
              textTransform: "none",
              fontSize: { xs: "14px", sm: "15px" },
              fontWeight: {xs:800,md:700},
              py: { xs: 1, sm: 1.2 },
            }}
          >
            Get a Quote
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: "15px",
              bgcolor: "#e80200",
              color: "white",
              textTransform: "none",
              fontSize: { xs: "14px", sm: "15px" },
              px: 2,
              py: { xs: 1, sm: 1.2 },
              fontWeight: {xs:800,md:700}
            }}
          >
            WhatsApp
          </Button>
        </Box>

        {/* <Box sx={{ mt: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CallOutlinedIcon sx={{ fontSize: 18, color: blue }} />
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "14px" },
                fontFamily: "Inter Tight, sans-serif",
                color: "#1D1D1E",
              }}
            >
              +91 99626 67733
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1.5 }}>
            <FmdGoodOutlinedIcon sx={{ fontSize: 18, color: blue }} />
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "14px" },
                fontFamily: "Inter Tight, sans-serif",
                color: "#1D1D1E",
              }}
            >
              Chennai, Tamil Nadu
            </Typography>
          </Box>

          <Divider sx={{ mt: 2 }} />
        </Box> */}
      </Box>
    </Drawer>
  );
}