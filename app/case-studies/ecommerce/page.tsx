import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function EcommerceCaseStudyPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            案例研究
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-balance">电商独立站 GEO 优化案例</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            深度解析某知名电商平台如何通过 GEO（生成引擎优化）策略，在 6 个月内实现搜索流量增长 300%
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">项目背景</h2>
            <Card>
              <CardHeader>
                <CardTitle>挑战概述</CardTitle>
                <CardDescription>传统 SEO 策略在 AI 搜索时代的局限性</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  该电商平台拥有超过 10 万个商品页面，但在 ChatGPT、Claude 等 AI 搜索工具中的曝光率极低。
                  传统的关键词优化策略无法适应生成式 AI 的内容理解方式。
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "在 AI 时代，不是关键词找到用户，而是用户的意图找到最佳答案。"
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-red-600">15%</div>
                    <div className="text-sm text-muted-foreground">AI 搜索曝光率</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">2.3%</div>
                    <div className="text-sm text-muted-foreground">转化率</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">45s</div>
                    <div className="text-sm text-muted-foreground">平均停留时间</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">解决方案</h2>
            <p className="mb-4">为了便于理解使用 iPhone 作为产品的例子</p>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>1. 语义化商品描述重构</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">// 要点先行：将传统的关键词堆砌转换为自然语言描述</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">优化前：</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      "iPhone 17 Pro 手机 苹果 智能手机 5G 拍照 游戏 办公"
                    </p>
                    <h4 className="font-semibold mb-2">优化后：</h4>
                    <p className="text-sm">
                      "iPhone 17 Pro 是苹果公司推出的旗舰智能手机，搭载 A19 Pro 芯片，支持专业级摄影和 4K 视频录制。
                      适合摄影爱好者、商务人士和游戏玩家，提供卓越的性能体验和全天候电池续航。"
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. 结构化数据增强</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">// 要点先行：使用 Schema.org 标记提升 AI 理解能力</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      {`{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "iPhone 17 Pro",
  "description": "专业级智能手机，适合摄影和商务",
  "brand": {
    "@type": "Brand",
    "name": "Apple"
  },
  "offers": {
    "@type": "Offer",
    "price": "7999",
    "priceCurrency": "CNY",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1250"
  }
}`}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. 用户意图匹配优化</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">基于用户常见问题创建内容，而非仅仅展示产品参数。</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">用户问题</h4>
                      <p className="text-sm text-muted-foreground">"哪款手机拍照效果最好？"</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">优化内容</h4>
                      <p className="text-sm">"iPhone 17 Pro 配备三摄系统，支持 5x 光学变焦，夜景模式下表现出色..."</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">实施过程</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">数据分析阶段（第1-2周）</h3>
                  <p className="text-muted-foreground">分析现有商品页面的 AI 搜索表现，识别优化机会点</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">内容重构阶段（第3-8周）</h3>
                  <p className="text-muted-foreground">批量优化商品描述，添加结构化数据标记</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">测试优化阶段（第9-16周）</h3>
                  <p className="text-muted-foreground">A/B 测试不同内容策略，持续优化效果</p>
                </div>
              </div>
            </div>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mt-6">
              "成功的 GEO 策略需要数据驱动的迭代优化，而非一次性的完美方案。"
            </blockquote>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">效果评估</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">+300%</div>
                  <div className="text-sm text-muted-foreground">AI 搜索流量增长</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">+180%</div>
                  <div className="text-sm text-muted-foreground">转化率提升</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">+250%</div>
                  <div className="text-sm text-muted-foreground">平均停留时间</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+420%</div>
                  <div className="text-sm text-muted-foreground">品牌曝光度</div>
                </CardContent>
              </Card>
            </div>
            <p className="text-muted-foreground">* 数据统计周期：优化实施后 6 个月，对比优化前 6 个月的表现</p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">关键经验</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">1. 内容质量是核心</h3>
                  <p className="text-muted-foreground">AI 搜索引擎更注重内容的实用性和准确性，而非关键词密度</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">2. 结构化数据必不可少</h3>
                  <p className="text-muted-foreground">Schema.org 标记帮助 AI 更好地理解和展示商品信息</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">3. 持续监控和优化</h3>
                  <p className="text-muted-foreground">GEO 策略需要根据 AI 搜索行为的变化持续调整</p>
                </CardContent>
              </Card>
            </div>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mt-6">
              "在 AI 搜索时代，用户体验和内容价值是最重要的排名因素。"
            </blockquote>
          </section>
        </div>
      </div>
    </DocsLayout>
  )
}
