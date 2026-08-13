import {Box,Typography} from "@mui/material"
import {motion} from "framer-motion";

export default function Services(){
    const services=[
        {
            id:1,
            title:"Shift-wise meal delivery",
            description:"Morning, afternoon and night meal cycles synced to your factory's shift roster.",
            icon:"01"

        }
        ,
        
            {
            id:2,
            title:"Bulk canteen management",
            description:"Scalable from 500 to 5,000+ workers with full kitchen operations on-site.",
            icon:"02"

        },
        {
            id:3,
            title:"Customised menu planning",
            description:"South Indian, North Indian, diabetic-friendly and Jain options for every workforce.",
            icon:"03"

        },
        {
            id:4,
            title:"Hygiene & FSSAI compliance",
            description:"Audited kitchens with complete compliance documentation ready for inspection..",
            icon:"04"

        },
        {
            id:5,
            title:"On-site & off-site catering",
            description:"Tiffin delivery for units without a kitchen, or full on-premise kitchen setup.",
            icon:"05"

        },
        {
            id:6,
            title:"Event & guest meals",
            description:"Plant inaugurations, audits and board visits catered at short notice.",
            icon:"06"

        }
        
    ]
    return(
        
        <Box sx={{
            // display:"flex",
            // flexDirection:{xs:"column",md:"row"},
            // justifyContent:"center",
            bgcolor:"#fff",      // was "black"
    color:"#0F172A",
            px:{xs:2,md:16},
            py:{xs:4,md:6},
            // gap:{xs:2,md:6},
        }}>
            <Box sx={{
                textAlign:"center",
                maxWidth:700,
                mx:"auto",
                mb:{xs:5,md:8},
            }}
            >
                {/* <motion.div
            initial={{opacity:0,x:-30}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.5,ease:"easeOut"}}
            > */}
                <Typography sx={{
                   fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              fontFamily: "Inter Tight, sans-serif",
                }}
                >
                    CARE FEATURES
          </Typography>
            {/* </motion.div> */}
            <motion.div
            initial={{opacity:0,x:30}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.6,delay:0.1,ease:"easeOut"}}
            >
                <Typography component="h2"
                sx={{
                    fontSize: { xs: "28px", md: "43px" },
              fontWeight: 700,
              fontFamily: "Inter Tight, sans-serif",
              lineHeight: 1.2,
              mt: 1,
                }}
                >Provide Awesome Service With Our Tools
          </Typography>
        </motion.div>

            
            <Typography sx={{
               fontSize: "15px",
              fontWeight: 400,
              fontFamily: "Inter Tight, sans-serif",
              
              mt: 2,
            }}>
                From single-shift tiffin delivery to full on-site canteen management — built to scale with your headcount.
            </Typography>
            </Box>
            

            <Box sx={{
                display:"grid",
                gridTemplateColumns:{xs:"1fr",sm:"1fr 1fr",md:"1fr 1fr 1fr"},
                gap:{xs:3,md:4},
                

            }}>
               

                
                {services.map((service,i)=>(
                    <motion.div 
            
            key={service.id}
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true,amount:0.3}}
            transition={{duration:0.5,delay:i*0.08,ease:"easeOut"}}
            style={{height:"100%"}}
                    >

                  
                     <Box key={service.id} sx={{
                    border: "1px solid #fff",
    boxShadow: "0 12px 32px rgba(15, 23, 42, 0.12)",
                    borderRadius: "16px",
                    display:"flex",
                    flexDirection:"column",
                    overflow:"hidden",
                    height:"100%",
                     transition: "box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease",
                    "&:hover": {
                  boxShadow: "0 28px 56px rgba(51, 88, 211, 0.22)",
                  transform: "translateY(-8px)",
                    }
                   
                   
                    

                }}>
                    <Box sx={{ p: { xs: 4, md: 5 }, pb: 3, flexGrow: 1 }}>
                   
                    <Box 
                    sx={{
                        width: 70,
                  height: 70,
                  borderRadius: "12px",
                  bgcolor: "rgba(51, 88, 211, 0.08)",
                  color: "#3358D3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  
                  
                  mb: 3,
                        "&:hover":{
                            bgcolor: "#3358D3",
                            color: "#fff",
                            transition: "background-color 0.3s ease, color 0.3s ease",
                        },
                         }}
                        >

                            <Typography sx={{
                                fontFamily: "Inter Tight, sans-serif",
                  fontWeight: {xs:800,md:500},
                  fontSize: "24px"
                            }}>{service.icon}</Typography>
                        </Box>
                        <Typography sx={{
                            fontSize: "19px",
                  fontWeight: 700,
                  fontFamily: "Inter Tight, sans-serif",
                  mb: 1.5,
                        }}>
                            {service.title}

                        </Typography>
                        <Typography
  sx={{
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Inter Tight, sans-serif",
    color: "#64748B",
    lineHeight: 1.6,
    flexGrow: 1,
  }}
>
  {service.description}
</Typography>
</Box>

<Box
  sx={{
    display: "flex",
      alignItems: "center",
     bgcolor: "#3358D3",
    color: "#fff",
    
    px: 3,
    py: 2.5,
    mt: 3,
    fontFamily: "Inter Tight, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    
  }}
>
  Learn More
  
</Box>
                        
                        
                        
                        
                   
                       
                        </Box>
                          </motion.div>
                        
                ))}

            </Box>
            
            

            
       


        </Box>
    )}

