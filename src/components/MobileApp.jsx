import { Box, Typography, Avatar } from "@mui/material"
import { motion, easeOut } from "framer-motion"
import { LuSearch, LuBell, LuClock3, LuChevronRight } from "react-icons/lu"
import { FaGooglePlay, FaApple, FaStar } from "react-icons/fa"

export default function MobileApp() {
  const fontFamily = "Poppins, sans-serif"

  return (
    <Box
      id="mobile-app"
      sx={{
        px: { xs: 2, sm: 3, md: 5 },
        py: { xs: 4, md: 6 },
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: "28px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #E9EEFF 0%, #DCE4FF 45%, #EEF1FF 100%)",
          px: { xs: 3, sm: 5, md: 8 },
          pt: { xs: 5, md: 7 },
          pb: { xs: 5, md: 0 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 6, md: 8 },
        }}
      >
        {/* Left: copy */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: "column",
            flex: 1,
            width: "100%",
            zIndex: 2,
            pb: { xs: 0, md: 7 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <Typography
              sx={{
                fontFamily,
                fontWeight: 500,
                fontSize: { xs: "34px", sm: "42px", md: "50px" },
                lineHeight: 1.20,
                color: "#0F172A",
                mb: 3,
              }}
            >
              Manage Your Workforce with Next-Gen Ease
            </Typography>
          </motion.div>

          <Typography
            sx={{
              fontFamily,
              fontWeight: 400,
              fontSize: "14px",
              color: "#868689",
              maxWidth: "460px",
              mb: 4,
            }}
          >
            The Hogist app keeps your crews, shifts, and sites in sync — helping every team check in faster and stay accountable.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 6 }}>
            <Box
              component="a"
              href="#"
              sx={{
                bgcolor: "#0F172A",
                color: "#fff",
                fontFamily,
                fontWeight: 600,
                fontSize: "15px",
                borderRadius: "999px",
                px: 3.5,
                py: 1.5,
                textDecoration: "none",
                transition: "transform .2s ease, background .2s ease",
                "&:hover": { transform: "translateY(-2px)", bgcolor: "#3358D3" },
              }}
            >
              Get Now
            </Box>

            <Box
              component="a"
              href="#"
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                bgcolor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0F172A",
                fontSize: 18,
                boxShadow: "0 4px 14px rgba(15,23,42,0.12)",
                transition: "transform .2s ease",
                "&:hover": { transform: "translateY(-2px)" },
              }}
            >
              <FaGooglePlay />
            </Box>

            <Box
              component="a"
              href="#"
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                bgcolor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0F172A",
                fontSize: 20,
                boxShadow: "0 4px 14px rgba(15,23,42,0.12)",
                transition: "transform .2s ease",
                "&:hover": { transform: "translateY(-2px)" },
              }}
            >
              <FaApple />
            </Box>
          </Box>

          {/* Avatars + rating + sites live */}
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2,paddingTop:10  }}>
            {/* Row: avatar stack + rating (siblings, spaced with gap) */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 ,flexDirection: "column"}}>
              {/* Avatar stack */}
              <Box sx={{ display: "flex" }}>
                {["1", "7", "34"].map((n, i) => (
                  <Avatar
                    key={n}
                    src={`/src/assets/client-${n}.webp`}
                    sx={{
                      width: 42,
                      height: 42,
                      border: "3px solid #fff",
                      ml: i === 0 ? 0 : -1.5,
                    }}
                  />
                ))}
              </Box>

              {/* Rating */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Typography sx={{ fontFamily, fontWeight: 600, fontSize: "13px", color: "#0F172A" }}>
                  4.9/5
                </Typography>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={12} color="#3358D3" />
                ))}
              </Box>
            </Box>

            {/* Sites live */}
            <Box sx={{
                display:"flex",
                gap:1.5,
                flexDirection:"column",
                paddingTop:"10"
            }}>
              <Typography sx={{ fontFamily, fontWeight: 500, fontSize: "20px", color: "#0F172A", lineHeight: 1.2 }}>
                60+ Sites Live
              </Typography>
              <Typography sx={{ fontFamily, fontWeight: 500, fontSize: "10px", color: "#0F172A", lineHeight: 1.2 }}>
                The Hogist app keeps your crews, shifts, and sites in sync — helping every team check in faster and stay accountable.
              </Typography>
            </Box>
          </Box>

          {/* <Typography
            sx={{
              fontFamily,
              fontSize: "10px",
              color: "#868689",
              mt: 0.5,
              maxWidth: "300px",
            }}
          >
            Operations teams already tracking every shift with Hogist.
          </Typography> */}
        </Box>

        {/* Right: phone mockup */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 250, sm: 290, md: 300 },
                height: { xs: 510, sm: 590, md: 550 },
                borderRadius: "46px",
                border: "10px solid #0F172A",
                bgcolor: "#fff",
                boxShadow: "0 40px 70px rgba(15,23,42,0.25)",
                overflow: "hidden",
                bottom: 20,
              }}
            >
              {/* Dynamic island */}
              <Box
                sx={{
                  position: "absolute",
                  top: 14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "34%",
                  height: 26,
                  bgcolor: "#0F172A",
                  borderRadius: "20px",
                  zIndex: 4,
                }}
              />

              {/* Screen */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "#F7F8FC",
                  px: 2.2,
                  pt: 6,
                  pb: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.6,
                }}
              >
                {/* Top bar */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 0.5 }}>
                  <Avatar src="/src/assets/client-1.webp" sx={{ width: 30, height: 30 }} />
                  <Box sx={{ display: "flex", gap: 1.2, color: "#0F172A" }}>
                    <LuSearch size={16} />
                    <LuBell size={16} />
                  </Box>
                </Box>

                {/* Shift card */}
                <Box
                  sx={{
                    bgcolor: "#3358D3",
                    borderRadius: "18px",
                    p: 1.6,
                    color: "#fff",
                  }}
                >
                  <Typography sx={{ fontFamily, fontWeight: 700, fontSize: "20px", lineHeight: 1 }}>
                    Jan 15
                  </Typography>
                  <Typography sx={{ fontFamily, fontSize: "11px", color: "#DCE4FF", mb: 1 }}>
                    Thursday
                  </Typography>

                  <Box sx={{ bgcolor: "rgba(255,255,255,0.14)", borderRadius: "12px", p: 1, mb: 0.8 }}>
                    <Typography sx={{ fontFamily, fontWeight: 600, fontSize: "11px" }}>
                      OMR — Tech Park
                    </Typography>
                    <Typography sx={{ fontFamily, fontSize: "10px", color: "#DCE4FF" }}>
                      09:15 – 11:45 AM
                    </Typography>
                  </Box>

                  <Box sx={{ bgcolor: "rgba(255,255,255,0.14)", borderRadius: "12px", p: 1 }}>
                    <Typography sx={{ fontFamily, fontWeight: 600, fontSize: "11px" }}>
                      Guindy — Site B
                    </Typography>
                    <Typography sx={{ fontFamily, fontSize: "10px", color: "#DCE4FF" }}>
                      12:45 – 03:00 PM
                    </Typography>
                  </Box>
                </Box>

                {/* Two stat tiles */}
                <Box sx={{ display: "flex", gap: 1.2 }}>
                  <Box
                    sx={{
                      flex: 1,
                      bgcolor: "#0F172A",
                      borderRadius: "16px",
                      p: 1.4,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontFamily, fontWeight: 600, fontSize: "11px", color: "#fff" }}>
                      Need help now?
                    </Typography>
                    <Box
                      sx={{
                        bgcolor: "#fff",
                        color: "#0F172A",
                        borderRadius: "999px",
                        fontFamily,
                        fontWeight: 600,
                        fontSize: "10px",
                        textAlign: "center",
                        py: 0.6,
                        mt: 1,
                      }}
                    >
                      Start chat
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                      bgcolor: "#fff",
                      border: "1px solid #eee",
                      borderRadius: "16px",
                      p: 1.4,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontFamily, fontWeight: 700, fontSize: "17px", color: "#0F172A", lineHeight: 1 }}>
                        21:30
                      </Typography>
                      <Typography sx={{ fontFamily, fontSize: "10px", color: "#868689" }}>
                        Hours logged
                      </Typography>
                    </Box>
                    <LuClock3 size={16} color="#3358D3" style={{ alignSelf: "flex-end" }} />
                  </Box>
                </Box>

                {/* Active lessons / crews */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Typography sx={{ fontFamily, fontWeight: 600, fontSize: "13px", color: "#0F172A" }}>
                    Active crews
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.3, color: "#868689" }}>
                    <Typography sx={{ fontFamily, fontSize: "11px" }}>View all</Typography>
                    <LuChevronRight size={12} />
                  </Box>
                </Box>

                <Box sx={{ bgcolor: "#fff", border: "1px solid #eee", borderRadius: "16px", p: 1.4 }}>
                  <Box sx={{ display: "flex", mb: 1 }}>
                    {["1", "7", "34"].map((n, i) => (
                      <Avatar
                        key={n}
                        src={`/src/assets/client-${n}.webp`}
                        sx={{ width: 22, height: 22, border: "2px solid #fff", ml: i === 0 ? 0 : -1 }}
                      />
                    ))}
                  </Box>
                  <Typography sx={{ fontFamily, fontWeight: 700, fontSize: "13px", color: "#0F172A" }}>
                    Chennai — Plant 4
                  </Typography>
                  <Typography sx={{ fontFamily, fontSize: "10px", color: "#868689", mb: 1 }}>
                    28 staff • 17 hrs today
                  </Typography>
                  <Box sx={{ bgcolor: "#eee", borderRadius: "999px", height: 6, overflow: "hidden" }}>
                    <Box sx={{ width: "70%", height: "100%", bgcolor: "#3358D3" }} />
                  </Box>
                </Box>
              </Box>

              {/* Home indicator */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 8,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "34%",
                  height: 4,
                  borderRadius: "999px",
                  bgcolor: "#0F172A",
                  opacity: 0.6,
                }}
              />
            </Box>
          </motion.div>
        </Box>

        {/* Decorative blur circles */}
        <Box
          sx={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 240,
            height: 240,
            borderRadius: "50%",
            bgcolor: "#3358D3",
            opacity: 0.12,
            filter: "blur(40px)",
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  )
}