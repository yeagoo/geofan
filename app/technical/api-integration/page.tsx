import { DocsLayout } from "@/components/docs-layout"

export default function ApiIntegrationPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">API 集成</h1>
          <p className="text-xl text-muted-foreground">学会集成各种 GEO 相关的 API 服务，构建自动化的优化工作流。</p>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <h2>GEO API 生态系统</h2>
          <p>
            现代的 GEO 优化需要整合多个 API 服务，包括搜索引擎 API、AI 服务 API、 分析工具 API 等。通过 API
            集成，我们可以构建自动化的数据收集、分析和优化流程。
          </p>

          <blockquote>
            <p>API 集成是实现 GEO 优化自动化和规模化的关键技术基础。</p>
          </blockquote>

          <h3>核心 API 类别</h3>
          <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg my-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">数据获取 API</h4>
                <ul className="text-sm space-y-2">
                  <li>Google Search Console API</li>
                  <li>Google Analytics API</li>
                  <li>Bing Webmaster Tools API</li>
                  <li>第三方SEO工具API</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">AI 服务 API</h4>
                <ul className="text-sm space-y-2">
                  <li>OpenAI GPT API</li>
                  <li>Google Gemini API</li>
                  <li>Anthropic Claude API</li>
                  <li>自然语言处理API</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Google Search Console API</h2>

          <h3>1. API 设置和认证</h3>
          <p>首先需要在 Google Cloud Console 中设置项目并启用 API：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：Google Search Console API 认证</p>
            <pre className="text-sm">
              <code>{`import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

class SearchConsoleAPI {
  constructor(serviceAccountKey) {
    this.auth = new JWT({
      email: serviceAccountKey.client_email,
      key: serviceAccountKey.private_key,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
    });
    
    this.searchconsole = google.searchconsole({
      version: 'v1',
      auth: this.auth
    });
  }
  
  async getSearchAnalytics(siteUrl, startDate, endDate) {
    try {
      const response = await this.searchconsole.searchanalytics.query({
        siteUrl: siteUrl,
        requestBody: {
          startDate: startDate,
          endDate: endDate,
          dimensions: ['query', 'page'],
          rowLimit: 1000
        }
      });
      
      return response.data.rows || [];
    } catch (error) {
      console.error('Search Console API Error:', error);
      throw error;
    }
  }
  
  async getIndexingStatus(siteUrl) {
    const response = await this.searchconsole.sitemaps.list({
      siteUrl: siteUrl
    });
    
    return response.data.sitemap || [];
  }
}`}</code>
            </pre>
          </div>

          <h3>2. 数据获取和分析</h3>
          <p>使用 API 获取关键的 GEO 优化数据：</p>
          <ul>
            <li>搜索查询和点击数据</li>
            <li>页面索引状态</li>
            <li>移动端可用性问题</li>
            <li>核心网页指标</li>
          </ul>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：搜索数据分析示例</p>
            <pre className="text-sm">
              <code>{`async function analyzeSearchPerformance(siteUrl, days = 30) {
  const endDate = new Date().toISOString().split('T')[0];
  const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
    .toISOString().split('T')[0];
  
  const searchData = await searchConsoleAPI.getSearchAnalytics(
    siteUrl, startDate, endDate
  );
  
  // 分析查询意图
  const queryAnalysis = searchData.map(row => ({
    query: row.keys[0],
    page: row.keys[1],
    clicks: row.clicks,
    impressions: row.impressions,
    ctr: row.ctr,
    position: row.position,
    intent: classifyQueryIntent(row.keys[0])
  }));
  
  // 识别GEO优化机会
  const geoOpportunities = queryAnalysis.filter(item => 
    item.position > 10 && 
    item.impressions > 100 &&
    item.intent === 'informational'
  );
  
  return {
    totalQueries: queryAnalysis.length,
    avgPosition: queryAnalysis.reduce((sum, item) => sum + item.position, 0) / queryAnalysis.length,
    geoOpportunities: geoOpportunities,
    topPerformingPages: queryAnalysis
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10)
  };
}

function classifyQueryIntent(query) {
  const informationalKeywords = ['什么是', '如何', '为什么', '怎么样'];
  const transactionalKeywords = ['购买', '价格', '优惠', '下载'];
  
  if (informationalKeywords.some(keyword => query.includes(keyword))) {
    return 'informational';
  }
  if (transactionalKeywords.some(keyword => query.includes(keyword))) {
    return 'transactional';
  }
  return 'navigational';
}`}</code>
            </pre>
          </div>

          <h2>AI 服务 API 集成</h2>

          <h3>1. OpenAI GPT API</h3>
          <p>集成 GPT API 进行内容分析和优化：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：GPT API 内容优化</p>
            <pre className="text-sm">
              <code>{`import OpenAI from 'openai';

class GEOContentOptimizer {
  constructor(apiKey) {
    this.openai = new OpenAI({ apiKey });
  }
  
  async optimizeContentForGEO(content, targetKeywords) {
    const prompt = \`
作为GEO优化专家，请优化以下内容：

原始内容：
\${content}

目标关键词：\${targetKeywords.join(', ')}

优化要求：
1. 提升内容的语义相关性
2. 改善结构和可读性
3. 增加权威性表述
4. 适合生成引擎理解和引用
5. 保持自然流畅的语言

请返回优化后的内容：
    \`;
    
    const response = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 2000
    });
    
    return response.choices[0].message.content;
  }
  
  async generateFAQs(topic, existingContent) {
    const prompt = \`
基于以下主题和内容，生成10个常见问题和详细答案：

主题：\${topic}
现有内容：\${existingContent}

要求：
1. 问题应该是用户真实会问的
2. 答案要准确、详细、有价值
3. 适合生成引擎直接引用
4. 包含相关的技术细节

请以JSON格式返回：
{
  "faqs": [
    {
      "question": "问题",
      "answer": "详细答案"
    }
  ]
}
    \`;
    
    const response = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.5
    });
    
    return JSON.parse(response.choices[0].message.content);
  }
  
  async analyzeContentGEOScore(content) {
    const prompt = \`
请分析以下内容的GEO优化程度，从以下维度评分（1-10分）：

内容：\${content}

评分维度：
1. 语义清晰度 - 内容是否易于AI理解
2. 结构完整性 - 信息组织是否合理
3. 权威性 - 是否包含可信的信息和来源
4. 实用性 - 是否能直接回答用户问题
5. 引用价值 - 是否适合被生成引擎引用

请返回JSON格式的分析结果：
{
  "scores": {
    "semantic_clarity": 8,
    "structural_integrity": 7,
    "authority": 6,
    "utility": 9,
    "citation_value": 8
  },
  "overall_score": 7.6,
  "recommendations": ["具体改进建议"]
}
    \`;
    
    const response = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3
    });
    
    return JSON.parse(response.choices[0].message.content);
  }
}`}</code>
            </pre>
          </div>

          <h3>2. 自然语言处理 API</h3>
          <p>集成 NLP API 进行语义分析：</p>
          <ul>
            <li>实体识别和提取</li>
            <li>情感分析</li>
            <li>主题建模</li>
            <li>语义相似度计算</li>
          </ul>

          <blockquote>
            <p>NLP API 帮助我们深入理解内容的语义结构，为优化提供数据支持。</p>
          </blockquote>

          <h2>第三方 SEO 工具 API</h2>

          <h3>1. SEMrush API</h3>
          <p>获取竞争对手分析和关键词数据：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：SEMrush API 集成</p>
            <pre className="text-sm">
              <code>{`class SEMrushAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.semrush.com/';
  }
  
  async getDomainOverview(domain) {
    const params = new URLSearchParams({
      type: 'domain_overview',
      key: this.apiKey,
      domain: domain,
      database: 'cn'
    });
    
    const response = await fetch(\`\${this.baseUrl}?\${params}\`);
    const data = await response.text();
    
    return this.parseCSVResponse(data);
  }
  
  async getOrganicKeywords(domain, limit = 100) {
    const params = new URLSearchParams({
      type: 'domain_organic',
      key: this.apiKey,
      domain: domain,
      database: 'cn',
      display_limit: limit
    });
    
    const response = await fetch(\`\${this.baseUrl}?\${params}\`);
    const data = await response.text();
    
    return this.parseCSVResponse(data);
  }
  
  async getCompetitorAnalysis(domain) {
    const params = new URLSearchParams({
      type: 'domain_organic_organic',
      key: this.apiKey,
      domain: domain,
      database: 'cn'
    });
    
    const response = await fetch(\`\${this.baseUrl}?\${params}\`);
    const data = await response.text();
    
    return this.parseCSVResponse(data);
  }
  
  parseCSVResponse(csvData) {
    const lines = csvData.trim().split('\\n');
    const headers = lines[0].split(';');
    
    return lines.slice(1).map(line => {
      const values = line.split(';');
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = values[index];
      });
      return obj;
    });
  }
}`}</code>
            </pre>
          </div>

          <h3>2. Ahrefs API</h3>
          <p>获取反链数据和内容分析：</p>
          <ul>
            <li>反链质量分析</li>
            <li>内容差距分析</li>
            <li>关键词难度评估</li>
            <li>SERP 特征分析</li>
          </ul>

          <h2>自动化工作流构建</h2>

          <h3>1. 数据收集自动化</h3>
          <p>构建自动化的数据收集流程：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：自动化数据收集流程</p>
            <pre className="text-sm">
              <code>{`class GEODataPipeline {
  constructor(config) {
    this.searchConsole = new SearchConsoleAPI(config.gsc);
    this.contentOptimizer = new GEOContentOptimizer(config.openai);
    this.semrush = new SEMrushAPI(config.semrush);
    this.scheduler = new TaskScheduler();
  }
  
  async runDailyAnalysis(siteUrl) {
    try {
      console.log('开始每日GEO分析...');
      
      // 1. 收集搜索数据
      const searchData = await this.searchConsole.getSearchAnalytics(
        siteUrl, 
        this.getDateRange(7)
      );
      
      // 2. 分析内容表现
      const contentAnalysis = await this.analyzeContentPerformance(searchData);
      
      // 3. 识别优化机会
      const opportunities = await this.identifyOptimizationOpportunities(
        contentAnalysis
      );
      
      // 4. 生成优化建议
      const recommendations = await this.generateRecommendations(opportunities);
      
      // 5. 保存结果
      await this.saveAnalysisResults({
        date: new Date(),
        siteUrl,
        searchData,
        contentAnalysis,
        opportunities,
        recommendations
      });
      
      console.log('每日分析完成');
      return recommendations;
      
    } catch (error) {
      console.error('分析过程出错:', error);
      throw error;
    }
  }
  
  async analyzeContentPerformance(searchData) {
    const pagePerformance = {};
    
    for (const row of searchData) {
      const page = row.keys[1];
      if (!pagePerformance[page]) {
        pagePerformance[page] = {
          queries: [],
          totalClicks: 0,
          totalImpressions: 0,
          avgPosition: 0
        };
      }
      
      pagePerformance[page].queries.push({
        query: row.keys[0],
        clicks: row.clicks,
        impressions: row.impressions,
        position: row.position
      });
      
      pagePerformance[page].totalClicks += row.clicks;
      pagePerformance[page].totalImpressions += row.impressions;
    }
    
    // 计算平均排名
    Object.keys(pagePerformance).forEach(page => {
      const queries = pagePerformance[page].queries;
      pagePerformance[page].avgPosition = 
        queries.reduce((sum, q) => sum + q.position, 0) / queries.length;
    });
    
    return pagePerformance;
  }
  
  async identifyOptimizationOpportunities(contentAnalysis) {
    const opportunities = [];
    
    for (const [page, data] of Object.entries(contentAnalysis)) {
      // 识别排名在10-20位的页面（有提升潜力）
      if (data.avgPosition > 10 && data.avgPosition <= 20 && data.totalImpressions > 100) {
        opportunities.push({
          type: 'ranking_improvement',
          page: page,
          currentPosition: data.avgPosition,
          impressions: data.totalImpressions,
          topQueries: data.queries.slice(0, 5)
        });
      }
      
      // 识别点击率低的页面
      const ctr = data.totalClicks / data.totalImpressions;
      if (ctr < 0.05 && data.totalImpressions > 500) {
        opportunities.push({
          type: 'ctr_improvement',
          page: page,
          currentCTR: ctr,
          impressions: data.totalImpressions
        });
      }
    }
    
    return opportunities;
  }
  
  getDateRange(days) {
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
      .toISOString().split('T')[0];
    return { startDate, endDate };
  }
}`}</code>
            </pre>
          </div>

          <h3>2. 内容优化自动化</h3>
          <p>自动化内容优化和更新流程：</p>
          <ul>
            <li>内容质量评估</li>
            <li>优化建议生成</li>
            <li>元数据自动更新</li>
            <li>结构化数据添加</li>
          </ul>

          <h3>3. 监控和报告自动化</h3>
          <p>建立自动化的监控和报告系统：</p>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4">
            <p className="text-sm font-medium mb-2">// 要点先行：自动化报告生成</p>
            <pre className="text-sm">
              <code>{`class GEOReportGenerator {
  constructor(dataSource) {
    this.dataSource = dataSource;
  }
  
  async generateWeeklyReport(siteUrl) {
    const reportData = await this.collectReportData(siteUrl);
    
    const report = {
      period: this.getWeekRange(),
      summary: this.generateSummary(reportData),
      keyMetrics: this.calculateKeyMetrics(reportData),
      topOpportunities: this.identifyTopOpportunities(reportData),
      recommendations: this.generateActionItems(reportData),
      charts: await this.generateCharts(reportData)
    };
    
    // 生成HTML报告
    const htmlReport = this.generateHTMLReport(report);
    
    // 发送邮件报告
    await this.sendEmailReport(htmlReport);
    
    return report;
  }
  
  generateSummary(data) {
    return {
      totalPages: data.pages.length,
      avgPosition: data.avgPosition,
      totalClicks: data.totalClicks,
      totalImpressions: data.totalImpressions,
      weekOverWeekChange: this.calculateWeekOverWeekChange(data)
    };
  }
  
  calculateKeyMetrics(data) {
    return {
      geoScore: this.calculateGEOScore(data),
      contentQuality: this.assessContentQuality(data),
      technicalHealth: this.assessTechnicalHealth(data),
      competitivePosition: this.assessCompetitivePosition(data)
    };
  }
  
  async sendEmailReport(htmlReport) {
    // 使用邮件服务发送报告
    const emailService = new EmailService();
    await emailService.send({
      to: 'team@geo.fan',
      subject: \`GEO周报 - \${new Date().toLocaleDateString()}\`,
      html: htmlReport
    });
  }
}`}</code>
            </pre>
          </div>

          <blockquote>
            <p>自动化报告确保团队及时了解GEO优化进展，数据驱动决策制定。</p>
          </blockquote>

          <h2>API 安全和最佳实践</h2>

          <h3>1. 安全措施</h3>
          <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg my-6">
            <h4 className="text-lg font-semibold mb-3">API 安全清单</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-1">⚠</span>
                <span className="text-sm">使用环境变量存储API密钥</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-1">⚠</span>
                <span className="text-sm">实施API调用频率限制</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-1">⚠</span>
                <span className="text-sm">使用HTTPS进行所有API通信</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-1">⚠</span>
                <span className="text-sm">定期轮换API密钥</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-1">⚠</span>
                <span className="text-sm">监控API使用情况和异常</span>
              </div>
            </div>
          </div>

          <h3>2. 错误处理和重试机制</h3>
          <p>实施健壮的错误处理和重试策略：</p>
          <ul>
            <li>指数退避重试</li>
            <li>API限流处理</li>
            <li>超时设置</li>
            <li>错误日志记录</li>
          </ul>

          <h3>3. 性能优化</h3>
          <p>优化API调用性能：</p>
          <ul>
            <li>批量请求处理</li>
            <li>结果缓存机制</li>
            <li>并发控制</li>
            <li>数据压缩</li>
          </ul>

          <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg my-8">
            <h4 className="text-lg font-semibold mb-3">API 集成实施计划</h4>
            <p className="mb-4">建议按以下步骤实施：</p>
            <ol className="space-y-2">
              <li>1. 评估需求，选择合适的API服务</li>
              <li>2. 设置API认证和安全措施</li>
              <li>3. 实施基础的数据收集功能</li>
              <li>4. 构建数据分析和处理流程</li>
              <li>5. 开发自动化工作流</li>
              <li>6. 建立监控和报告系统</li>
              <li>7. 持续优化和扩展功能</li>
            </ol>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
