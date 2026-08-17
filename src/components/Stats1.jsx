import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const clientImages = Object.values(
  import.meta.glob("../assets/client/*.{webp,png,jpeg,jpg}", {
    eager: true,
    import: "default",
  })
);

export default function Stats1() {
  const fontFamily = "Poppins, sans-serif";
  const marqueeImages = [...clientImages, ...clientImages];

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 13 },
        py: { xs: 4, md: 6 },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: { xs: 2, md: 4 },
        }}
      >
          <Typography
          sx={{
             fontSize: "13px",
            color: "#64748B",
            fontWeight: 500,
            maxWidth: "150px",
            lineHeight: 1.35,
            fontFamily,
            flexShrink: 0,
          }}
        >
          Trusted by 30+ factories across Tamil Nadu
        </Typography> 
        <Box
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            maskImage:
              "linear-gradient(to right, transparent 0, black 40px, black calc(100% - 40px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, black 40px, black calc(100% - 40px), transparent 100%)",
          }}
        >
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "48px",
              width: "max-content",
            }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {marqueeImages.map((src, i) => (
              <Box
                key={i}
                component="img"
                src={src}
                sx={{
                  height: { xs: "36px", md: "60px" },
                  width: "auto",
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />
            ))}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}