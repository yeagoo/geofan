import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { PerformanceAnalysisTool } from "@/components/performance-analysis-tool"

export default function PerformanceAnalysisPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            工具与资源
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-balance">GEO 性能分析工具</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            全面分析您的网站在生成引擎中的表现，提供数据驱动的优化建议
          </p>
        </div>

        <PerformanceAnalysisTool />
      </div>
    </DocsLayout>
  )
}
