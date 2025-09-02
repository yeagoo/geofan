export const locales = ["en", "zh"] as const
export type Locale = (typeof locales)[number]

export const translations = {
  en: {
    // Navigation
    nav: {
      quickStart: "Quick Start",
      fundamentals: "Fundamentals",
      aiSeo: "AI SEO",
      tools: "Tools",
      examples: "Examples",
      whatIsGeo: "What is GEO",
      geoVsSeo: "GEO vs SEO",
      quickStartGuide: "Quick Start Guide",
      coreConcepts: "Core Concepts",
      semanticSearch: "Semantic Search",
      structuredData: "Structured Data",
      contentGeneration: "Content Generation",
      keywordResearch: "Keyword Research",
      performanceMonitoring: "Performance Monitoring",
      automation: "Automation",
      semanticOptimization: "Semantic Optimization",
    },
    // Footer
    footer: {
      brand: "GEO.Fan",
      description: "Professional GEO optimization platform for AI era content visibility",
      quickLinks: "Quick Links",
      resources: "Resources",
      legal: "Legal",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      changelog: "Changelog",
      allRightsReserved: "All rights reserved.",
    },
    // Common
    common: {
      home: "Home",
      about: "About",
      contact: "Contact",
      search: "Search",
      language: "Language",
      english: "English",
      chinese: "Chinese",
      loading: "Loading...",
      error: "Error",
      tryAgain: "Try Again",
      submit: "Submit",
      cancel: "Cancel",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      view: "View",
      download: "Download",
      copy: "Copy",
      share: "Share",
    },
    pages: {
      fundamentals: {
        howGenerativeEnginesWork: {
          badge: "Fundamentals",
          title: "How Generative Engines Work - Deep Analysis",
          description:
            "Understand the internal mechanisms of ChatGPT, Claude, Gemini and other generative AI engines to build theoretical foundation for GEO optimization.",
          coreConceptLabel: "Core Concept",
          coreConcept:
            "Generative engines are not simple search tools, but knowledge understanding and generation systems based on large-scale language models.",
          coreArchitecture: {
            title: "Core Architecture of Generative Engines",
            description:
              "Modern generative engines are based on Transformer architecture large language models (LLM), gaining understanding and generation capabilities through pre-training and fine-tuning stages. Unlike traditional search engines, generative engines can not only retrieve information, but also understand semantics, reason logically, and generate coherent answers.",
            pretraining: {
              title: "Pre-training Stage",
              items: [
                "Massive text data learning",
                "Language pattern recognition",
                "Knowledge structure establishment",
                "Semantic relationship understanding",
              ],
            },
            finetuning: {
              title: "Fine-tuning Optimization",
              items: [
                "Reinforcement Learning from Human Feedback (RLHF)",
                "Instruction following training",
                "Safety alignment",
                "Domain-specific adaptation",
              ],
            },
            inference: {
              title: "Inference Generation",
              items: [
                "Context understanding",
                "Knowledge retrieval integration",
                "Logical reasoning",
                "Coherent answer generation",
              ],
            },
          },
          quote1:
            "The power of generative engines lies in their ability to integrate scattered knowledge fragments into coherent, accurate answers.",
          processFlow: {
            title: "Information Retrieval and Generation Process",
            description:
              "When users ask questions, generative engines go through a complex information processing workflow. Understanding this process is crucial for GEO optimization, as it reveals how to make your content more easily discovered, understood, and cited by AI.",
            steps: [
              {
                title: "Question Understanding and Intent Recognition",
                description:
                  "AI first analyzes the semantics, context, and potential intent of user questions, identifying key concepts and required information types.",
                color: "bg-blue-100 text-blue-600",
              },
              {
                title: "Knowledge Retrieval and Matching",
                description:
                  "Retrieve relevant knowledge from training data, including factual information, conceptual relationships, and reasoning patterns.",
                color: "bg-green-100 text-green-600",
              },
              {
                title: "Information Integration and Reasoning",
                description:
                  "Logically integrate retrieved information fragments to form coherent knowledge structures.",
                color: "bg-purple-100 text-purple-600",
              },
              {
                title: "Answer Generation and Optimization",
                description:
                  "Generate answers based on integrated knowledge, with language optimization and fact-checking.",
                color: "bg-orange-100 text-orange-600",
              },
            ],
          },
          geoInsightLabel: "GEO Insight",
          geoInsight:
            "To make content prioritized by AI, ensure content has advantages at each processing stage: clear semantic expression, authoritative information sources, logical structural organization.",
          engineComparison: {
            title: "Comparison of Different Generative Engines",
            description:
              "While mainstream generative engines are based on similar technical architectures, they differ in training data, optimization objectives, and application scenarios. Understanding these differences helps develop targeted GEO strategies.",
            table: {
              headers: {
                engine: "Engine",
                strengths: "Strengths",
                preferences: "Information Preferences",
                geoFocus: "GEO Focus",
              },
              rows: [
                {
                  engine: "ChatGPT",
                  strengths: "Conversational interaction, creative writing",
                  preferences: "Structured, logically clear",
                  geoFocus: "Content hierarchy, practicality",
                },
                {
                  engine: "Claude",
                  strengths: "Analysis reasoning, long text",
                  preferences: "Deep analysis, multi-perspective",
                  geoFocus: "Authority, completeness",
                },
                {
                  engine: "Gemini",
                  strengths: "Multimodal, real-time information",
                  preferences: "Timeliness, multimedia",
                  geoFocus: "Freshness, diversity",
                },
              ],
            },
          },
          quote2:
            "Successful GEO strategies need differentiated optimization for different engine characteristics, not a one-size-fits-all approach.",
          keyFactors: {
            title: "Key Factors Affecting Content Selection",
            description:
              "Based on understanding of generative engine working principles, we can identify key factors that affect content being selected and cited by AI. These factors form the theoretical foundation of GEO optimization.",
            factors: [
              {
                title: "Authority Signals",
                description:
                  "Including author professional background, publishing platform reputation, citation source quality, content update frequency, etc. AI engines tend to trust information from authoritative sources.",
              },
              {
                title: "Semantic Clarity",
                description:
                  "Whether content semantic expression is clear, concept definitions are accurate, logical relationships are explicit. Clear semantic expression helps AI accurately understand and cite content.",
              },
              {
                title: "Structured Degree",
                description:
                  "Including title hierarchy, paragraph organization, list structure, table data, etc. Good structuring helps AI quickly locate and extract key information.",
              },
              {
                title: "Content Completeness",
                description:
                  "Whether content provides complete answers, covers relevant aspects, includes necessary background information. Complete content is more likely to be cited by AI as authoritative answers.",
              },
            ],
          },
          practicalGuidance: {
            title: "Practical Application Guidance",
            description:
              "After understanding the working principles of generative engines, we can develop more targeted GEO optimization strategies. Here are practical suggestions based on technical principles:",
            contentStrategy: {
              title: "Content Creation Strategy",
              items: [
                "Use clear concept definitions",
                "Provide complete contextual information",
                "Establish logically clear argument chains",
                "Include relevant background knowledge",
              ],
            },
            technicalOptimization: {
              title: "Technical Optimization Focus",
              items: [
                "Add structured data markup",
                "Optimize semantic tag usage",
                "Establish content association relationships",
                "Provide multiple access paths",
              ],
            },
          },
          nextSteps: {
            title: "Next Learning Suggestions",
            description:
              "After mastering the working principles of generative engines, it's recommended to deeply study GEO core optimization principles and specific implementation methods.",
            buttonText: "Learn GEO Core Principles",
          },
        },
      },
    },
    // Tools
    tools: {
      geoChecker: "GEO Checker",
      contentAnalyzer: "Content Analyzer",
      competitorAnalysis: "Competitor Analysis",
      performanceAnalysis: "Performance Analysis",
      aiPromptGenerator: "AI Prompt Generator",
      analyze: "Analyze",
      analyzing: "Analyzing...",
      results: "Results",
      report: "Report",
      suggestions: "Suggestions",
      score: "Score",
      improvement: "Improvement",
      contentAnalysis: "Content Analysis",
      urlAnalysis: "URL Analysis",
      textAnalysis: "Text Analysis",
      webPageUrl: "Web Page URL",
      contentText: "Content Text",
      targetKeywords: "Target Keywords (Optional)",
      copyReport: "Copy Report",
      contentOverview: "Content Overview",
      wordCount: "Word Count",
      headingsCount: "Headings Count",
      linksCount: "Links Count",
      estimatedReadingTime: "Estimated Reading Time (Minutes)",
      pageTitle: "Page Title",
      pageDescription: "Page Description",
    },
    // Homepage
    homepage: {
      title: "GEO.Fan - Generative Engine Optimization Platform",
      subtitle:
        "Enter your URL or keywords to get professional GEO (Generative Engine Optimization) scores, detailed deduction reasons, and actionable optimization suggestions.",
      description:
        "Make your content stand out in ChatGPT, Claude, Gemini and other AI engines, enhancing content competitiveness in the AI era.",
      getStarted: "Get Started",
      learnMore: "Learn More",
      features: "Features",
      whyChoose: "Why Choose GEO.Fan Detection Tool?",
      coreFeatures: "Core Features of Detection Tool",
      fourCoreEvaluationDimensions: "Four Core Evaluation Dimensions",
      threeStepsToCompleteGEOCheck: "Three Simple Steps to Complete GEO Detection",
      deepLearningGEOOptimization: "Deep Learning GEO Optimization",
      deepLearningGEOOptimizationDescription:
        "Explore the complete GEO knowledge system, from basic concepts to advanced strategies, master the core skills of generative engine optimization. We provide systematic learning paths to help you maintain content competitive advantage in the AI era.",
      features: {
        intelligentContentAnalysis: "Intelligent Content Analysis",
        detailedDeductionReport: "Detailed Deduction Report",
        executableOptimizationSuggestions: "Executable Optimization Suggestions",
        competitorComparisonAnalysis: "Competitor Comparison Analysis",
        realTimeScoreUpdates: "Real-time Score Updates",
      },
      dimensions: {
        authoritativeness: "Authority Assessment",
        authoritativenessDescription:
          "Evaluate content professionalism, credibility and quality of authoritative source citations",
        authoritativenessList1: "Professional terminology usage accuracy",
        authoritativenessList2: "Authoritative data source citations",
        authoritativenessList3: "Author professional background verification",
        relevance: "Relevance Analysis",
        relevanceDescription: "Analyze content matching with user intent and semantic relevance",
        relevanceList1: "Keyword semantic matching",
        relevanceList2: "User intent understanding",
        relevanceList3: "Contextual association analysis",
        structure: "Structure Check",
        structureDescription: "Check title hierarchy, structured data and content organization clarity",
        structureList1: "HTML title hierarchy structure",
        structureList2: "Structured data markup",
        structureList3: "Content logical organization",
        userValue: "User Value",
        userValueDescription: "Evaluate content practicality, unique value and user needs satisfaction",
        userValueList1: "Practical information density",
        userValueList2: "Unique insights provision",
        userValueList3: "Problem-solving capability",
      },
      steps: {
        inputContent: "Input Content",
        inputContentDescription:
          "Enter your website URL or paste text content directly, supporting multiple format content detection",
        intelligentAnalysis: "Intelligent Analysis",
        intelligentAnalysisDescription:
          "AI engine automatically analyzes content structure, semantic associations and optimization potential, generating detailed reports",
        getSuggestions: "Get Suggestions",
        getSuggestionsDescription:
          "Get specific optimization suggestions and implementation plans, start improving content quality immediately",
      },
    },
  },
  zh: {
    // Navigation
    nav: {
      quickStart: "快速开始",
      fundamentals: "基础理论",
      aiSeo: "AI SEO",
      tools: "工具",
      examples: "案例",
      whatIsGeo: "什么是GEO",
      geoVsSeo: "GEO vs SEO",
      quickStartGuide: "快速开始指南",
      coreConcepts: "核心概念",
      semanticSearch: "语义搜索",
      structuredData: "结构化数据",
      contentGeneration: "内容生成",
      keywordResearch: "关键词研究",
      performanceMonitoring: "性能监控",
      automation: "自动化",
      semanticOptimization: "语义优化",
    },
    // Footer
    footer: {
      brand: "GEO.Fan",
      description: "专业的GEO优化平台，提升AI时代内容可见性",
      quickLinks: "快速链接",
      resources: "资源",
      legal: "法律",
      contact: "联系我们",
      privacy: "隐私政策",
      terms: "使用条款",
      changelog: "更新日志",
      allRightsReserved: "版权所有。",
    },
    // Common
    common: {
      home: "首页",
      about: "关于",
      contact: "联系",
      search: "搜索",
      language: "语言",
      english: "英文",
      chinese: "中文",
      loading: "加载中...",
      error: "错误",
      tryAgain: "重试",
      submit: "提交",
      cancel: "取消",
      save: "保存",
      delete: "删除",
      edit: "编辑",
      view: "查看",
      download: "下载",
      copy: "复制",
      share: "分享",
    },
    pages: {
      fundamentals: {
        howGenerativeEnginesWork: {
          badge: "基础理论",
          title: "生成引擎工作原理深度解析",
          description: "深入理解 ChatGPT、Claude、Gemini 等生成式 AI 引擎的内部机制，为 GEO 优化奠定理论基础。",
          coreConceptLabel: "核心概念",
          coreConcept: "生成引擎不是简单的搜索工具，而是基于大规模语言模型的知识理解和生成系统。",
          coreArchitecture: {
            title: "生成引擎的核心架构",
            description:
              "现代生成引擎基于 Transformer 架构的大语言模型（LLM），通过预训练和微调两个阶段来获得理解和生成能力。与传统搜索引擎不同，生成引擎不仅能检索信息，更能理解语义、推理逻辑，并生成连贯的回答。",
            pretraining: {
              title: "预训练阶段",
              items: ["海量文本数据学习", "语言模式识别", "知识结构建立", "语义关系理解"],
            },
            finetuning: {
              title: "微调优化",
              items: ["人类反馈学习（RLHF）", "指令跟随训练", "安全性对齐", "专业领域适配"],
            },
            inference: {
              title: "推理生成",
              items: ["上下文理解", "知识检索整合", "逻辑推理", "连贯回答生成"],
            },
          },
          quote1: "生成引擎的强大之处在于它能够将分散的知识片段整合成连贯、准确的答案。",
          processFlow: {
            title: "信息检索与生成流程",
            description:
              "当用户提出问题时，生成引擎会经历一个复杂的信息处理流程。理解这个流程对于 GEO 优化至关重要，因为它揭示了如何让您的内容更容易被 AI 发现、理解和引用。",
            steps: [
              {
                title: "问题理解与意图识别",
                description: "AI 首先分析用户问题的语义、上下文和潜在意图，识别关键概念和所需信息类型。",
                color: "bg-blue-100 text-blue-600",
              },
              {
                title: "知识检索与匹配",
                description: "从训练数据中检索相关知识，包括事实信息、概念关系和推理模式。",
                color: "bg-green-100 text-green-600",
              },
              {
                title: "信息整合与推理",
                description: "将检索到的信息片段进行逻辑整合，形成连贯的知识结构。",
                color: "bg-purple-100 text-purple-600",
              },
              {
                title: "答案生成与优化",
                description: "基于整合的知识生成回答，并进行语言优化和事实核查。",
                color: "bg-orange-100 text-orange-600",
              },
            ],
          },
          geoInsightLabel: "GEO 启示",
          geoInsight:
            "要让内容被 AI 优先选择，需要确保内容在每个处理阶段都具有优势：清晰的语义表达、权威的信息来源、逻辑的结构组织。",
          engineComparison: {
            title: "不同生成引擎的特点对比",
            description:
              "虽然主流生成引擎都基于相似的技术架构，但它们在训练数据、优化目标和应用场景上存在差异。了解这些差异有助于制定针对性的 GEO 策略。",
            table: {
              headers: {
                engine: "引擎",
                strengths: "优势领域",
                preferences: "信息偏好",
                geoFocus: "GEO 重点",
              },
              rows: [
                {
                  engine: "ChatGPT",
                  strengths: "对话交互、创意写作",
                  preferences: "结构化、逻辑清晰",
                  geoFocus: "内容层次、实用性",
                },
                {
                  engine: "Claude",
                  strengths: "分析推理、长文本",
                  preferences: "深度分析、多角度",
                  geoFocus: "权威性、完整性",
                },
                {
                  engine: "Gemini",
                  strengths: "多模态、实时信息",
                  preferences: "时效性、多媒体",
                  geoFocus: "新鲜度、多样性",
                },
              ],
            },
          },
          quote2: "成功的 GEO 策略需要针对不同引擎的特点进行差异化优化，而不是一刀切的方法。",
          keyFactors: {
            title: "影响内容被选择的关键因素",
            description:
              "基于对生成引擎工作原理的理解，我们可以识别出影响内容被 AI 选择和引用的关键因素。这些因素构成了 GEO 优化的理论基础。",
            factors: [
              {
                title: "权威性信号",
                description:
                  "包括作者专业背景、发布平台声誉、引用来源质量、内容更新频率等。AI 引擎倾向于信任来自权威源的信息。",
              },
              {
                title: "语义清晰度",
                description:
                  "内容的语义表达是否清晰、概念定义是否准确、逻辑关系是否明确。清晰的语义表达有助于 AI 准确理解和引用内容。",
              },
              {
                title: "结构化程度",
                description:
                  "包括标题层次、段落组织、列表结构、表格数据等。良好的结构化有助于 AI 快速定位和提取关键信息。",
              },
              {
                title: "内容完整性",
                description:
                  "内容是否提供了完整的答案、是否涵盖了相关的方面、是否包含必要的背景信息。完整的内容更容易被 AI 作为权威答案引用。",
              },
            ],
          },
          practicalGuidance: {
            title: "实践应用指导",
            description:
              "理解了生成引擎的工作原理后，我们可以制定更有针对性的 GEO 优化策略。以下是基于技术原理的实践建议：",
            contentStrategy: {
              title: "内容创作策略",
              items: ["使用清晰的概念定义", "提供完整的上下文信息", "建立逻辑清晰的论证链", "包含相关的背景知识"],
            },
            technicalOptimization: {
              title: "技术优化重点",
              items: ["添加结构化数据标记", "优化语义标签使用", "建立内容关联关系", "提供多种访问路径"],
            },
          },
          nextSteps: {
            title: "下一步学习建议",
            description: "掌握了生成引擎的工作原理后，建议深入学习 GEO 的核心优化原则和具体实施方法。",
            buttonText: "学习 GEO 核心原则",
          },
        },
      },
    },
    // Tools
    tools: {
      geoChecker: "GEO检测工具",
      contentAnalyzer: "内容分析工具",
      competitorAnalysis: "竞品分析工具",
      performanceAnalysis: "性能分析工具",
      aiPromptGenerator: "AI提示词生成器",
      analyze: "分析",
      analyzing: "分析中...",
      results: "结果",
      report: "报告",
      suggestions: "建议",
      score: "评分",
      improvement: "改进",
      contentAnalysis: "内容分析",
      urlAnalysis: "URL 分析",
      textAnalysis: "文本分析",
      webPageUrl: "网页 URL",
      contentText: "内容文本",
      targetKeywords: "目标关键词（可选）",
      copyReport: "复制报告",
      contentOverview: "内容概览",
      wordCount: "字数",
      headingsCount: "标题数量",
      linksCount: "链接数量",
      estimatedReadingTime: "预计阅读时间(分钟)",
      pageTitle: "页面标题",
      pageDescription: "页面描述",
    },
    // Homepage
    homepage: {
      title: "GEO.Fan - 生成引擎优化平台",
      subtitle: "输入您的网址或关键词，获得专业的 GEO（生成引擎优化）评分、详细的扣分理由和可执行的优化建议。",
      description: "让您的内容在 ChatGPT、Claude、Gemini 等 AI 引擎中脱颖而出，提升内容在人工智能时代的竞争力。",
      getStarted: "开始使用",
      learnMore: "了解更多",
      features: "功能特色",
      whyChoose: "为什么选择 GEO.Fan 检测工具？",
      coreFeatures: "检测工具核心功能",
      fourCoreEvaluationDimensions: "四大核心评估维度",
      threeStepsToCompleteGEOCheck: "简单三步，完成 GEO 检测",
      deepLearningGEOOptimization: "深入学习 GEO 优化",
      deepLearningGEOOptimizationDescription:
        "探索完整的 GEO 知识体系，从基础概念到高级策略，掌握生成引擎优化的核心技能。我们提供系统性的学习路径，帮助您在 AI 时代保持内容竞争优势。",
      features: {
        intelligentContentAnalysis: "智能内容分析",
        detailedDeductionReport: "详细扣分报告",
        executableOptimizationSuggestions: "可执行优化建议",
        competitorComparisonAnalysis: "竞品对比分析",
        realTimeScoreUpdates: "实时评分更新",
      },
      dimensions: {
        authoritativeness: "权威性评估",
        authoritativenessDescription: "评估内容的专业性、可信度和权威来源引用质量",
        authoritativenessList1: "专业术语使用准确性",
        authoritativenessList2: "权威数据来源引用",
        authoritativenessList3: "作者专业背景验证",
        relevance: "相关性分析",
        relevanceDescription: "分析内容与用户意图的匹配度和语义相关性",
        relevanceList1: "关键词语义匹配",
        relevanceList2: "用户意图理解",
        relevanceList3: "上下文关联分析",
        structure: "结构性检查",
        structureDescription: "检查标题层次、结构化数据和内容组织清晰度",
        structureList1: "HTML 标题层次结构",
        structureList2: "结构化数据标记",
        structureList3: "内容逻辑组织",
        userValue: "用户价值",
        userValueDescription: "评估内容的实用性、独特价值和用户需求满足度",
        userValueList1: "实用信息密度",
        userValueList2: "独特见解提供",
        userValueList3: "问题解决能力",
      },
      steps: {
        inputContent: "输入内容",
        inputContentDescription: "输入您的网站 URL 或直接粘贴文本内容，支持多种格式的内容检测",
        intelligentAnalysis: "智能分析",
        intelligentAnalysisDescription: "AI 引擎自动分析内容结构、语义关联和优化潜力，生成详细报告",
        getSuggestions: "获得建议",
        getSuggestionsDescription: "获得具体的优化建议和实施方案，立即开始提升内容质量",
      },
    },
  },
} as const

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.en
}
