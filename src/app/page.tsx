'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const circle1Y = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "120%", "-50%"])
  const circle1X = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "30%", "-30%"])
  
  const circle2Y = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-80%", "100%"])
  const circle2X = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-40%", "40%"])
  
  const circle3Y = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "70%", "-120%"])
  const circle3X = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "50%", "-20%"])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="relative min-h-screen w-full smooth-scroll" ref={containerRef}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          style={{ y: circle1Y, x: circle1X }}
          transition={{ duration: 1 }}
          className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#FF6B00] blur-circle"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          style={{ y: circle2Y, x: circle2X }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-[20%] left-[30%] w-[300px] h-[300px] rounded-full bg-[#FFD600] blur-circle"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          style={{ y: circle3Y, x: circle3X }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-[50%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#FF9900] blur-circle"
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image 
                src="/robisoft.png" 
                alt="Robisoft Logo" 
                width={150} 
                height={36} 
                className="h-9 w-auto"
              />
            </div>
            <div className="flex items-center space-x-8">
              {[
                ['HOME', 'home'],
                ['PROJECTS', 'projects'],
                ['ABOUT', 'about'],
                ['DISCORD', 'https://discord.gg/T8sYvQ6zhg']
              ].map(([label, target]) => (
                <motion.button
                  key={label}
                  onClick={() => target.startsWith('http') ? window.open(target, '_blank') : scrollToSection(target)}
                  className="hover-underline text-white text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex flex-col justify-center px-8">
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
            The home of random projects.
          </p>
        </motion.div>
      </section>

      <section id="projects" className="min-h-screen flex flex-col justify-center px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Our main project:<br />MonarchOS</h2>
              <p className="text-xl md:text-2xl text-gray-400">
                MonarchOS is a project based on Android and Arch Linux. It has useful features like Hyper.Dot and a unique design that has never been seen before
              </p>
              <div className="coming-soon text-base">COMING SOON</div>
            </div>
            <div className="relative">
              <Image 
                src="/monarchos.png" 
                alt="MonarchOS Logo" 
                width={400} 
                height={400}
                className="w-auto h-auto"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="min-h-screen flex flex-col justify-center px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Robisoft Reimagined</h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
            A place where we announce new stuff coming our way,<br />
            happens at every year's end.
          </p>
          <div className="coming-soon text-base">COMING SOON</div>
        </motion.div>
      </section>
    </div>
  )
}
