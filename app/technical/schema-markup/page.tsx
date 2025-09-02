import { DocsLayout } from "@/components/docs-layout"
import { SchemaGenerator } from "@/components/schema-generator"

export default function SchemaMarkupPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Schema.org 标记</h1>
          <p className="text-xl text-muted-foreground">
            掌握结构化数据标记的核心技术，让生成引擎更好地理解和引用您的内容。
          </p>
        </div>

        <div className="mb-12">
          <SchemaGenerator />
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <h2>Schema.org 在 GEO 中的重要性</h2>
          <p>
            Schema.org 结构化数据标记是生成引擎理解网页内容的重要桥梁。通过标准化的语义标记，
            我们可以明确告诉生成引擎内容的类型、属性和关系，从而提高内容被正确理解和引用的概率。
          </p>

          <blockquote>
            <p>结构化数据是内容与生成引擎之间的通用语言，让机器能够像人类一样理解信息。</p>
          </blockquote>

          <h3>GEO 优化的核心 Schema 类型</h3>
          <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg my-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">内容类型</h4>
                <ul className="text-sm space-y-2">
                  <li>Article（文章）</li>
                  <li>BlogPosting（博客文章）</li>
                  <li>NewsArticle（新闻文章）</li>
                  <li>HowTo（操作指南）</li>
                  <li>FAQ（常见问题）</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">实体类型</h4>
                <ul className="text-sm space-y-2">
                  <li>Organization（组织）</li>
                  <li>Person（人物）</li>
                  <li>Product（产品）</li>
                  <li>Service（服务）</li>
                  <li>Event（事件）</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>核心 Schema 标记实现</h2>

          <h3>1. Article Schema 标记</h3>
          <p>文章是最常见的内容类型，正确的标记能显著提升被引用的机会：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：完整的文章 Schema 标记</p>
            <pre className="text-sm">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "GEO优化完全指南：让AI更好地理解你的内容",
  "description": "深入解析生成引擎优化的核心策略和实施方法",
  "image": {
    "@type": "ImageObject",
    "url": "https://example.com/article-image.jpg",
    "width": 1200,
    "height": 630
  },
  "author": {
    "@type": "Person",
    "name": "张三",
    "url": "https://example.com/author/zhangsan",
    "sameAs": [
      "https://twitter.com/zhangsan",
      "https://linkedin.com/in/zhangsan"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "GEO.Fan",
    "logo": {
      "@type": "ImageObject",
      "url": "https://geo.fan/logo.png"
    }
  },
  "datePublished": "2024-01-15T08:00:00+08:00",
  "dateModified": "2024-01-20T10:30:00+08:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://geo.fan/geo-optimization-guide"
  },
  "articleSection": "GEO优化",
  "keywords": ["GEO优化", "生成引擎优化", "AI SEO", "内容优化"],
  "wordCount": 2500,
  "inLanguage": "zh-CN"
}`}</code>
            </pre>
          </div>

          <h3>2. HowTo Schema 标记</h3>
          <p>操作指南类内容特别适合生成引擎的问答场景：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：HowTo 结构化数据示例</p>
            <pre className="text-sm">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "如何实施GEO优化策略",
  "description": "详细步骤指导如何为网站实施生成引擎优化",
  "image": "https://example.com/howto-image.jpg",
  "totalTime": "PT2H",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "CNY",
    "value": "0"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "网站内容管理系统"
    },
    {
      "@type": "HowToSupply", 
      "name": "Schema标记工具"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Google结构化数据测试工具"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "内容审计",
      "text": "分析现有内容的结构和质量",
      "url": "https://geo.fan/step1",
      "image": "https://example.com/step1.jpg"
    },
    {
      "@type": "HowToStep", 
      "name": "添加结构化数据",
      "text": "为关键页面添加Schema.org标记",
      "url": "https://geo.fan/step2"
    }
  ]
}`}</code>
            </pre>
          </div>

          <h3>3. FAQ Schema 标记</h3>
          <p>FAQ 格式特别适合生成引擎的直接回答需求：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：FAQ 结构化数据实现</p>
            <pre className="text-sm">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "什么是GEO优化？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GEO（Generative Engine Optimization）是针对生成引擎的内容优化策略，旨在提高内容被AI理解、引用和推荐的概率。"
      }
    },
    {
      "@type": "Question",
      "name": "GEO与传统SEO有什么区别？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "传统SEO关注搜索排名，而GEO关注内容被生成引擎理解和引用。GEO更注重内容的语义质量、权威性和用户满意度。"
      }
    },
    {
      "@type": "Question",
      "name": "如何开始实施GEO优化？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "首先进行内容审计，然后添加结构化数据标记，优化内容的语义结构，最后建立监测和改进机制。"
      }
    }
  ]
}`}</code>
            </pre>
          </div>

          <blockquote>
            <p>FAQ Schema 是提高内容在生成引擎中被直接引用概率的最有效方法之一。</p>
          </blockquote>

          <h2>高级 Schema 标记技巧</h2>

          <h3>1. 嵌套和关联标记</h3>
          <p>通过嵌套和关联不同的 Schema 类型，建立丰富的语义关系：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：复杂嵌套 Schema 示例</p>
            <pre className="text-sm">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "2024年GEO优化趋势报告",
  "author": {
    "@type": "Person",
    "name": "李四",
    "jobTitle": "SEO专家",
    "worksFor": {
      "@type": "Organization",
      "name": "GEO.Fan",
      "url": "https://geo.fan",
      "sameAs": [
        "https://twitter.com/geofan",
        "https://linkedin.com/company/geofan"
      ]
    }
  },
  "about": [
    {
      "@type": "Thing",
      "name": "生成引擎优化",
      "sameAs": "https://en.wikipedia.org/wiki/Search_engine_optimization"
    },
    {
      "@type": "Thing", 
      "name": "人工智能",
      "sameAs": "https://en.wikipedia.org/wiki/Artificial_intelligence"
    }
  ],
  "mentions": [
    {
      "@type": "SoftwareApplication",
      "name": "ChatGPT",
      "applicationCategory": "AI助手"
    },
    {
      "@type": "SoftwareApplication",
      "name": "Claude",
      "applicationCategory": "AI助手"
    }
  ]
}`}</code>
            </pre>
          </div>

          <h3>2. 多语言支持</h3>
          <p>为多语言网站实施正确的 Schema 标记：</p>
          <ul>
            <li>使用 inLanguage 属性指定语言</li>
            <li>为不同语言版本建立关联</li>
            <li>确保翻译内容的一致性</li>
            <li>使用 sameAs 建立跨语言关联</li>
          </ul>

          <h3>3. 动态内容标记</h3>
          <p>使用 JavaScript 为动态内容添加 Schema 标记：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：动态 Schema 标记实现</p>
            <pre className="text-sm">
              <code>{`function addDynamicSchema(contentData) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": contentData.title,
    "description": contentData.description,
    "datePublished": contentData.publishDate,
    "dateModified": contentData.modifyDate,
    "author": {
      "@type": "Person",
      "name": contentData.author.name
    }
  };
  
  // 创建script标签
  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.textContent = JSON.stringify(schema);
  
  // 添加到页面头部
  document.head.appendChild(scriptTag);
}

// 使用示例
const articleData = {
  title: "最新GEO优化技巧",
  description: "分享最新的生成引擎优化方法",
  publishDate: new Date().toISOString(),
  modifyDate: new Date().toISOString(),
  author: { name: "王五" }
};

addDynamicSchema(articleData);`}</code>
            </pre>
          </div>

          <h2>Schema 标记的验证和测试</h2>

          <h3>1. 验证工具</h3>
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Google 工具</h4>
              <ul className="text-sm space-y-1">
                <li>Rich Results Test</li>
                <li>Schema Markup Validator</li>
                <li>Search Console</li>
                <li>PageSpeed Insights</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">第三方工具</h4>
              <ul className="text-sm space-y-1">
                <li>Schema.org Validator</li>
                <li>JSON-LD Playground</li>
                <li>Structured Data Linter</li>
                <li>Merkle Schema Markup Generator</li>
              </ul>
            </div>
          </div>

          <h3>2. 常见错误和修复</h3>
          <p>识别和修复常见的 Schema 标记错误：</p>

          <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg my-6">
            <h4 className="text-lg font-semibold mb-3">常见错误类型</h4>
            <div className="space-y-3">
              <div>
                <strong>缺少必需属性</strong>
                <p className="text-sm">某些Schema类型要求特定属性，如Article需要headline</p>
              </div>
              <div>
                <strong>数据类型错误</strong>
                <p className="text-sm">日期格式、URL格式等不符合Schema.org规范</p>
              </div>
              <div>
                <strong>嵌套结构错误</strong>
                <p className="text-sm">复杂嵌套结构中的引用关系不正确</p>
              </div>
              <div>
                <strong>重复标记</strong>
                <p className="text-sm">同一页面存在冲突的Schema标记</p>
              </div>
            </div>
          </div>

          <blockquote>
            <p>正确的验证和测试是确保Schema标记发挥作用的关键步骤。</p>
          </blockquote>

          <h2>实施最佳实践</h2>

          <h3>1. 渐进式实施策略</h3>
          <p>建议按优先级逐步实施Schema标记：</p>
          <ol>
            <li>
              <strong>第一阶段</strong>：核心内容页面（文章、产品、服务）
            </li>
            <li>
              <strong>第二阶段</strong>：导航和分类页面
            </li>
            <li>
              <strong>第三阶段</strong>：用户生成内容（评论、评价）
            </li>
            <li>
              <strong>第四阶段</strong>：复杂交互内容（表单、工具）
            </li>
          </ol>

          <h3>2. 内容管理系统集成</h3>
          <p>将Schema标记集成到CMS工作流中：</p>
          <ul>
            <li>创建Schema模板</li>
            <li>自动化标记生成</li>
            <li>编辑器集成</li>
            <li>批量更新工具</li>
          </ul>

          <h3>3. 监测和维护</h3>
          <p>建立Schema标记的长期维护机制：</p>
          <ul>
            <li>定期验证标记有效性</li>
            <li>监测搜索引擎识别情况</li>
            <li>跟踪Schema.org规范更新</li>
            <li>分析标记对性能的影响</li>
          </ul>

          <h2>高级应用场景</h2>

          <h3>1. 电商网站优化</h3>
          <p>电商网站的Schema标记重点：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：产品页面Schema标记</p>
            <pre className="text-sm">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "GEO优化工具专业版",
  "description": "专业的生成引擎优化分析工具",
  "image": "https://example.com/product-image.jpg",
  "brand": {
    "@type": "Brand",
    "name": "GEO.Fan"
  },
  "offers": {
    "@type": "Offer",
    "price": "299",
    "priceCurrency": "CNY",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "GEO.Fan"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}`}</code>
            </pre>
          </div>

          <h3>2. 本地业务优化</h3>
          <p>本地业务的LocalBusiness Schema标记：</p>
          <ul>
            <li>地址和联系信息</li>
            <li>营业时间</li>
            <li>服务区域</li>
            <li>客户评价</li>
          </ul>

          <h3>3. 事件和活动</h3>
          <p>Event Schema用于活动和事件页面：</p>
          <ul>
            <li>活动时间和地点</li>
            <li>票务信息</li>
            <li>演讲者信息</li>
            <li>活动描述</li>
          </ul>

          <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg my-8">
            <h4 className="text-lg font-semibold mb-3">实施行动计划</h4>
            <p className="mb-4">开始您的Schema标记优化：</p>
            <ol className="space-y-2">
              <li>1. 审计现有页面，识别标记机会</li>
              <li>2. 选择适合的Schema类型</li>
              <li>3. 实施核心页面的标记</li>
              <li>4. 验证和测试标记效果</li>
              <li>5. 监测搜索引擎识别情况</li>
              <li>6. 扩展到更多页面类型</li>
            </ol>
          </div>

          <blockquote>
            <p>Schema.org标记是GEO优化的技术基础，正确实施能显著提升内容的机器可读性。</p>
          </blockquote>
        </div>
      </div>
    </DocsLayout>
  )
}
