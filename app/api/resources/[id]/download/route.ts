import { NextResponse } from "next/server"

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const resourceId = params.id

    // 模拟下载URL生成
    const downloadUrls: Record<string, string> = {
      "3": "/downloads/article-template.zip",
      "4": "/downloads/product-template.zip",
      "5": "/downloads/geo-guide.pdf",
      "6": "/downloads/faq-template.zip",
      "8": "/downloads/local-business-template.zip",
      "10": "/downloads/implementation-checklist.pdf",
    }

    const downloadUrl = downloadUrls[resourceId]

    if (!downloadUrl) {
      return NextResponse.json({ success: false, error: "Resource not found or not downloadable" }, { status: 404 })
    }

    // 在实际应用中，这里可能会：
    // 1. 验证用户权限
    // 2. 记录下载统计
    // 3. 生成临时下载链接
    // 4. 更新数据库中的下载次数

    return NextResponse.json({
      success: true,
      downloadUrl: downloadUrl,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Download failed" }, { status: 500 })
  }
}
