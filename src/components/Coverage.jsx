import {Box,Typography} from "@mui/material"
export default function Coverage(){
    const FONT = "Inter Tight, sans-serif";
const BRAND_BLUE = "#3358D3";
const cover=[{
    id:1,
    place:"Sriperumbudur",
    special:"Auto & electronics factories since 2018"
},
{
    id:2,
    place:"Oragadam",
    special:"Auto & electronics factories since 20Automotive & pharma manufacturing hub"
},
{
    id:3,
    place:"Ambattur",
    special:"Chennai's largest industrial estate",
},
{
    id:4,
    place:"Manali",
    special:"Petrochemical & heavy industry belt",
},
{
    id:5,
    place:"Irungattukottai",
    special:"SIPCOT auto & component units",

},
{
    
        id:6,
        place:"Thiruvallur",
        special:"Textile & engineering clusters",
    
    
},
{
    id:7,
    place:"Kancheepuram",
    special:"Garment & light manufacturing",

},
{
    id:8,
    place:"SIPCOT",
    special:"Multi-sector industrial parks",

},
{
    id:9,
    place:"MEPZ",
    special:"Export processing & electronics zone",

}]
    return(
        <Box sx={{
            dipaly:"flex",
            justifyContent:"space-between",
            gap:2,
            alignItems:"center",
            color:"black",
            py:2,
            px:2,


        }}>
            <Box sx={{
                display:"flex",
                justifyContent:"flex-start",
                flexDirection:"column",
                alignItems:"center",
                py:2,
                px:2,
                gap:2
            }}>
                <Typography
                sx={{
                    fontFamily: FONT,
                    fontSize:"14px",
                    color:BRAND_BLUE,

                }}>
                    COVERAGE
                </Typography>
                <Typography
                sx={{
                    fontFamily: FONT,
                    fontSize:"40px",
                    color:"black",
                    fontWeight:700

                }}>
                    INDUSTRIAL ZONES WE SERVE
                </Typography>
                <Typography
                sx={{
                    fontFamily: FONT,
                    fontSize:"18px",
                    color: "#797e88",
                    fontWeight:300

                }}>
                    Established operations across Chennai's core manufacturing corridors.

                </Typography>
            </Box>
            <Box>
                
            </Box>
           
           


        </Box>
    )
}