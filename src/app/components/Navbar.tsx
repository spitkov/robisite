'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    ['HOME', '/'],
    ['PROJECTS', '/projects'],
    ['ABOUT', '/about'],
    ['DISCORD', 'https://discord.gg/T8sYvQ6zhg']
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
    },
    open: {
      opacity: 1,
      y: 0,
    }
  }

  return (
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(([label, path]) => (
              path.startsWith('http') ? (
                <motion.a
                  key={label}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline text-white text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                </motion.a>
              ) : (
                <Link key={label} href={path}>
                  <motion.span
                    className="hover-underline text-white text-sm font-medium cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {label}
                  </motion.span>
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-white rounded-full"
                animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white rounded-full"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white rounded-full"
                animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute left-0 right-0 top-full mt-2 px-8 py-4 bg-white/80 backdrop-blur-md pointer-events-auto"
            >
              <div className="flex flex-col space-y-4">
                {menuItems.map(([label, path]) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {path.startsWith('http') ? (
                      <a
                        href={path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black text-sm font-medium block"
                        onClick={() => setIsOpen(false)}
                      >
                        {label}
                      </a>
                    ) : (
                      <Link href={path}>
                        <span
                          className="text-black text-sm font-medium block"
                          onClick={() => setIsOpen(false)}
                        >
                          {label}
                        </span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
} 