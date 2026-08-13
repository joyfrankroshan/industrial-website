import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Stats() {
  const companies = ["Auto Co", "Pharma Ltd", "Textiles", "Electronics", "SEZ Unit"];

  return (
    <Box
      sx={{
        width: "100%",
        color: "black",
        px: { xs: 2, md: 13 },
        py: { xs: 4, md: 6 },
        alignItems: "center",
        borderBottom: "2px solid #2d477a",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: { xs: 2, md: 4 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              color: "#64748B",
              fontWeight: 500,
              maxWidth: "150px",
              lineHeight: 1.35,
              fontFamily: "Inter Tight, sans-serif",
            }}
          >
            Trusted by 30+ factories across Tamil Nadu
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 3, lg: 9 },
            paddingRight: { xs: 0, lg: 13 },
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {companies.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: "easeOut" }}
            >
              <Typography
                sx={{
                  height: "34px",
                  px: 2,
                  py: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#3358D3",
                  color: "white",
                  borderRadius: "14px",
                  fontFamily: "Inter Tight, sans-serif",
                  fontWeight: {xs:800,md:600},
                  letterSpacing: "0.06em",
                  fontSize: "15px",
                  textTransform: "uppercase",
                }}
              >
                {name}
              </Typography>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}