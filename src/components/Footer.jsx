import { Box, Typography, Chip } from "@mui/material";
import hogistLogo from "../assets/header-removebg-preview.png";

export default function Footer() {
  const FONT = "Inter Tight, sans-serif";
  const BRAND_BLUE = "#3358D3";

  const locations = [
    "Catering in Sriperumbudur",
    "Catering in Oragadam",
    "Catering in Ambattur",
    "Catering in Manali",
  ];

  const services = [
    "Industrial Catering",
    "Corporate Catering",
    "Event Catering",
    "School Catering",
  ];

  const companyLinks = ["About Hogist", "Get a Quote", "FAQ", "Contact"];

  return (
    <Box
      sx={{
        bgcolor: "#12141c",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 6, md: 8 },
        pb: 0,
      }}
    >
      {/* Decorative plus marks - top left, like image 1 */}
      {/* <Box
        sx={{
          position: "absolute",
          top: 20,
          left: 10,
          width: 140,
          height: 140,
          display: { xs: "none", md: "block" },
          pointerEvents: "none",
        }}
      >
        {[
          [10, 10], [40, 0], [70, 20], [20, 45], [55, 55],
          [85, 60], [15, 80], [45, 90], [0, 55],
        ].map(([x, y], i) => (
          <Typography
            key={i}
            sx={{
              position: "absolute",
              top: y,
              left: x,
              color: BRAND_BLUE,
              fontSize: 16,
              fontWeight: 700,
              opacity: 0.7,
              userSelect: "none",
            }}
          >
            +
          </Typography>
        ))}
      </Box> */}

      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          px: { xs: 3, sm: 5, md: 12 },
        }}
      >
        {/* Top grid: 4 columns like image 1 */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1.6fr 1fr 1fr 1fr" },
            gap: { xs: 5, md: 4 },
          }}
        >
          {/* Column 1 - About / Logo */}
          <Box>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                bgcolor: "#fff",
                borderRadius: "10px",
                px: 1.5,
                py: 1,
                mb: 2,
              }}
            >
              <Box
                component="img"
                src={hogistLogo}
                alt="Hogist"
                sx={{ height: 32, width: "auto", display: "block" }}
              />
            </Box>

            <Typography
              sx={{
                fontFamily: FONT,
                color: "#9aa0ad",
                fontSize: "15px",
                lineHeight: 1.7,
                fontWeight: 300,
                mb: 2,
                maxWidth: 340,
              }}
            >
              Industrial &amp; corporate catering across Chennai's manufacturing
              belt — FSSAI-certified meals at scale, shift after shift.
              <br />
              Chennai, Tamil Nadu · +91 99626 67733
            </Typography>

            <Box sx={{ display: "flex", gap: 1.5, mt: 2 }}>
              {["FSSAI", "ISO Certified"].map((label) => (
                <Chip
                  key={label}
                  label={label}
                  sx={{
                    bgcolor: "#1c2130",
                    color: "#c7cbd4",
                    fontFamily: FONT,
                    fontWeight: 600,
                    fontSize: "13px",
                    borderRadius: "8px",
                    px: 0.5,
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Column 2 - Locations */}
          <Box>
            <Typography
              sx={{
                fontFamily: FONT,
                color: "#fff",
                fontWeight: 700,
                fontSize: "17px",
                mb: 2.5,
              }}
            >
              Locations
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {locations.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontFamily: FONT,
                    color: "#9aa0ad",
                    fontSize: "15px",
                    fontWeight: 300,
                    cursor: "pointer",
                    "&:hover": { color: BRAND_BLUE },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Column 3 - Services */}
          <Box>
            <Typography
              sx={{
                fontFamily: FONT,
                color: "#fff",
                fontWeight: 700,
                fontSize: "17px",
                mb: 2.5,
              }}
            >
              Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {services.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontFamily: FONT,
                    color: "#9aa0ad",
                    fontSize: "15px",
                    fontWeight: 300,
                    cursor: "pointer",
                    "&:hover": { color: BRAND_BLUE },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Column 4 - Company */}
          <Box>
            <Typography
              sx={{
                fontFamily: FONT,
                color: "#fff",
                fontWeight: 700,
                fontSize: "17px",
                mb: 2.5,
              }}
            >
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {companyLinks.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontFamily: FONT,
                    color: "#9aa0ad",
                    fontSize: "15px",
                    fontWeight: 300,
                    cursor: "pointer",
                    "&:hover": { color: BRAND_BLUE },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Box sx={{ borderTop: "1px solid #2a2e3a", mt: { xs: 5, md: 6 } }} />
      </Box>

      {/* Bottom bar */}
      <Box
        sx={{
          bgcolor: "#1a1d29",
          mt: 0,
          py: 2.5,
          px: { xs: 3, sm: 5, md: 12 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1.5,
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography
          sx={{
            fontFamily: FONT,
            color: "#8b909c",
            fontSize: "14px",
            fontWeight: 300,
          }}
        >
          © 2026 Hogist Technologies Pvt Ltd. All rights reserved.
        </Typography>

        <Typography
          sx={{
            fontFamily: FONT,
            color: "#8b909c",
            fontSize: "14px",
            fontWeight: 300,
          }}
        >
          Industrial Catering Services in Chennai
        </Typography>
      </Box>
    </Box>
  );
}