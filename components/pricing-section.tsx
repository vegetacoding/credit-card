"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function PricingSection() {
  const plans = [
    {
      name: "Tiêu chuẩn",
      price: "0",
      description: "Dành cho người mới bắt đầu",
      features: [
        "Hạn mức tín dụng lên đến 50 triệu",
        "Hoàn tiền 0.5% mọi giao dịch",
        "Miễn phí thường niên năm đầu",
        "Bảo hiểm mua sắm cơ bản",
        "Hỗ trợ khách hàng 24/7",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "990.000",
      description: "Dành cho người dùng thường xuyên",
      features: [
        "Hạn mức tín dụng lên đến 200 triệu",
        "Hoàn tiền 1.5% mọi giao dịch",
        "Miễn phí thường niên 2 năm đầu",
        "Bảo hiểm mua sắm và du lịch toàn diện",
        "Ưu tiên tại sân bay và khách sạn 5 sao",
        "Tích điểm đôi cho ăn uống và du lịch",
      ],
      popular: true,
    },
    {
      name: "Platinum",
      price: "1.990.000",
      description: "Dành cho doanh nhân và người có thu nhập cao",
      features: [
        "Hạn mức tín dụng không giới hạn",
        "Hoàn tiền 2.5% mọi giao dịch",
        "Miễn phí thường niên trọn đời",
        "Bảo hiểm toàn diện cao cấp",
        "Dịch vụ concierge cá nhân 24/7",
        "Phòng chờ VIP tại sân bay toàn cầu",
        "Ưu đãi độc quyền tại nhà hàng và khách sạn 5 sao",
      ],
      popular: false,
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

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Phí & Lãi suất</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Lựa chọn gói thẻ phù hợp với nhu cầu tài chính và phong cách sống của bạn
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`border-none shadow-lg hover:shadow-xl transition-all ${
                  plan.popular ? "scale-105 border-2 border-[#a3d0f9]" : ""
                }`}
              >
                {plan.popular && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-[#a3d0f9] text-white text-center py-1 text-sm font-medium"
                  >
                    Phổ biến nhất
                  </motion.div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600"> VNĐ/năm</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        className="flex items-start"
                      >
                        <Check className="h-5 w-5 text-[#a3d0f9] mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-[#a3d0f9] hover:bg-[#a3d0f9]" : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    Đăng ký ngay
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-4">Thông tin lãi suất</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-gray-700">Lãi suất tiêu dùng:</p>
              <p className="text-gray-600">18% - 24% / năm</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Lãi suất rút tiền mặt:</p>
              <p className="text-gray-600">24% - 30% / năm</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Thời gian miễn lãi:</p>
              <p className="text-gray-600">Lên đến 55 ngày</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Phí rút tiền mặt:</p>
              <p className="text-gray-600">4% số tiền giao dịch (tối thiểu 50.000 VNĐ)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
