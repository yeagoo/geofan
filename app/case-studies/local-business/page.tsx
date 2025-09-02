import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function LocalBusinessCaseStudyPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            案例研究
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-balance">本地商业 GEO 优化案例</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            探索某连锁餐厅如何通过 GEO（生成引擎优化）策略，在本地搜索中获得更多曝光和客流
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">商业背景</h2>
            <Card>
              <CardHeader>
                <CardTitle>本地商业挑战</CardTitle>
                <CardDescription>传统本地 SEO 在 AI 搜索时代的局限性</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  该连锁餐厅在北京拥有 15 家门店，但当用户询问 AI "北京哪里有好吃的川菜"时， 很少被推荐。传统的本地 SEO
                  策略在 AI 搜索场景下效果有限。
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "在 AI 推荐时代，本地商业需要让机器理解你的独特价值，而不仅仅是位置信息。"
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-red-600">12%</div>
                    <div className="text-sm text-muted-foreground">AI 推荐率</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">3.2</div>
                    <div className="text-sm text-muted-foreground">平均评分</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">25%</div>
                    <div className="text-sm text-muted-foreground">在线订单占比</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">GEO 优化策略</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>1. 本地化内容深度优化</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">// 要点先行：创建丰富的本地化内容，突出地域特色和文化背景</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">优化前描述：</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      "正宗川菜餐厅，提供麻辣火锅、回锅肉、宫保鸡丁等经典菜品"
                    </p>
                    <h4 className="font-semibold mb-2">优化后描述：</h4>
                    <p className="text-sm">
                      "传承三代的成都老字号川菜，主厨来自成都锦里，使用四川郫县豆瓣酱和汉源花椒，
                      招牌菜水煮鱼选用黑鱼配自制泡菜，麻辣鲜香地道正宗。适合商务宴请、家庭聚餐， 提供包间服务，可容纳
                      2-20 人聚会。"
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. 结构化本地商业信息</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">// 要点先行：使用 LocalBusiness Schema 标准化商业信息</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      {`{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "蜀香园川菜馆",
  "servesCuisine": "川菜",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "朝阳区三里屯太古里南区",
    "addressLocality": "北京",
    "addressRegion": "北京市",
    "postalCode": "100027"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "39.9368",
    "longitude": "116.4472"
  },
  "telephone": "+86-10-8888-8888",
  "openingHours": "Mo-Su 11:00-22:00",
  "priceRange": "¥¥",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "1847"
  },
  "hasMenu": {
    "@type": "Menu",
    "hasMenuSection": [{
      "@type": "MenuSection",
      "name": "招牌菜",
      "hasMenuItem": [{
        "@type": "MenuItem",
        "name": "水煮鱼",
        "description": "选用新鲜黑鱼，配自制泡菜",
        "offers": {
          "@type": "Offer",
          "price": "88",
          "priceCurrency": "CNY"
        }
      }]
    }]
  }
}`}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. 用户体验场景化</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">基于不同用餐场景和用户需求创建针对性内容。</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">商务宴请</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>私密包间环境</li>
                        <li>商务套餐推荐</li>
                        <li>停车便利信息</li>
                        <li>预订优惠政策</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">家庭聚餐</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>儿童友好环境</li>
                        <li>家庭套餐选择</li>
                        <li>微辣口味调节</li>
                        <li>生日庆祝服务</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">多平台整合策略</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">全渠道信息一致性</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-2">官方网站</h4>
                      <p className="text-sm text-muted-foreground">详细菜单、门店信息、在线预订</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-2">社交媒体</h4>
                      <p className="text-sm text-muted-foreground">日常更新、用户互动、活动推广</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-2">点评平台</h4>
                      <p className="text-sm text-muted-foreground">用户评价、回复管理、优惠活动</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mt-6">
              "本地商业的成功在于让每一个接触点都能准确传达品牌价值和服务特色。"
            </blockquote>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">实施成果</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">+380%</div>
                  <div className="text-sm text-muted-foreground">AI 推荐率增长</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.6</div>
                  <div className="text-sm text-muted-foreground">平均评分提升</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">+150%</div>
                  <div className="text-sm text-muted-foreground">在线订单增长</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+220%</div>
                  <div className="text-sm text-muted-foreground">新客户增长</div>
                </CardContent>
              </Card>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">具体改善指标：</h4>
              <ul className="text-sm space-y-1">
                <li>月均新增顾客从 450 人增长到 1440 人</li>
                <li>平均客单价从 ¥85 提升到 ¥128</li>
                <li>顾客复购率从 35% 提升到 58%</li>
                <li>在线预订占比从 25% 提升到 65%</li>
              </ul>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">成功经验总结</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">1. 本地化内容是核心</h3>
                  <p className="text-muted-foreground">深度挖掘地域特色和文化背景，创造独特的品牌故事</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">2. 场景化服务描述</h3>
                  <p className="text-muted-foreground">针对不同用餐场景提供具体的服务方案和环境描述</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">3. 持续的用户互动</h3>
                  <p className="text-muted-foreground">积极回应用户评价，持续优化服务质量和用户体验</p>
                </CardContent>
              </Card>
            </div>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mt-6">
              "本地商业的 GEO 优化不仅是技术问题，更是如何用数字化方式传达真实服务价值的艺术。"
            </blockquote>
          </section>
        </div>
      </div>
    </DocsLayout>
  )
}
