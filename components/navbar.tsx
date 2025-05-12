"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm font-roboto">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#4a9ced]">
              PremiumCard
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
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
          </div>
        )}
      </div>
    </nav>
  )
}
