import { useEffect, useState } from "react";
import { Box, Typography, IconButton, Button, Rating } from "@mui/material";
import { FiMenu, FiSearch, FiBell } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";

const fontFamily = "Poppins, sans-serif";
const brandBlue = "#3358D3";
const dark = "#1D1D1E";

function useCountdown(targetDate) {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetDate - Date.now());
      setT({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [targetDate]);
  return t;
}
const pad = (n) => String(n).padStart(2, "0");

function OutlineWord({ text, top, fontSize }) {
  return (
    <Typography
      sx={{
        position: "absolute",
        top,
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily,
        fontWeight: 800,
        fontSize,
        whiteSpace: "nowrap",
        color: "transparent",
        WebkitTextStroke: { xs: "1px rgba(255,255,255,0.4)", md: "1.5px rgba(255,255,255,0.4)" },
        userSelect: "none",
        display: { xs: "none", sm: "block" },
        pointerEvents: "none",
      }}
    >
      {text}
    </Typography>
  );
}

function SolidWord({ text, top, fontSize, opacity = 1 }) {
  return (
    <Typography
      sx={{
        position: "absolute",
        top,
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily,
        fontWeight: 800,
        fontSize,
        whiteSpace: "nowrap",
        color: `rgba(255,255,255,${opacity})`,
        userSelect: "none",
        display: { xs: "none", sm: "block" },
        pointerEvents: "none",
      }}
    >
      {text}
    </Typography>
  );
}

function CountdownBlock({ value, label }) {
  return (
    <Box>
      <Typography sx={{ fontFamily, fontSize: { xs: 32, sm: 40, md: 54 }, fontWeight: 600, color: dark, lineHeight: 1 }}>
        {pad(value)}
      </Typography>
      <Typography sx={{ fontFamily, fontSize: { xs: 10, md: 12 }, color: "#9A9A9A", mt: 0.5 }}>{label}</Typography>
    </Box>
  );
}

function NavLink({ icon, label }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {icon}
      <Typography sx={{ fontFamily, fontSize: 14, fontWeight: 600, letterSpacing: 1, color: dark }}>
        {label}
      </Typography>
    </Box>
  );
}

export default function UverPage() {
  const launchDate = new Date("2026-09-10T00:00:00");
  const { days, hours, minutes } = useCountdown(launchDate);

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: brandBlue,
        minHeight: "100vh",
        overflow: "hidden",
        py: { xs: 4, sm: 5, md: 8 },
        px: { xs: 1.5, sm: 2, md: 5 },
      }}
    >
      {/* Top background words */}
      <OutlineWord text="UNITED KINGDOM" top="-1%" fontSize={{ sm: 46, md: 100 }} />
      <SolidWord text="KINGDOM" top="-1%" fontSize={{ sm: 46, md: 100 }} opacity={0.95} />
      <OutlineWord text="CZECH REPUBLIC" top="9%" fontSize={{ sm: 46, md: 100 }} />
      <SolidWord text="REPUBLIC" top="9%" fontSize={{ sm: 46, md: 100 }} opacity={0.95} />

      {/* Bottom background words */}
      <SolidWord text="Uver" top="55%" fontSize={{ sm: 90, md: 220 }} opacity={0.08} />
      <OutlineWord text="AUSTRALIA" top="66%" fontSize={{ sm: 46, md: 100 }} />
      <OutlineWord text="GERMANY" top="80%" fontSize={{ sm: 46, md: 100 }} />

      {/* White card */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          bgcolor: "#F7F7F5",
          borderRadius: { xs: "20px", md: "28px" },
          border: `3px solid ${dark}`,
          maxWidth: 1400,
          mx: "auto",
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 3, sm: 4, md: 6 },
        }}
      >
        {/* Navbar */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: { xs: 3, sm: 4, md: 6 } }}>
          <Typography sx={{ fontFamily, fontWeight: 600, fontSize: { xs: 16, md: 20 }, letterSpacing: 2, color: dark }}>
            UVER
          </Typography>

          <IconButton sx={{ display: { xs: "none", md: "inline-flex" } }}>
            <FiMenu size={20} />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              bgcolor: brandBlue,
              borderRadius: "30px",
              px: { xs: 1.5, md: 2 },
              py: { xs: 0.7, md: 1 },
            }}
          >
            <Button
              sx={{
                fontFamily,
                fontSize: { xs: 11, sm: 13, md: 14 },
                fontWeight: 600,
                color: "white",
                textTransform: "none",
                minWidth: "unset",
                px: 0,
                whiteSpace: "nowrap",
              }}
            >
              Get Early Access
            </Button>
            <FaMobileAlt color="white" size={14} />
          </Box>
        </Box>

        {/* Content row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, sm: 5, md: 4 },
          }}
        >
          {/* Left copy */}
          <Box sx={{ flex: { md: "0 0 280px" }, minWidth: 0, width: "100%", textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{
                fontFamily,
                fontSize: 14,
                color: "#4A4A4C",
                lineHeight: 1.8,
                maxWidth: 300,
                mx: { xs: "auto", md: 0 },
              }}
            >
              Discover, apply, succeed – UVER makes college search effortless. Your future starts right here.
            </Typography>

            <Box sx={{ mt: { xs: 4, md: 6 } }}>
              <Typography sx={{ fontFamily, fontSize: 13, color: "#8A8A8E", mb: 1 }}>
                ⏳ Launching starts in
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 2, sm: 3 },
                  alignItems: "flex-start",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <CountdownBlock value={days} label="days" />
                <Typography sx={{ fontSize: { xs: 28, sm: 38 }, color: "#C9C9C9", fontWeight: 300 }}>:</Typography>
                <CountdownBlock value={hours} label="hours" />
                <Typography sx={{ fontSize: { xs: 28, sm: 38 }, color: "#C9C9C9", fontWeight: 300 }}>:</Typography>
                <CountdownBlock value={minutes} label="minutes" />
              </Box>
            </Box>
          </Box>

          {/* Phone mockup */}
          <PhoneMockup />

          {/* Right nav links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              flexWrap: "wrap",
              gap: { xs: 2.5, sm: 3, md: 2.5 },
              flex: { md: "0 0 280px" },
              width: { xs: "100%", md: "auto" },
              alignItems: { xs: "center", md: "flex-end" },
              justifyContent: "center",
            }}
          >
            <NavLink icon={<FiSearch size={18} />} label="SEARCH" />
            <NavLink icon={<BsChatDots size={18} />} label="CHAT" />
            <NavLink icon={<HiOutlinePencilAlt size={18} />} label="APPLY" />
            <NavLink icon={<AiOutlineEye size={18} />} label="TRACK" />
          </Box>
        </Box>
      </Box>

      {/* Bottom bar */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, sm: 0 },
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "flex-end" },
          textAlign: { xs: "center", sm: "left" },
          maxWidth: 1400,
          mx: "auto",
          mt: 4,
          px: { xs: 1, md: 0 },
        }}
      >
        <Typography sx={{ fontFamily, color: "rgba(255,255,255,0.9)", fontSize: 14 }}>
          Your future starts
          <br />
          right here.
        </Typography>
        <Typography sx={{ fontFamily, color: "rgba(255,255,255,0.9)", fontSize: 14, textAlign: { xs: "center", sm: "right" } }}>
          Phenomenon App
          <br />
          2026
        </Typography>
      </Box>
    </Box>
  );
}

