"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, CheckCircle, AlertTriangle, Loader2, Copy, Plus, Minus, Lightbulb } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface AnalysisItem {
  item: string
  points: number
  description: string
  solution?: string
}

interface GeoAnalysisResult {
  overall_score: number
  authority: {
    score: number
    feedback: string
    suggestions: string[]
    positiveItems: AnalysisItem[]
    negativeItems: AnalysisItem[]
  }
  relevance: {
    score: number
    feedback: string
    suggestions: string[]
    positiveItems: AnalysisItem[]
    negativeItems: AnalysisItem[]
  }
  structure: {
    score: number
    feedback: string
    suggestions: string[]
    positiveItems: AnalysisItem[]
    negativeItems: AnalysisItem[]
  }
  user_value: {
    score: number
    feedback: string
    suggestions: string[]
    positiveItems: AnalysisItem[]
    negativeItems: AnalysisItem[]
  }
  meta_info: {
    title: string
    description: string
    word_count: number
    headings_count: number
    links_count: number
  }
}

export function GeoCheckerTool() {
  const { t } = useLanguage()
  const [inputType, setInputType] = useState<"url" | "text">("url")
  const [urlInput, setUrlInput] = useState("")
  const [textInput, setTextInput] = useState("")
  const [keywords, setKeywords] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<GeoAnalysisResult | null>(null)
  const [error, setError] = useState("")

  const handleAnalysis = async () => {
    if (!urlInput.trim() && !textInput.trim()) {
      setError("请输入URL或内容文本")
      return
    }

    setIsAnalyzing(true)
    setError("")
    setResult(null)

    try {
      const response = await fetch("/api/geo-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: inputType,
          url: urlInput,
          text: textInput,
          keywords: keywords,
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

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="h-5 w-5 text-green-500" />
    if (score >= 60) return <AlertTriangle className="h-5 w-5 text-yellow-500" />
    return <AlertTriangle className="h-5 w-5 text-red-500" />
  }

  const copyReport = () => {
    if (!result) return
    const reportText = `GEO分析报告\n总分：${result.overall_score}/100\n\n权威性：${result.authority.score}/100\n${result.authority.feedback}\n\n相关性：${result.relevance.score}/100\n${result.relevance.feedback}\n\n结构性：${result.structure.score}/100\n${result.structure.feedback}\n\n用户价值：${result.user_value.score}/100\n${result.user_value.feedback}`
    navigator.clipboard.writeText(reportText)
  }

  const renderAnalysisDimension = (
    title: string,
    data: {
      score: number
      feedback: string
      suggestions: string[]
      positiveItems: AnalysisItem[]
      negativeItems: AnalysisItem[]
    },
  ) => (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getScoreIcon(data.score)}
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <span className={`font-bold ${getScoreColor(data.score)}`}>{data.score}/100</span>
        </div>
        <Progress value={data.score} className="h-2" />
      </CardHeader>
      <CardContent className="pt-0 space-y-4">
        <p className="text-sm text-muted-foreground">{data.feedback}</p>

        {/* 加分项 */}
        {data.positiveItems.length > 0 && (
          <div className="space-y-2">
            <h5 className="text-sm font-medium text-green-700 flex items-center gap-1">
              <Plus className="h-4 w-4" />
              加分项
            </h5>
            <div className="space-y-2">
              {data.positiveItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2 p-2 bg-green-50 rounded-md">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                    +{item.points}
                  </Badge>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-green-800">{item.item}</div>
                    <div className="text-xs text-green-600">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 扣分项 */}
        {data.negativeItems.length > 0 && (
          <div className="space-y-2">
            <h5 className="text-sm font-medium text-red-700 flex items-center gap-1">
              <Minus className="h-4 w-4" />
              扣分项
            </h5>
            <div className="space-y-2">
              {data.negativeItems.map((item, index) => (
                <div key={index} className="space-y-2 p-3 bg-red-50 rounded-md border-l-4 border-red-200">
                  <div className="flex items-start gap-2">
                    <Badge variant="destructive" className="text-xs">
                      {item.points}
                    </Badge>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-red-800">{item.item}</div>
                      <div className="text-xs text-red-600">{item.description}</div>
                    </div>
                  </div>
                  {item.solution && (
                    <div className="flex items-start gap-2 mt-2 p-2 bg-blue-50 rounded">
                      <Lightbulb className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="text-xs text-blue-700">
                        <span className="font-medium">解决方案：</span>
                        {item.solution}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t.tools.contentAnalysis}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs value={inputType} onValueChange={(value) => setInputType(value as "url" | "text")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="url">{t.tools.urlAnalysis}</TabsTrigger>
              <TabsTrigger value="text">{t.tools.textAnalysis}</TabsTrigger>
            </TabsList>

            <TabsContent value="url" className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">{t.tools.webPageUrl}</label>
                <Input
                  placeholder="https://example.com/article"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                />
              </div>
            </TabsContent>

            <TabsContent value="text" className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">{t.tools.contentText}</label>
                <Textarea
                  placeholder="粘贴您要分析的内容..."
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  rows={6}
                />
              </div>
            </TabsContent>
          </Tabs>

          <div>
            <label className="block text-sm font-medium mb-2">{t.tools.targetKeywords}</label>
            <Input
              placeholder="例如：GEO优化, 生成引擎优化"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button onClick={handleAnalysis} disabled={isAnalyzing} className="w-full">
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t.tools.analyzing}
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                开始 GEO {t.tools.analyze}
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>GEO 分析报告</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-lg px-3 py-1">
                    总分：{result.overall_score}/100
                  </Badge>
                  <Button variant="outline" size="sm" onClick={copyReport}>
                    <Copy className="h-4 w-4 mr-2" />
                    {t.tools.copyReport}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {renderAnalysisDimension("权威性", result.authority)}
                {renderAnalysisDimension("相关性", result.relevance)}
                {renderAnalysisDimension("结构性", result.structure)}
                {renderAnalysisDimension("用户价值", result.user_value)}
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">{t.tools.contentOverview}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <div className="text-2xl font-bold">{result.meta_info.word_count}</div>
                      <div className="text-sm text-muted-foreground">{t.tools.wordCount}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{result.meta_info.headings_count}</div>
                      <div className="text-sm text-muted-foreground">{t.tools.headingsCount}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{result.meta_info.links_count}</div>
                      <div className="text-sm text-muted-foreground">{t.tools.linksCount}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{Math.round(result.meta_info.word_count / 200)}</div>
                      <div className="text-sm text-muted-foreground">{t.tools.estimatedReadingTime}</div>
                    </div>
                  </div>

                  {result.meta_info.title && (
                    <div className="mt-4">
                      <h5 className="text-sm font-medium mb-1">{t.tools.pageTitle}：</h5>
                      <p className="text-sm text-muted-foreground">{result.meta_info.title}</p>
                    </div>
                  )}

                  {result.meta_info.description && (
                    <div className="mt-3">
                      <h5 className="text-sm font-medium mb-1">{t.tools.pageDescription}：</h5>
                      <p className="text-sm text-muted-foreground">{result.meta_info.description}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
