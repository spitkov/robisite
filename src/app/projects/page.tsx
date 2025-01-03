'use client'

import { motion } from 'framer-motion'
import BlurCircles from '../components/BlurCircles'
import Navbar from '../components/Navbar'

export default function Projects() {
  return (
    <div className="relative min-h-screen w-full">
      <BlurCircles />
      <Navbar />

      <div className="min-h-screen flex flex-col justify-center px-8 gap-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="flex items-start justify-between">
            <div className="max-w-2xl">
              <h1 className="text-7xl font-bold mb-8">
                Introducing<br />Expedition
              </h1>
              <p className="text-xl text-gray-400">
                Expedition is a Roblox game that is about opening doors and trying to survive monsters. It shouldn't be played by users with epilepsy.
              </p>
              <div className="coming-soon">Coming Soon.</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="flex items-start justify-between">
            <div className="max-w-2xl">
              <h2 className="text-7xl font-bold mb-8">
                Random stuff
              </h2>
              <p className="text-xl text-gray-400">
                As the name suggests, random stuff that is not meant to be seen by the world.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 