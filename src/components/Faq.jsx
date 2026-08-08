import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, easeOut } from "framer-motion"

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const FONT = "Inter Tight, sans-serif";
const BRAND_BLUE = "#3358D3";

export default function Faq() {
  const Qa = [
    {
      id: 1,
      qs: "How much does industrial catering cost per head in Chennai?",
      ans: "Industrial catering in Chennai typically ranges from ₹80 to ₹120 per meal, depending on the menu, headcount and location. Bulk and long-term contracts are quoted at customised rates — request a quote for an exact figure.",
    },
    {
      id: 2,
      qs: "Do you provide catering for night shift workers?",
      ans: "Yes. We run dedicated morning, afternoon and night shift meal cycles for factories operating 24×7, timed to your shift roster.",
    },
    {
      id: 3,
      qs: "Are you FSSAI certified for bulk food production?",
      ans: "Yes — all Hogist kitchens are FSSAI certified, with full compliance documentation available on request for your vendor evaluation.",
    },
    {
      id: 4,
      qs: "What is the minimum headcount for your industrial catering service?",
      ans: "We serve units from 200 workers upward, scaling to 5,000+ with full on-site canteen management.",
    },
    {
      id: 5,
      qs: "Can you handle multiple dietary preferences — vegetarian, non-veg, Jain?",
      ans: "Yes. Our menus cover South Indian, North Indian, vegetarian, non-vegetarian, diabetic-friendly and Jain requirements within a single service",
    },
    {
      id: 6,
      qs: "Do you provide kitchen setup and management or only food supply?",
      ans: "Both. We offer off-site tiffin delivery for units without a kitchen, and full on-site kitchen setup and management for those that have one.",
    },
    {
      id: 7,
      qs: "Which areas in Chennai do you serve for industrial catering?",
      ans: "We serve Sriperumbudur, Oragadam, Ambattur, Manali, Irungattukottai, Thiruvallur, Kancheepuram, SIPCOT and MEPZ, along with surrounding industrial corridors.",
    },
  ];

  // Track which FAQ id is currently open (null = none open)
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Box
      sx={{
        display:"flex",
        gap:2,
        
        py: { xs: 4, md: 3 },
        px: { xs: 2, sm: 3, md: 2 },
        width:"100%",
        pl: { xs: 2, sm: 8, md: 20,  }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap:2,
          
          px: 2,
          width: "100%",
        }}
      >
        <Typography
          sx={{
            bgcolor: "#3358d312",
            color: BRAND_BLUE,
            borderRadius: "20px",
            fontSize: { xs: "12px", sm: "14px" },
            fontWeight: 600,
            px: 2,
            fontFamily: FONT,
          }}
        >
          FAQ
        </Typography>
        <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: easeOut }}
                >  <Typography
          sx={{
            fontSize: { xs: "26px", sm: "32px", md: "40px" },
            fontWeight: 600,
            fontFamily: FONT,
            textAlign: "left",
          }}
        >
          Questions procurement teams ask
        </Typography></motion.div>

       

        {/* Map over all FAQ items */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            maxWidth: 700,
          }}
        >
          {Qa.map((item) => {
            const isOpen = openId === item.id;
            return (
              <Box
                key={item.id}
                sx={{
                  border: "1px solid #E3E7F0",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                {/* Question row - only this turns blue when open */}
                <Box
                  onClick={() => handleToggle(item.id)}
                  sx={{
                    bgcolor: isOpen ? BRAND_BLUE : "#fbfcff",
                    color: isOpen ? "white" : "black",
                    py: { xs: 1.5, sm: 2 },
                    px: { xs: 2, sm: 3 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                    cursor: "pointer",
                    transition: "background-color 0.2s ease, color 0.2s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {  xs: "16px", md: "18px" },
                      fontWeight: 510,
                      fontFamily: FONT,
                    }}
                  >
                    {item.qs}
                  </Typography>

                  {isOpen ? (
                    <KeyboardArrowUpIcon sx={{ flexShrink: 0 }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ flexShrink:0 }} />
                  )}
                </Box>

                {/* Answer - separate white section below, only when open */}
                {isOpen && (
                  <Box sx={{ bgcolor: "white", px: { xs: 2, sm: 3 }, py: 2.5 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", sm: "16px" },
                        color: "#797e88",
                        fontWeight: 400,
                        wordSpacing: 1,
                        fontFamily: FONT,
                        lineHeight: 1.6,
                      }}
                    >
                      {item.ans}
                    </Typography>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}