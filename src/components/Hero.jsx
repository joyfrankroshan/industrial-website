import { useState, useEffect } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";

export default function Hero() {
  const darkbackground = "#3358D3";
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  const content = {
    subtitle: "INDUSTRIAL CATERING . CHENNAI",
    title1: "FACTORY",
    title2: "& PLANT",
    title3: "MEALS,",
    title4: "RUN",
    title5: " LIKE",
    title6: "CLOCKOVER.",

    desc:
      "FSSAI-certified industrial catering serving 10,000+ workers daily across Chennai's manufacturing belt — shift after shift, without a miss.",
    stats: ["10,000+ meals / day", "FSSAI certified", "Serving since 2017"],
  };

  const shifts = [
    { label: "Morning", value: "4,200", time: "6:00 – 10:00 AM · Breakfast + lunch prep" },
    { label: "Afternoon", value: "3,600", time: "12:00 – 3:00 PM · Hot lunch service" },
    { label: "Night", value: "2,200", time: "8:00 PM – 1:00 AM · Dinner + late shift" },
  ];

  const animation = (delay = "0s") => ({
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 0.8s ease, transform 0.8s ease",
    transitionDelay: delay,
  });

  const hiddenAnimation = {
    opacity: 0,
    transform: "translateY(30px)",
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflowX: "hidden",
        
        minHeight: {xs:"80vh",md:"85vh"},
        bgcolor: darkbackground,
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        gap: { xs: 6, md: 5 },
        px: { xs: 3, md: 2 },
        pt: { xs: 4, md: 5 },
        pb: { xs: 4, md: 10 },
      }}
    >
      {/* LEFT: CONTENT */}
      <Box
        sx={{
          position: "relative",
          textAlign: { xs: "left", md: "left" },
          maxWidth: 700,
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            mb: 2, 
            fontSize: {
              xs: "10px",
              sm: "14px",
            },
            fontFamily: "Inter Tight, sans-serif",
            ...(show ? animation("0s") : hiddenAnimation),
          }}
        >
          {content.subtitle}
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            lineHeight: 1.3,
            paddingRight: 1,
            fontSize: {
              xs: "26px",   // was 35px
  sm: "32px",   // ADD THIS
              md:"40px",
              lg: "53.406px",
            },
            fontFamily: "Inter Tight, sans-serif",
            ...(show ? animation("0.2s") : hiddenAnimation),
          }}
        >
          <Box component="span" sx={{ fontWeight: 700 }}>
            {content.title1}
          </Box>

          <Box component="span" sx={{ fontWeight: 300, ml: 1 }}>
            {content.title2}
          </Box>

          <br />

          <Box component="span" sx={{ fontWeight: 700 }}>
            {content.title3}
          </Box>
          <br />

          <Box component="span" sx={{ fontWeight: 300 }}>
            {content.title4}
          </Box>

          <Box component="span" sx={{ fontWeight: 300 }}>
            {content.title5}
          </Box>

          <Box component="span" sx={{ fontWeight: 700, ml: 1 }}>
            {content.title6}
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            fontWeight: 500,
            fontSize: { xs: "18px" },
            paddingRight:{
              xs:0,
              md:2,
              lg:25,


            },
            lineHeight: 1.5,
            fontFamily: "Inter Tight, sans-serif",
            mt: 1,
            ...(show ? animation("0.3s") : hiddenAnimation),
          }}
        >
          {content.desc}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", md: "flex-start" },
            gap: 2,
            mt: 4,
          }}
        >
          <Button
            sx={{
              bgcolor: "#fff",
              color: darkbackground,
              px: 4,
              py: 2,
              borderRadius: "15px",
              fontSize: "15px",
              fontWeight: 700,
              fontFamily: "Inter Tight, sans-serif",
              textTransform: "none",
              ...(show ? animation("0.5s") : hiddenAnimation),
              "&:hover": {
                bgcolor: "black",
                color: "#fff",
                transition: "background-color 0.3s ease, color 0.3s ease",
              },
            }}
          >
            Get a free quote
          </Button>

          <Button
            sx={{
              bgcolor: "#fff",
              color: darkbackground,
              px: 3,
              py: 2,
              borderRadius: "15px",
              fontSize: "15px",
              fontWeight: 700,
              fontFamily: "Inter Tight, sans-serif",
              textTransform: "none",
              ...(show ? animation("0.6s") : hiddenAnimation),
              "&:hover": {
                bgcolor: "black",
                color: "#fff",
                transition: "background-color 0.3s ease, color 0.3s ease",
              },
            }}
          >
            Chat on WhatsApp
          </Button>
        </Box>
        <Divider
          sx={{
            my: 2,
            borderColor: "#fff",  
            opacity: 0.5,
             borderBottomWidth: "0.2px",
            ...(show ? animation("0.3s") : hiddenAnimation),
             
          }}
        ></Divider>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", md: "flex-start" },
            alignItems: "center",
            gap: 2,
            mt: 3,
            ...(show ? animation("0.4s") : hiddenAnimation),
          }}
        >
          {content.stats.map((s, i) => (
            <Box
              key={i}
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: 500,
                fontSize: "14px",
                fontFamily: "Inter Tight, sans-serif",
                color: "#fff",
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#fff",
                  mr: 2,
                }}
              />
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      {/* RIGHT: SHIFT CARD */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#fff",
          
          width: { xs: "100%",sm:"80%", md: 400 },
          maxWidth: { xs: 400, md: 400 },
          height: "auto",
          minHeight: { md: 40 },
          p: { xs: 3, md: 4 },
          borderRadius: "24px",
          flexShrink: 0,
          ...(show ? animation("0.3s") : hiddenAnimation),
        }}
      >
        <Typography
          sx={{
            fontSize: "19px",
            fontFamily: "Inter Tight, sans-serif",
            color: "#1d1d1e",
            fontWeight: 600,
            mb: 1,
            textTransform: "none",
          }}
        >
          ONE KITCHEN, EVERY SHIFT
        </Typography>

        <Typography
          sx={{
            fontSize: "13px",
            fontFamily: "Inter Tight, sans-serif",
            color: "#868689",
            wordSpacing: "2px",
            mb: 2,
          }}
        >
          Round-the-clock meal cycles built for 24×7 plants
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {shifts.map((shift, i) => (
            <Box key={i} sx={{ bgcolor: "#fafafa", p: 2, borderRadius: "8px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",  
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography sx={{ color: "black", fontWeight: 600, fontSize: "16px", fontFamily: "Inter Tight, sans-serif" }}>
                  {shift.label}
                </Typography>
                <Typography sx={{ color: "#3358D3", fontWeight: 700, fontSize: "20px", fontFamily: "Inter Tight, sans-serif" }}>
                  {shift.value}
                </Typography>
              </Box>
              <Typography sx={{ color: "#868689", fontSize: "12.5px", mt: 1, fontFamily: "Inter Tight, sans-serif" }}>
                {shift.time}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
