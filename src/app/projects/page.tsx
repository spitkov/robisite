'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import BlurCircles from '../components/BlurCircles'
import Navbar from '../components/Navbar'

export default function Projects() {
  return (
    <div className="relative min-h-screen w-full">
      <BlurCircles />
      <Navbar />

      <div className="min-h-screen flex flex-col justify-center px-4 sm:px-8 gap-16 sm:gap-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full pt-20 sm:pt-0"
        >
          <div className="flex flex-col items-start justify-between">
            <div className="max-w-3xl w-full">
              <h1 className="text-4xl sm:text-7xl font-bold mb-4 sm:mb-8">
                Introducing<br />Expedition
              </h1>
              <p className="text-base sm:text-xl text-gray-400 max-w-2xl">
                Expedition is a Roblox game that is about opening doors and trying to survive monsters. It shouldn't be played by users with epilepsy.
              </p>
              <div className="coming-soon mt-4">Coming Soon.</div>
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
              <h2 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-8">
                Our main project:<br />MonarchOS
              </h2>
              <p className="text-base sm:text-xl text-gray-400">
                MonarchOS is a project based on Android and Arch Linux. It has useful features like Hyper.Dot and a unique design that has never been seen before
              </p>
              <div className="coming-soon mt-4">Coming Soon</div>
            </div>
            <div className="w-full lg:w-auto mt-8 lg:mt-0">
              <Image 
                src="/monarchos.png" 
                alt="MonarchOS Logo" 
                width={400} 
                height={400}
                className="w-full max-w-[300px] lg:max-w-[350px] h-auto mx-auto"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 