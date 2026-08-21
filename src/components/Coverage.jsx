import { Box, Typography } from "@mui/material"
import { motion, easeOut } from "framer-motion"

export default function Coverage() {
    const fontFamily = "Poppins, sans-serif";
    const BRAND_BLUE = "#3358D3";

    const cover = [
        { id: 1, place: "SRIPERUMBUDUR", special: "Auto & electronics factories since 2018" },
        { id: 2, place: "ORAGADAM", special: "Automotive & pharma manufacturing hub" },
        { id: 3, place: "AMBATTUR", special: "Chennai's largest industrial estate" },
        { id: 4, place: "MANALI", special: "Petrochemical & heavy industry belt" },
        { id: 5, place: "IRUNGATTUKOTTAI", special: "SIPCOT auto & component units" },
        { id: 6, place: "THIRUVALLUR", special: "Textile & engineering clusters" },
        { id: 7, place: "KANCHEEPURAM", special: "Garment & light manufacturing" },
        { id: 8, place: "SIPCOT", special: "Multi-sector industrial parks" },
        { id: 9, place: "MEPZ", special: "Export processing & electronics zone" },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                px: 2,
                py: 3,
                gap: 5
            }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
            }}>
                <Typography sx={{
                    fontFamily, fontSize: "16px",
                    color: "#868689"
                }}> COVERAGE</Typography>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: easeOut }}>
                    <Typography sx={{
                        fontFamily, fontSize: { xs: "28px", sm: "34px", md: "43px" }, fontWeight: 700, textAlign: "center"
                    }}> Industrial zones we serve</Typography>
                </motion.div>

                <Typography sx={{
                    fontFamily, fontSize: "18px", fontWeight: 300, textAlign: "center",
                    color: "#868689"
                }}> Established operations across Chennai's core manufacturing corridors.
                </Typography>
            </Box>

            <Box sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr 1fr",
                    sm: "1fr 1fr 1fr"
                },
                gap: 2,
                width: { xs: "100%", sm: "90%", md: "90%" }
            }}>
                {cover.map((cov, i) => (
                    <motion.div
                        key={cov.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
                        style={{ height: "100%" }}
                    >
                        <Box
                            sx={{
                                bgcolor: "white",
                                boxShadow: 5,
                                borderRadius: "10px",
                                px: { xs: 1, md: 2 },
                                py: { xs: 1, md: 1 },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: 1,
                                height: {  sm: "90px" },
                                minHeight: { xs: "auto", sm: "100px" },
                                width: "100%",
                                boxSizing: "border-box",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                },
                            }}>
                            <Typography sx={{
                                fontSize: { xs: "10px",sm:"15px",md: "20px" },
                                fontFamily,
                                fontWeight: { xs: 800, md: 550 },
                                color: BRAND_BLUE,
                            }}>
                                {cov.place}
                            </Typography>
                            <Typography sx={{
                                fontSize: { xs: "10px",sm:"12px", md: "15px" },
                                fontWeight: 700,
                                fontFamily,
                                
                            }}>
                                {cov.special}
                            </Typography>
                        </Box>
                    </motion.div>
                ))}
            </Box>
        </Box>
    )
}