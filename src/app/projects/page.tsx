'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import BlurCircles from '../components/BlurCircles'
import Navbar from '../components/Navbar'

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-black">
        <Navbar />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen w-full bg-black">
      <BlurCircles />
      <Navbar />

      <div className="pt-32 min-h-screen flex flex-col justify-start gap-16 sm:gap-32 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="flex flex-col items-start justify-between">
            <div className="max-w-3xl w-full">
              <h1 className="text-4xl sm:text-[72px] font-bold leading-tight mb-4 sm:mb-8">
                Introducing<br />Expedition
              </h1>
              <p className="text-base sm:text-xl text-[#8491A0] max-w-2xl">
                Expedition is a Roblox game that is about opening doors and trying to survive monsters. It shouldn&apos;t be played by users with epilepsy.
              </p>
              <div className="text-xs uppercase tracking-widest text-[#8491A0] mt-8">Coming Soon.</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
            <div className="max-w-2xl w-full">
              <h2 className="text-4xl sm:text-[56px] font-bold leading-tight mb-4 sm:mb-8">
                Our main project:<br />MonarchOS
              </h2>
              <p className="text-base sm:text-xl text-[#8491A0]">
                MonarchOS is a project based on Android and Arch Linux. It has useful features like Hyper.Dot and a unique design that has never been seen before
              </p>
              <div className="text-xs uppercase tracking-widest text-[#8491A0] mt-8">Coming Soon</div>
            </div>
            <div className="w-full lg:w-auto mt-8 lg:mt-0 flex items-center justify-center lg:justify-end">
              <Image 
                src="/monarchos.png" 
                alt="MonarchOS Logo" 
                width={400} 
                height={400}
                className="w-full max-w-[300px] lg:max-w-[300px] h-auto"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 