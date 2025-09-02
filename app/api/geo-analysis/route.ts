import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { type, url, text, keywords } = await request.json()

    let content = ""
    let title = ""
    let description = ""

    if (type === "url") {
      // URL 分析：抓取网页内容
      try {
        const response = await fetch(url, {
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; GEO-Checker/1.0)",
          },
        })

        if (!response.ok) {
          throw new Error("无法访问该URL")
        }

        const html = await response.text()

        // 简单的HTML解析（实际项目中建议使用专业的HTML解析库）
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
        title = titleMatch ? titleMatch[1].trim() : ""

        const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i)
        description = descMatch ? descMatch[1].trim() : ""

        // 提取文本内容（移除HTML标签）
        content = html
          .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
          .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim()
      } catch (error) {
        return NextResponse.json({ error: "无法抓取URL内容，请检查URL是否正确" }, { status: 400 })
      }
    } else {
      content = text
    }

    if (!content || content.length < 50) {
      return NextResponse.json({ error: "内容太短，无法进行有效分析" }, { status: 400 })
    }

    // GEO 分析算法
    const analysis = analyzeContent(content, keywords, title, description, url)

    return NextResponse.json(analysis)
  } catch (error) {
    console.error("GEO分析错误:", error)
    return NextResponse.json({ error: "分析过程中出现错误" }, { status: 500 })
  }
}

function analyzeContent(content: string, keywords: string, title: string, description: string, url?: string) {
  const wordCount = content.split(/\s+/).length
  const sentences = content.split(/[.!?]+/).filter((s) => s.trim().length > 0)
  const paragraphs = content.split(/\n\s*\n/).filter((p) => p.trim().length > 0)

  // 提取标题（简单模拟）
  const headings = content.match(/^.{1,100}$/gm) || []
  const links = content.match(/https?:\/\/[^\s]+/g) || []

  // 权威性分析
  const authorityScore = analyzeAuthority(content, url)

  // 相关性分析
  const relevanceScore = analyzeRelevance(content, keywords)

  // 结构性分析
  const structureScore = analyzeStructure(content, title, description, headings.length)

  // 用户价值分析
  const userValueScore = analyzeUserValue(content, wordCount, sentences.length)

  const overallScore = Math.round(
    (authorityScore.score + relevanceScore.score + structureScore.score + userValueScore.score) / 4,
  )

  return {
    overall_score: overallScore,
    authority: authorityScore,
    relevance: relevanceScore,
    structure: structureScore,
    user_value: userValueScore,
    meta_info: {
      title: title || "未检测到标题",
      description: description || "未检测到描述",
      word_count: wordCount,
      headings_count: headings.length,
      links_count: links.length,
    },
  }
}

function analyzeAuthority(content: string, url?: string) {
  let score = 50 // 基础分数
  const suggestions = []
  const positiveItems = []
  const negativeItems = []

  // 检查引用和来源
  const citations = content.match(/引用|来源|参考|研究|报告|数据显示|根据.*研究|.*调查显示/g) || []
  if (citations.length >= 3) {
    score += 20
    positiveItems.push({ item: "包含多个权威引用", points: 20, description: "发现了多个权威来源引用" })
  } else if (citations.length > 0) {
    score += 10
    positiveItems.push({ item: "包含部分引用", points: 10, description: "发现了一些来源引用" })
  } else {
    negativeItems.push({
      item: "缺少权威引用",
      points: -15,
      description: "内容缺少权威来源引用",
      solution: "添加来自权威机构、学术研究或行业报告的引用，如：'根据Google官方研究显示...'、'据权威机构调查...'等",
    })
  }

  // 检查专业术语
  const professionalTerms = content.match(/专业|权威|官方|认证|标准|规范|算法|技术|系统|平台|框架/g) || []
  if (professionalTerms.length >= 8) {
    score += 15
    positiveItems.push({ item: "专业术语丰富", points: 15, description: "使用了丰富的专业术语" })
  } else if (professionalTerms.length >= 3) {
    score += 8
    positiveItems.push({ item: "包含专业术语", points: 8, description: "使用了一些专业术语" })
  } else {
    negativeItems.push({
      item: "专业术语不足",
      points: -10,
      description: "缺少专业术语和行业标准用词",
      solution: "增加行业专业术语，如技术名词、标准规范、官方认证等，提升内容专业度",
    })
  }

  // 检查URL权威性
  if (url) {
    const authorityDomains = ["edu", "gov", "org"]
    const hasAuthorityDomain = authorityDomains.some((domain) => url.includes(`.${domain}`))
    if (hasAuthorityDomain) {
      score += 10
      positiveItems.push({ item: "权威域名", points: 10, description: "使用了权威域名" })
    } else if (!url.includes("https")) {
      negativeItems.push({
        item: "非HTTPS协议",
        points: -5,
        description: "未使用安全的HTTPS协议",
        solution: "启用HTTPS协议，提升网站安全性和可信度",
      })
    }
  }

  // 检查作者信息
  const authorInfo = content.match(/作者|专家|博士|教授|研究员|创始人|CEO|CTO|资深|高级/g) || []
  if (authorInfo.length > 0) {
    score += 10
    positiveItems.push({ item: "包含作者信息", points: 10, description: "提及了作者专业背景" })
  } else {
    negativeItems.push({
      item: "缺少作者信息",
      points: -8,
      description: "未提及作者专业背景或资质",
      solution: "添加作者介绍，包括专业背景、工作经验、资质认证等信息，建立权威性",
    })
  }

  // 检查数据支撑
  const dataSupport = content.match(/\d+%|\d+倍|增长了\d+|提升了\d+|数据显示|统计表明/g) || []
  if (dataSupport.length >= 3) {
    score += 12
    positiveItems.push({ item: "数据支撑充分", points: 12, description: "包含多个数据支撑" })
  } else if (dataSupport.length === 0) {
    negativeItems.push({
      item: "缺少数据支撑",
      points: -10,
      description: "内容缺少具体数据和统计信息",
      solution: "添加具体的数据、百分比、统计结果等，如'研究显示提升了85%'、'数据表明...'等",
    })
  }

  score = Math.min(Math.max(score, 0), 100)

  return {
    score,
    feedback: `内容权威性${score >= 80 ? "优秀" : score >= 60 ? "良好" : "需要改进"}`,
    suggestions,
    positiveItems,
    negativeItems,
  }
}

