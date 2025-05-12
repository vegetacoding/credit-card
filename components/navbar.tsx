"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm font-roboto"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="text-2xl font-bold text-[#4a9ced]">
              PremiumCard
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <Link href="#features" className="text-gray-700 hover:text-[#4a9ced] transition-colors">
              Tính năng
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-[#4a9ced] transition-colors">
              Phí & Lãi suất
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-[#4a9ced] transition-colors">
              Đánh giá
            </Link>
            <Button className="bg-[#4a9ced] hover:bg-[#3a8ddc] text-white">Đăng ký ngay</Button>
          </motion.div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 space-y-4"
            >
              <Link
                href="#features"
                className="block text-gray-700 hover:text-[#4a9ced] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tính năng
              </Link>
              <Link
                href="#pricing"
                className="block text-gray-700 hover:text-[#4a9ced] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Phí & Lãi suất
              </Link>
              <Link
                href="#testimonials"
                className="block text-gray-700 hover:text-[#4a9ced] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Đánh giá
              </Link>
              <Button className="w-full bg-[#4a9ced] hover:bg-[#3a8ddc] text-white">Đăng ký ngay</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
