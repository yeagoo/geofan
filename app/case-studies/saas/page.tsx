import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function SaaSCaseStudyPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            案例研究
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-balance">SaaS 产品 GEO 优化案例</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            分析某项目管理 SaaS 如何通过 GEO（生成引擎优化）策略，在竞争激烈的市场中脱颖而出
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">产品背景</h2>
            <Card>
              <CardHeader>
                <CardTitle>市场挑战</CardTitle>
                <CardDescription>SaaS 产品在 AI 搜索中的可见性困境</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  该项目管理 SaaS 产品面临激烈竞争，传统的 SEO 策略难以在 Notion、Asana 等知名品牌中突围。 当用户向 AI
                  询问"最好的项目管理工具"时，该产品很少被提及。
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "在 AI 推荐时代，产品的价值需要通过更智能的方式传达给潜在用户。"
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-red-600">8%</div>
                    <div className="text-sm text-muted-foreground">AI 推荐率</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">1.2%</div>
                    <div className="text-sm text-muted-foreground">试用转化率</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">$85</div>
                    <div className="text-sm text-muted-foreground">获客成本</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">GEO 策略设计</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>1. 用例驱动的内容策略</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">// 要点先行：围绕具体使用场景创建内容，而非功能列表</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">传统方法：</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      "我们的产品有甘特图、看板、时间跟踪、团队协作等功能..."
                    </p>
                    <h4 className="font-semibold mb-2">GEO 优化方法：</h4>
                    <div className="space-y-2 text-sm">
                      <p>• "如何管理远程团队的敏捷开发项目"</p>
                      <p>• "小型创业公司的项目管理最佳实践"</p>
                      <p>• "设计团队如何高效协作完成产品迭代"</p>
                      <p>• "客户项目交付流程的标准化管理"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. 竞品差异化定位</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">// 要点先行：明确产品独特价值，避免同质化竞争</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">竞品分析</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>Notion: 文档+项目管理</li>
                        <li>Asana: 大型团队协作</li>
                        <li>Trello: 简单看板管理</li>
                        <li>Monday: 可视化工作流</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">差异化定位</h4>
                      <ul className="text-sm space-y-1">
                        <li>专为中小团队设计</li>
                        <li>零学习成本上手</li>
                        <li>智能项目模板</li>
                        <li>成本效益最优</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. 结构化产品信息</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">// 要点先行：使用 SoftwareApplication Schema 标准化产品信息</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      {`{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ProjectFlow",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "12",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "billingDuration": "P1M",
      "billingIncrement": 1
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "2847"
  },
  "featureList": [
    "敏捷项目管理",
    "团队协作工具",
    "时间跟踪",
    "自动化工作流"
  ]
}`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">内容营销整合</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">知识库建设</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">项目管理指南</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>敏捷开发实践指南</li>
                        <li>远程团队管理技巧</li>
                        <li>项目风险控制方法</li>
                        <li>客户沟通最佳实践</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">行业解决方案</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>软件开发团队方案</li>
                        <li>设计机构项目管理</li>
                        <li>咨询公司客户管理</li>
                        <li>创业公司成长管理</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mt-6">
              "优秀的 SaaS 产品不仅要解决问题，更要教会用户如何更好地工作。"
            </blockquote>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">实施效果</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">+520%</div>
                  <div className="text-sm text-muted-foreground">AI 推荐率增长</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">+280%</div>
                  <div className="text-sm text-muted-foreground">试用转化率提升</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">-45%</div>
                  <div className="text-sm text-muted-foreground">获客成本降低</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+190%</div>
                  <div className="text-sm text-muted-foreground">品牌知名度</div>
                </CardContent>
              </Card>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">关键里程碑：</h4>
              <ul className="text-sm space-y-1">
                <li>第3个月：首次出现在 ChatGPT 推荐列表</li>
                <li>第5个月：成为"中小团队项目管理"首选推荐</li>
                <li>第8个月：月度新增用户突破 5000</li>
                <li>第12个月：年度经常性收入增长 340%</li>
              </ul>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">核心洞察</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">1. 场景化胜过功能化</h3>
                  <p className="text-muted-foreground">用户关心的是如何解决具体问题，而非产品有多少功能</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">2. 教育内容建立信任</h3>
                  <p className="text-muted-foreground">通过有价值的内容建立专业权威，比直接推销更有效</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">3. 差异化定位是关键</h3>
                  <p className="text-muted-foreground">在同质化市场中，明确的定位帮助 AI 准确推荐产品</p>
                </CardContent>
              </Card>
            </div>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mt-6">
              "成功的 SaaS GEO 策略是产品价值、用户需求和 AI 理解能力的完美结合。"
            </blockquote>
          </section>
        </div>
      </div>
    </DocsLayout>
  )
}