function analyzeRelevance(content: string, keywords: string) {
  let score = 60 // 基础分数
  const suggestions = []
  const positiveItems = []
  const negativeItems = []

  if (keywords) {
    const keywordList = keywords.split(/[,，\s]+/).filter((k) => k.trim())
    let keywordMatches = 0
    let keywordCoverage = 0

    keywordList.forEach((keyword) => {
      const regex = new RegExp(keyword.trim(), "gi")
      const matches = content.match(regex) || []
      keywordMatches += matches.length
      if (matches.length > 0) keywordCoverage++
    })

    // 关键词覆盖率
    const coverageRate = keywordCoverage / keywordList.length
    if (coverageRate >= 0.8) {
      score += 20
      positiveItems.push({
        item: "关键词覆盖率高",
        points: 20,
        description: `覆盖了${Math.round(coverageRate * 100)}%的目标关键词`,
      })
    } else if (coverageRate >= 0.5) {
      score += 10
      positiveItems.push({
        item: "关键词覆盖适中",
        points: 10,
        description: `覆盖了${Math.round(coverageRate * 100)}%的目标关键词`,
      })
    } else {
      negativeItems.push({
        item: "关键词覆盖率低",
        points: -15,
        description: `仅覆盖了${Math.round(coverageRate * 100)}%的目标关键词`,
        solution: "在标题、段落开头、结尾等重要位置自然地融入更多目标关键词",
      })
    }

    // 关键词密度分析
    const wordCount = content.split(/\s+/).length
    const density = (keywordMatches / wordCount) * 100

    if (density > 0.5 && density < 3) {
      score += 15
      positiveItems.push({ item: "关键词密度适中", points: 15, description: `关键词密度为${density.toFixed(1)}%` })
    } else if (density >= 3) {
      score -= 10
      negativeItems.push({
        item: "关键词密度过高",
        points: -10,
        description: `关键词密度为${density.toFixed(1)}%，可能被视为关键词堆砌`,
        solution: "减少关键词重复使用，使用同义词和相关词汇替代，保持自然的语言表达",
      })
    } else if (density < 0.5) {
      negativeItems.push({
        item: "关键词密度过低",
        points: -8,
        description: `关键词密度仅为${density.toFixed(1)}%`,
        solution: "适当增加目标关键词的使用频率，建议密度控制在0.5%-3%之间",
      })
    }
  } else {
    negativeItems.push({
      item: "未设置目标关键词",
      points: -20,
      description: "缺少明确的目标关键词",
      solution: "确定3-5个核心关键词，围绕这些关键词优化内容",
    })
  }

  // 检查语义相关性
  const semanticWords = content.match(/相关|关联|类似|对比|区别|联系|影响|作用|效果|结果/g) || []
  if (semanticWords.length >= 5) {
    score += 10
    positiveItems.push({ item: "语义关联丰富", points: 10, description: "包含丰富的语义关联词汇" })
  } else {
    negativeItems.push({
      item: "语义关联不足",
      points: -5,
      description: "缺少语义关联和上下文连接",
      solution: "增加相关性词汇，建立内容间的逻辑关联，如'相关的'、'类似的'、'对比'等",
    })
  }

  // 检查主题深度
  const topicWords = content.match(/方法|技巧|策略|原理|步骤|流程|案例|实例|经验|教程/g) || []
  if (topicWords.length >= 8) {
    score += 15
    positiveItems.push({ item: "主题覆盖深入", points: 15, description: "深入覆盖了相关主题" })
  } else if (topicWords.length < 3) {
    negativeItems.push({
      item: "主题覆盖浅显",
      points: -12,
      description: "主题覆盖深度不足",
      solution: "扩展相关主题，添加具体方法、案例、步骤等深度内容",
    })
  }

  score = Math.min(Math.max(score, 0), 100)

  return {
    score,
    feedback: `内容相关性${score >= 80 ? "优秀" : score >= 60 ? "良好" : "需要改进"}`,
    suggestions,
    positiveItems,
    negativeItems,
  }
}

