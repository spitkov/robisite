'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
          <p className="text-xl md:text-2xl text-[#8491A0]">
            The home of random projects.
          </p>
        </motion.div>
      </section>

      <section className="min-h-screen flex flex-col justify-center px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Our main project:<br />MonarchOS</h2>
              <p className="text-xl md:text-2xl text-[#8491A0]">
                MonarchOS is a project based on Android and Arch Linux. It has useful features like Hyper.Dot and a unique design that has never been seen before
              </p>
              <div className="coming-soon">COMING SOON</div>
            </div>
            <div className="relative">
              <Image 
                src="/monarchos.png" 
                alt="MonarchOS Logo" 
                width={400} 
                height={400}
                className="w-auto h-auto max-w-[300px]"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="min-h-screen flex flex-col justify-center px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Robisoft Reimagined</h2>
          <p className="text-xl md:text-2xl text-[#8491A0] max-w-2xl">
            A place where we announce new stuff coming our way,<br />
            happens at every year's end.
          </p>
          <div className="coming-soon">COMING SOON</div>
        </motion.div>
      </section>
    </div>
  )
}
