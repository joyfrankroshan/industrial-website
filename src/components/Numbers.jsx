import { useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Counter from "./Counter";

const stats = [
  { end: 10000, decimals: 0, suffix: "+", label: "Meals served daily" },
  { end: 30, decimals: 0, suffix: "+", label: "Active industrial clients" },
  { end: 8, decimals: 0, suffix: "+", label: "Years in industrial catering", duration: 900 },
  { end: 99.2, decimals: 1, suffix: "%", label: "On-time delivery rate" },
];

export default function Numbers() {
  const [inView, setInView] = useState(false);

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 10 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
        }}
      >
        {stats.map((stat, i) => {
          const isLastCol = { xs: true, sm: i % 2 === 1, md: i === stats.length - 1 };
          const isLastRow = i >= stats.length - (stats.length % 2 === 0 ? 2 : 1);

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              onViewportEnter={() => setInView(true)}
            >
              <Box
                sx={{
                  position: "relative",
                  textAlign: "center",
                  py: { xs: 4, sm: 3, md: 0 },
                  px: { xs: 0, sm: 2 },
                  borderBottom: {
                    xs: i < stats.length - 1 ? "1px solid rgba(15,23,42,0.15)" : "none",
                    sm: !isLastRow ? "1px solid rgba(15,23,42,0.15)" : "none",
                    md: "none",
                  },
                  borderRight: {
                    xs: "none",
                    sm: !isLastCol.sm ? "1px solid rgba(15,23,42,0.15)" : "none",
                    md: i < stats.length - 1 ? "1px solid rgba(15,23,42,0.15)" : "none",
                  },
                }}
              >
                {/* soft blue blob behind the number, centered */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: 56, md: 70 },
                    height: { xs: 56, md: 70 },
                    borderRadius: "50%",
                    bgcolor: "rgba(51, 88, 211, 0.1)",
                    zIndex: 0,
                  }}
                />

                <Counter
                  end={stat.end}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  start={inView}
                  duration={stat.duration || 1800}
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    fontSize: { xs: "34px", sm: "38px", md: "48px" },
                    fontWeight: 800,
                    color: "#0F172A",
                    fontFamily: "Inter Tight, sans-serif",
                    display: "block",
                    textAlign: "center",
                  }}
                />

                <Box
                  component="span"
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    fontSize: { xs: "12px", md: "13px" },
                    color: "#0F172A",
                    fontFamily: "Inter Tight, sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                    mt: 0.5,
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  {stat.label}
                </Box>
              </Box>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
}