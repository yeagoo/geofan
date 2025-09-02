import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Copy, RefreshCw, Settings, ArrowRight, Lightbulb, Wand2 } from "lucide-react"
import Link from "next/link"

export default function AiPromptGeneratorPage() {
  return (
    <DocsLayout>
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <Badge variant="outline">AI 工具</Badge>
            <h1 className="inline-block font-bold text-4xl lg:text-5xl text-balance">AI 提示词生成器</h1>
            <p className="text-xl text-muted-foreground text-balance">
              智能生成高质量的 AI 提示词，帮助您创作出更符合 GEO 优化要求的内容。
            </p>
          </div>
        </div>

        <div className="pb-12 pt-8">
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <Alert className="my-6">
              <Wand2 className="h-4 w-4" />
              <AlertDescription>
                <strong>智能特性：</strong>基于 GEO 优化原则，自动生成结构化、专业化的 AI 提示词模板。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">提示词生成器</h2>

            <div className="bg-muted p-6 rounded-lg my-8">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-2">内容类型</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="选择内容类型" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="article">技术文章</SelectItem>
                        <SelectItem value="tutorial">教程指南</SelectItem>
                        <SelectItem value="analysis">分析报告</SelectItem>
                        <SelectItem value="review">产品评测</SelectItem>
                        <SelectItem value="howto">操作指南</SelectItem>
                        <SelectItem value="comparison">对比分析</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">目标受众</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="选择目标受众" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">初学者</SelectItem>
                        <SelectItem value="intermediate">中级用户</SelectItem>
                        <SelectItem value="expert">专业人士</SelectItem>
                        <SelectItem value="general">一般用户</SelectItem>
                        <SelectItem value="technical">技术人员</SelectItem>
                        <SelectItem value="business">商业用户</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">主题关键词</label>
                  <Input placeholder="例如：GEO 优化, 人工智能, 搜索引擎" className="mb-2" />
                  <p className="text-xs text-muted-foreground">用逗号分隔多个关键词</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">特殊要求（可选）</label>
                  <Textarea placeholder="例如：需要包含具体案例、要求实用性强、需要数据支撑等..." rows={3} />
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Sparkles className="mr-2 h-4 w-4" />
                    生成提示词
                  </Button>
                  <Button variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">生成结果示例</h2>

            <p className="leading-relaxed mb-6">
              以下是针对"GEO 优化技术文章"生成的提示词示例，展示了工具如何构建结构化、专业化的提示词。
            </p>

            <div className="bg-white border rounded-lg p-6 my-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">生成的提示词</h3>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Copy className="h-4 w-4 mr-1" />
                    复制
                  </Button>
                  <Button size="sm" variant="outline">
                    <RefreshCw className="h-4 w-4 mr-1" />
                    重新生成
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                <div className="space-y-3">
                  <div>
                    <span className="text-blue-600 font-semibold"># 角色设定</span>
                    <div className="mt-1">
                      你是一位资深的 SEO 专家和 AI 技术研究者，拥有 10
                      年以上的搜索引擎优化经验，深度了解生成引擎优化（GEO）的最新发展和实践方法。
                    </div>
                  </div>

                  <div>
                    <span className="text-green-600 font-semibold"># 任务描述</span>
                    <div className="mt-1">
                      请为中级技术人员创作一篇关于"GEO 优化实践技巧"的深度技术文章，重点介绍如何在 AI
                      时代优化内容以获得更好的生成引擎表现。
                    </div>
                  </div>

                  <div>
                    <span className="text-purple-600 font-semibold"># 内容要求</span>
                    <div className="mt-1 space-y-1">
                      <div>- 长度：3000-4000 字</div>
                      <div>- 风格：专业但易懂，理论与实践并重</div>
                      <div>- 结构：包含引言、核心方法、实践案例、总结建议</div>
                      <div>- 深度：提供可操作的具体方法和工具推荐</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-orange-600 font-semibold"># GEO 优化要求</span>
                    <div className="mt-1 space-y-1">
                      <div>- 权威性：引用最新的研究数据和权威来源</div>
                      <div>- 相关性：直接回答用户关于 GEO 优化的核心问题</div>
                      <div>- 结构性：使用清晰的标题层次和逻辑组织</div>
                      <div>- 用户价值：提供立即可用的实践方法</div>
                    </div>
                  </div>

                  <div>
                    <span className="text-red-600 font-semibold"># 输出格式</span>
                    <div className="mt-1">
                      请按照以下结构输出，每个部分都要包含具体的实例和数据支撑：
                      <br />
                      1. 引言（问题背景和重要性）
                      <br />
                      2. GEO 核心原理解析
                      <br />
                      3. 实践优化技巧（至少 5 个具体方法）
                      <br />
                      4. 成功案例分析
                      <br />
                      5. 工具和资源推荐
                      <br />
                      6. 总结和行动建议
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">提示词模板库</h2>

            <p className="leading-relaxed">
              工具内置了丰富的提示词模板库，涵盖各种内容类型和应用场景。 每个模板都经过 GEO 优化原则的验证和调优。
            </p>

            <div className="grid gap-6 md:grid-cols-2 my-8">
              <Card>
                <CardHeader>
                  <Sparkles className="h-8 w-8 text-blue-500" />
                  <CardTitle>教程类模板</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>技术教程指南</li>
                    <li>操作步骤说明</li>
                    <li>工具使用教程</li>
                    <li>最佳实践指南</li>
                    <li>问题解决方案</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Settings className="h-8 w-8 text-green-500" />
                  <CardTitle>分析类模板</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>行业趋势分析</li>
                    <li>产品对比评测</li>
                    <li>技术深度解析</li>
                    <li>市场研究报告</li>
                    <li>案例研究分析</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <RefreshCw className="h-8 w-8 text-purple-500" />
                  <CardTitle>创意类模板</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>观点文章</li>
                    <li>思考随笔</li>
                    <li>创新理念</li>
                    <li>未来预测</li>
                    <li>行业洞察</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Copy className="h-8 w-8 text-orange-500" />
                  <CardTitle>实用类模板</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>工具推荐</li>
                    <li>资源整理</li>
                    <li>清单指南</li>
                    <li>快速参考</li>
                    <li>常见问题</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "好的提示词是成功内容创作的一半，结构化的思考带来结构化的输出。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">高级功能特性</h2>

            <p className="leading-relaxed">
              除了基础的提示词生成，工具还提供了多项高级功能， 帮助您更精确地控制 AI 内容生成的质量和方向。
            </p>

            <div className="space-y-6 my-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">多轮对话优化</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  生成多轮对话的提示词序列，通过渐进式引导获得更高质量的内容输出。
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>应用场景：</strong>复杂主题的深度分析、多角度的全面讨论、 逐步细化的内容创作
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">个性化定制</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  根据您的写作风格、行业背景和目标受众，定制专属的提示词模板。
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>定制维度：</strong>语言风格、专业程度、内容深度、 结构偏好、引用习惯
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">效果预测</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  基于历史数据和模型分析，预测不同提示词的内容生成效果。
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <strong>预测指标：</strong>内容质量评分、GEO 优化潜力、 用户参与度预期、优化建议
                </div>
              </div>
            </div>

            <Alert className="my-8">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>使用技巧：</strong>生成提示词后，建议先进行小规模测试，
                根据输出效果调整参数，然后再进行大规模内容创作。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">提示词优化建议</h2>

            <p className="leading-relaxed">
              基于大量的实践经验和效果数据，我们总结了一系列提示词优化的最佳实践， 帮助您获得更好的 AI 内容生成效果。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">结构优化原则</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>明确的角色设定和专业背景</li>
                  <li>具体的任务描述和期望输出</li>
                  <li>详细的格式要求和结构指导</li>
                  <li>清晰的质量标准和评判依据</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">内容优化技巧</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>提供具体的示例和参考</li>
                  <li>设定合理的长度和深度要求</li>
                  <li>强调 GEO 优化的具体要求</li>
                  <li>包含目标受众的特征描述</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">批量生成与管理</h2>

            <p className="leading-relaxed mb-4">
              对于大规模的内容创作需求，工具支持批量生成和统一管理提示词， 提升工作效率和内容一致性。
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">批量生成功能</h4>
                <p className="text-sm text-muted-foreground">
                  上传主题列表，自动生成对应的提示词，支持 CSV、Excel 等格式。
                </p>
              </div>

              <div>
                <h4 className="font-semibold">模板管理系统</h4>
                <p className="text-sm text-muted-foreground">
                  保存、分类和管理您的提示词模板，支持团队共享和版本控制。
                </p>
              </div>

              <div>
                <h4 className="font-semibold">效果跟踪分析</h4>
                <p className="text-sm text-muted-foreground">跟踪不同提示词的使用效果，优化模板库和生成策略。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">集成与自动化</h2>

            <p className="leading-relaxed mb-4">工具提供 API 接口和插件支持，可以集成到您现有的内容创作工作流程中。</p>

            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg my-6">
              <div className="text-sm font-mono">
                <div className="text-green-400"># API 调用示例</div>
                <pre>{`curl -X POST https://api.geo.fan/prompt/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "content_type": "article",
    "audience": "intermediate", 
    "keywords": ["GEO优化", "AI内容"],
    "requirements": "需要包含实践案例"
  }'`}</pre>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">支持的集成</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>WordPress 插件</li>
                  <li>Notion 集成</li>
                  <li>Google Docs 扩展</li>
                  <li>Slack 机器人</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">自动化场景</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>定时内容创作</li>
                  <li>主题跟踪生成</li>
                  <li>多平台同步发布</li>
                  <li>质量自动检测</li>
                </ul>
              </div>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-8">
              "自动化的提示词生成让内容创作从手工艺升级为工业化生产。"
            </blockquote>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">构建完整的优化流程</h3>
              <p className="text-sm text-muted-foreground mb-4">
                AI 提示词生成器是内容优化流程的起点。结合内容分析工具和最佳实践指南，
                可以构建从创作到优化的完整工作流程。
              </p>
              <div className="flex gap-2">
                <Button asChild>
                  <Link href="/best-practices/content-structure">
                    最佳实践指南
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/tools/content-analyzer">内容分析工具</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
