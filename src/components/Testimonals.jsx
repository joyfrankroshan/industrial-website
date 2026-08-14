import { Box, Typography } from "@mui/material"
import { motion, easeOut } from "framer-motion"
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
export default function Testtimonals() {
    const Testi = [{
        id: 1,
        name: "R. Kumar",
        role: "HR Manager, Auto Mfg · Sriperumbudur",
        pas: "Reliable shift meals with zero quality drops. Our night-shift complaints simply disappeared.",
        icon: "RK"


    },
    {
        id: 2,
        name: "S. Priya",
        role: "Admin Head, Pharma · Oragadam",
        pas: "Compliance paperwork was ready before every audit. It made our admin job effortless",
        icon: "SP"


    },
    {
        id: 3,
        name: "M. Venkat",
        role: "Plant Admin, Electronics · Ambattur",
        pas: "Scaled from 300 to 900 workers without a single service gap. That's rare",
        icon: "MV"


    }]
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            px: { xs: 2, md: 4 },
            py: { xs: 3, md: 2 },
            gap: { xs: 4, md: 5 }
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Inter Tight, sans-serif",
            }}>
                <Typography sx={{
                    fontSize: { xs: "14px", md: "18px" },
                    color: "#868689",


                }}>
                    TESTIMONIALS
                </Typography>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: easeOut }}
                >
                    <Typography sx={{
                        fontSize: { xs: "28px", sm: "36px", md: "43px" },
                        color: "black",
                        fontWeight: {xs:800,md:600}

                    }}>
                        Industrial zones we serve

                    </Typography>
                </motion.div>

                <Typography sx={{
                    fontSize: { xs: "15px", md: "18px" },
                    color: "#868689",
                    fontWeight: 200,
                    mt: 1,
                    textAlign: { xs: "center" },
                    px: { xs: 2, md: 0 }

                }}>
                    Established operations across Chennai's core manufacturing corridors.



                </Typography>


            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 3, md: 5 },
                flexWrap: "wrap",
                justifyContent: "center",
            }}>
                {Testi.map((testim, i) => {
                    return (
                        <motion.div
                            key={testim.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}>

                            <Box
  sx={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
  px: { xs: 2, sm: 3 },
  py: { xs: 2, sm: 3 },
  width: "100%",
  maxWidth: 340,

  transition: "transform 0.3s ease",

  "&:hover": {
    transform: "translateY(-8px)",
  },
}}>
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    flexDirection: "column"
                                }}>
                                    <Box
                                        sx={{
                                            color: "white", fontWeight: 700, fontSize: "18px", fontFamily: "Inter Tight, sans-serif",
                                            mb: 1, display: "flex", bgcolor: "#3358D3", borderRadius: "50%",
                                            width: 60, height: 60, color: "white",
                                            justifyContent: "center", alignItems: "center"
                                        }}>
                                        {testim.icon}
                                    </Box>
                                    <Typography
                                        sx={{
                                            color: "black", fontWeight: {xs:800,md:600}, fontSize: "20px", fontFamily: "Inter Tight, sans-serif",
                                        }}>
                                        {testim.name}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#868689", fontWeight: 400, fontSize: "15px", fontFamily: "Inter Tight, sans-serif",
                                        }}>
                                        {testim.role}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "black", fontWeight: 400, fontSize: "17px", fontFamily: "Inter Tight, sans-serif",
                                            display: "flex",
                                            justifyContent: "center", px: 2
                                        }}>
                                        {testim.pas}
                                    </Typography>
                                    {/* <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        border: "1px solid #E2E2E2",
        borderRadius: "999px",
        px: 2,
        py: 0.5,
        mt: 1,
    }}>
        {[...Array(5)].map((_, idx) => (
            <StarRateRoundedIcon key={idx} sx={{ color: "#3358D3", fontSize: "22px" }} />
        ))}
    </Box>  */}
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "20px",
                                        gap: 0.5,
                                        border: "1px solid #E2E2E2",
                                        px: 1,
                                        py: 1,
                                        mt: 1,


                                    }}>
                                        {[...Array(5)].map((item, ind) => (
                                            <StarRateRoundedIcon key={ind} sx={{ color: "#3358D3", fontSize: "22px" }} />


                                        ))}

                                    </Box>
                                </Box>

                            </Box>




                        </motion.div>
                    )
                }
                )
                }
            </Box>


        </Box>



    )
}