function PhoneMockup() {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: 280, md: 260 },
        maxWidth: 320,
        flexShrink: 0,
        border: { xs: `8px solid ${dark}`, md: `10px solid ${dark}` },
        borderRadius: { xs: "28px", md: "36px" },
        bgcolor: "#fff",
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        mx: "auto",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", py: 0.7, bgcolor: "#fff" }}>
        <Box sx={{ width: 60, height: 14, bgcolor: dark, borderRadius: "10px" }} />
      </Box>

      <Box sx={{ px: 2, pb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 28, height: 28, borderRadius: "50%", bgcolor: "#D9D9D9" }} />
            <Typography sx={{ fontFamily, fontSize: 12, color: "#4A4A4C" }}>Hello, John</Typography>
          </Box>
          <FiBell size={16} color={dark} />
        </Box>

        <Typography sx={{ fontFamily, fontSize: 15, fontWeight: 600, color: dark, lineHeight: 1.3, mb: 1.5 }}>
          Search and apply to the best universities
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            bgcolor: "#F1F1EF",
            borderRadius: "10px",
            px: 1.2,
            py: 0.8,
            mb: 1.2,
          }}
        >
          <FiSearch size={13} color="#9A9A9A" />
          <Typography sx={{ fontFamily, fontSize: 10.5, color: "#9A9A9A" }}>
            Search university, location
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7, mb: 1, alignItems: "center" }}>
          {["Accounting", "Architecture", "Art", "Design", "Business"].map((c, i) => (
            <Box
              key={c}
              sx={{
                px: 1.1,
                py: 0.4,
                borderRadius: "12px",
                bgcolor: i === 0 ? brandBlue : "#F1F1EF",
                color: i === 0 ? "#fff" : "#4A4A4C",
                fontFamily,
                fontSize: 9.5,
              }}
            >
              {c}
            </Box>
          ))}
          <Typography sx={{ fontFamily, fontSize: 9.5, color: brandBlue }}>Show 30+</Typography>
        </Box>

        <Typography sx={{ fontFamily, fontSize: 10, color: brandBlue, fontWeight: 600, mb: 1 }}>
          220 UNIVERSITIES FOUND
        </Typography>

        <Box sx={{ borderRadius: "14px", overflow: "hidden", bgcolor: "#F7F7F5" }}>
          <Box
            sx={{
              height: 100,
              backgroundImage: "url(https://images.unsplash.com/photo-1562774053-701939374585?w=400)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Box sx={{ px: 1.2, py: 1 }}>
            <Typography sx={{ fontFamily, fontSize: 11.5, fontWeight: 600, color: dark }}>
              University of Southern California
            </Typography>
            <Rating value={4} readOnly size="small" sx={{ fontSize: 12, my: 0.3 }} />
            <Typography sx={{ fontFamily, fontSize: 9, color: "#8A8A8E" }}>
              Los Angeles, California, 90089, United States
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1.5, pt: 1, borderTop: "1px solid #EEE" }}>
          {["Search", "Explore", "Applications", "Inbox", "Profile"].map((t, i) => (
            <Typography
              key={t}
              sx={{ fontFamily, fontSize: 8, color: i === 0 ? brandBlue : "#B0B0B0", fontWeight: i === 0 ? 600 : 400 }}
            >
              {t}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}