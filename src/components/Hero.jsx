import { useState, useEffect } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { FiMessageCircle } from "react-icons/fi";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ShiftCard from "./ShiftCard.jsx";

export default function Hero() {
  const darkbackground = "#3358D3";
  const fontFamily = "Poppins, sans-serif";
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
    title6: "CLOCKWORK.",
    desc:
      "FSSAI-certified industrial catering serving 10,000+ workers daily across Chennai's manufacturing belt — shift after shift, without a miss.",
    stats: ["10,000+ meals / day", "FSSAI certified", "Serving since 2017"],
  };

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
      id="hero"
      sx={{
        position: "relative",
        overflowX: "hidden",
        minHeight: { xs: "80vh", md: "85vh" },
        bgcolor: darkbackground,
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        gap: { xs: 6, md: 10 },
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
            fontSize: { xs: "10px", sm: "14px" },
            fontFamily,
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
              xs: "26px",
              sm: "32px",
              md: "40px",
              lg: "53.406px",
            },
            fontFamily,
            ...(show ? animation("0.2s") : hiddenAnimation),
          }}
        >
          <Box component="span" sx={{ fontWeight: { xs: 800, md: 700 } }}>
            {content.title1}
          </Box>

          <Box component="span" sx={{ fontWeight: 300, ml: 1 }}>
            {content.title2}
          </Box>

          <br />

          <Box component="span" sx={{ fontWeight: { xs: 800, md: 700 } }}>
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
            paddingRight: { xs: 0, md: 2, lg: 25 },
            lineHeight: 1.5,
            fontFamily,
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
            startIcon={<ArrowForwardOutlinedIcon size={20} strokeWidth={3} />}
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset - 68;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            sx={{
              bgcolor: "#fff",
              color: darkbackground,
              px: 4,
              py: 2,
              borderRadius: "15px",
              fontSize: "15px",
              fontWeight: { xs: 800, md: 700 },
              fontFamily,
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
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=919962667733&text=&type=phone_number&app_absent=0",
                "_blank"
              )
            }
            startIcon={<FiMessageCircle size={20} strokeWidth={3} />}
            sx={{
              bgcolor: "#fff",
              color: darkbackground,
              px: 3,
              py: 2,
              borderRadius: "15px",
              fontSize: "15px",
              fontWeight: { xs: 800, md: 700 },
              fontFamily,
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
                fontFamily,
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
      <ShiftCard show={show} animation={animation} hiddenAnimation={hiddenAnimation} />
    </Box>
  );
}