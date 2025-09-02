"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Loader2, CheckCircle, AlertCircle, XCircle, TrendingUp } from "lucide-react"

interface AnalysisResult {
  url: string
  overallScore: number
  dimensions: {
    contentQuality: {
      score: number
      metrics: {
        semanticRichness: number
        originality: number
        accuracy: number
      }
      issues: string[]
      improvements: string[]
    }
    structuredData: {
      score: number
      metrics: {
        schemaCoverage: number
        jsonLdImplementation: number
        microdataCompleteness: number
      }
      issues: string[]
      improvements: string[]
    }
    semanticOptimization: {
      score: number
      metrics: {
        entityRecognition: number
        relationshipMapping: number
        contextualRelevance: number
      }
      issues: string[]
      improvements: string[]
    }
    userExperience: {
      score: number
      metrics: {
        loadingSpeed: number
        mobileOptimization: number
        accessibility: number
      }
      issues: string[]
      improvements: string[]
    }
  }
  competitorComparison: {
    yourScore: number
    industryAverage: number
    industryLeader: number
  }
  actionPlan: {
    phase1: string[]
    phase2: string[]
    phase3: string[]
  }
}

export function PerformanceAnalysisTool() {
  const [url, setUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState("")

  const handleAnalysis = async () => {
    if (!url.trim()) {
      setError("请输入有效的网站URL")
      return
    }

    try {
      new URL(url)
    } catch {
      setError("请输入有效的URL格式")
      return
    }

    setIsAnalyzing(true)
    setError("")
    setResult(null)

    try {
      const response = await fetch("/api/performance-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
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

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-4 h-4 text-green-600" />
    if (score >= 60) return <AlertCircle className="w-4 h-4 text-yellow-600" />
    return <XCircle className="w-4 h-4 text-red-600" />
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>网站 GEO 性能检测</CardTitle>
          <CardDescription>输入您的网站 URL，获取详细的 GEO 优化分析报告</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input
              placeholder="请输入网站 URL (例: https://example.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
              disabled={isAnalyzing}
            />
            <Button onClick={handleAnalysis} disabled={isAnalyzing}>
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  分析中...
                </>
              ) : (
                "开始分析"
              )}
            </Button>
          </div>
          {error && <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">{error}</div>}
          <p className="text-sm text-muted-foreground">// 要点先行：分析包括内容质量、结构化数据、语义优化等多个维度</p>
        </CardContent>
      </Card>

      {result && (
        <>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>分析结果总览</span>
                <Badge
                  variant={
                    result.overallScore >= 80 ? "default" : result.overallScore >= 60 ? "secondary" : "destructive"
                  }
                >
                  总分: {result.overallScore}/100
                </Badge>
              </CardTitle>
              <CardDescription>网站: {result.url}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>整体 GEO 性能</span>
                  <span className={getScoreColor(result.overallScore)}>{result.overallScore}%</span>
                </div>
                <Progress value={result.overallScore} className="h-3" />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {getScoreIcon(result.dimensions.contentQuality.score)}
                  <span>内容质量评估</span>
                  <Badge variant="outline">{result.dimensions.contentQuality.score}/100</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>语义丰富度</span>
                      <span>{result.dimensions.contentQuality.metrics.semanticRichness}%</span>
                    </div>
                    <Progress value={result.dimensions.contentQuality.metrics.semanticRichness} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>内容原创性</span>
                      <span>{result.dimensions.contentQuality.metrics.originality}%</span>
                    </div>
                    <Progress value={result.dimensions.contentQuality.metrics.originality} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>信息准确性</span>
                      <span>{result.dimensions.contentQuality.metrics.accuracy}%</span>
                    </div>
                    <Progress value={result.dimensions.contentQuality.metrics.accuracy} className="h-2" />
                  </div>
                </div>

                {result.dimensions.contentQuality.issues.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-red-600">发现的问题:</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      {result.dimensions.contentQuality.issues.map((issue, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <XCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.dimensions.contentQuality.improvements.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-blue-600">改进建议:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      {result.dimensions.contentQuality.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <TrendingUp className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {getScoreIcon(result.dimensions.structuredData.score)}
                  <span>结构化数据</span>
                  <Badge variant="outline">{result.dimensions.structuredData.score}/100</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Schema 标记覆盖</span>
                      <span>{result.dimensions.structuredData.metrics.schemaCoverage}%</span>
                    </div>
                    <Progress value={result.dimensions.structuredData.metrics.schemaCoverage} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>JSON-LD 实现</span>
                      <span>{result.dimensions.structuredData.metrics.jsonLdImplementation}%</span>
                    </div>
                    <Progress value={result.dimensions.structuredData.metrics.jsonLdImplementation} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>微数据完整性</span>
                      <span>{result.dimensions.structuredData.metrics.microdataCompleteness}%</span>
                    </div>
                    <Progress value={result.dimensions.structuredData.metrics.microdataCompleteness} className="h-2" />
                  </div>
                </div>

                {result.dimensions.structuredData.issues.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-red-600">发现的问题:</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      {result.dimensions.structuredData.issues.map((issue, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <XCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.dimensions.structuredData.improvements.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-blue-600">改进建议:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      {result.dimensions.structuredData.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <TrendingUp className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {getScoreIcon(result.dimensions.semanticOptimization.score)}
                  <span>语义优化</span>
                  <Badge variant="outline">{result.dimensions.semanticOptimization.score}/100</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>实体识别准确性</span>
                      <span>{result.dimensions.semanticOptimization.metrics.entityRecognition}%</span>
                    </div>
                    <Progress
                      value={result.dimensions.semanticOptimization.metrics.entityRecognition}
                      className="h-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>关系映射完整性</span>
                      <span>{result.dimensions.semanticOptimization.metrics.relationshipMapping}%</span>
                    </div>
                    <Progress
                      value={result.dimensions.semanticOptimization.metrics.relationshipMapping}
                      className="h-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>上下文相关性</span>
                      <span>{result.dimensions.semanticOptimization.metrics.contextualRelevance}%</span>
                    </div>
                    <Progress
                      value={result.dimensions.semanticOptimization.metrics.contextualRelevance}
                      className="h-2"
                    />
                  </div>
                </div>

                {result.dimensions.semanticOptimization.issues.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-red-600">发现的问题:</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      {result.dimensions.semanticOptimization.issues.map((issue, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <XCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.dimensions.semanticOptimization.improvements.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-blue-600">改进建议:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      {result.dimensions.semanticOptimization.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <TrendingUp className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {getScoreIcon(result.dimensions.userExperience.score)}
                  <span>用户体验</span>
                  <Badge variant="outline">{result.dimensions.userExperience.score}/100</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>页面加载速度</span>
                      <span>{result.dimensions.userExperience.metrics.loadingSpeed}%</span>
                    </div>
                    <Progress value={result.dimensions.userExperience.metrics.loadingSpeed} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>移动端适配</span>
                      <span>{result.dimensions.userExperience.metrics.mobileOptimization}%</span>
                    </div>
                    <Progress value={result.dimensions.userExperience.metrics.mobileOptimization} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>可访问性</span>
                      <span>{result.dimensions.userExperience.metrics.accessibility}%</span>
                    </div>
                    <Progress value={result.dimensions.userExperience.metrics.accessibility} className="h-2" />
                  </div>
                </div>

                {result.dimensions.userExperience.issues.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-red-600">发现的问题:</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      {result.dimensions.userExperience.issues.map((issue, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <XCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.dimensions.userExperience.improvements.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-blue-600">改进建议:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      {result.dimensions.userExperience.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <TrendingUp className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Separator />

          <Card>
            <CardHeader>
              <CardTitle>竞品对比分析</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">您的网站</div>
                    <div className="text-sm text-muted-foreground">
                      GEO 得分: {result.competitorComparison.yourScore}/100
                    </div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">行业平均</div>
                    <div className="text-sm text-muted-foreground">
                      GEO 得分: {result.competitorComparison.industryAverage}/100
                    </div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">行业领先</div>
                    <div className="text-sm text-muted-foreground">
                      GEO 得分: {result.competitorComparison.industryLeader}/100
                    </div>
                  </div>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  {result.competitorComparison.yourScore > result.competitorComparison.industryAverage
                    ? "您的网站在 GEO 优化方面已超过行业平均水平，继续优化可达到领先地位。"
                    : "您的网站在 GEO 优化方面还有提升空间，建议参考行业最佳实践进行优化。"}
                </blockquote>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>优化行动计划</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">第一阶段：基础优化（1-2周）</h3>
                    <ul className="space-y-2 text-sm">
                      {result.actionPlan.phase1.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">第二阶段：内容优化（3-4周）</h3>
                    <ul className="space-y-2 text-sm">
                      {result.actionPlan.phase2.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">第三阶段：高级优化（5-8周）</h3>
                    <ul className="space-y-2 text-sm">
                      {result.actionPlan.phase3.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mt-6">
                "成功的 GEO 优化需要持续的努力和数据驱动的决策，而不是一次性的改进。"
              </blockquote>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
