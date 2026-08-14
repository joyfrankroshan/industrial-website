import { Box, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppFloat() {
  const phoneNumber = "919962667733";
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=&type=phone_number&app_absent=0`;

  return (
    <Box
      component="a"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: "fixed",
        right: { xs: 16, md: 30 },
        bottom: { xs: 16, md: 30 },
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: 1,
        bgcolor: "#25D366",
        color: "#fff",
        textDecoration: "none",
        px: { xs: 2, md: 2.5 },
        py: 1.3,
        borderRadius: "50px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
        fontFamily: "Inter Tight, sans-serif",
        transition: "transform 0.2s ease, background-color 0.2s ease",
        "&:hover": {
          bgcolor: "#1ebe5b",
          transform: "scale(1.05)",
        },
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 26 }} />
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 700,
          fontFamily: "Inter Tight, sans-serif",
          display: { xs: "none", sm: "block" },
        }}
      >
        Chat with us
      </Typography>
    </Box>
  );
}
