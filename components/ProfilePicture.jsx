"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profileImage from "@/assets/fahad2.png";

const ProfilePicture = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, ease: "easeIn", duration: 0.4 },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, ease: "easeInOut", duration: 0.4 },
          }}
          className="w-40 h-40 xl:h-72 xl:w-72 left-8 mix-blend-lighten absolute"
        >
          <Image
            className="object-contain"
            priority
            quality={100}
            alt="Fahad"
            src={profileImage}
          />
        </motion.div>
        <motion.svg
          className="w-52 h-52 xl:h-[22rem] xl:w-[22rem]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth={'4'}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
                strokeDasharray: ['15 120 25 25','16 25 92 72','4 250 22 22'],
                rotate:[120,360]
            }}
            transition={{
                duration:20,
                repeat:Infinity,
                repeatType:'reverse'
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default ProfilePicture;
