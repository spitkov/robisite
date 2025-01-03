'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import BlurCircles from '../components/BlurCircles'
import Navbar from '../components/Navbar'

export default function About() {
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

      <div className="min-h-screen flex flex-col justify-start md:justify-between px-4 sm:px-8 py-24 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full text-center mt-0 md:mt-20"
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-8">
            About Robisoft
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-16">
            Robisoft is a small &quot;company&quot; that makes random projects
          </p>
          
          <div className="mt-16">
            <h2 className="text-3xl font-medium mb-8">What Dan (Owner) is doing:</h2>
            <div className="inline-block">
              <motion.img 
                src="https://lanyard.cnrad.dev/api/1245050169398132787" 
                alt="Discord Activity"
                className="rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-7xl mx-auto w-full"
        >
          <p className="text-gray-400">
            Huge thanks and credit to{' '}
            <a 
              href="https://spitkov.wtf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FF8A00] hover:underline"
            >
              spitkov
            </a>
            {' '}for making the website.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 