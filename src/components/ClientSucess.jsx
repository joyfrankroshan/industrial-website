import { Box, Divider, Typography } from "@mui/material"
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { motion } from "framer-motion";

export default function ClientSucess() {
    const success = [{
        id: 1,
        sm: "Auto parts · Sriperumbudur",
        Challenge: " 3-shift meals for 800 workers",
        Solution: "Shift-specific menus + app tracking",
        move: "Zero canteen complaints in 6 months"
    },
    {
        id: 2,
        sm: "Pharma unit · Oragadam",
        Challenge: "Strict hygiene & dietary compliance",
        Solution: "FSSAI-audited kitchen, custom menus",
        move: "Passed every quarterly audit"
    }
    ]
    return (
        <Box sx={{
            px: { xs: 2, sm: 3 },
            py: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <Box sx={{
                color: "",
                width: "100%",
                textAlign: { xs: "center", }
            }}>
                <Typography sx={{
                    color: "black", fontWeight: 400, fontSize: "16px", fontFamily: "Inter Tight, sans-serif",
                    mb: 1,color:"#868689"

                }}>
                    CLIENT SUCCESS

                </Typography>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Typography sx={{
                        color: "black", fontWeight: {xs:800,md:700}, fontSize: { xs: "28px", sm: "34px", md: "40px" }, fontFamily: "Inter Tight, sans-serif",
                        mb: 1,

                    }}>
                        PROVEN ACROSS CHENNAI'S INDUSTRIES

                    </Typography>
                </motion.div>

                <Typography sx={{
                    color: "#868689", fontWeight: 200, fontSize: "18px", fontFamily: "Inter Tight, sans-serif",
                    mb: 3, pl: { xs: 0, md: 10 },

                }}>
                    Real deployments, real operational outcomes.


                </Typography>



            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 3,
                flexWrap: "wrap",
                justifyContent: "center",
            }}>
                {success.map((succes, i) => {
                    return (

                        <motion.div
                            key={succes.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                        >

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    bgcolor: "white",
                                    borderRadius: "10px",
                                    boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                    py: 3,
                                    px: { xs: 3, sm: 10 },
                                    width: "100%",
                                    maxWidth: 620,
                                    mb: 4,
                                }}>

                                <Typography sx={{
                                    color: "black", fontWeight: {xs:800,md:600}, fontSize: "20px", fontFamily: "Inter Tight, sans-serif",
                                    mb: 1,

                                }}>
                                    {succes.sm}


                                </Typography>
                                <Typography sx={{
                                    color: "#868689", fontWeight: 200, fontSize: "18px", fontFamily: "Inter Tight, sans-serif",
                                    mb: 1,
                                    display: "flex",
                                    gap: 2


                                }}>

                                    <Typography sx={{
                                        color: "black", fontWeight: 700, fontSize: "18px", fontFamily: "Inter Tight, sans-serif",
                                        mb: 1,


                                    }}> Challenge:</Typography>{succes.Challenge}

                                </Typography>
                                <Typography sx={{
                                    color: "#868689", fontWeight: 200, fontSize: "18px", fontFamily: "Inter Tight, sans-serif",
                                    mb: 1, display: "flex", gap: 2

                                }}>
                                    <Typography sx={{
                                        color: "black", fontWeight: 700, fontSize: "18px", fontFamily: "Inter Tight, sans-serif",
                                        mb: 1,


                                    }}> Solution:</Typography>{succes.Solution}

                                </Typography>
                                <Divider></Divider>
                                <Typography
                                    sx={{
                                        color: "#3358D3",
                                        fontWeight: 600,
                                        fontSize: "18px",
                                        mt: 2,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <ArrowForwardOutlinedIcon sx={{ color: "#3358D3", fontSize: "18px", }} />
                                    {succes.move}
                                </Typography>
                            </Box>


                        </motion.div>

                    )
                })}
            </Box>
        </Box>


    )
}