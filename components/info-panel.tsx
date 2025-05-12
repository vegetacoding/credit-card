"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MousePointer, RotateCw, ZoomIn, Move } from "lucide-react"

export function InfoPanel() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Hướng dẫn điều khiển</CardTitle>
          <CardDescription>Cách tương tác với mô hình 3D</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <MousePointer className="h-5 w-5 text-emerald-600" />
              <span>Nhấp chuột trái + kéo để xoay mô hình</span>
            </li>
            <li className="flex items-center gap-2">
              <RotateCw className="h-5 w-5 text-emerald-600" />
              <span>Nhấp chuột phải + kéo để xoay quanh mô hình</span>
            </li>
            <li className="flex items-center gap-2">
              <ZoomIn className="h-5 w-5 text-emerald-600" />
              <span>Cuộn chuột để phóng to/thu nhỏ</span>
            </li>
            <li className="flex items-center gap-2">
              <Move className="h-5 w-5 text-emerald-600" />
              <span>Nhấp chuột giữa + kéo để di chuyển mô hình</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Thông tin mô hình</CardTitle>
          <CardDescription>Chi tiết về mô hình 3D</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <span className="font-medium">Tên mô hình:</span> Duck
            </div>
            <div>
              <span className="font-medium">Định dạng:</span> GLB
            </div>
            <div>
              <span className="font-medium">Số đa giác:</span> ~1,500
            </div>
            <div>
              <span className="font-medium">Kích thước tệp:</span> 45 KB
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Giới thiệu</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Đây là ứng dụng xem mô hình 3D tương tác. Bạn có thể xoay, phóng to, thu nhỏ và di chuyển mô hình bằng
            chuột. Ứng dụng được xây dựng bằng React Three Fiber và Next.js.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
