import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Bot, Sparkles, Target, Zap, ArrowRight, Lightbulb, Code } from "lucide-react"
import Link from "next/link"

export default function ContentGenerationPage() {
  return (
    <DocsLayout>
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <Badge variant="outline">AI SEO 实践</Badge>
            <div className="pt-2">
              <h1 className="inline-block font-bold text-4xl lg:text-5xl text-balance">AI 驱动的内容生成策略</h1>
            </div>
            <p className="text-xl text-muted-foreground text-balance">
              掌握人工智能辅助内容创作的方法和技巧，提升内容质量和生产效率，同时优化 GEO 表现。
            </p>
          </div>
        </div>

        <div className="pb-12 pt-8">
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <Alert className="my-6">
              <Bot className="h-4 w-4" />
              <AlertDescription>
                <strong>核心理念：</strong>AI 不是替代人类创作者，而是增强创作能力的强大工具。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">AI 内容生成的优势与挑战</h2>

            <p className="leading-relaxed">
              AI 内容生成技术为内容创作带来了革命性的变化。它不仅能够大幅提升内容生产效率，
              还能帮助创作者探索新的创意方向和表达方式。然而，要充分发挥 AI 的潜力，
              我们需要理解其优势和局限性，并制定相应的策略。
            </p>

            <div className="grid gap-6 md:grid-cols-2 my-8">
              <Card>
                <CardHeader>
                  <Sparkles className="h-8 w-8 text-green-500" />
                  <CardTitle>AI 生成的优势</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>
                      • <strong>高效率：</strong>快速生成大量内容草稿
                    </li>
                    <li>
                      • <strong>多样性：</strong>提供多种角度和表达方式
                    </li>
                    <li>
                      • <strong>一致性：</strong>保持风格和质量的统一
                    </li>
                    <li>
                      • <strong>可扩展：</strong>支持大规模内容生产
                    </li>
                    <li>
                      • <strong>创意启发：</strong>突破思维局限
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-orange-500" />
                  <CardTitle>需要注意的挑战</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>
                      • <strong>准确性：</strong>可能包含错误信息
                    </li>
                    <li>
                      • <strong>原创性：</strong>缺乏独特见解和经验
                    </li>
                    <li>
                      • <strong>时效性：</strong>训练数据可能过时
                    </li>
                    <li>
                      • <strong>深度：</strong>表面化处理复杂话题
                    </li>
                    <li>
                      • <strong>个性化：</strong>缺乏个人风格和声音
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "最佳的 AI 内容生成策略是人机协作：AI 提供效率和灵感，人类提供判断和创意。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">AI 内容生成的工作流程</h2>

            <p className="leading-relaxed">
              成功的 AI 内容生成需要一个结构化的工作流程。这个流程不仅包括技术操作，
              更重要的是策略思考和质量控制。以下是一个经过实践验证的四阶段工作流程。
            </p>

            <div className="space-y-6 my-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg">策略规划阶段</h4>
                  <p className="text-muted-foreground mb-2">
                    明确内容目标、目标受众、核心信息和期望成果。这个阶段的质量直接影响后续所有工作的效果。
                  </p>
                  <div className="bg-muted p-3 rounded text-sm">
                    <strong>关键活动：</strong>用户研究、竞争分析、内容策略制定、成功指标设定
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg">提示词工程阶段</h4>
                  <p className="text-muted-foreground mb-2">
                    设计精确的提示词（Prompt），指导 AI 生成符合要求的内容。这是决定输出质量的关键环节。
                  </p>
                  <div className="bg-muted p-3 rounded text-sm">
                    <strong>关键技巧：</strong>角色设定、任务描述、格式要求、示例提供、约束条件
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg">内容生成阶段</h4>
                  <p className="text-muted-foreground mb-2">
                    使用 AI 工具生成内容草稿，通过迭代优化获得满意的结果。这个阶段需要耐心和技巧。
                  </p>
                  <div className="bg-muted p-3 rounded text-sm">
                    <strong>最佳实践：</strong>多次生成、版本对比、渐进式优化、多工具结合
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg">编辑优化阶段</h4>
                  <p className="text-muted-foreground mb-2">
                    对 AI 生成的内容进行人工编辑、事实核查、风格调整和 GEO 优化。
                  </p>
                  <div className="bg-muted p-3 rounded text-sm">
                    <strong>重点工作：</strong>准确性验证、原创性增强、结构优化、技术标记
                  </div>
                </div>
              </div>
            </div>

            <Alert className="my-8">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>效率提示：</strong>建立标准化的提示词模板和检查清单， 可以显著提升工作效率和输出质量的一致性。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">高效提示词工程技巧</h2>

            <p className="leading-relaxed">
              提示词工程是 AI 内容生成的核心技能。一个精心设计的提示词可以让 AI 生成高质量、
              符合要求的内容，而模糊或不当的提示词则可能导致无用的输出。
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">提示词结构框架</h3>

            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg my-6">
              <div className="text-sm font-mono">
                <div className="text-green-400"># 角色设定</div>
                <div className="mb-2">你是一位资深的 [领域] 专家，拥有 [具体背景]。</div>

                <div className="text-green-400"># 任务描述</div>
                <div className="mb-2">请为 [目标受众] 创作一篇关于 [具体主题] 的 [内容类型]。</div>

                <div className="text-green-400"># 内容要求</div>
                <div className="mb-2">
                  - 长度：[具体字数]
                  <br />- 风格：[写作风格]
                  <br />- 结构：[内容结构]
                </div>

                <div className="text-green-400"># 质量标准</div>
                <div className="mb-2">确保内容 [具体质量要求]。</div>

                <div className="text-green-400"># 输出格式</div>
                <div>请按照以下格式输出：[具体格式要求]</div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">提示词优化技巧</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">具体化原则</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>使用具体的数字和指标</li>
                  <li>提供详细的背景信息</li>
                  <li>明确输出的格式要求</li>
                  <li>给出具体的示例</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">约束化原则</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>设定明确的边界条件</li>
                  <li>指定不希望包含的内容</li>
                  <li>限定信息来源和时间范围</li>
                  <li>要求引用和验证</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">实用提示词模板</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">教程类内容模板</h4>
                <div className="bg-muted p-3 rounded text-sm">
                  "作为 [领域] 专家，为 [目标用户] 创作一份 [主题] 的完整教程。
                  包含：问题背景、解决方案、具体步骤、注意事项、常见问题。 要求：实用性强、步骤清晰、包含示例、字数 [X]
                  字左右。"
                </div>
              </div>

              <div>
                <h4 className="font-semibold">分析类内容模板</h4>
                <div className="bg-muted p-3 rounded text-sm">
                  "请深度分析 [主题/现象]，从 [角度1]、[角度2]、[角度3] 三个维度展开。
                  每个维度包含：现状描述、原因分析、影响评估、发展趋势。 要求：逻辑清晰、数据支撑、观点平衡、结论明确。"
                </div>
              </div>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "好的提示词就像好的问题：越具体、越清晰，得到的答案就越有价值。"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">内容质量控制与优化</h2>

            <p className="leading-relaxed">
              AI 生成的内容需要经过严格的质量控制才能发布。这个过程不仅包括基本的错误检查， 更重要的是确保内容符合 GEO
              优化的要求，能够在 AI 引擎中获得良好表现。
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">质量检查清单</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <Target className="h-6 w-6 text-blue-500" />
                  <CardTitle className="text-base">内容质量检查</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>☐ 事实准确性验证</li>
                    <li>☐ 逻辑一致性检查</li>
                    <li>☐ 语言流畅性优化</li>
                    <li>☐ 原创性增强</li>
                    <li>☐ 完整性确认</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Code className="h-6 w-6 text-green-500" />
                  <CardTitle className="text-base">GEO 优化检查</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>☐ 标题层次优化</li>
                    <li>☐ 结构化数据添加</li>
                    <li>☐ 关键信息突出</li>
                    <li>☐ 内部链接建设</li>
                    <li>☐ 权威性信号强化</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">常见问题及解决方案</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">问题：AI 生成内容过于通用</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>解决方案：</strong>在提示词中加入具体的行业背景、用户场景和实际案例， 要求 AI
                  提供个性化的见解和建议。
                </p>
              </div>

              <div>
                <h4 className="font-semibold">问题：内容缺乏深度和洞察</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>解决方案：</strong>使用多轮对话深入探讨，要求 AI 从不同角度分析，
                  并结合人工经验和专业判断进行补充。
                </p>
              </div>

              <div>
                <h4 className="font-semibold">问题：信息可能过时或不准确</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>解决方案：</strong>建立事实核查流程，使用最新的权威来源验证信息，
                  并在内容中明确标注信息的时效性。
                </p>
              </div>
            </div>

            <Alert className="my-8">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>质量提升技巧：</strong>建立内容评分体系，从准确性、实用性、原创性、
                可读性等维度评估内容质量，持续优化生成策略。
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">AI 工具选择与组合使用</h2>

            <p className="leading-relaxed">
              不同的 AI 工具有各自的优势和特点。了解这些差异，并根据具体需求选择合适的工具组合，
              可以显著提升内容生成的效果和效率。
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 px-4 py-2 text-left">AI 工具</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">主要优势</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">适用场景</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">注意事项</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">ChatGPT</td>
                    <td className="border border-gray-300 px-4 py-2">对话交互、创意写作</td>
                    <td className="border border-gray-300 px-4 py-2">教程、指南、创意内容</td>
                    <td className="border border-gray-300 px-4 py-2">信息截止时间限制</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Claude</td>
                    <td className="border border-gray-300 px-4 py-2">长文本处理、分析能力</td>
                    <td className="border border-gray-300 px-4 py-2">深度分析、研究报告</td>
                    <td className="border border-gray-300 px-4 py-2">处理速度相对较慢</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Gemini</td>
                    <td className="border border-gray-300 px-4 py-2">实时信息、多模态</td>
                    <td className="border border-gray-300 px-4 py-2">新闻、趋势、多媒体</td>
                    <td className="border border-gray-300 px-4 py-2">输出质量不够稳定</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">工具组合策略</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">串行使用策略</h4>
                <p className="text-sm text-muted-foreground">
                  使用一个工具生成初稿，然后用另一个工具进行优化和完善。 例如：ChatGPT 生成创意 → Claude 深化分析 →
                  人工最终编辑。
                </p>
              </div>

              <div>
                <h4 className="font-semibold">并行对比策略</h4>
                <p className="text-sm text-muted-foreground">
                  同时使用多个工具生成不同版本，然后选择最佳部分进行组合。 这种方法可以获得更多样化的观点和表达方式。
                </p>
              </div>

              <div>
                <h4 className="font-semibold">专业化分工策略</h4>
                <p className="text-sm text-muted-foreground">
                  根据不同工具的专长分配不同任务：创意构思、内容撰写、 事实核查、语言优化等各个环节使用最适合的工具。
                </p>
              </div>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-8">
              "最佳的 AI 内容生成不是依赖单一工具，而是构建一个高效的工具生态系统。"
            </blockquote>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">深入学习 AI SEO 技巧</h3>
              <p className="text-sm text-muted-foreground mb-4">
                掌握了 AI 内容生成的基础后，建议继续学习语义优化技巧， 进一步提升内容在 AI 引擎中的表现。
              </p>
              <Button asChild>
                <Link href="/ai-seo/semantic-optimization">
                  学习语义优化
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
