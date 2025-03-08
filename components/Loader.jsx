"use client"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import LoaderEffect from "./LoaderEffect"
const Loader = () => {
    const currentPath = usePathname()
  return (
    <>
    <AnimatePresence mode="wait">
    <div  key={currentPath}>
        <div className={`h-screen w-screen top-0 left-0 right-0 pointer-events-none fixed z-90 flex`}>
        <LoaderEffect/>
        </div>
        
        </div>


    </AnimatePresence>
    </>
  )
}

export default Loader