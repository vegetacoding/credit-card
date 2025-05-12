import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">PremiumCard</h3>
            <p className="mb-4">
              Thẻ tín dụng cao cấp với đặc quyền vượt trội, mang đến trải nghiệm tài chính hiện đại cho cuộc sống của
              bạn.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#C5E3FD] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-[#C5E3FD] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-[#C5E3FD] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-[#C5E3FD] transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#C5E3FD] transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-[#C5E3FD] transition-colors">
                  Tính năng
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-[#C5E3FD] transition-colors">
                  Phí & Lãi suất
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-[#C5E3FD] transition-colors">
                  Đánh giá
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C5E3FD] transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Chính sách</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#C5E3FD] transition-colors">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C5E3FD] transition-colors">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C5E3FD] transition-colors">
                  Chính sách hoàn tiền
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C5E3FD] transition-colors">
                  Quy định bảo mật thẻ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C5E3FD] transition-colors">
                  Biểu phí dịch vụ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 shrink-0 mt-0.5 text-[#C5E3FD]" />
                <span>123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#C5E3FD]" />
                <span>1800 1234 (Miễn phí)</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#C5E3FD]" />
                <span>support@premiumcard.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© 2025 PremiumCard. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
