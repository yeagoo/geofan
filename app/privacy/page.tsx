import { DocsHeader } from "@/components/docs-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Database, Lock, UserCheck, Globe, Mail, Calendar } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "隐私政策 - GEO.Fan",
  description: "GEO.Fan 隐私政策，了解我们如何收集、使用和保护您的个人信息",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <DocsHeader />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6 mb-8">
          <Badge variant="outline">法律文档</Badge>
          <h1 className="text-4xl font-bold tracking-tight">隐私政策</h1>
          <p className="text-xl text-muted-foreground">
            我们重视您的隐私权，本政策详细说明了 GEO.Fan 如何收集、使用、存储和保护您的个人信息。
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>最后更新：2025年09月01日</span>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-500" />
                信息收集
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">我们收集的信息类型</h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>账户信息：</strong>用户名、邮箱地址、密码（加密存储）
                </li>
                <li><strong>使用数据：</strong>访问页面、使用功能、停留时间等行为数据
                </li>
                <li><strong>设备信息：</strong>IP地址、浏览器类型、操作系统、设备标识符
                </li>
                <li><strong>内容数据：</strong>您提交用于GEO检测的网址和文本内容
                </li>
                <li><strong>通信记录：</strong>与我们的客服或技术支持的沟通记录
                </li>
              </ul>

              <h3 className="font-semibold mt-6">信息收集方式</h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>• 您主动提供的信息（注册、使用服务时）</li>
                <li>• 自动收集的技术信息（Cookies、日志文件）</li>
                <li>• 第三方服务提供的信息（社交媒体登录）</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-green-500" />
                信息使用
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">我们如何使用您的信息</h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>服务提供：</strong>为您提供GEO检测、分析和优化建议服务
                </li>
                <li><strong>账户管理：</strong>创建和维护您的用户账户，处理登录验证
                </li>
                <li><strong>服务改进：</strong>分析使用模式，优化产品功能和用户体验
                </li>
                <li><strong>客户支持：</strong>响应您的询问，提供技术支持和客户服务
                </li>
                <li><strong>安全保护：</strong>检测和防范欺诈、滥用和安全威胁
                </li>
                <li><strong>法律合规：</strong>遵守适用的法律法规和监管要求
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-500" />
                信息共享
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">我们不会出售您的个人信息</h3>
              <p className="text-sm text-muted-foreground">
                我们承诺不会向第三方出售、出租或交易您的个人信息。仅在以下情况下可能共享信息：
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>服务提供商：</strong>与可信的第三方服务提供商共享必要信息以提供服务
                </li>
                <li><strong>法律要求：</strong>根据法律程序、政府要求或法院命令
                </li>
                <li><strong>业务转让：</strong>在合并、收购或资产转让情况下
                </li>
                <li><strong>安全保护：</strong>保护我们或他人的权利、财产或安全
                </li>
                <li><strong>用户同意：</strong>获得您明确同意的其他情况
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-orange-500" />
                数据安全
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">安全措施</h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>加密传输：</strong>使用SSL/TLS加密保护数据传输
                </li>
                <li><strong>访问控制：</strong>严格限制员工对个人信息的访问权限
                </li>
                <li><strong>数据备份：</strong>定期备份数据并测试恢复程序
                </li>
                <li><strong>安全监控：</strong>24/7监控系统安全和异常活动
                </li>
                <li><strong>定期审计：</strong>定期进行安全评估和漏洞测试
                </li>
              </ul>

              <h3 className="font-semibold mt-6">数据保留</h3>
              <p className="text-sm text-muted-foreground">
                我们仅在必要期间保留您的个人信息。账户信息在账户活跃期间保留，
                使用数据通常保留2年，具体保留期限取决于信息类型和法律要求。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-red-500" />
                您的权利
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">您对个人信息的权利</h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>访问权：</strong>请求查看我们持有的关于您的个人信息
                </li>
                <li><strong>更正权：</strong>要求更正不准确或不完整的个人信息
                </li>
                <li><strong>删除权：</strong>在特定情况下要求删除您的个人信息
                </li>
                <li><strong>限制权：</strong>要求限制对您个人信息的处理
                </li>
                <li><strong>可携权：</strong>以结构化格式获取您的个人信息
                </li>
                <li><strong>反对权：</strong>反对基于合法利益的信息处理
                </li>
              </ul>

              <div className="bg-muted/50 p-4 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>如何行使权利：</strong>请发送邮件至
                  <a href="mailto:mail@geo.fan" className="text-primary hover:underline ml-1">
                    mail@geo.fan
                  </a>
                  ，我们将在30天内回复您的请求。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-cyan-500" />
                联系我们
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                如果您对本隐私政策有任何疑问或需要行使您的权利，请通过以下方式联系我们：
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>邮箱：</strong>{" "}
                  <a href="mailto:mail@geo.fan" className="text-primary hover:underline">
                    mail@geo.fan
                  </a>
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>政策更新：</strong>我们可能会不时更新本隐私政策。
                  重大变更将通过邮件或网站通知您。建议您定期查看本页面以了解最新信息。
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
