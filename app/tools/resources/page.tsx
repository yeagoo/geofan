import { DocsLayout } from "@/components/docs-layout"
import { ResourcesCenter } from "@/components/resources-center"
import { Badge } from "@/components/ui/badge"

export default function ResourcesPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <Badge variant="secondary" className="mb-4">
          工具与资源
        </Badge>
        <h1 className="text-4xl font-bold mb-4 text-balance">GEO 资源中心</h1>
        <p className="text-xl text-muted-foreground text-pretty">
          精选的 GEO（生成引擎优化）工具、模板、指南和学习资源，助力您的优化实践
        </p>
      </div>

      <ResourcesCenter />
    </DocsLayout>
  )
}
