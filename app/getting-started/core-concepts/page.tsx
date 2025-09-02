import { DocsLayout } from "@/components/docs-layout"

export default function CoreConceptsPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">GEO 核心概念</h1>
          <p className="text-xl text-muted-foreground">
            深入理解生成引擎优化的核心概念和基本原理，为实践应用打下坚实基础。
          </p>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <h2>什么是生成引擎</h2>
          <p>
            生成引擎（Generative Engine）是基于大型语言模型的新一代搜索和信息检索系统。与传统搜索引擎不同，
            生成引擎不仅能够检索信息，还能理解、分析并生成个性化的回答。
          </p>

          <blockquote>
            <p>生成引擎的核心在于理解用户意图，而非简单的关键词匹配。</p>
          </blockquote>

          <h3>生成引擎的特点</h3>
          <ul>
            <li>
              <strong>语义理解</strong>：深度理解内容含义和上下文关系
            </li>
            <li>
              <strong>个性化生成</strong>：根据用户需求生成定制化回答
            </li>
            <li>
              <strong>多模态处理</strong>：整合文本、图像、音频等多种信息
            </li>
            <li>
              <strong>实时学习</strong>：持续优化和改进回答质量
            </li>
          </ul>

          <h2>GEO 与传统 SEO 的区别</h2>
          <p>
            传统 SEO 专注于提升网页在搜索结果中的排名，而 GEO 则关注如何让内容被生成引擎理解、
            引用和推荐。这需要我们从根本上重新思考内容创作和优化策略。
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg my-6">
            <h4 className="text-lg font-semibold mb-3">核心差异对比</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">传统 SEO</h5>
                <ul className="text-sm space-y-1">
                  <li>关键词密度优化</li>
                  <li>外链建设</li>
                  <li>页面排名提升</li>
                  <li>点击率优化</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">GEO 优化</h5>
                <ul className="text-sm space-y-1">
                  <li>语义内容优化</li>
                  <li>权威性建立</li>
                  <li>引用价值提升</li>
                  <li>用户满意度优化</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>GEO 优化的核心要素</h2>

          <h3>1. 内容权威性（Authority）</h3>
          <p>生成引擎更倾向于引用权威、可信的内容源。建立内容权威性需要：</p>
          <ul>
            <li>提供准确、最新的信息</li>
            <li>引用可靠的数据来源</li>
            <li>展示专业知识和经验</li>
            <li>获得行业认可和引用</li>
          </ul>

          <blockquote>
            <p>权威性不是一蹴而就的，而是通过持续提供高质量内容逐步建立的。</p>
          </blockquote>

          <h3>2. 内容相关性（Relevance）</h3>
          <p>内容必须与用户查询高度相关，并能够直接回答用户问题。这要求我们：</p>
          <ul>
            <li>深入理解目标用户需求</li>
            <li>创建针对性强的内容</li>
            <li>使用清晰的结构和格式</li>
            <li>提供完整的解决方案</li>
          </ul>

          <h3>3. 内容可用性（Usability）</h3>
          <p>生成引擎偏好易于理解和使用的内容格式：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：优化内容结构的最佳实践</p>
            <pre className="text-sm">
              <code>{`// 使用清晰的标题层级
<h1>主标题</h1>
<h2>章节标题</h2>
<h3>小节标题</h3>

// 结构化数据标记
{
  "@type": "Article",
  "headline": "文章标题",
  "author": "作者信息",
  "datePublished": "发布日期"
}`}</code>
            </pre>
          </div>

          <h2>GEO 优化策略框架</h2>
          <p>成功的 GEO 优化需要系统性的方法。我们推荐使用 CARE 框架：</p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">C - Content（内容）</h4>
              <p className="text-sm">创建高质量、权威性的内容，满足用户真实需求。</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">A - Authority（权威性）</h4>
              <p className="text-sm">建立专业声誉，获得行业认可和信任。</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">R - Relevance（相关性）</h4>
              <p className="text-sm">确保内容与用户查询高度匹配，提供精准答案。</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">E - Experience（体验）</h4>
              <p className="text-sm">优化用户体验，提供易于理解和使用的内容格式。</p>
            </div>
          </div>

          <blockquote>
            <p>CARE 框架不是孤立的要素，而是相互关联、相互促进的整体系统。</p>
          </blockquote>

          <h2>实施路径</h2>
          <p>GEO 优化是一个渐进的过程，建议按以下步骤实施：</p>

          <ol>
            <li>
              <strong>内容审计</strong>：评估现有内容的质量和相关性
            </li>
            <li>
              <strong>用户研究</strong>：深入了解目标用户的真实需求
            </li>
            <li>
              <strong>内容策略</strong>：制定基于 GEO 原则的内容计划
            </li>
            <li>
              <strong>技术优化</strong>：实施结构化数据和语义标记
            </li>
            <li>
              <strong>效果监测</strong>：跟踪和分析优化效果
            </li>
            <li>
              <strong>持续改进</strong>：基于数据反馈不断优化策略
            </li>
          </ol>

          <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg my-8">
            <h4 className="text-lg font-semibold mb-3">下一步行动</h4>
            <p className="mb-4">现在您已经了解了 GEO 的核心概念，建议您：</p>
            <ul className="space-y-2">
              <li>阅读《生成引擎工作原理》深入了解技术细节</li>
              <li>学习《内容优化策略》掌握实践方法</li>
              <li>使用我们的 GEO 检测工具评估您的网站</li>
              <li>参考案例研究了解成功实践</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
