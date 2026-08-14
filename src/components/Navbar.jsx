import HeaderImg from "/src/assets/header-removebg-preview.png";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import { FiMessageCircle } from "react-icons/fi";

import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

const darkbackground = "#3358D3";

const navLinks = [
  { label: "Services", id: "services" },
  { label: "Why Hogist", id: "why-hogist" },
  { label: "Pricing", id: "pricing" },
  { label: "Location", id: "location" },
  { label: "FAQ", id: "faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = scrolled ? 68 : 84;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <Toolbar
        sx={{
          height: scrolled ? 68 : 84,
          transition: "height 0.3s ease",
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
            {navLinks.map(({ label, id }) => (
              <Button
                key={id}
                onClick={() => handleNavClick(id)}
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
              onClick={() => handleNavClick("contact")}
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
            onClick={() => window.open("https://api.whatsapp.com/send/?phone=919962667733&text=&type=phone_number&app_absent=0", "_blank")}
            startIcon={<FiMessageCircle size={20} strokeWidth={2} />}           

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
    <Box sx={{ height: scrolled ? 68 : 84, transition: "height 0.3s ease" }} />
    </>
  );
}