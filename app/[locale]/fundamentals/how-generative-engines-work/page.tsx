import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Brain, Database, Zap, ArrowRight, Lightbulb, Cpu } from "lucide-react"
import Link from "next/link"

export default function HowGenerativeEnginesWorkPage() {
  return (
    <DocsLayout>
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex-1 space-y-4">
          <Badge variant="outline">基础理论</Badge>
          <h1 className="font-bold text-4xl lg:text-5xl text-balance">生成引擎工作原理深度解析</h1>
          <p className="text-xl text-muted-foreground text-balance">
            深入理解 ChatGPT、Claude、Gemini 等生成式 AI 引擎的内部机制，为 GEO 优化奠定理论基础。
          </p>
        </div>

        <div className="pb-12 pt-8">
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <Alert className="my-6">
              <Brain className="h-4 w-4" />
              <AlertDescription>
                <strong>核心概念：</strong>生成引擎不是简单的搜索工具，而是基于大规模语言模型的知识理解和生成系统。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">生成引擎的核心架构</h2>

            <p className="leading-relaxed">
              现代生成引擎基于 Transformer 架构的大语言模型（LLM），通过预训练和微调两个阶段来获得理解和生成能力。
              与传统搜索引擎不同，生成引擎不仅能检索信息，更能理解语义、推理逻辑，并生成连贯的回答。
            </p>

            <div className="grid gap-6 md:grid-cols-3 my-8">
              <Card>
                <CardHeader>
                  <Database className="h-8 w-8 text-blue-500" />
                  <CardTitle className="text-lg">预训练阶段</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>海量文本数据学习</li>
                    <li>语言模式识别</li>
                    <li>知识结构建立</li>
                    <li>语义关系理解</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Cpu className="h-8 w-8 text-green-500" />
                  <CardTitle className="text-lg">微调优化</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>人类反馈学习（RLHF）</li>
                    <li>指令跟随训练</li>
                    <li>安全性对齐</li>
                    <li>专业领域适配</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-purple-500" />
                  <CardTitle className="text-lg">推理生成</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>上下文理解</li>
                    <li>知识检索整合</li>
                    <li>逻辑推理</li>
                    <li>连贯回答生成</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "生成引擎的强大之处在于它能够将分散的知识片段整合成连贯、准确的答案。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">信息检索与生成流程</h2>

            <p className="leading-relaxed">
              当用户提出问题时，生成引擎会经历一个复杂的信息处理流程。理解这个流程对于 GEO 优化至关重要，
              因为它揭示了如何让您的内容更容易被 AI 发现、理解和引用。
            </p>

            <div className="space-y-6 my-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg">问题理解与意图识别</h4>
                  <p className="text-muted-foreground">
                    AI 首先分析用户问题的语义、上下文和潜在意图，识别关键概念和所需信息类型。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg">知识检索与匹配</h4>
                  <p className="text-muted-foreground">从训练数据中检索相关知识，包括事实信息、概念关系和推理模式。</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg">信息整合与推理</h4>
                  <p className="text-muted-foreground">将检索到的信息片段进行逻辑整合，形成连贯的知识结构。</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg">答案生成与优化</h4>
                  <p className="text-muted-foreground">基于整合的知识生成回答，并进行语言优化和事实核查。</p>
                </div>
              </div>
            </div>

            <Alert className="my-8">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>GEO 启示：</strong>要让内容被 AI 优先选择，需要确保内容在每个处理阶段都具有优势：
                清晰的语义表达、权威的信息来源、逻辑的结构组织。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">不同生成引擎的特点对比</h2>

            <p className="leading-relaxed mb-6">
              虽然主流生成引擎都基于相似的技术架构，但它们在训练数据、优化目标和应用场景上存在差异。
              了解这些差异有助于制定针对性的 GEO 策略。
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 px-4 py-2 text-left">引擎</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">优势领域</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">信息偏好</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">GEO 重点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">ChatGPT</td>
                    <td className="border border-gray-300 px-4 py-2">对话交互、创意写作</td>
                    <td className="border border-gray-300 px-4 py-2">结构化、逻辑清晰</td>
                    <td className="border border-gray-300 px-4 py-2">内容层次、实用性</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Claude</td>
                    <td className="border border-gray-300 px-4 py-2">分析推理、长文本</td>
                    <td className="border border-gray-300 px-4 py-2">深度分析、多角度</td>
                    <td className="border border-gray-300 px-4 py-2">权威性、完整性</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Gemini</td>
                    <td className="border border-gray-300 px-4 py-2">多模态、实时信息</td>
                    <td className="border border-gray-300 px-4 py-2">时效性、多媒体</td>
                    <td className="border border-gray-300 px-4 py-2">新鲜度、多样性</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-8">
              "成功的 GEO 策略需要针对不同引擎的特点进行差异化优化，而不是一刀切的方法。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">影响内容被选择的关键因素</h2>

            <p className="leading-relaxed">
              基于对生成引擎工作原理的理解，我们可以识别出影响内容被 AI 选择和引用的关键因素。 这些因素构成了 GEO
              优化的理论基础。
            </p>

            <div className="space-y-6 my-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">权威性信号</h3>
                <p className="leading-relaxed text-muted-foreground">
                  包括作者专业背景、发布平台声誉、引用来源质量、内容更新频率等。 AI 引擎倾向于信任来自权威源的信息。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">语义清晰度</h3>
                <p className="leading-relaxed text-muted-foreground">
                  内容的语义表达是否清晰、概念定义是否准确、逻辑关系是否明确。 清晰的语义表达有助于 AI
                  准确理解和引用内容。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">结构化程度</h3>
                <p className="leading-relaxed text-muted-foreground">
                  包括标题层次、段落组织、列表结构、表格数据等。 良好的结构化有助于 AI 快速定位和提取关键信息。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">内容完整性</h3>
                <p className="leading-relaxed text-muted-foreground">
                  内容是否提供了完整的答案、是否涵盖了相关的方面、是否包含必要的背景信息。 完整的内容更容易被 AI
                  作为权威答案引用。
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">实践应用指导</h2>

            <p className="leading-relaxed">
              理解了生成引擎的工作原理后，我们可以制定更有针对性的 GEO 优化策略。 以下是基于技术原理的实践建议：
            </p>

            <div className="grid gap-4 md:grid-cols-2 my-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">内容创作策略</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>使用清晰的概念定义</li>
                    <li>提供完整的上下文信息</li>
                    <li>建立逻辑清晰的论证链</li>
                    <li>包含相关的背景知识</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">技术优化重点</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>添加结构化数据标记</li>
                    <li>优化语义标签使用</li>
                    <li>建立内容关联关系</li>
                    <li>提供多种访问路径</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">下一步学习建议</h3>
              <p className="text-sm text-muted-foreground mb-4">
                掌握了生成引擎的工作原理后，建议深入学习 GEO 的核心优化原则和具体实施方法。
              </p>
              <Button asChild>
                <Link href="/fundamentals/geo-principles">
                  学习 GEO 核心原则
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
