import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

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

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Khách hàng nói gì về chúng tôi</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Trải nghiệm thực tế từ những khách hàng đã và đang sử dụng thẻ tín dụng Premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 border-t pt-4">
                <div className="w-10 h-10 rounded-full bg-[#a3d0f9] flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
