import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { motion } from "framer-motion";
export default function Pricing() {
  const items = [
    {
      id: 1,
      plan: "Up to 200 workers",
      amount: "₹80–120 ",
      points: [
        "Single or two-shift service",
"Standard South & North Indian menu",
"Off-site tiffin delivery"
      ],
      button: "Get a quote",
    },
    {
      id: 2,
      sm: "Most popular",
      plan: "200 – 1,000 workers",
      amount: "Custom",
      points: [
        "Full three-shift meal cycles",
"Customised & special-diet menus",
"On-site kitchen management",
"Dedicated account manager"
      ],
      button: "Get a quote",
    },
    {
      id: 3,
      plan: "200 – 1,000 workers",
      amount: "Enterprise",
      points: [
        "Multi-location canteen ops",
"SLA-backed delivery guarantees",
"Custom compliance reporting"
      ],
      button: "Custom quote",
    },
  ];

  return (
    <Box sx={{ bgcolor: "white", color: "black", px: 2, py: 6 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mb: 6,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter Tight, sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            color: "#3358D3",
            mb: 2,
          }}
        >
          TRANSPARENT PRICING
        </Typography>
        <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
        <Typography
          sx={{
            fontFamily: "Inter Tight, sans-serif",
            fontWeight: {xs:800,md:600},
            fontSize: { xs: "28px", md: "45px" },
            px: { lg: 40 },
            mb: 2,
          }}
        >
          PLANS THAT SCALE WITH YOUR HEADCOUNT
        </Typography>
        </motion.div>
        
  <Typography
    sx={{
      fontFamily: "Inter Tight, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      color: "#868689",
      px: { lg: 50 },
    }}
  >
    Procurement teams choose us because the things that matter for a
    long-term contract are already in place
  </Typography>

        
      </Box>

      {/* Cards */}
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm:"1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 3,
          maxWidth: 1250,
          mx: "auto",
           minHeight: 580,
        }}
      >
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              bgcolor: "#fff",
              border: "1px solid #eee",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              overflow: "hidden",
              display: "flex",              // add
    flexDirection: "column",
          // add
            }}
          >
            {/* Top label */}
            {item.sm &&(
            
            <Box
                      // const isPopular=item.id===2;

              sx={{
               
                textAlign: "center",
                py:1,
                borderBottom: "1px solid #eee",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter Tight, sans-serif",
                  fontWeight: {xs:800,md:700},
                  fontSize: "18px",
                }}
              >
                {item.sm}
              </Typography>
            </Box>
            )}

<Box sx={{
  px: 4,
  py: 3,
  display: "flex",        // add
  flexDirection: "column",// add
  flexGrow: 1,             // add
}}>              <Typography
                sx={{
                  fontFamily: "Inter Tight, sans-serif",
                  fontWeight: {xs:800,md:700},
                  fontSize: "24px",
                  mb: 2,
                }}
              >
                {item.plan}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "baseline", mb: 3 }}>
                <Typography
                  sx={{
                    fontFamily: "Inter Tight, sans-serif",
                    fontWeight: 700,
                    fontSize: {xs:"32px",md:"48px"},
                    color: "#3358D3",
                  }}
                >
                  {item.amount}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter Tight, sans-serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "#868689",
                    ml: 1,
                  }}
                >
                  / meal
                </Typography>
              </Box>

              <Box sx={{ borderTop: "1px solid #eee", mb: 3 }} />

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 3 }}>
                {item.points.map((point, i) => (
                  <Box
                    key={i}
                    sx={{ display: "flex", alignItems: "center", gap: 2 }}
                  >
                    <CheckCircleIcon sx={{ color: "#3358D3", fontSize: 20 }} />
                    <Typography
                      sx={{
                        fontFamily: "Inter Tight, sans-serif",
                        fontWeight: 500,
                        fontSize: "17px",
                      }}
                    >
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
              
              
              {/* {(item.id === 1 || item.id === 3) && ( */}
              

              <Button
                fullWidth
                sx={{
                  bgcolor: "#3358D3",
                  color: "white",
                  py: 1.5,
                                    borderRadius: "30px",
                  textTransform: "none",
                  fontFamily: "Inter Tight, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                   mt: "auto",   
                  "&:hover": { bgcolor: "black",
              color:"white", },
                }}
              >
                {item.button} 
              </Button>
              {/* // )} */}

            </Box>
          </Box>
        ))}
      </Box>
      </motion.div>
    </Box>
  );
}