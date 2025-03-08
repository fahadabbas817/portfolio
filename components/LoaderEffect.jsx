
import { motion } from "framer-motion"

const LoaderEffect = () => {
    const stairsAnimation = {
        inital:{
            top: "0%"
        },
        animate:{
            top:"100%"
        },
        exit:{
            top: ["100%","0%"]
        }

    }
    const indexCalculator = (index) =>{
        const totalSteps = 7;
        return totalSteps - index -1
    }
  return (
   <>
   {[...Array(7)].map((_, index)=>{
   return <motion.div key={index} variants={stairsAnimation} inital="inital" exit="exit" animate="animate" transition={{
        duration: 0.4,
        ease: "easeInOut",
        delay: indexCalculator(index) * 0.1
    }}
    className="h-full w-full bg-white relative" />
   })}

   </>
  )
}

export default LoaderEffect