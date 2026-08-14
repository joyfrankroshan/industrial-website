import {Box, Typography} from "@mui/material"
import { motion, easeOut, useInView, animate } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { LuBadgeCheck, LuSmartphone, LuUserCheck } from "react-icons/lu";

export default function Whyhogist(){
    const datas=[{
        id:1,
        bg:"FSSAI & ISO certified",
        st:"Verifiable certificate numbers on record, ready for your vendor evaluation.",
        icon:LuBadgeCheck
    },
    
{
    id:2,
        bg:"Real-time app tracking",
        st:"Every delivery logged and traceable — full digital accountability on each shift.",
        icon:LuSmartphone

    },
    {
        id:3,
        bg:"Dedicated account manager",
        st:"One point of contact for your contract — no chasing, no handoffs.",
        icon:LuUserCheck
    },
]
const counterRef=useRef(null)
const isInView=useInView(counterRef,{once:true,amount:0.6})
const[count,SetCount]=useState(0)
useEffect(()=>{
  if(isInView){
    const control=animate(0,68,{
      duration:1.6,
      ease:easeOut,
      onUpdate:(value)=>SetCount(Math.round(value)),
    });
    return()=>control.stop()
  }
},[isInView])


    return(
        <Box
        id="why-hogist"
        sx={{
            bgcolor:"#fff",
            px:{xs:3, sm:5, md:9},
            py:{xs:4, md:2},
            display:"flex",
            flexDirection:{xs:"column", md:"row"},
            alignItems:"center",
            justifyContent:"space-between",
                            color:"black"
                            ,
                            gap:{xs:8, md:6},

            

        }}>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-start",
                justifyContent:"center",
                color:"black",
                flex: 1,
                width:"100%"
            }}>
                <Typography sx={{
                                                    fontFamily: "Inter Tight, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  mb:1,
                  paddingRight:{lg:20},
                                                color: "#868689",

                }}>
                    Why Hogist
                </Typography>
                <motion.div
                initial={{opacity:0,x:30
                }}
                whileInView={{opacity:1,x:0}}
                viewport={{once:true,amount:0.}}
                    transition={{ duration: 0.6, ease: easeOut }}
>

                <Typography sx={{
                                                    fontFamily: "Inter Tight, sans-serif",
                  fontWeight: 700,
                 fontSize: {
  xs: "28px",
  sm: "32px",
  md: "38px",
  lg: "43px",
},
                  
                  mb:3,
                  
                }}>
                    Built for industrial-scale reliability
                </Typography>
                </motion.div>
                <Typography sx={{
                fontFamily: "Inter Tight, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      color: "#868689",
    //   paddingLeft:3,
      
                  
                  
                }}>
                    Procurement teams choose us because the things that matter for a long-term contract are already in place.
                </Typography>
                <Box
                ref={counterRef}
  sx={{
    bgcolor: "#3358D3",
    color: "white",
    borderRadius: "20px",
    px: 2,
    py: 3,
    display: "flex",
    alignItems: "center",
    gap: 2,
    mt:3,
    flexWrap:"wrap",
  }}
>
                    <Typography sx={{
                    fontSize:"48px",
                    fontWeight: {xs:800,md:700}}}>
                       {count}%
                    </Typography>
                    <Typography
                    sx={{
                         fontFamily: "Inter Tight, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
paddingBottom: 1
                    }}>
                        of our industrial clients renew their contract every year.
                    </Typography>

                
                
                    </Box>

                </Box>
                
                

            
            <Box sx={{
               display:"flex",
                flexDirection:"column",
                alignItems:{xs:"stretch", md:"flex-end"},
                justifyContent:"center",
                color:"black",
                flex: 1,
                width:"100%",
                gap:{xs:5, md:2},
                
            }}>
               {datas.map((data, index) => {
                const Icon=data.icon
                return(
  <Box
    key={data.id}
    sx={{
      position: "relative",
      width: {xs:"100%", md: index === 1 ? "85%" : "100%"},
      ml: {xs:0, md: index === 1 ? "auto" : 0},
    }}
  >
    {/* Icon Placeholder */}
    <Box
      sx={{
        position: "absolute",
        left: {xs: "95px", sm: "-25px"},
        top: {xs: "7px", sm: "50%"},
        transform: {xs:"translateY(0)", sm:"translateY(-50%)"},
        width: {xs:50, sm:60},
        height: {xs:50, sm:60},
        bgcolor: "#3358D3",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: 30,
        boxShadow: "0 8px 20px rgba(0,0,0,.12)",
      }}
    >
      <Icon/>
    </Box>

    {/* Card */}
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: "20px",
        px: {xs:3, sm:4},
        py: 4,
        pt: {xs:9, sm:4},
        pl: {xs:3, sm:10},
        boxShadow: "0 12px 30px rgba(0,0,0,.06)",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Inter Tight, sans-serif",
          fontWeight: {xs:800,md:600},
          fontSize: "20px",
          mb: 1,
        }}
      >
        {data.bg}
      </Typography>

      <Typography
        sx={{
          fontFamily: "Inter Tight, sans-serif",
          fontWeight: 500,
          fontSize: "16px",
          color: "#868689",
          
        }}
      >
        {data.st}
      </Typography>
    </Box>
  </Box>
               )})}
               
                </Box>
                
            
            </Box>
            
            

       

    )
}