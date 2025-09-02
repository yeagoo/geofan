import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ContentPlatformCaseStudyPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            案例研究
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-balance">CMS 内容平台 GEO 优化案例</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            探索某知识分享平台如何通过 GEO（生成引擎优化）策略，成为 AI 搜索结果的首选内容源
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">平台概况</h2>
            <Card>
              <CardHeader>
                <CardTitle>项目背景</CardTitle>
                <CardDescription>知识分享平台的 AI 时代转型</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  该平台拥有 50 万篇技术文章和教程，但在 ChatGPT、Claude 等 AI 工具的回答中引用率不足 5%。
                  平台需要重新设计内容策略，以适应生成式 AI 的内容消费模式。
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "优质内容不仅要对人类读者有价值，更要成为 AI 学习和引用的可靠来源。"
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-red-600">5%</div>
                    <div className="text-sm text-muted-foreground">AI 引用率</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">35%</div>
                    <div className="text-sm text-muted-foreground">内容完成率</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">2.1</div>
                    <div className="text-sm text-muted-foreground">平均页面深度</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">优化策略</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>1. 内容结构化改造</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">// 要点先行：将长文章拆分为结构化的知识点</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">优化前结构：</h4>
                    <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                      <li>长篇连续文本</li>
                      <li>缺乏明确的章节划分</li>
                      <li>关键信息埋藏在段落中</li>
                    </ul>
                    <h4 className="font-semibold mb-2">优化后结构：</h4>
                    <ul className="text-sm space-y-1">
                      <li>清晰的标题层级（H1-H6）</li>
                      <li>要点总结和关键概念突出</li>
                      <li>代码示例和实践指南分离</li>
                      <li>FAQ 和常见问题独立模块</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. 语义标记增强</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">// 要点先行：使用 Article 和 FAQPage Schema 提升内容理解</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      {`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "React Hooks 完全指南",
  "author": {
    "@type": "Person",
    "name": "张三"
  },
  "datePublished": "2024-01-15",
  "articleSection": "前端开发",
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "什么是 React Hooks？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "React Hooks 是 React 16.8 引入的新特性..."
      }
    }]
  }
}`}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. 权威性建立</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">通过作者认证、引用来源和社区验证建立内容权威性。</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">作者认证</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>专业背景验证</li>
                        <li>技术认证展示</li>
                        <li>历史贡献记录</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">内容验证</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>官方文档引用</li>
                        <li>代码实例验证</li>
                        <li>社区反馈整合</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">技术实现</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">内容管理系统升级</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      {`// 要点先行：自动生成结构化数据的内容编辑器
const ContentEditor = {
  // 自动提取标题层级
  extractHeadings: (content) => {
    return content.match(/#{1,6}\\s+.+/g) || []
  },
  
  // 生成目录结构
  generateTOC: (headings) => {
    return headings.map(h => ({
      level: h.match(/^#+/)[0].length,
      text: h.replace(/^#+\\s+/, ''),
      id: h.replace(/^#+\\s+/, '').toLowerCase().replace(/\\s+/g, '-')
    }))
  },
  
  // 自动添加 Schema 标记
  addSchemaMarkup: (article) => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "author": article.author,
      "datePublished": article.publishDate,
      "wordCount": article.content.split(' ').length
    }
  }
}`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mt-6">
              "技术实现要服务于内容价值，而不是为了技术而技术。"
            </blockquote>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">效果分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">+850%</div>
                  <div className="text-sm text-muted-foreground">AI 引用率增长</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">+220%</div>
                  <div className="text-sm text-muted-foreground">内容完成率提升</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">+340%</div>
                  <div className="text-sm text-muted-foreground">平均停留时间</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+180%</div>
                  <div className="text-sm text-muted-foreground">社区互动率</div>
                </CardContent>
              </Card>
            </div>
            <p className="text-muted-foreground">* 数据统计周期：优化实施后 8 个月，对比优化前同期表现</p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">成功要素</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">1. 内容深度与广度并重</h3>
                  <p className="text-muted-foreground">既要有深入的技术细节，也要有全面的知识覆盖</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">2. 社区驱动的内容验证</h3>
                  <p className="text-muted-foreground">通过社区反馈和专家审核确保内容准确性</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">3. 持续的内容更新机制</h3>
                  <p className="text-muted-foreground">建立内容生命周期管理，确保信息时效性</p>
                </CardContent>
              </Card>
            </div>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mt-6">
              "在知识经济时代，内容的价值不在于数量，而在于能否真正解决用户问题。"
            </blockquote>
          </section>
        </div>
      </div>
    </DocsLayout>
  )
}
