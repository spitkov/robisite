'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const getSpreadPositions = (isMobile: boolean) => {
  const sections = isMobile ? [
    { xRange: [0, 40], yRange: [10, 30] },    // Top
    { xRange: [20, 60], yRange: [40, 60] },   // Middle
    { xRange: [0, 40], yRange: [70, 90] },    // Bottom
  ] : [
    { xRange: [5, 30], yRange: [10, 40] },    // Top left
    { xRange: [60, 85], yRange: [10, 40] },   // Top right
    { xRange: [30, 60], yRange: [50, 70] },   // Middle
  ]

  const shuffledSections = [...sections].sort(() => Math.random() - 0.5)

  return shuffledSections.map(section => ({
    x: section.xRange[0] + Math.random() * (section.xRange[1] - section.xRange[0]),
    y: section.yRange[0] + Math.random() * (section.yRange[1] - section.yRange[0])
  }))
}

export default function BlurCircles() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [positions, setPositions] = useState([
    { x: 20, y: 20 },
    { x: 60, y: 20 },
    { x: 40, y: 60 }
  ])

  const { scrollYProgress } = useScroll()
  
  const circle1Y = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "60%" : "100%"])
  const circle2Y = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-40%" : "-80%"])
  const circle3Y = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "80%" : "120%"])

  const circle1X = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", isMobile ? "20%" : "30%", isMobile ? "-20%" : "-30%"])
  const circle2X = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", isMobile ? "-25%" : "-40%", isMobile ? "25%" : "40%"])
  const circle3X = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", isMobile ? "30%" : "50%", isMobile ? "-30%" : "-50%"])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    setMounted(true)
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    setPositions(getSpreadPositions(isMobile))
  }, [isMobile])

  const floatingAnimation = {
    x: [0, isMobile ? 15 : 30, isMobile ? -15 : -30, 0],
    y: [0, isMobile ? -15 : -30, isMobile ? 15 : 30, 0],
    transition: {
      duration: isMobile ? 10 : 15,
      repeat: Infinity,
      ease: "linear"
    }
  }

  if (!mounted) return null

  const circleClasses = {
    large: isMobile ? "w-[200px] h-[200px]" : "w-[400px] h-[400px]",
    medium: isMobile ? "w-[175px] h-[175px]" : "w-[350px] h-[350px]",
    small: isMobile ? "w-[150px] h-[150px]" : "w-[300px] h-[300px]",
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        layoutId="circle1"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.6,
          scale: [1, 1.2, 0.8, 1],
          rotate: [0, 180, -180, 0],
        }}
        transition={{ 
          duration: 1, 
          layout: { duration: 0.8 },
          rotate: { duration: 0.8 }
        }}
        style={{
          left: `${positions[0].x}%`,
          top: `${positions[0].y}%`,
          y: circle1Y,
          x: circle1X
        }}
        className={`absolute rounded-full bg-[#FF6B00] blur-circle ${circleClasses.large}`}
      >
        <motion.div 
          className="w-full h-full"
          animate={floatingAnimation}
        />
      </motion.div>
      <motion.div
        layoutId="circle2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.6,
          scale: [1, 1.2, 0.8, 1],
          rotate: [0, 180, -180, 0],
        }}
        transition={{ 
          duration: 1, 
          delay: 0.2, 
          layout: { duration: 0.8 },
          rotate: { duration: 0.8, delay: 0.1 }
        }}
        style={{
          left: `${positions[1].x}%`,
          top: `${positions[1].y}%`,
          y: circle2Y,
          x: circle2X
        }}
        className={`absolute rounded-full bg-[#FFD600] blur-circle ${circleClasses.small}`}
      >
        <motion.div 
          className="w-full h-full"
          animate={{
            ...floatingAnimation,
            transition: {
              ...floatingAnimation.transition,
              delay: 0.2
            }
          }}
        />
      </motion.div>
      <motion.div
        layoutId="circle3"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.5,
          scale: [1, 1.2, 0.8, 1],
          rotate: [0, 180, -180, 0],
        }}
        transition={{ 
          duration: 1, 
          delay: 0.4, 
          layout: { duration: 0.8 },
          rotate: { duration: 0.8, delay: 0.2 }
        }}
        style={{
          left: `${positions[2].x}%`,
          top: `${positions[2].y}%`,
          y: circle3Y,
          x: circle3X
        }}
        className={`absolute rounded-full bg-[#FF9900] blur-circle ${circleClasses.medium}`}
      >
        <motion.div 
          className="w-full h-full"
          animate={{
            ...floatingAnimation,
            transition: {
              ...floatingAnimation.transition,
              delay: 0.4
            }
          }}
        />
      </motion.div>
    </div>
  )
} 