"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      role: "Doanh nhân",
      content:
        "Thẻ tín dụng Premium đã thay đổi hoàn toàn cách tôi quản lý tài chính.",
      rating: 5,
      avatar: "NA",
    },
    {
      name: "Trần Thị B",
      role: "Bác sĩ",
      content:
        "Tôi đặc biệt hài lòng với dịch vụ khách hàng 24/7 và tính năng bảo mật cao cấp.",
      rating: 5,
      avatar: "TB",
    },
    {
      name: "Lê Văn C",
      role: "Kỹ sư phần mềm",
      content:
        "Ứng dụng quản lý thẻ trực tuyến rất dễ sử dụng và thanh toán không tiếp xúc hoạt động mượt mà. ",
      rating: 4,
      avatar: "LC",
    },
    {
      name: "Phạm Thị D",
      role: "Giáo viên",
      content:
        "Ban đầu tôi lo ngại về phí thường niên, nhưng với tất cả những ưu đãi và tiện ích mà thẻ mang lại.",
      rating: 5,
      avatar: "PD",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 * i }}
        >
          <Star className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        </motion.div>
      ))
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Khách hàng nói gì về chúng tôi</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Trải nghiệm thực tế từ những khách hàng đã và đang sử dụng thẻ tín dụng Premium
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-700 italic"
                  >
                    "{testimonial.content}"
                  </motion.p>
                </CardContent>
                <CardFooter className="flex items-center gap-4 border-t pt-4">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="w-10 h-10 rounded-full bg-[#a3d0f9] flex items-center justify-center text-white font-bold"
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
