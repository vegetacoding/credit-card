"use client"

import { Button } from "@/components/ui/button"
import CreditCard3D from "@/components/credit-card-3d"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f3ff] to-white py-20 font-roboto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Thẻ tín dụng <span className="text-[#4a9ced]">Premium</span> cho cuộc sống hiện đại
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-lg">
              Trải nghiệm đặc quyền với thẻ tín dụng cao cấp, tích điểm không giới hạn và ưu đãi độc quyền tại hàng
              nghìn đối tác.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#4a9ced] hover:bg-[#3a8ddc] text-white text-lg">
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
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#C5E3FD] flex items-center justify-center text-[#4a9ced] font-bold">
                  TH
                </div>
                <div className="w-10 h-10 rounded-full bg-[#a3d0f9] flex items-center justify-center text-[#4a9ced] font-bold">
                  KL
                </div>
                <div className="w-10 h-10 rounded-full bg-[#4a9ced] flex items-center justify-center text-white font-bold">
                  MN
                </div>
              </div>
              <p className="text-gray-600">
                <span className="font-semibold">1000+</span> người đã đăng ký trong tuần qua
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 h-[400px] md:h-[500px] select-none">
            <CreditCard3D />
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#C5E3FD] rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#a3d0f9] rounded-full opacity-40 blur-3xl"></div>
    </section>
  )
}
