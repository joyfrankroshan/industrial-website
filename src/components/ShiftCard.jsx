import { Box, Typography } from "@mui/material";
import { FiSunrise, FiSun, FiMoon, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ShiftCard({ show, animation, hiddenAnimation }) {
  const fontFamily = "Poppins, sans-serif";

  const shifts = [
    {
      label: "Morning",
      value: "4,200",
      time: "6:00 – 10:00 AM",
      sub: "Breakfast + Lunch prep",
      icon: FiSunrise,
      accent: "#3358D3",
      tint: "rgba(51, 88, 211, 0.1)",
    },
    {
      label: "Afternoon",
      value: "3,600",
      time: "12:00 – 3:00 PM",
      sub: "Hot lunch service",
      icon: FiSun,
      accent: "#3358D3",
      tint: "rgba(51, 88, 211, 0.1)",
    },
    {
      label: "Night",
      value: "2,200",
      time: "8:00 PM – 1:00 AM",
      sub: "Dinner + late shift",
      icon: FiMoon,
      accent: "#3358D3",
      tint: "rgba(51, 88, 211, 0.1)",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        top: 20,
        bgcolor: "#fff",
        width: { xs: "100%", sm: "80%", md: 420 },
        maxWidth: { xs: 420, md: 420 },
        height: "auto",
        p: { xs: 2.5, sm: 3, md: 4 },
        borderRadius: { xs: "18px", md: "24px" },
        boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)",
        flexShrink: 0,
        ...(show ? animation("0.3s") : hiddenAnimation),
      }}
    >
      {/* Small label chip - animates first */}
      <motion.div
        initial={{ opacity: 0, x: 90 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0 }}
      >
        <Box
          sx={{
            display: "inline-block",
            bgcolor: "rgba(51, 88, 211, 0.1)",
            color: "#3358D3",
            fontFamily,
            fontWeight: 700,
            fontSize: { xs: "10px", sm: "11px" },
            letterSpacing: "0.08em",
            px: 1.5,
            py: 0.6,
            borderRadius: "20px",
            mb: { xs: 1.5, md: 2 },
          }}
        >
          ONE KITCHEN, EVERY SHIFT
        </Box>
      </motion.div>

      {/* Heading - animates after chip */}
      <motion.div
        initial={{ opacity: 0, x: 90 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography
          sx={{
            fontFamily,
            fontWeight: 700,
            color: "#0F172A",
            fontSize: { xs: "24px", sm: "28px", md: "32px" },
            lineHeight: 1.2,
            mb: 1.5,
          }}
        >
          One Kitchen,
          <br />
          Every Shift
        </Typography>

        <Box
          sx={{
            width: "36px",
            height: "4px",
            bgcolor: "#3358D3",
            borderRadius: "4px",
            mb: 2,
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "13px" },
            fontFamily,
            color: "#868689",
            mb: { xs: 2, md: 3 },
          }}
        >
          Round-the-clock meal cycles built for 24×7 plants
        </Typography>
      </motion.div>

      <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1.5, md: 2 } }}>
        {shifts.map((shift, i) => {
          const ShiftIcon = shift.icon;
          return (
            <Box
              key={i}
              sx={{
                bgcolor: shift.tint,
                borderLeft: `4px solid ${shift.accent}`,
                p: { xs: 1.5, sm: 2 },
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: { xs: 1, sm: 2 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: 90 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 1.5, sm: 2 },
                    minWidth: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 40, sm: 46, md: 50 },
                      height: { xs: 40, sm: 46, md: 50 },
                      borderRadius: "50%",
                      bgcolor: "rgba(213, 222, 250, 0.1)",
                      border: "2.5px solid white",
                      color: shift.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 4px 10px rgba(15, 23, 42, 0.08)",
                    }}
                  >
                    <ShiftIcon size={20} />
                  </Box>

                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        color: "#0F172A",
                        fontWeight: 700,
                        fontSize: { xs: "14px", sm: "15px", md: "16px" },
                        fontFamily,
                      }}
                    >
                      {shift.label}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: "#3358D3",
                        fontSize: { xs: "11px", sm: "12px" },
                        fontFamily,
                        mt: 0.3,
                      }}
                    >
                      <FiClock size={11} />
                      {shift.time}
                    </Box>
                    <Typography
                      sx={{
                        color: "#868689",
                        fontSize: { xs: "10.5px", sm: "11.5px" },
                        fontFamily,
                        mt: 0.2,
                      }}
                    >
                      {shift.sub}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                    ml: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: shift.accent,
                      fontWeight: 800,
                      fontSize: { xs: "16px", sm: "18px", md: "20px" },
                      fontFamily,
                    }}
                  >
                    {shift.value}
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          );
        })}
      </Box>

      {/* Footer */}
    </Box>
  );
}