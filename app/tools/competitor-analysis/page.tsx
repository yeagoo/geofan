import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { CompetitorAnalysisTool } from "@/components/competitor-analysis-tool"

export default function CompetitorAnalysisPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            工具与资源
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-balance">GEO 竞品分析工具</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            深度分析竞争对手的 GEO（生成引擎优化）策略，发现优化机会和差异化定位
          </p>
        </div>

        <CompetitorAnalysisTool />
      </div>
    </DocsLayout>
  )
}
