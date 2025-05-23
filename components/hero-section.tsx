"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import CreditCard3D from "@/components/credit-card-3d"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import RegisterForm from "@/components/register-form"

export default function HeroSection() {
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f3ff] to-white py-20 font-roboto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Thẻ tín dụng <span className="text-[#4a9ced]">Premium</span> cho cuộc sống hiện đại
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-xl text-gray-600 max-w-lg"
            >
              Trải nghiệm đặc quyền với thẻ tín dụng cao cấp, tích điểm không giới hạn và ưu đãi độc quyền tại hàng
              nghìn đối tác.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-[#4a9ced] hover:bg-[#3a8ddc] text-white text-lg"
                onClick={() => setIsRegisterFormOpen(true)}
              >
                Đăng ký ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-[#4a9ced] border-[#4a9ced] hover:bg-[#e6f3ff] text-lg"
              >
                Tìm hiểu thêm
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  className="w-10 h-10 rounded-full bg-[#C5E3FD] flex items-center justify-center text-[#4a9ced] font-bold"
                >
                  TH
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                  className="w-10 h-10 rounded-full bg-[#a3d0f9] flex items-center justify-center text-[#4a9ced] font-bold"
                >
                  KL
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                  className="w-10 h-10 rounded-full bg-[#4a9ced] flex items-center justify-center text-white font-bold"
                >
                  MN
                </motion.div>
              </div>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.2 }}
                className="text-gray-600"
              >
                <span className="font-semibold">1000+</span> người đã đăng ký trong tuần qua
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 h-[400px] md:h-[500px] select-none"
          >
            <CreditCard3D />
          </motion.div>
        </div>
      </div>

      {/* Background decorations */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-20 right-0 w-64 h-64 bg-[#C5E3FD] rounded-full blur-3xl"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-10 w-72 h-72 bg-[#a3d0f9] rounded-full blur-3xl"
      ></motion.div>

      {/* Register Form */}
      <RegisterForm 
        isOpen={isRegisterFormOpen} 
        onClose={() => setIsRegisterFormOpen(false)} 
      />
    </section>
  )
}