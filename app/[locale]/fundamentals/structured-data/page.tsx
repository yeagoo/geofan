import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Database, Brain, Network, ArrowRight, Lightbulb, Code2, Search } from "lucide-react"
import Link from "next/link"

export default function StructuredDataFundamentalsPage() {
  return (
    <DocsLayout>
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4">
          <div className="flex-1 space-y-4">
            <Badge variant="outline">基础理论</Badge>
            <h1 className="font-bold text-4xl lg:text-5xl text-balance">结构化数据基础概念</h1>
            <p className="text-xl text-muted-foreground text-balance">
              理解结构化数据的核心概念和原理，掌握 GEO 优化中语义标记的基础知识。
            </p>
          </div>
        </div>

        <div className="pb-12 pt-8">
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <Alert className="my-6">
              <Database className="h-4 w-4" />
              <AlertDescription>
                <strong>核心概念：</strong>结构化数据是将网页内容转换为机器可理解格式的标准化方法，是 GEO
                优化的重要基础。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">什么是结构化数据</h2>

            <p className="leading-relaxed">
              结构化数据（Structured Data）是一种标准化的格式，用于向搜索引擎和 AI 系统提供关于网页内容的明确信息。
              它通过预定义的词汇表和语法规则，将人类可读的内容转换为机器可理解的格式，消除了内容理解中的歧义性。
            </p>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "如果说网页内容是一本书，那么结构化数据就是这本书的详细目录和索引。"
            </blockquote>

            <div className="grid gap-6 md:grid-cols-2 my-8">
              <Card>
                <CardHeader>
                  <Brain className="h-8 w-8 text-blue-500" />
                  <CardTitle className="text-lg">人类视角</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">看到"张三是一位软件工程师"，我们理解这是关于一个人的职业信息。</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Code2 className="h-8 w-8 text-green-500" />
                  <CardTitle className="text-lg">机器视角</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    通过结构化数据，机器明确知道"张三"是Person类型，"软件工程师"是jobTitle属性。
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">结构化数据的组成要素</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">实体（Entity）</h4>
                <p className="text-sm text-muted-foreground">
                  现实世界中的具体事物，如人物、地点、组织、产品、事件等。每个实体都有明确的类型定义。
                </p>
              </div>

              <div>
                <h4 className="font-semibold">属性（Property）</h4>
                <p className="text-sm text-muted-foreground">
                  描述实体特征的数据字段，如姓名、地址、价格、日期等。属性定义了实体的具体信息。
                </p>
              </div>

              <div>
                <h4 className="font-semibold">关系（Relationship）</h4>
                <p className="text-sm text-muted-foreground">
                  实体之间的连接和关联，如作者与文章的关系、公司与员工的关系等。
                </p>
              </div>

              <div>
                <h4 className="font-semibold">值（Value）</h4>
                <p className="text-sm text-muted-foreground">
                  属性的具体内容，可以是文本、数字、日期、URL 或其他实体的引用。
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">结构化数据在 GEO 中的作用</h2>

            <p className="leading-relaxed">
              在生成引擎优化（GEO）中，结构化数据扮演着关键的桥梁作用。它不仅帮助 AI 系统准确理解内容，
              更重要的是提供了内容的语义上下文，使 AI 能够在适当的场景中引用和推荐内容。
            </p>

            <div className="grid gap-6 md:grid-cols-3 my-8">
              <Card>
                <CardHeader>
                  <Search className="h-8 w-8 text-purple-500" />
                  <CardTitle className="text-lg">提升理解精度</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">消除歧义，让 AI 准确理解内容的真实含义和上下文关系。</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Network className="h-8 w-8 text-orange-500" />
                  <CardTitle className="text-lg">建立知识关联</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">通过实体关系构建知识网络，增强内容的权威性和相关性。</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Brain className="h-8 w-8 text-teal-500" />
                  <CardTitle className="text-lg">优化推理能力</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">为 AI 推理提供结构化的知识基础，提升回答质量和准确性。</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">GEO 优化的核心优势</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">语义明确性</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  结构化数据为内容提供了明确的语义标签，避免了 AI 系统的误解和错误推断。
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>示例：</strong>"苹果"可能指水果、公司或颜色，通过结构化数据可以明确指定具体含义。
                </div>
              </div>

              <div>
                <h4 className="font-semibold">上下文丰富性</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  提供丰富的上下文信息，帮助 AI 理解内容的使用场景和适用条件。
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>示例：</strong>标记文章的发布时间、作者专业领域、目标受众等信息。
                </div>
              </div>

              <div>
                <h4 className="font-semibold">权威性建立</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  通过标准化的实体标识和关系链接，建立内容的权威性和可信度。
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>示例：</strong>链接到权威的知识库实体，如维基百科、官方网站等。
                </div>
              </div>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "结构化数据让内容从'可读'升级为'可理解'，这是 GEO 优化的根本所在。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">与传统 SEO 的区别</h2>

            <p className="leading-relaxed">
              传统 SEO 主要关注搜索引擎的爬虫和排名算法，而 GEO 中的结构化数据更注重内容的语义表达和 AI 理解。
              这种差异反映了从关键词匹配到语义理解的技术演进。
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 p-3 text-left">对比维度</th>
                    <th className="border border-gray-300 p-3 text-left">传统 SEO</th>
                    <th className="border border-gray-300 p-3 text-left">GEO 结构化数据</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">目标系统</td>
                    <td className="border border-gray-300 p-3">搜索引擎爬虫</td>
                    <td className="border border-gray-300 p-3">AI 推理引擎</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">理解方式</td>
                    <td className="border border-gray-300 p-3">关键词匹配</td>
                    <td className="border border-gray-300 p-3">语义理解</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">数据格式</td>
                    <td className="border border-gray-300 p-3">HTML 标签</td>
                    <td className="border border-gray-300 p-3">JSON-LD、RDFa</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">优化重点</td>
                    <td className="border border-gray-300 p-3">排名因子</td>
                    <td className="border border-gray-300 p-3">语义准确性</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">效果评估</td>
                    <td className="border border-gray-300 p-3">排名位置</td>
                    <td className="border border-gray-300 p-3">理解准确度</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">技术实现差异</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">传统 SEO 方法</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 关键词密度优化</li>
                  <li>• Meta 标签设置</li>
                  <li>• 内链结构优化</li>
                  <li>• 页面加载速度</li>
                  <li>• 移动端适配</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">GEO 结构化数据</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Schema.org 标记</li>
                  <li>• 实体关系定义</li>
                  <li>• 语义属性标注</li>
                  <li>• 知识图谱构建</li>
                  <li>• 上下文信息丰富</li>
                </ul>
              </div>
            </div>

            <Alert className="my-6">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>重要提示：</strong>GEO 优化并不是要替代传统 SEO，而是在 AI 时代的补充和升级。
                两者结合使用能够获得最佳效果。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">核心标准和规范</h2>

            <p className="leading-relaxed">
              结构化数据的实施需要遵循一系列国际标准和规范。这些标准确保了不同系统之间的互操作性， 也为 AI
              系统提供了统一的理解框架。
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">主要标准体系</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">Schema.org</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  由 Google、Microsoft、Yahoo 和 Yandex 联合创建的结构化数据词汇标准，
                  提供了数百种实体类型和数千个属性定义。
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>特点：</strong>覆盖面广、更新及时、行业认可度高、与搜索引擎深度集成
                </div>
              </div>

              <div>
                <h4 className="font-semibold">JSON-LD</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  JSON for Linking Data，基于 JSON 的链接数据格式，是 W3C 推荐的结构化数据实现方式。
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>优势：</strong>语法简洁、易于维护、与 HTML 分离、支持复杂嵌套结构
                </div>
              </div>

              <div>
                <h4 className="font-semibold">RDF/RDFa</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  资源描述框架，提供了更灵活的语义表达能力，适合复杂的知识表示需求。
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>应用：</strong>学术研究、知识图谱、复杂关系建模、语义网应用
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Open Graph</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Facebook 开发的社交媒体元数据标准，广泛用于社交平台的内容分享和展示。
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>用途：</strong>社交分享优化、内容预览、品牌展示、用户体验提升
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">选择标准的考虑因素</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">技术因素</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 实现复杂度</li>
                  <li>• 维护成本</li>
                  <li>• 扩展性需求</li>
                  <li>• 团队技术能力</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">业务因素</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 目标平台支持</li>
                  <li>• 行业标准要求</li>
                  <li>• 未来发展规划</li>
                  <li>• 投资回报预期</li>
                </ul>
              </div>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "选择合适的结构化数据标准，就像选择建筑的地基材料，决定了整个语义架构的稳固性。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">实施策略和路径</h2>

            <p className="leading-relaxed">
              成功实施结构化数据需要制定清晰的策略和分阶段的实施路径。
              从简单的基础标记开始，逐步构建完整的语义体系，是最为稳妥和有效的方法。
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">分阶段实施路径</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">基础标记阶段</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    为核心内容添加基本的 Schema.org 标记，如文章、作者、组织等基础实体。
                  </p>
                  <div className="bg-muted p-3 rounded text-sm">
                    <strong>重点：</strong>Article、Person、Organization、WebSite 等基础类型
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">属性丰富阶段</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    为已标记的实体添加更多属性信息，提升语义表达的完整性和准确性。
                  </p>
                  <div className="bg-muted p-3 rounded text-sm">
                    <strong>重点：</strong>datePublished、author、keywords、about 等详细属性
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">关系建立阶段</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    构建实体之间的关系网络，通过 sameAs、mentions、relatedTo 等属性建立连接。
                  </p>
                  <div className="bg-muted p-3 rounded text-sm">
                    <strong>重点：</strong>实体链接、知识图谱构建、权威性建立
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold">优化完善阶段</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    基于效果反馈持续优化，扩展到更多内容类型，建立完整的语义生态系统。
                  </p>
                  <div className="bg-muted p-3 rounded text-sm">
                    <strong>重点：</strong>效果监控、持续优化、规模化应用、创新探索
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">成功要素</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">技术要素</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• 选择合适的技术标准</li>
                    <li>• 建立规范的实施流程</li>
                    <li>• 确保数据质量和一致性</li>
                    <li>• 建立监控和维护机制</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">组织要素</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• 获得管理层支持</li>
                    <li>• 建立跨部门协作</li>
                    <li>• 培养专业技能</li>
                    <li>• 制定长期规划</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="my-8">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>实施建议：</strong>从小规模试点开始，验证效果后再逐步扩展。
                结构化数据的价值需要时间积累，保持耐心和持续投入是关键。
              </AlertDescription>
            </Alert>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">深入学习实践</h3>
              <p className="text-sm text-muted-foreground mb-4">
                掌握了结构化数据的基础概念后，建议深入学习具体的实施方法和最佳实践。
              </p>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="/ai-seo/structured-data">
                    学习实施指南
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/technical/schema-markup">查看技术文档</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
