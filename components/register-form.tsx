"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, User, Mail, Phone, CreditCard, CheckCircle2 } from "lucide-react"

interface RegisterFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function RegisterForm({ isOpen, onClose }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    idCard: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after 2 seconds
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        idCard: "",
      })
      onClose()
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4a9ced] to-[#3a8ddc]" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e6f3ff] rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#e6f3ff] rounded-full -ml-16 -mb-16" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="relative p-8">
              {!isSuccess ? (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Đăng ký thẻ tín dụng</h2>
                    <p className="text-gray-600">Vui lòng điền thông tin để được tư vấn miễn phí</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="relative">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Họ và tên
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 py-6 border-gray-200 focus:border-[#4a9ced] focus:ring-[#4a9ced] transition-colors"
                            placeholder="Nhập họ và tên"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 py-6 border-gray-200 focus:border-[#4a9ced] focus:ring-[#4a9ced] transition-colors"
                            placeholder="Nhập email"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Số điện thoại
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 py-6 border-gray-200 focus:border-[#4a9ced] focus:ring-[#4a9ced] transition-colors"
                            placeholder="Nhập số điện thoại"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <label htmlFor="idCard" className="block text-sm font-medium text-gray-700 mb-1">
                          CMND/CCCD
                        </label>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <Input
                            id="idCard"
                            name="idCard"
                            value={formData.idCard}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 py-6 border-gray-200 focus:border-[#4a9ced] focus:ring-[#4a9ced] transition-colors"
                            placeholder="Nhập số CMND/CCCD"
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#4a9ced] hover:bg-[#3a8ddc] text-white py-6 text-lg font-medium transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Đang xử lý...
                        </div>
                      ) : (
                        "Đăng ký ngay"
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Đăng ký thành công!</h3>
                  <p className="text-gray-600 text-lg">
                    Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 