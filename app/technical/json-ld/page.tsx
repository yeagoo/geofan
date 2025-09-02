import { DocsLayout } from "@/components/docs-layout"

export default function JsonLdPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">JSON-LD 实现</h1>
          <p className="text-xl text-muted-foreground">
            深入掌握 JSON-LD 格式的结构化数据实现，提升生成引擎的内容理解能力。
          </p>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <h2>为什么选择 JSON-LD</h2>
          <p>
            JSON-LD（JSON for Linking Data）是 Google 推荐的结构化数据格式，也是生成引擎最容易理解的格式。 相比
            Microdata 和 RDFa，JSON-LD 具有更好的可维护性、更清晰的结构，且不会影响页面的HTML结构。
          </p>

          <blockquote>
            <p>JSON-LD 让结构化数据与页面内容分离，既保持了代码的整洁，又提供了丰富的语义信息。</p>
          </blockquote>

          <h3>JSON-LD 的核心优势</h3>
          <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg my-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">技术优势</h4>
                <ul className="text-sm space-y-2">
                  <li>独立于HTML结构</li>
                  <li>易于维护和更新</li>
                  <li>支持复杂嵌套结构</li>
                  <li>便于自动化生成</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">SEO优势</h4>
                <ul className="text-sm space-y-2">
                  <li>Google官方推荐</li>
                  <li>生成引擎友好</li>
                  <li>支持丰富摘要</li>
                  <li>提升内容理解度</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>JSON-LD 基础语法</h2>

          <h3>1. 基本结构</h3>
          <p>JSON-LD 的基本结构包含上下文（@context）、类型（@type）和属性：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：JSON-LD 基本结构示例</p>
            <pre className="text-sm">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "JSON-LD实现指南",
  "author": {
    "@type": "Person",
    "name": "张三"
  },
  "datePublished": "2024-01-15",
  "description": "详细介绍JSON-LD的实现方法"
}`}</code>
            </pre>
          </div>

          <h3>2. 上下文定义</h3>
          <p>@context 定义了JSON-LD文档中使用的词汇表：</p>
          <ul>
            <li>
              <strong>标准上下文</strong>：使用 "https://schema.org"
            </li>
            <li>
              <strong>自定义上下文</strong>：定义特定领域的词汇
            </li>
            <li>
              <strong>混合上下文</strong>：结合多个词汇表
            </li>
          </ul>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：自定义上下文示例</p>
            <pre className="text-sm">
              <code>{`{
  "@context": {
    "@vocab": "https://schema.org/",
    "geo": "https://geo.fan/vocab/",
    "geoScore": "geo:optimizationScore",
    "aiReadability": "geo:aiReadabilityScore"
  },
  "@type": "Article",
  "headline": "GEO优化案例分析",
  "geoScore": 95,
  "aiReadability": 88
}`}</code>
            </pre>
          </div>

          <h3>3. 数据类型和值</h3>
          <p>JSON-LD 支持多种数据类型：</p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">基本类型</h4>
              <ul className="text-sm space-y-1">
                <li>字符串（String）</li>
                <li>数字（Number）</li>
                <li>布尔值（Boolean）</li>
                <li>日期（Date）</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">复杂类型</h4>
              <ul className="text-sm space-y-1">
                <li>对象（Object）</li>
                <li>数组（Array）</li>
                <li>引用（@id）</li>
                <li>嵌套结构</li>
              </ul>
            </div>
          </div>

          <blockquote>
            <p>正确的数据类型使用是确保生成引擎准确理解内容的关键。</p>
          </blockquote>

          <h2>实际应用场景</h2>

          <h3>1. 文章内容标记</h3>
          <p>为博客文章和新闻内容创建完整的JSON-LD标记：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：完整文章JSON-LD实现</p>
            <pre className="text-sm">
              <code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "2024年GEO优化趋势预测",
  "description": "分析生成引擎优化的最新发展趋势和未来方向",
  "image": {
    "@type": "ImageObject",
    "url": "https://geo.fan/images/geo-trends-2024.jpg",
    "width": 1200,
    "height": 630,
    "caption": "GEO优化趋势图表"
  },
  "author": {
    "@type": "Person",
    "name": "李明",
    "@id": "https://geo.fan/author/liming",
    "url": "https://geo.fan/author/liming",
    "image": "https://geo.fan/authors/liming.jpg",
    "jobTitle": "GEO优化专家",
    "worksFor": {
      "@type": "Organization",
      "name": "GEO.Fan",
      "url": "https://geo.fan"
    },
    "sameAs": [
      "https://twitter.com/liming_geo",
      "https://linkedin.com/in/liming-geo"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "GEO.Fan",
    "@id": "https://geo.fan",
    "url": "https://geo.fan",
    "logo": {
      "@type": "ImageObject",
      "url": "https://geo.fan/logo.png",
      "width": 200,
      "height": 60
    },
    "sameAs": [
      "https://twitter.com/geofan",
      "https://linkedin.com/company/geofan"
    ]
  },
  "datePublished": "2024-01-15T08:00:00+08:00",
  "dateModified": "2024-01-20T10:30:00+08:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://geo.fan/geo-trends-2024"
  },
  "articleSection": "趋势分析",
  "keywords": [
    "GEO优化",
    "生成引擎优化", 
    "AI SEO",
    "2024趋势"
  ],
  "wordCount": 3200,
  "inLanguage": "zh-CN",
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
      "applicationCategory": "AI助手",
      "operatingSystem": "Web"
    },
    {
      "@type": "SoftwareApplication",
      "name": "Claude",
      "applicationCategory": "AI助手"
    }
  ]
}
</script>`}</code>
            </pre>
          </div>

          <h3>2. 产品页面标记</h3>
          <p>电商产品页面的JSON-LD实现：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：产品页面JSON-LD标记</p>
            <pre className="text-sm">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "GEO优化工具专业版",
  "description": "专业的生成引擎优化分析和监控工具",
  "image": [
    "https://geo.fan/products/geo-tool-1.jpg",
    "https://geo.fan/products/geo-tool-2.jpg",
    "https://geo.fan/products/geo-tool-3.jpg"
  ],
  "brand": {
    "@type": "Brand",
    "name": "GEO.Fan",
    "logo": "https://geo.fan/brand-logo.png"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "GEO.Fan",
    "url": "https://geo.fan"
  },
  "category": "软件工具",
  "sku": "GEO-TOOL-PRO-2024",
  "gtin": "1234567890123",
  "offers": {
    "@type": "Offer",
    "price": "299.00",
    "priceCurrency": "CNY",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2024-12-31",
    "seller": {
      "@type": "Organization",
      "name": "GEO.Fan"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "CNY"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 1,
          "unitCode": "DAY"
        }
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "王小明"
      },
      "reviewBody": "非常好用的GEO优化工具，帮助我们的网站在AI搜索中获得更好的表现。",
      "datePublished": "2024-01-10"
    }
  ]
}`}</code>
            </pre>
          </div>

          <h3>3. 组织和个人信息</h3>
          <p>为公司和个人创建权威性标记：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：组织信息JSON-LD标记</p>
            <pre className="text-sm">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GEO.Fan",
  "alternateName": "GEO Fan",
  "url": "https://geo.fan",
  "logo": "https://geo.fan/logo.png",
  "description": "专业的生成引擎优化服务提供商",
  "foundingDate": "2023",
  "founder": {
    "@type": "Person",
    "name": "张创始人"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "科技园区创新大厦",
    "addressLocality": "深圳",
    "addressRegion": "广东省",
    "postalCode": "518000",
    "addressCountry": "CN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+86-400-123-4567",
    "contactType": "客户服务",
    "availableLanguage": ["中文", "English"]
  },
  "sameAs": [
    "https://twitter.com/geofan",
    "https://linkedin.com/company/geofan",
    "https://github.com/geofan",
    "https://weibo.com/geofan"
  ],
  "knowsAbout": [
    "生成引擎优化",
    "AI SEO",
    "内容优化",
    "结构化数据"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "中国"
  }
}`}</code>
            </pre>
          </div>

          <blockquote>
            <p>组织和个人信息的结构化标记有助于建立权威性和信任度。</p>
          </blockquote>

          <h2>高级JSON-LD技巧</h2>

          <h3>1. 引用和链接</h3>
          <p>使用@id创建实体间的引用关系：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：实体引用示例</p>
            <pre className="text-sm">
              <code>{`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://geo.fan#organization",
      "name": "GEO.Fan",
      "url": "https://geo.fan"
    },
    {
      "@type": "Person",
      "@id": "https://geo.fan/author/zhangsan#person",
      "name": "张三",
      "worksFor": {
        "@id": "https://geo.fan#organization"
      }
    },
    {
      "@type": "Article",
      "headline": "GEO优化实战指南",
      "author": {
        "@id": "https://geo.fan/author/zhangsan#person"
      },
      "publisher": {
        "@id": "https://geo.fan#organization"
      }
    }
  ]
}`}</code>
            </pre>
          </div>

          <h3>2. 多语言支持</h3>
          <p>为多语言网站实现JSON-LD标记：</p>
          <ul>
            <li>使用inLanguage属性指定语言</li>
            <li>为不同语言版本创建对应标记</li>
            <li>建立语言版本间的关联</li>
            <li>确保翻译内容的一致性</li>
          </ul>

          <h3>3. 动态生成</h3>
          <p>使用JavaScript动态生成JSON-LD：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：动态JSON-LD生成函数</p>
            <pre className="text-sm">
              <code>{`class JSONLDGenerator {
  constructor() {
    this.context = "https://schema.org";
  }
  
  generateArticleSchema(articleData) {
    const schema = {
      "@context": this.context,
      "@type": "Article",
      "headline": articleData.title,
      "description": articleData.description,
      "author": this.generatePersonSchema(articleData.author),
      "datePublished": articleData.publishDate,
      "dateModified": articleData.modifyDate || articleData.publishDate,
      "image": this.generateImageSchema(articleData.image),
      "publisher": this.generateOrganizationSchema(articleData.publisher)
    };
    
    return this.injectSchema(schema);
  }
  
  generatePersonSchema(personData) {
    return {
      "@type": "Person",
      "name": personData.name,
      "url": personData.url,
      "image": personData.avatar
    };
  }
  
  generateImageSchema(imageData) {
    return {
      "@type": "ImageObject",
      "url": imageData.url,
      "width": imageData.width,
      "height": imageData.height,
      "caption": imageData.caption
    };
  }
  
  injectSchema(schema) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);
    return schema;
  }
}

// 使用示例
const generator = new JSONLDGenerator();
const articleData = {
  title: "JSON-LD实现指南",
  description: "详细介绍JSON-LD的实现方法",
  author: {
    name: "李四",
    url: "https://geo.fan/author/lisi",
    avatar: "https://geo.fan/avatars/lisi.jpg"
  },
  publishDate: "2024-01-15T08:00:00+08:00",
  image: {
    url: "https://geo.fan/images/jsonld-guide.jpg",
    width: 1200,
    height: 630,
    caption: "JSON-LD实现指南"
  },
  publisher: {
    name: "GEO.Fan",
    url: "https://geo.fan"
  }
};

generator.generateArticleSchema(articleData);`}</code>
            </pre>
          </div>

          <h2>验证和调试</h2>

          <h3>1. 验证工具</h3>
          <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg my-6">
            <h4 className="text-lg font-semibold mb-3">推荐验证工具</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">在线工具</h5>
                <ul className="text-sm space-y-1">
                  <li>Google Rich Results Test</li>
                  <li>Schema.org Validator</li>
                  <li>JSON-LD Playground</li>
                  <li>Structured Data Testing Tool</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">浏览器工具</h5>
                <ul className="text-sm space-y-1">
                  <li>Chrome DevTools</li>
                  <li>Schema Markup Validator扩展</li>
                  <li>SEO Meta in 1 Click</li>
                  <li>Web Developer工具栏</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>2. 常见问题排查</h3>
          <p>识别和解决JSON-LD实现中的常见问题：</p>

          <div className="space-y-4 my-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-700 dark:text-red-400">语法错误</h4>
              <p className="text-sm">JSON格式错误、缺少逗号、括号不匹配等</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Schema错误</h4>
              <p className="text-sm">使用了不存在的属性、类型定义错误等</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-blue-700 dark:text-blue-400">数据不一致</h4>
              <p className="text-sm">JSON-LD数据与页面内容不匹配</p>
            </div>
          </div>

          <h3>3. 性能优化</h3>
          <p>优化JSON-LD的加载和解析性能：</p>
          <ul>
            <li>压缩JSON-LD数据</li>
            <li>异步加载非关键标记</li>
            <li>避免重复数据</li>
            <li>使用CDN加速Schema文件</li>
          </ul>

          <blockquote>
            <p>性能优化不应该以牺牲数据完整性为代价，要在性能和功能间找到平衡。</p>
          </blockquote>

          <h2>最佳实践总结</h2>

          <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg my-8">
            <h4 className="text-lg font-semibold mb-3">JSON-LD实施清单</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-sm">使用正确的@context和@type</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-sm">包含所有必需属性</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-sm">确保数据与页面内容一致</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-sm">使用标准化的日期和URL格式</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-sm">通过验证工具检查语法</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-sm">建立实体间的正确引用关系</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-sm">定期更新和维护标记</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg my-8">
            <h4 className="text-lg font-semibold mb-3">开始JSON-LD实施</h4>
            <p className="mb-4">建议按以下步骤开始：</p>
            <ol className="space-y-2">
              <li>1. 分析现有页面内容，确定适合的Schema类型</li>
              <li>2. 创建基础的JSON-LD模板</li>
              <li>3. 实施核心页面的标记</li>
              <li>4. 使用验证工具检查实现</li>
              <li>5. 监测搜索引擎的识别情况</li>
              <li>6. 逐步扩展到更多页面类型</li>
            </ol>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
