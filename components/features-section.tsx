import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CreditCard, Gift, Globe, Zap, Percent } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-[#4a9ced]" />,
      title: "Bảo mật tuyệt đối",
      description: "Công nghệ bảo mật chip EMV và xác thực sinh trắc học bảo vệ giao dịch của bạn 24/7.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-[#4a9ced]" />,
      title: "Thanh toán không tiếp xúc",
      description: "Thanh toán nhanh chóng chỉ với một chạm, hỗ trợ Apple Pay và Google Pay.",
    },
    {
      icon: <Gift className="h-10 w-10 text-[#4a9ced]" />,
      title: "Tích điểm không giới hạn",
      description: "Tích lũy điểm thưởng với mỗi giao dịch và đổi quà tặng giá trị từ các đối tác hàng đầu.",
    },
    {
      icon: <Globe className="h-10 w-10 text-[#4a9ced]" />,
      title: "Ưu đãi toàn cầu",
      description: "Miễn phí giao dịch ngoại tệ và ưu đãi đặc biệt khi du lịch quốc tế.",
    },
    {
      icon: <Zap className="h-10 w-10 text-[#4a9ced]" />,
      title: "Phê duyệt nhanh chóng",
      description: "Quy trình đăng ký trực tuyến đơn giản, phê duyệt trong vòng 24 giờ.",
    },
    {
      icon: <Percent className="h-10 w-10 text-[#4a9ced]" />,
      title: "Lãi suất ưu đãi",
      description: "Lãi suất cạnh tranh và thời gian miễn lãi lên đến 55 ngày.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tính năng nổi bật</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá những đặc quyền độc đáo mà thẻ tín dụng Premium mang lại cho cuộc sống của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
