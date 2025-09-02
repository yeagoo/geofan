import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, FileText, Target, TrendingUp, ArrowRight, Lightbulb, Brain } from "lucide-react"
import Link from "next/link"

export default function ContentAnalyzerPage() {
  return (
    <DocsLayout>
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <Badge variant="outline">内容分析</Badge>
            <h1 className="font-bold text-4xl lg:text-5xl text-balance">智能内容分析工具</h1>
            <p className="text-xl text-muted-foreground text-balance">
              深度分析内容的语义结构、实体关系和优化潜力，为 GEO 优化提供数据驱动的洞察。
            </p>
          </div>
        </div>

        <div className="pb-12 pt-8">
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <Alert className="my-6">
              <Brain className="h-4 w-4" />
              <AlertDescription>
                <strong>分析能力：</strong>基于先进的 NLP 技术，深度解析内容的语义结构、实体关系和优化机会。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">内容分析界面</h2>

            <div className="bg-muted p-6 rounded-lg my-8">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-2">分析类型</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="选择分析类型" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="semantic">语义结构分析</SelectItem>
                        <SelectItem value="entity">实体关系分析</SelectItem>
                        <SelectItem value="readability">可读性分析</SelectItem>
                        <SelectItem value="comprehensive">综合分析</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">内容来源</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="选择内容来源" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="url">网页 URL</SelectItem>
                        <SelectItem value="text">直接文本</SelectItem>
                        <SelectItem value="file">文件上传</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">内容输入</label>
                  <Input placeholder="输入网页 URL 或粘贴内容文本..." className="mb-4" />
                </div>

                <Button className="w-full">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  开始智能分析
                </Button>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">分析功能详解</h2>

            <p className="leading-relaxed">
              内容分析工具提供多维度的深度分析，帮助您全面了解内容的优势和改进空间。 每种分析都基于 GEO
              优化的核心原则，为具体的优化行动提供指导。
            </p>

            <div className="grid gap-6 md:grid-cols-2 my-8">
              <Card>
                <CardHeader>
                  <Brain className="h-8 w-8 text-blue-500" />
                  <CardTitle>语义结构分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>主题识别和分类</li>
                    <li>概念层次结构</li>
                    <li>语义关联强度</li>
                    <li>上下文完整性</li>
                    <li>逻辑连贯性评估</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-green-500" />
                  <CardTitle>实体关系分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>命名实体识别</li>
                    <li>实体类型分类</li>
                    <li>关系网络构建</li>
                    <li>权威性评估</li>
                    <li>知识图谱映射</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-purple-500" />
                  <CardTitle>可读性分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>阅读难度评估</li>
                    <li>句子结构分析</li>
                    <li>词汇复杂度</li>
                    <li>段落组织评价</li>
                    <li>用户体验优化</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-orange-500" />
                  <CardTitle>优化潜力评估</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>改进机会识别</li>
                    <li>优化优先级排序</li>
                    <li>效果预期评估</li>
                    <li>竞争力分析</li>
                    <li>行动计划建议</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "深度的内容分析是精准优化的前提，数据驱动的洞察比直觉更可靠。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">分析报告示例</h2>

            <p className="leading-relaxed mb-6">
              以下是一个典型的内容分析报告，展示了工具如何从多个维度解析内容并提供优化建议。
            </p>

            <div className="bg-white border rounded-lg p-6 my-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">内容分析报告</h3>
                <div className="flex gap-2">
                  <Badge variant="outline">语义分析</Badge>
                  <Badge variant="outline">实体分析</Badge>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">语义结构概览</h4>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="bg-blue-50 p-3 rounded">
                      <div className="text-2xl font-bold text-blue-600">8</div>
                      <div className="text-sm text-blue-800">核心主题</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <div className="text-2xl font-bold text-green-600">24</div>
                      <div className="text-sm text-green-800">关键概念</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <div className="text-2xl font-bold text-purple-600">92%</div>
                      <div className="text-sm text-purple-800">语义连贯性</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">实体关系网络</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div>
                        <span className="font-medium">人物实体</span>
                        <span className="text-sm text-muted-foreground ml-2">Geoffrey Hinton, Yann LeCun</span>
                      </div>
                      <Badge variant="secondary">权威性: 高</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div>
                        <span className="font-medium">技术概念</span>
                        <span className="text-sm text-muted-foreground ml-2">深度学习, 神经网络</span>
                      </div>
                      <Badge variant="secondary">相关性: 强</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div>
                        <span className="font-medium">组织机构</span>
                        <span className="text-sm text-muted-foreground ml-2">Google, OpenAI</span>
                      </div>
                      <Badge variant="secondary">可信度: 高</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">优化建议</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <p className="text-sm">增加更多具体的应用案例，提升内容的实用性</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <p className="text-sm">添加相关概念的定义和解释，提高可理解性</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <p className="text-sm">建立更多实体间的关联，丰富知识图谱</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">高级分析功能</h2>

            <p className="leading-relaxed">
              除了基础的内容分析，工具还提供了一系列高级功能， 帮助您更深入地理解内容的特点和优化潜力。
            </p>

            <div className="space-y-6 my-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">情感倾向分析</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  分析内容的情感色彩和倾向性，评估其对用户情感体验的影响。
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>分析维度：</strong>积极性、中性、消极性、情感强度、 情感一致性、目标情感匹配度
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">主题权威性评估</h3>
                <p className="text-sm text-muted-foreground mb-3">评估内容在特定主题领域的权威性和专业深度。</p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>评估指标：</strong>专业术语使用准确性、引用来源质量、 内容深度、行业认知度、专家观点覆盖
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">多语言语义分析</h3>
                <p className="text-sm text-muted-foreground mb-3">支持多种语言的语义分析，适用于国际化内容优化。</p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>支持语言：</strong>中文、英文、日文、韩文、德文、法文等 20+ 种语言
                </div>
              </div>
            </div>

            <Alert className="my-8">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>分析技巧：</strong>建议结合多种分析类型使用，从不同角度全面了解内容特点。
                定期分析可以帮助您跟踪内容质量的变化趋势。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">数据可视化与导出</h2>

            <p className="leading-relaxed">
              分析���果以直观的可视化形式呈现，支持多种格式的数据导出， 便于进一步分析和团队协作。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">可视化图表</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>语义关系网络图</li>
                  <li>实体重要性热力图</li>
                  <li>主题分布饼图</li>
                  <li>优化进度趋势图</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">导出格式</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>PDF 详细报告</li>
                  <li>Excel 数据表格</li>
                  <li>JSON 结构化数据</li>
                  <li>CSV 统计数据</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">API 集成与自动化</h2>

            <p className="leading-relaxed mb-4">
              为了支持大规模的内容分析需求，工具提供了 RESTful API 接口， 支持与现有系统的集成和自动化工作流程。
            </p>

            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg my-6">
              <div className="text-sm font-mono">
                <div className="text-green-400"># API 调用示例</div>
                <pre>{`curl -X POST https://api.geo.fan/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "您的内容文本...",
    "analysis_type": "comprehensive",
    "language": "zh-CN"
  }'`}</pre>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">批量分析</h4>
                <p className="text-sm text-muted-foreground">
                  支持批量上传和分析多个内容文件，适用于大型网站的内容审核。
                </p>
              </div>

              <div>
                <h4 className="font-semibold">定时监控</h4>
                <p className="text-sm text-muted-foreground">设置定时任务，自动监控指定内容的变化和优化效果。</p>
              </div>

              <div>
                <h4 className="font-semibold">集成通知</h4>
                <p className="text-sm text-muted-foreground">支持邮件、Slack、微信等多种通知方式，及时获取分析结果。</p>
              </div>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-8">
              "自动化的内容分析让 GEO 优化从手工作业升级为智能化运营。"
            </blockquote>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">完善您的工具链</h3>
              <p className="text-sm text-muted-foreground mb-4">
                内容分析工具与 AI 提示词生成器配合使用，可以形成完整的内容优化工作流： 分析 → 生成 → 优化 → 验证。
              </p>
              <div className="flex gap-2">
                <Button asChild>
                  <Link href="/tools/ai-prompt-generator">
                    AI 提示词生成器
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/best-practices/content-structure">最佳实践指南</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
