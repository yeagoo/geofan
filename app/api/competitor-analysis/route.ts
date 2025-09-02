import { type NextRequest, NextResponse } from "next/server"

interface CompetitorMetrics {
  aiSearchVisibility: number
  structuredDataCoverage: number
  contentUpdateFrequency: number
  contentDepth: number
  technicalOptimization: number
  userExperience: number
}

interface CompetitorData {
  url: string
  domain: string
  geoScore: number
  metrics: CompetitorMetrics
  strengths: string[]
  weaknesses: string[]
  opportunities: string[]
  threats: string[]
}

async function analyzeWebsite(url: string): Promise<CompetitorData> {
  // 在实际应用中，这里会进行真实的网站分析
  // 包括爬取网站内容、分析结构化数据、检查技术实现等

  const domain = new URL(url).hostname

  // 模拟分析结果
  const baseScore = Math.floor(Math.random() * 40) + 50 // 50-90分
  const metrics: CompetitorMetrics = {
    aiSearchVisibility: Math.floor(Math.random() * 60) + 20,
    structuredDataCoverage: Math.floor(Math.random() * 70) + 30,
    contentUpdateFrequency: Math.floor(Math.random() * 80) + 20,
    contentDepth: Math.floor(Math.random() * 90) + 10,
    technicalOptimization: Math.floor(Math.random() * 85) + 15,
    userExperience: Math.floor(Math.random() * 95) + 5,
  }

  const geoScore = Math.round(
    metrics.aiSearchVisibility * 0.25 +
      metrics.structuredDataCoverage * 0.2 +
      metrics.contentDepth * 0.2 +
      metrics.technicalOptimization * 0.2 +
      metrics.userExperience * 0.15,
  )

  // 基于分数生成优势和劣势
  const strengths: string[] = []
  const weaknesses: string[] = []

  if (metrics.structuredDataCoverage > 70) {
    strengths.push("完善的结构化数据实现")
  } else {
    weaknesses.push("结构化数据覆盖不足")
  }

  if (metrics.aiSearchVisibility > 60) {
    strengths.push("在AI搜索中表现优异")
  } else {
    weaknesses.push("AI搜索曝光率有待提升")
  }

  if (metrics.contentDepth > 70) {
    strengths.push("内容深度和质量较高")
  } else {
    weaknesses.push("内容深度需要加强")
  }

  if (metrics.technicalOptimization > 70) {
    strengths.push("技术实现较为完善")
  } else {
    weaknesses.push("技术优化存在改进空间")
  }

  if (metrics.userExperience > 80) {
    strengths.push("用户体验表现良好")
  } else {
    weaknesses.push("用户体验需要优化")
  }

  return {
    url,
    domain,
    geoScore,
    metrics,
    strengths,
    weaknesses,
    opportunities: ["扩大内容覆盖范围", "加强与AI搜索引擎的适配", "优化移动端体验", "建立更多权威外链"],
    threats: ["竞争对手技术升级", "搜索算法变化", "用户行为转变", "新兴平台竞争"],
  }
}

function generateRecommendations(yourSite: CompetitorData, competitors: CompetitorData[]) {
  const insights: string[] = []
  const immediate: string[] = []
  const shortTerm: string[] = []
  const longTerm: string[] = []

  // 找出表现最好的竞品
  const topCompetitor = competitors.reduce((prev, current) => (prev.geoScore > current.geoScore ? prev : current))

  // 生成洞察
  if (topCompetitor.geoScore > yourSite.geoScore) {
    insights.push(
      `${topCompetitor.domain} 在GEO优化方面领先，总分比您高 ${topCompetitor.geoScore - yourSite.geoScore} 分`,
    )
  }

  // 结构化数据对比
  const avgStructuredData =
    competitors.reduce((sum, comp) => sum + comp.metrics.structuredDataCoverage, 0) / competitors.length
  if (yourSite.metrics.structuredDataCoverage < avgStructuredData) {
    insights.push(
      `您的结构化数据覆盖率 (${yourSite.metrics.structuredDataCoverage}%) 低于竞品平均水平 (${Math.round(avgStructuredData)}%)`,
    )
    immediate.push("补充缺失的Schema.org标记")
    immediate.push("优化现有结构化数据的准确性")
  }

  // AI搜索表现对比
  const avgAIVisibility =
    competitors.reduce((sum, comp) => sum + comp.metrics.aiSearchVisibility, 0) / competitors.length
  if (yourSite.metrics.aiSearchVisibility < avgAIVisibility) {
    insights.push(`您的AI搜索曝光率需要提升，目前低于竞品平均水平`)
    shortTerm.push("优化内容以适配AI搜索算法")
    shortTerm.push("增加高质量的问答式内容")
  }

  // 内容策略建议
  const topContentCompetitor = competitors.reduce((prev, current) =>
    prev.metrics.contentDepth > current.metrics.contentDepth ? prev : current,
  )

  if (yourSite.metrics.contentDepth < topContentCompetitor.metrics.contentDepth) {
    shortTerm.push("深化内容专业度和权威性")
    shortTerm.push("建立系统性的内容更新机制")
  }

  // 技术优化建议
  if (yourSite.metrics.technicalOptimization < 80) {
    immediate.push("优化页面加载速度")
    immediate.push("改进移动端适配")
    shortTerm.push("实施渐进式Web应用(PWA)技术")
  }

  // 长期战略建议
  longTerm.push("建立行业权威地位和思想领导力")
  longTerm.push("开发创新的用户体验功能")
  longTerm.push("构建内容生态系统和合作伙伴网络")
  longTerm.push("投资AI驱动的个性化内容推荐系统")

  return {
    insights,
    recommendations: {
      immediate,
      shortTerm,
      longTerm,
    },
  }
}

export async function POST(request: NextRequest) {
  try {
    const { yourUrl, competitorUrls } = await request.json()

    if (!yourUrl || !competitorUrls || competitorUrls.length === 0) {
      return NextResponse.json({ error: "请提供您的网站URL和至少一个竞品URL" }, { status: 400 })
    }

    // 分析您的网站
    const yourSiteData = await analyzeWebsite(yourUrl)

    // 分析竞品网站
    const competitorPromises = competitorUrls.map((url: string) => analyzeWebsite(url))
    const competitors = await Promise.all(competitorPromises)

    const comparison = generateRecommendations(yourSiteData, competitors)

    const result = {
      competitors,
      comparison: {
        yourSite: yourSiteData,
        ...comparison,
      },
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("竞品分析错误:", error)
    return NextResponse.json({ error: "分析过程中出现错误，请稍后重试" }, { status: 500 })
  }
}
