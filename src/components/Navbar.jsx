import HeaderImg from "/src/assets/header-removebg-preview.png";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import Sidebar from "./Sidebar";
import { useState } from "react";

const darkbackground = "#3358D3";

const navLinks = ["Services", "Why Hogist", "Pricing", "Location", "FAQ"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const trigger = useScrollTrigger();

  return (
    <Slide direction="down" in={!trigger} appear={false} timeout={600}>
      <AppBar position="sticky" color="inherit" elevation={0}>
        <Toolbar
          sx={{
            height: 84,
            justifyContent: "space-between",
            px: { xs: 2, sm: 3, md: 4, lg: 6 },
          }}
        >
          <Box
            component="img"
            src={HeaderImg}
            alt="Hogist Logo"
            sx={{
              height: { xs: 40, md: 60, lg: 80 },
            }}
          />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { md: 1, lg: 2 },
              paddingLeft: { md: 3, lg: 8 },
            }}
          >
            {navLinks.map((label) => (
              <Button
                key={label}
                sx={{
                  color: "#1D1D1E",
                  fontSize: { md: "13px", lg: "14px" },
                  fontWeight: 600,
                  fontFamily: "Inter Tight, sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { md: 1.5, lg: 3 },
              paddingRight: { md: 2, lg: 10 },
            }}
          >
            <Button
              sx={{
                bgcolor: darkbackground,
                color: "#fff",
                px: { md: 2, lg: 3 },
                py: { md: 1.2, lg: 2 },
                borderRadius: "15px",
                fontSize: { md: "13px", lg: "15px" },
                fontWeight: 700,
                fontFamily: "Inter Tight, sans-serif",
                textTransform: "none",
                whiteSpace: "nowrap",
                "&:hover": { bgcolor: "black", color: "white" },
              }}
            >
              Get a Quote
            </Button>
            <Button
              sx={{
                bgcolor: darkbackground,
                color: "#fff",
                px: { md: 2, lg: 3 },
                py: { md: 1.2, lg: 2 },
                borderRadius: "15px",
                fontSize: { md: "13px", lg: "15px" },
                fontWeight: 700,
                fontFamily: "Inter Tight, sans-serif",
                textTransform: "none",
                whiteSpace: "nowrap",
                "&:hover": { bgcolor: "black", color: "white" },
              }}
            >
              WhatsApp
            </Button>
          </Box>

          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              bgcolor: "#F1F1F1",
              display: { xs: "flex", md: "none" },
              height: 50,
              width: 50,
              "&:hover": { bgcolor: "#E4E4E4" },
            }}
          >
            <DragHandleOutlinedIcon />
          </IconButton>
        </Toolbar>

        <Sidebar open={open} onClose={() => setOpen(false)} />
      </AppBar>
    </Slide>
  );
}