function analyzeStructure(content: string, title: string, description: string, headingsCount: number) {
  let score = 40 // 基础分数
  const suggestions = []
  const positiveItems = []
  const negativeItems = []

  // 检查标题
  if (title) {
    if (title.length >= 10 && title.length <= 60) {
      score += 15
      positiveItems.push({ item: "标题长度适中", points: 15, description: `标题长度${title.length}字符，符合最佳实践` })
    } else if (title.length < 10) {
      negativeItems.push({
        item: "标题过短",
        points: -10,
        description: `标题仅${title.length}字符，过于简短`,
        solution: "扩展标题内容，包含核心关键词，建议长度10-60字符",
      })
    } else {
      negativeItems.push({
        item: "标题过长",
        points: -8,
        description: `标题${title.length}字符，可能被截断`,
        solution: "精简标题内容，保持在60字符以内，突出核心信息",
      })
    }
  } else {
    negativeItems.push({
      item: "缺少页面标题",
      points: -20,
      description: "未检测到页面标题",
      solution: "添加清晰、描述性的页面标题，包含主要关键词",
    })
  }

  // 检查描述
  if (description) {
    if (description.length >= 50 && description.length <= 160) {
      score += 15
      positiveItems.push({
        item: "描述长度适中",
        points: 15,
        description: `描述长度${description.length}字符，符合SEO标准`,
      })
    } else if (description.length < 50) {
      negativeItems.push({
        item: "描述过短",
        points: -12,
        description: `描述仅${description.length}字符，信息不足`,
        solution: "扩展页面描述，详细说明页面内容，建议长度50-160字符",
      })
    } else {
      negativeItems.push({
        item: "描述过长",
        points: -8,
        description: `描述${description.length}字符，可能被截断`,
        solution: "精简页面描述，保持在160字符以内，突出核心价值",
      })
    }
  } else {
    negativeItems.push({
      item: "缺少页面描述",
      points: -15,
      description: "未检测到页面描述",
      solution: "添加页面描述(meta description)，简洁概括页面内容和价值",
    })
  }

  // 检查标题层次
  if (headingsCount >= 3) {
    score += 20
    positiveItems.push({ item: "标题层次清晰", points: 20, description: `包含${headingsCount}个标题，结构清晰` })
  } else if (headingsCount > 0) {
    score += 10
    positiveItems.push({ item: "包含标题结构", points: 10, description: `包含${headingsCount}个标题` })
  } else {
    negativeItems.push({
      item: "缺少标题层次",
      points: -18,
      description: "内容缺少标题结构",
      solution: "添加H1、H2、H3等标题层次，建立清晰的内容结构",
    })
  }

  // 检查段落结构
  const paragraphs = content.split(/\n\s*\n/).filter((p) => p.trim().length > 0)
  if (paragraphs.length >= 4) {
    score += 10
    positiveItems.push({ item: "段落结构良好", points: 10, description: `包含${paragraphs.length}个段落，结构清晰` })
  } else if (paragraphs.length <= 1) {
    negativeItems.push({
      item: "段落结构不足",
      points: -10,
      description: "内容缺少段落分隔",
      solution: "将长文本分解为多个段落，每个段落专注一个主题",
    })
  }

  // 检查列表结构
  const lists = content.match(/[•\-*]\s|^\d+\.\s/gm) || []
  if (lists.length >= 3) {
    score += 10
    positiveItems.push({ item: "包含列表结构", points: 10, description: `包含${lists.length}个列表项` })
  } else {
    negativeItems.push({
      item: "缺少列表结构",
      points: -5,
      description: "内容缺少列表格式",
      solution: "使用项目符号或数字列表来组织信息，提升可读性",
    })
  }

  score = Math.min(Math.max(score, 0), 100)

  return {
    score,
    feedback: `内容结构${score >= 80 ? "优秀" : score >= 60 ? "良好" : "需要改进"}`,
    suggestions,
    positiveItems,
    negativeItems,
  }
}

