'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import BlurCircles from './components/BlurCircles'
import Navbar from './components/Navbar'

export default function Home() {
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

      <section className="min-h-screen flex flex-col justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-6">
            Welcome to<br />Robisoft.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">
            I'm Dan
          </p>
        </motion.div>
      </section>
    </div>
  )
}
