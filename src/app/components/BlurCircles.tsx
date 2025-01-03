'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function BlurCircles() {
  const { scrollYProgress } = useScroll()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const circle1Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const circle2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])
  const circle3Y = useTransform(scrollYProgress, [0, 1], ["0%", "120%"])

  if (!isLoaded) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        style={{ y: circle1Y }}
        className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#FF6B00] blur-circle"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        style={{ y: circle2Y }}
        className="absolute bottom-[20%] left-[30%] w-[300px] h-[300px] rounded-full bg-[#FFD600] blur-circle"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        style={{ y: circle3Y }}
        className="absolute top-[50%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#FF9900] blur-circle"
      />
    </div>
  )
} 