"use client"
import React from 'react'
import CountUp from 'react-countup'
const Stats = () => {
    const stats= [
        {
            num:20,
            text:"Projects Completed"
        },
        {
            num:13,
            text:"Hackathon Participation"
        },
        {
            num:120,
            text:"LeetCode Problems"
        },
        {
            num:5,
            text:"Years of experience"
        },
    ]
  return (
    <div className='container mx-auto '>
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
        {stats.map((stat,index)=>{
            return <div className='flex-1 flex gap-4 items-center justify-center xl:justify-start' key={index}>
                <CountUp end={stat.num} className='text-4xl xl:text-6xl font-extrabold' duration={5} delay={2}  />
                <p className='text-white/60'>{stat.text}</p>
            </div>
        })}
        </div>
    </div>
  )
}

export default Stats