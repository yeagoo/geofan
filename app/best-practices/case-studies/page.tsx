export default function CaseStudiesPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1>GEO 成功案例分析</h1>

        <p className="text-xl text-muted-foreground">
          通过真实案例深入了解生成引擎优化的实际应用效果，学习成功经验和避免常见陷阱。
        </p>

        <blockquote>
          <p>
            📊 <strong>金句：</strong>数据不会说谎，成功的 GEO 案例背后都有可复制的方法论和执行细节。
          </p>
        </blockquote>

        <h2>案例一：技术文档平台的 GEO 转型</h2>

        <h3>背景与挑战</h3>
        <p>
          某知名开源项目的文档平台面临传统搜索流量下降的问题。随着开发者越来越依赖 AI 助手获取技术信息，
          该平台需要优化内容以适应生成引擎（Generative Engine）的工作方式。
        </p>

        <h3>实施策略</h3>
        <p>
          团队采用了系统性的 GEO 优化方案：重构内容架构、增强语义标记、优化代码示例的可读性。
          特别注重问答式内容结构，将复杂的技术概念拆解为具体的使用场景和解决方案。
        </p>

        <div className="bg-muted p-4 rounded-lg my-6">
          <h4 className="text-sm font-semibold mb-2">💡 要点先行</h4>
          <pre className="text-sm">
            <code>{`// 优化前的代码示例
function getData() {
  return fetch('/api/data').then(res => res.json())
}

// 优化后的代码示例（增加上下文和注释）
/**
 * 获取用户数据的异步函数
 * @returns {Promise<UserData>} 用户数据对象
 */
async function getUserData() {
  try {
    const response = await fetch('/api/users/current')
    if (!response.ok) {
      throw new Error('获取用户数据失败')
    }
    return await response.json()
  } catch (error) {
    console.error('用户数据获取错误:', error)
    throw error
  }
}`}</code>
          </pre>
        </div>

        <h3>关键成果</h3>
        <p>
          实施 6 个月后，该平台在主流 AI 助手中的引用率提升了 340%，技术问答的准确性显著改善。
          更重要的是，开发者社区的参与度和贡献质量都有明显提升。
        </p>

        <blockquote>
          <p>
            🎯 <strong>成功要素：</strong>系统性规划 + 持续优化 + 社区参与 = GEO 转型成功的三大支柱。
          </p>
        </blockquote>

        <h2>案例二：电商平台的产品信息优化</h2>

        <h3>业务场景</h3>
        <p>
          一家中型电商平台发现用户越来越多地通过 AI 购物助手寻找产品信息和购买建议。 传统的产品页面 SEO
          策略在新环境下效果有限，需要针对生成引擎进行专门优化。
        </p>

        <h3>优化重点</h3>
        <p>
          平台重点优化了产品信息的结构化程度，增加了详细的产品属性标记、用户评价的语义分析、
          以及与相关产品的关联关系。同时建立了动态的产品问答库，覆盖用户常见疑问。
        </p>

        <div className="bg-muted p-4 rounded-lg my-6">
          <h4 className="text-sm font-semibold mb-2">💡 要点先行</h4>
          <pre className="text-sm">
            <code>{`// 产品信息结构化示例
{
  "@type": "Product",
  "name": "智能蓝牙耳机 Pro",
  "description": "专业级降噪蓝牙耳机，续航30小时",
  "brand": "TechBrand",
  "offers": {
    "@type": "Offer",
    "price": "299.00",
    "priceCurrency": "CNY",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "1247"
  }
}`}</code>
          </pre>
        </div>

        <h3>量化效果</h3>
        <p>
          优化后的产品页面在 AI 购物助手中的推荐频率提升了 280%，产品信息的准确传达率达到 95% 以上。 更重要的是，通过 AI
          渠道产生的转化率比传统搜索渠道高出 45%。
        </p>

        <blockquote>
          <p>
            💰 <strong>商业价值：</strong>GEO 不仅提升了品牌曝光，更直接带来了可观的商业回报。
          </p>
        </blockquote>

        <h2>案例三：新闻媒体的内容分发优化</h2>

        <h3>行业背景</h3>
        <p>
          传统新闻媒体面临读者获取信息方式的根本性变化。越来越多的用户通过 AI 新闻助手获取资讯摘要，
          原始新闻网站的直接访问量持续下降。
        </p>

        <h3>创新做法</h3>
        <p>
          该媒体采用了"AI 友好"的内容创作和发布流程：新闻稿件同时提供人类阅读版本和 AI 解析版本，
          增加了事实核查标记、信息来源追溯、以及相关背景知识的结构化补充。
        </p>

        <h3>突破性成果</h3>
        <p>
          这种双轨制内容策略使该媒体在保持传统读者群体的同时，大幅提升了在 AI 新闻聚合中的权威性。
          品牌影响力和内容传播范围都实现了显著增长。
        </p>

        <blockquote>
          <p>
            📰 <strong>媒体启示：</strong>适应 AI 时代不意味着放弃人类读者，而是要找到两者兼顾的平衡点。
          </p>
        </blockquote>

        <h2>共同成功因素分析</h2>

        <h3>战略层面</h3>
        <ul>
          <li>
            <strong>长期视角：</strong>所有成功案例都将 GEO 视为长期战略，而非短期技巧
          </li>
          <li>
            <strong>用户中心：</strong>始终以提升用户体验为核心，技术优化服务于用户需求
          </li>
          <li>
            <strong>数据驱动：</strong>建立完善的效果监控和反馈机制，持续优化策略
          </li>
        </ul>

        <h3>执行层面</h3>
        <ul>
          <li>
            <strong>系统性实施：</strong>从内容创作到技术架构的全方位优化
          </li>
          <li>
            <strong>团队协作：</strong>内容、技术、产品团队的紧密配合
          </li>
          <li>
            <strong>持续学习：</strong>跟踪 AI 技术发展，及时调整优化策略
          </li>
        </ul>

        <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-semibold mb-3">🏆 成功模式总结</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">战略要素</h4>
              <ul className="text-sm space-y-1">
                <li>明确的 GEO 目标设定</li>
                <li>跨部门协作机制</li>
                <li>持续投入和优化</li>
                <li>效果评估体系</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">技术要素</h4>
              <ul className="text-sm space-y-1">
                <li>结构化数据完善</li>
                <li>内容语义优化</li>
                <li>技术架构升级</li>
                <li>性能监控完善</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
