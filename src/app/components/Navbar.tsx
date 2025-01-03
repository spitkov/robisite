'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
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
          <div className="flex items-center space-x-8">
            {[
              ['HOME', '/'],
              ['PROJECTS', '/projects'],
              ['ABOUT', '/about'],
              ['DISCORD', 'https://discord.gg/T8sYvQ6zhg']
            ].map(([label, path]) => (
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
        </div>
      </div>
    </nav>
  )
} 