"use client";
import React from "react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
const page = () => {
  const services = [
    {
      num: "01",
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
      href: "",
    },
    {
      num: "02",
      title: "App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
      href: "",
    },
    {
      num: "03",
      title: "UX UI",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
      href: "",
    },
    {
      num: "04",
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
      href: "",
    },
  ];
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.3, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex-col justify-center gap-6 group"
              >
                <div className=" w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {service.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white
                  group-hover:bg-accent transition-all duration-500 flex
                    justify-center items-center hover:-rotate-45"
                    href={service.href} 
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="separator border-b border-w/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default page;
