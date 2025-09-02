import { DocsHeader } from "@/components/docs-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Rocket,
  Bug,
  Zap,
  Plus,
  Wrench,
  Shield,
  Sparkles,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "更新日志 - GEO.Fan",
  description: "GEO.Fan 产品更新日志，了解最新功能和改进",
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background">
      <DocsHeader />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6 mb-8">
          <Badge variant="outline">产品更新</Badge>
          <h1 className="text-4xl font-bold tracking-tight">更新日志</h1>
          <p className="text-xl text-muted-foreground">
            跟踪 GEO.Fan 的最新功能、改进和修复。我们持续优化产品，为您提供更好的体验。
          </p>
        </div>

        <div className="space-y-8">
          {/* Version 1.2.0 - Latest */}
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  版本 1.2.0
                  <Badge variant="default" className="ml-2">
                    最新
                  </Badge>
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  2025年09月01日
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Plus className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">新增功能</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                      <li>全新的批量检测功能，支持同时分析多个URL</li>
                      <li>增加竞品对比分析工具</li>
                      <li>新增PDF报告导出功能</li>
                      <li>支持自定义检测规则配置</li>
                      <li>添加API接口，支持第三方集成</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400">性能优化</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                      <li>检测速度提升40%，大幅缩短等待时间</li>
                      <li>优化内存使用，减少系统资源占用</li>
                      <li>改进缓存机制，重复检测响应更快</li>
                      <li>升级AI模型，提高分析准确性</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Bug className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-700 dark:text-orange-400">问题修复</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                      <li>修复长文本检测时的超时问题</li>
                      <li>解决特殊字符导致的解析错误</li>
                      <li>修复移动端界面显示异常</li>
                      <li>优化深色模式下的视觉效果</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Version 1.1.5 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-blue-500" />
                  版本 1.1.5
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  2025年8月28日
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400">改进优化</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li>优化检测算法，提高结构化数据识别准确率</li>
                    <li>改进用户界面响应速度</li>
                    <li>增强错误提示信息的友好性</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Bug className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-orange-700 dark:text-orange-400">问题修复</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li>修复某些网站检测失败的问题</li>
                    <li>解决报告生成时的格式错误</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Version 1.1.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  版本 1.1.0
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  2025年8月10日
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Plus className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-400">新增功能</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li>新增历史检测记录功能</li>
                    <li>支持检测结果分享</li>
                    <li>添加详细的优化建议说明</li>
                    <li>增加多语言内容检测支持</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-700 dark:text-red-400">安全更新</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li>加强用户数据加密保护</li>
                    <li>优化API安全验证机制</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Version 1.0.0 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-green-500" />
                  版本 1.0.0
                  <Badge variant="outline" className="ml-2">
                    首次发布
                  </Badge>
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  2025年7月31日
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-400">核心功能</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li>GEO检测工具正式上线</li>
                    <li>四维度评估体系（权威性、相关性、结构性、用户价值）</li>
                    <li>详细的扣分项分析和优化建议</li>
                    <li>支持URL和文本内容检测</li>
                    <li>响应式设计，支持移动端访问</li>
                    <li>完整的文档和使用指南</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Upcoming Features */}
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                即将推出
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">计划中的功能</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li>实时监控功能，定期检测网站变化</li>
                    <li>团队协作功能，支持多用户管理</li>
                    <li>更多AI模型支持（GPT-4、Claude-3等）</li>
                    <li>行业特定的检测模板</li>
                    <li>高级数据分析和趋势报告</li>
                    <li>移动应用程序</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>反馈建议：</strong>我们重视您的意见！如果您有功能建议或改进意见， 请发送邮件至{" "}
                  <a href="mailto:mail@geo.fan" className="text-primary hover:underline">
                    mail@geo.fan
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
