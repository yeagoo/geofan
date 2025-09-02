import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto text-center px-6">
        {/* Logo */}
        <div className="mb-8">
          <Image src="/logo.svg" alt="GEO.Fan Logo" width={64} height={64} className="mx-auto opacity-50" />
        </div>

        {/* 404 Number */}
        <div className="mb-6">
          <h1 className="text-8xl font-bold text-muted-foreground/30 select-none">404</h1>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">页面未找到</h2>
          <p className="text-muted-foreground">抱歉，您访问的页面不存在或已被移动</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="default" className="flex items-center gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              返回首页
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex items-center gap-2 bg-transparent">
            <Link href="javascript:history.back()">
              <ArrowLeft className="h-4 w-4" />
              返回上页
            </Link>
          </Button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            如果您认为这是一个错误，请
            <Link href="mailto:mail@geo.fan" className="text-primary hover:underline ml-1">
              联系我们
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
