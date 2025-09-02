import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"

export default function SemanticSearchPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl">
        <div className="mb-8">
          <Badge variant="outline">基础理论</Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">语义搜索优化</h1>
          <p className="text-xl text-muted-foreground">
            掌握语义搜索的核心原理，学会创建符合生成引擎理解模式的内容结构。
          </p>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <h2>语义搜索的本质</h2>
          <p>
            语义搜索（Semantic
            Search）不再依赖简单的关键词匹配，而是通过理解词汇、短语和句子的含义来提供更准确的搜索结果。
            生成引擎利用先进的自然语言处理技术，能够理解用户查询的真实意图。
          </p>

          <blockquote>
            <p>语义搜索的核心是理解意图，而非匹配字符。</p>
          </blockquote>

          <h3>传统搜索 vs 语义搜索</h3>
          <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg my-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">传统关键词搜索</h4>
                <ul className="text-sm space-y-2">
                  <li>精确匹配关键词</li>
                  <li>依赖关键词密度</li>
                  <li>忽略上下文语境</li>
                  <li>结果相关性有限</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">语义搜索</h4>
                <ul className="text-sm space-y-2">
                  <li>理解查询意图</li>
                  <li>分析语义关系</li>
                  <li>考虑上下文语境</li>
                  <li>提供精准答案</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>语义优化的核心要素</h2>

          <h3>1. 实体识别与关联</h3>
          <p>生成引擎通过识别内容中的实体（人物、地点、概念等）来理解内容主题。优化策略包括：</p>
          <ul>
            <li>明确标识关键实体</li>
            <li>建立实体间的关联关系</li>
            <li>使用标准化的实体名称</li>
            <li>提供实体的详细描述</li>
          </ul>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：实体标记的最佳实践</p>
            <pre className="text-sm">
              <code>{`// 使用结构化数据标记实体
{
  "@type": "Person",
  "name": "张三",
  "jobTitle": "SEO专家",
  "worksFor": {
    "@type": "Organization",
    "name": "GEO.Fan"
  }
}

// HTML中的实体标记
<span itemscope itemtype="http://schema.org/Person">
  <span itemprop="name">张三</span>
  <span itemprop="jobTitle">SEO专家</span>
</span>`}</code>
            </pre>
          </div>

          <h3>2. 主题建模与聚类</h3>
          <p>生成引擎使用主题建模来理解内容的核心主题和相关概念。有效的主题优化需要：</p>
          <ul>
            <li>围绕核心主题创建内容集群</li>
            <li>使用相关的语义词汇</li>
            <li>建立主题间的层次关系</li>
            <li>保持主题的一致性和深度</li>
          </ul>

          <h3>3. 意图匹配优化</h3>
          <p>不同的搜索查询背后有不同的用户意图。常见的搜索意图类型包括：</p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">信息型查询</h4>
              <p className="text-sm mb-2">用户寻求特定信息或答案</p>
              <p className="text-xs text-muted-foreground">例：什么是GEO优化？</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">导航型查询</h4>
              <p className="text-sm mb-2">用户寻找特定网站或页面</p>
              <p className="text-xs text-muted-foreground">例：GEO.Fan官网</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">交易型查询</h4>
              <p className="text-sm mb-2">用户准备进行购买或行动</p>
              <p className="text-xs text-muted-foreground">例：购买GEO优化工具</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">商业调研</h4>
              <p className="text-sm mb-2">用户比较不同选项</p>
              <p className="text-xs text-muted-foreground">例：最佳GEO工具对比</p>
            </div>
          </div>

          <blockquote>
            <p>理解用户意图是创建高质量内容的前提，也是语义优化的核心。</p>
          </blockquote>

          <h2>语义优化实践策略</h2>

          <h3>1. 内容语义丰富化</h3>
          <p>通过增加语义相关的词汇和概念来丰富内容的语义层次：</p>
          <ul>
            <li>使用同义词和相关术语</li>
            <li>添加上下文解释</li>
            <li>提供概念间的关联</li>
            <li>使用自然的语言表达</li>
          </ul>

          <h3>2. 结构化内容组织</h3>
          <p>采用清晰的内容结构帮助生成引擎理解信息层次：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：语义化HTML结构示例</p>
            <pre className="text-sm">
              <code>{`<article>
  <header>
    <h1>主标题</h1>
    <p>摘要描述</p>
  </header>
  
  <section>
    <h2>核心概念</h2>
    <p>详细解释...</p>
    
    <aside>
      <h3>相关概念</h3>
      <ul>
        <li>概念A</li>
        <li>概念B</li>
      </ul>
    </aside>
  </section>
  
  <footer>
    <p>总结要点</p>
  </footer>
</article>`}</code>
            </pre>
          </div>

          <h3>3. 问答式内容设计</h3>
          <p>生成引擎特别擅长处理问答格式的内容。优化建议：</p>
          <ul>
            <li>使用常见问题格式</li>
            <li>提供直接明确的答案</li>
            <li>包含相关的后续问题</li>
            <li>使用FAQ结构化数据</li>
          </ul>

          <h2>语义搜索的技术实现</h2>

          <h3>向量嵌入优化</h3>
          <p>现代生成引擎使用向量嵌入来表示和比较内容的语义相似性。优化策略包括：</p>
          <ul>
            <li>创建语义密集的内容</li>
            <li>使用多样化的表达方式</li>
            <li>建立概念间的语义桥梁</li>
            <li>保持内容的语义一致性</li>
          </ul>

          <blockquote>
            <p>向量嵌入让机器能够"理解"内容的深层含义，而非仅仅识别表面文字。</p>
          </blockquote>

          <h3>上下文窗口优化</h3>
          <p>生成引擎在处理查询时会考虑一定范围内的上下文信息。优化要点：</p>
          <ul>
            <li>在关键信息周围提供充分上下文</li>
            <li>使用连贯的叙述结构</li>
            <li>避免信息孤岛</li>
            <li>建立段落间的逻辑关联</li>
          </ul>

          <h2>效果测量与优化</h2>
          <p>语义优化的效果需要通过多维度指标来评估：</p>

          <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg my-8">
            <h4 className="text-lg font-semibold mb-3">关键指标</h4>
            <ul className="space-y-2">
              <li>
                • <strong>语义相关性得分</strong>：内容与目标查询的语义匹配度
              </li>
              <li>
                • <strong>实体识别准确率</strong>：关键实体被正确识别的比例
              </li>
              <li>
                • <strong>意图满足度</strong>：内容对用户意图的满足程度
              </li>
              <li>
                • <strong>引用频率</strong>：内容被生成引擎引用的次数
              </li>
            </ul>
          </div>

          <h3>持续优化策略</h3>
          <ol>
            <li>
              <strong>语义分析</strong>：定期分析内容的语义表现
            </li>
            <li>
              <strong>用户反馈</strong>：收集用户对内容相关性的反馈
            </li>
            <li>
              <strong>竞品对比</strong>：分析竞争对手的语义优化策略
            </li>
            <li>
              <strong>技术更新</strong>：跟进生成引擎的技术发展
            </li>
          </ol>

          <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg my-8">
            <h4 className="text-lg font-semibold mb-3">实践建议</h4>
            <p className="mb-4">语义搜索优化是一个持续的过程，建议：</p>
            <ul className="space-y-2">
              <li>从用户角度思考内容创作</li>
              <li>使用自然、流畅的语言表达</li>
              <li>建立完整的知识体系</li>
              <li>保持内容的时效性和准确性</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
