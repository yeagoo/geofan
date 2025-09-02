import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { GeoCheckerTool } from "@/components/geo-checker-tool"
import { Search, CheckCircle, Info, Lightbulb, Zap } from "lucide-react"

export default function GeoCheckerPage() {
  return (
    <DocsLayout>
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex-1 space-y-4">
          <Badge variant="outline">GEO 工具</Badge>
          <h1 className="font-bold text-4xl lg:text-5xl text-balance">GEO 检测工具</h1>
          <p className="text-xl text-muted-foreground text-balance">
            全面分析您的内容在生成引擎中的优化程度，获得专业的改进建议和优化方案。
          </p>
        </div>

        <div className="pb-12 pt-8">
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <Alert className="my-6">
              <Search className="h-4 w-4" />
              <AlertDescription>
                <strong>功能说明：</strong>本工具基于 GEO
                优化原则，从权威性、相关性、结构性和用户价值四个维度评估内容质量。
              </AlertDescription>
            </Alert>

            <GeoCheckerTool />

            <h2 className="text-2xl font-bold mt-8 mb-4">检测维度说明</h2>

            <p className="leading-relaxed">
              GEO 检测工具基于四大核心原则对内容进行全面评估。每个维度都有具体的评分标准和改进建议，
              帮助您系统性地提升内容在 AI 引擎中的表现。
            </p>

            <div className="grid gap-6 md:grid-cols-2 my-8">
              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-blue-500" />
                  <CardTitle>权威性评估</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>作者专业背景和资质</li>
                    <li>权威来源引用质量</li>
                    <li>内容准确性和可信度</li>
                    <li>发布平台声誉</li>
                    <li>外部认可和引用</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Search className="h-8 w-8 text-green-500" />
                  <CardTitle>相关性分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>用户意图匹配度</li>
                    <li>关键信息覆盖度</li>
                    <li>语义相关性强度</li>
                    <li>上下文完整性</li>
                    <li>问题解决能力</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Info className="h-8 w-8 text-purple-500" />
                  <CardTitle>结构性检查</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>标题层次和逻辑</li>
                    <li>结构化数据标记</li>
                    <li>内容组织清晰度</li>
                    <li>语义标签使用</li>
                    <li>导航和链接结构</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-orange-500" />
                  <CardTitle>用户价值评估</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>实用性和可操作性</li>
                    <li>内容深度和洞察</li>
                    <li>阅读体验质量</li>
                    <li>独特价值主张</li>
                    <li>用户需求满足度</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "GEO 检测不仅是评估工具，更是学习和改进的指南。"
            </blockquote>

            <Alert className="my-8">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>使用提示：</strong>建议定期使用 GEO 检测工具评估内容，
                特别是在发布新内容或更新现有内容后。持续优化是提升 GEO 效果的关键。
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
