"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Plus, X, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface CompetitorData {
  url: string
  domain: string
  geoScore: number
  metrics: {
    aiSearchVisibility: number
    structuredDataCoverage: number
    contentUpdateFrequency: number
    contentDepth: number
    technicalOptimization: number
    userExperience: number
  }
  strengths: string[]
  weaknesses: string[]
  opportunities: string[]
  threats: string[]
}

interface AnalysisResult {
  competitors: CompetitorData[]
  comparison: {
    yourSite: CompetitorData
    insights: string[]
    recommendations: {
      immediate: string[]
      shortTerm: string[]
      longTerm: string[]
    }
  }
}

export function CompetitorAnalysisTool() {
  const [urls, setUrls] = useState<string[]>(["", "", ""])
  const [yourUrl, setYourUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState("")

  const addUrlField = () => {
    if (urls.length < 5) {
      setUrls([...urls, ""])
    }
  }

  const removeUrlField = (index: number) => {
    if (urls.length > 1) {
      setUrls(urls.filter((_, i) => i !== index))
    }
  }

  const updateUrl = (index: number, value: string) => {
    const newUrls = [...urls]
    newUrls[index] = value
    setUrls(newUrls)
  }

  const handleAnalysis = async () => {
    const validUrls = urls.filter((url) => url.trim() !== "")
    if (validUrls.length === 0 || !yourUrl.trim()) {
      setError("请至少输入您的网站URL和一个竞品URL")
      return
    }

    setIsAnalyzing(true)
    setError("")

    try {
      const response = await fetch("/api/competitor-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          yourUrl: yourUrl.trim(),
          competitorUrls: validUrls,
        }),
      })

      if (!response.ok) {
        throw new Error("分析失败，请稍后重试")
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "分析过程中出现错误")
    } finally {
      setIsAnalyzing(false)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getComparisonIcon = (yourScore: number, competitorScore: number) => {
    if (yourScore > competitorScore) return <TrendingUp className="h-4 w-4 text-green-600" />
    if (yourScore < competitorScore) return <TrendingDown className="h-4 w-4 text-red-600" />
    return <Minus className="h-4 w-4 text-gray-600" />
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>竞品 GEO 策略分析</CardTitle>
          <CardDescription>输入您的网站和竞争对手的网站 URL，获取详细的 GEO 策略对比分析报告</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">您的网站 URL</label>
            <Input placeholder="https://yoursite.com" value={yourUrl} onChange={(e) => setYourUrl(e.target.value)} />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">竞品网站 URL</label>
            {urls.map((url, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  placeholder={`竞品网站 ${index + 1} (例: https://competitor${index + 1}.com)`}
                  value={url}
                  onChange={(e) => updateUrl(index, e.target.value)}
                />
                {urls.length > 1 && (
                  <Button variant="outline" size="icon" onClick={() => removeUrlField(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            {urls.length < 5 && (
              <Button variant="outline" onClick={addUrlField} className="w-full bg-transparent">
                <Plus className="h-4 w-4 mr-2" />
                添加更多竞品
              </Button>
            )}
          </div>

          {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>}

          <Button onClick={handleAnalysis} disabled={isAnalyzing} className="w-full">
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                正在分析竞品策略...
              </>
            ) : (
              "开始竞品分析"
            )}
          </Button>

          <p className="text-sm text-muted-foreground">
            // 要点先行：分析包括内容策略、技术实现、AI 搜索表现等多个维度
          </p>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>竞品对比概览</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-gray-300 p-3 text-left">指标</th>
                      <th className="border border-gray-300 p-3 text-center">您的网站</th>
                      {result.competitors.map((competitor, index) => (
                        <th key={index} className="border border-gray-300 p-3 text-center">
                          竞品 {String.fromCharCode(65 + index)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">GEO 总分</td>
                      <td className="border border-gray-300 p-3 text-center">
                        <span className={`font-semibold ${getScoreColor(result.comparison.yourSite.geoScore)}`}>
                          {result.comparison.yourSite.geoScore}
                        </span>
                      </td>
                      {result.competitors.map((competitor, index) => (
                        <td key={index} className="border border-gray-300 p-3 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className={`font-semibold ${getScoreColor(competitor.geoScore)}`}>
                              {competitor.geoScore}
                            </span>
                            {getComparisonIcon(result.comparison.yourSite.geoScore, competitor.geoScore)}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-gray-300 p-3 font-medium">AI 搜索曝光率</td>
                      <td className="border border-gray-300 p-3 text-center">
                        {result.comparison.yourSite.metrics.aiSearchVisibility}%
                      </td>
                      {result.competitors.map((competitor, index) => (
                        <td key={index} className="border border-gray-300 p-3 text-center">
                          <div className="flex items-center justify-center gap-2">
                            {competitor.metrics.aiSearchVisibility}%
                            {getComparisonIcon(
                              result.comparison.yourSite.metrics.aiSearchVisibility,
                              competitor.metrics.aiSearchVisibility,
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">结构化数据覆盖</td>
                      <td className="border border-gray-300 p-3 text-center">
                        {result.comparison.yourSite.metrics.structuredDataCoverage}%
                      </td>
                      {result.competitors.map((competitor, index) => (
                        <td key={index} className="border border-gray-300 p-3 text-center">
                          <div className="flex items-center justify-center gap-2">
                            {competitor.metrics.structuredDataCoverage}%
                            {getComparisonIcon(
                              result.comparison.yourSite.metrics.structuredDataCoverage,
                              competitor.metrics.structuredDataCoverage,
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">详细竞品分析</h2>
            {result.competitors.map((competitor, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>竞品 {String.fromCharCode(65 + index)}</CardTitle>
                      <CardDescription>{competitor.domain}</CardDescription>
                    </div>
                    <Badge
                      variant={
                        competitor.geoScore >= 80 ? "default" : competitor.geoScore >= 60 ? "secondary" : "destructive"
                      }
                    >
                      GEO 得分: {competitor.geoScore}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>AI 搜索曝光率</span>
                        <span>{competitor.metrics.aiSearchVisibility}%</span>
                      </div>
                      <Progress value={competitor.metrics.aiSearchVisibility} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>结构化数据覆盖</span>
                        <span>{competitor.metrics.structuredDataCoverage}%</span>
                      </div>
                      <Progress value={competitor.metrics.structuredDataCoverage} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>技术优化程度</span>
                        <span>{competitor.metrics.technicalOptimization}%</span>
                      </div>
                      <Progress value={competitor.metrics.technicalOptimization} className="h-2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-green-700">优势策略</h4>
                      <ul className="text-sm space-y-1">
                        {competitor.strengths.map((strength, i) => (
                          <li key={i}>• {strength}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-red-700">薄弱环节</h4>
                      <ul className="text-sm space-y-1">
                        {competitor.weaknesses.map((weakness, i) => (
                          <li key={i}>• {weakness}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>基于竞品分析的优化建议</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">🚀 立即行动项</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    {result.comparison.recommendations.immediate.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">📈 短期优化 (1-3个月)</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    {result.comparison.recommendations.shortTerm.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">🎯 长期战略 (3-12个月)</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    {result.comparison.recommendations.longTerm.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">关键洞察</h4>
                <div className="space-y-2">
                  {result.comparison.insights.map((insight, i) => (
                    <div key={i} className="p-3 bg-muted rounded-lg">
                      <p className="text-sm">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
