import { Box, TextField, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion, easeOut } from "framer-motion"
import { LuBadgeCheck } from "react-icons/lu";

export default function Contacts() {
const fontFamily = "Poppins, sans-serif";  const BRAND_BLUE = "#3358D3";

  const fields = [
    { id: 1, name: "name", label: "First Name", type: "text", placeholder: "Enter your name" },
    { id: 2, name: "companyName", type: "text", label: "Your Company", placeholder: "Enter your company" },
    { id: 3, name: "location", type: "text", label: "Industrial zone / location", placeholder: "Enter your location" },
    { id: 4, name: "workers", type: "text", label: "Number of workers", placeholder: "Enter your worker number" },
    { id: 5, name: "phone", type: "text", label: "Phone Number", placeholder: "Enter your phone number" },
  ];

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      fontFamily,
      "& fieldset": { borderColor: "#E3E7F0" },
      "&:hover fieldset": { borderColor: BRAND_BLUE },
      "&.Mui-focused fieldset": { borderColor: BRAND_BLUE },
    },
    "& .MuiInputBase-input": { py: 2 },
  };

  return (
    <Box
      id="contact"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "stretch", md: "center" },
        justifyContent: { xs: "flex-start", md: "space-between" },
        px: { xs: 2, sm: 4, lg: 12 },
        py: { xs: 4, md: 6 },
        gap: { xs: 4, md: 3 },
      }}
    >
      {/* Left side - heading copy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: easeOut }}
        style={{ width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "flex-start",
            textAlign: { xs: "center", md: "left" },
            gap: { xs: 1.5, sm: 2 },
            width: "100%",
            maxWidth: { xs: "100%", sm: 480, md: 460 },
          }}
        >
          <Typography
            sx={{
              bgcolor: "#3358d312",
              color: BRAND_BLUE,
              borderRadius: "20px",
              fontSize: { xs: "11px", sm: "13px", md: "14px" },
              fontWeight: { xs: 800, md: 600 },
              px: 2,
              py: 0.5,
              fontFamily,
            }}
          >
            GET STARTED
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "28px", md: "34px", lg: "40px" },
              fontWeight: { xs: 800, md: 600 },
              fontFamily,
              lineHeight: 1.25,
            }}
          >
            Get a custom quote for your factory
          </Typography>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#868689",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" },
          }}>
            <LuBadgeCheck size={20} style={{ flexShrink: 0 }} />

            <Typography
              sx={{
                color: "#868689",
                fontSize: { xs: "13px", sm: "14px", md: "16px" },
                fontWeight: 300,
                fontFamily,
                maxWidth: { xs: "100%", md: 420 },
              }}
            >
              Tell us your requirement and our team will get back to you with a
              tailored plan and pricing
            </Typography>
          </Box>
        </Box>
      </motion.div>

      {/* Right side - contact form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <Box
          sx={{
            bgcolor: "#fff",
            boxShadow: "0px 10px 40px rgba(0,0,0,0.08)",
            borderBottom: `4px solid ${BRAND_BLUE}`,
            px: { xs: 3, sm: 5 },
            py: { xs: 4, sm: 5 },
            borderRadius: "28px",
            width: { xs: "100%", md: 600 },
            maxWidth: "100%",
            boxSizing: "border-box",
          }}
        >
          <Typography
            sx={{
              fontFamily,
              fontSize: { xs: "22px", sm: "28px" },
              fontWeight: 700,
            }}
          >
            REQUEST MY QUOTE
          </Typography>
          <Typography
            sx={{
              fontFamily,
              fontSize: { xs: "15px" },
              mb: 3,
              color: "#868689"
            }}
          >
            Five quick details — that's all we need to start.
          </Typography>

          {/* Fields in a responsive grid: 1 col mobile, 2 col tablet+ */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
              mb: 3,
            }}
          >
            {fields.map((field) => (
              <TextField
                key={field.id}
                label={field.label}
                placeholder={field.placeholder}
                type={field.type}
                name={field.name}
                variant="outlined"
                fullWidth
                sx={inputSx}
              />
            ))}
            <Button
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
              fullWidth
              sx={{
                bgcolor: BRAND_BLUE,
                color: "white",
                fontFamily,
                fontWeight: 700,
                fontSize: "16px",
                textTransform: "none",
                borderRadius: "50px",
                px: 1,
                py: 1.5,
                boxShadow: "none",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  bgcolor: "black",
                  color: "white",
                },
              }}
            >
              Request My Quote
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}