function analyzeUserValue(content: string, wordCount: number, sentenceCount: number) {
  let score = 50 // 基础分数
  const suggestions = []
  const positiveItems = []
  const negativeItems = []

  // 检查内容长度
  if (wordCount >= 300 && wordCount <= 2000) {
    score += 15
    positiveItems.push({ item: "内容长度适中", points: 15, description: `${wordCount}字，长度适中` })
  } else if (wordCount > 2000) {
    score += 8
    positiveItems.push({ item: "内容详尽", points: 8, description: `${wordCount}字，内容详尽` })
    negativeItems.push({
      item: "内容可能过长",
      points: -5,
      description: "内容较长，可能影响用户阅读体验",
      solution: "考虑添加目录导航，或将长内容分解为多个章节",
    })
  } else {
    negativeItems.push({
      item: "内容长度不足",
      points: -15,
      description: `仅${wordCount}字，内容深度不够`,
      solution: "扩展内容深度，添加更多详细说明、案例和实用信息",
    })
  }

  // 检查可读性
  const avgSentenceLength = sentenceCount > 0 ? wordCount / sentenceCount : 0
  if (avgSentenceLength >= 10 && avgSentenceLength <= 25) {
    score += 10
    positiveItems.push({
      item: "句子长度适中",
      points: 10,
      description: `平均句长${avgSentenceLength.toFixed(1)}字，易于阅读`,
    })
  } else if (avgSentenceLength > 25) {
    negativeItems.push({
      item: "句子过长",
      points: -8,
      description: `平均句长${avgSentenceLength.toFixed(1)}字，可能影响理解`,
      solution: "将长句拆分为短句，使用简洁明了的表达方式",
    })
  } else if (avgSentenceLength < 10 && avgSentenceLength > 0) {
    negativeItems.push({
      item: "句子过短",
      points: -5,
      description: "句子过于简短，可能缺少详细说明",
      solution: "适当扩展句子内容，提供更多细节和说明",
    })
  }

  // 检查实用性指标
  const actionWords = content.match(/步骤|方法|技巧|建议|推荐|实践|操作|使用|如何|怎么|教程|指南/g) || []
  if (actionWords.length >= 8) {
    score += 15
    positiveItems.push({ item: "实用性强", points: 15, description: `包含${actionWords.length}个实用性词汇` })
  } else if (actionWords.length >= 3) {
    score += 8
    positiveItems.push({ item: "包含实用信息", points: 8, description: `包含${actionWords.length}个实用性词汇` })
  } else {
    negativeItems.push({
      item: "实用性不足",
      points: -12,
      description: "缺少可操作的实用信息",
      solution: "增加具体的操作步骤、实用技巧、建议和指导方法",
    })
  }

  // 检查价值词汇
  const valueWords = content.match(/重要|关键|核心|有效|成功|优化|提升|改进|最佳|专业|高效/g) || []
  if (valueWords.length >= 10) {
    score += 10
    positiveItems.push({ item: "价值表达充分", points: 10, description: `包含${valueWords.length}个价值词汇` })
  } else if (valueWords.length < 5) {
    negativeItems.push({
      item: "价值表达不足",
      points: -8,
      description: "缺少价值强调和重要性表达",
      solution: "强调内容的价值和重要性，使用'关键'、'重要'、'有效'等词汇",
    })
  }

  // 检查互动性
  const interactiveWords = content.match(/问题|疑问|思考|讨论|分享|评论|反馈|建议|意见/g) || []
  if (interactiveWords.length >= 3) {
    score += 8
    positiveItems.push({ item: "互动性良好", points: 8, description: "鼓励用户参与和互动" })
  } else {
    negativeItems.push({
      item: "缺少互动引导",
      points: -5,
      description: "缺少用户互动和参与引导",
      solution: "添加问题引导、讨论话题或行动号召，增强用户参与度",
    })
  }

  score = Math.min(Math.max(score, 0), 100)

  return {
    score,
    feedback: `用户价值${score >= 80 ? "优秀" : score >= 60 ? "良好" : "需要改进"}`,
    suggestions,
    positiveItems,
    negativeItems,
  }
}
