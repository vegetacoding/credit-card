import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#4a9ced] to-[#C5E3FD] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Sẵn sàng nâng tầm trải nghiệm tài chính?</h2>
          <p className="mt-4 text-xl text-white/90">
            Đăng ký ngay hôm nay và nhận ưu đãi đặc biệt dành cho thành viên mới
          </p>

          <div className="mt-10 bg-white/10 backdrop-blur-md p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Đăng ký tư vấn miễn phí</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                type="text"
                placeholder="Họ và tên"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Input
                type="tel"
                placeholder="Số điện thoại"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
            </div>
            <Button size="lg" className="mt-6 bg-white text-[#4a9ced] hover:bg-blue-50">
              Đăng ký ngay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-4 text-sm text-white/80">
              Bằng cách đăng ký, bạn đồng ý với các điều khoản và chính sách bảo mật của chúng tôi
            </p>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span>Phê duyệt nhanh chóng</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <span>Bảo mật thông tin</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span>Miễn phí năm đầu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
