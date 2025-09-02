import { DocsHeader } from "@/components/docs-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Shield, AlertTriangle, Gavel, RefreshCw, Mail, Calendar } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "使用条款 - GEO.Fan",
  description: "GEO.Fan 使用条款，了解使用我们服务的规则和条件",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DocsHeader />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6 mb-8">
          <Badge variant="outline">法律文档</Badge>
          <h1 className="text-4xl font-bold tracking-tight">使用条款</h1>
          <p className="text-xl text-muted-foreground">
            欢迎使用 GEO.Fan 服务。请仔细阅读以下条款，使用我们的服务即表示您同意遵守这些条款。
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
                <FileText className="h-5 w-5 text-blue-500" />
                服务描述
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">GEO.Fan 提供的服务</h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>
                  • <strong>GEO检测工具：</strong>分析网站和内容在生成式AI引擎中的表现
                </li>
                <li>
                  • <strong>优化建议：</strong>提供基于AI的内容优化建议和最佳实践
                </li>
                <li>
                  • <strong>文档资源：</strong>提供GEO相关的教程、指南和案例研究
                </li>
                <li>
                  • <strong>分析报告：</strong>生成详细的内容分析和改进建议报告
                </li>
                <li>
                  • <strong>技术支持：</strong>为用户提供技术咨询和客户服务
                </li>
              </ul>

              <div className="bg-muted/50 p-4 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>服务可用性：</strong>我们努力保持服务的持续可用性，
                  但不保证服务不会中断。我们可能会因维护、升级或其他原因暂时中断服务。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                用户责任
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">账户使用规范</h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>
                  • <strong>真实信息：</strong>提供准确、完整的注册信息并及时更新
                </li>
                <li>
                  • <strong>账户安全：</strong>保护账户密码安全，不与他人共享账户
                </li>
                <li>
                  • <strong>合法使用：</strong>仅将服务用于合法目的，不进行任何违法活动
                </li>
                <li>
                  • <strong>内容责任：</strong>对您提交的内容承担全部责任
                </li>
                <li>
                  • <strong>系统安全：</strong>不得尝试破坏或干扰我们的系统安全
                </li>
              </ul>

              <h3 className="font-semibold mt-6">禁止行为</h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>上传恶意软件、病毒或其他有害代码</li>
                <li>进行垃圾邮件发送或其他滥用行为</li>
                <li>侵犯他人知识产权或隐私权</li>
                <li>发布违法、有害、威胁性或诽谤性内容</li>
                <li>尝试未经授权访问其他用户账户或系统</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-500" />
                知识产权
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">我们的知识产权</h3>
              <p className="text-sm text-muted-foreground">
                GEO.Fan 的所有内容，包括但不限于文本、图形、标志、图标、图像、音频剪辑、 数字下载、数据编译和软件，均为
                GEO.Fan 或其内容供应商的财产， 受中国和国际版权法保护。
              </p>

              <h3 className="font-semibold mt-6">用户内容</h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>您保留对提交内容的所有权</li>
                <li>您授予我们使用您的内容来提供服务的许可</li>
                <li>您确保拥有提交内容的合法权利</li>
                <li>我们不会将您的内容用于服务提供以外的目的</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                免责声明
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">服务免责声明</h3>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>
                  • <strong>准确性：</strong>我们不保证分析结果的绝对准确性
                </li>
                <li>
                  • <strong>可用性：</strong>服务按"现状"提供，不保证无中断或无错误
                </li>
                <li>
                  • <strong>结果：</strong>不保证使用我们的建议会带来特定结果
                </li>
                <li>
                  • <strong>第三方：</strong>不对第三方网站或服务的内容负责
                </li>
                <li>
                  • <strong>损失：</strong>在法律允许的最大范围内，我们不承担间接损失责任
                </li>
              </ul>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg mt-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>重要提醒：</strong>我们的服务仅供参考，不构成专业建议。 在做出重要决策前，请咨询相关专业人士。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gavel className="h-5 w-5 text-red-500" />
                违规处理
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">违规行为的后果</h3>
              <p className="text-sm text-muted-foreground">如果您违反这些条款，我们可能会采取以下措施：</p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>发出警告通知</li>
                <li>暂时限制账户功能</li>
                <li>暂停或终止您的账户</li>
                <li>删除违规内容</li>
                <li>采取法律行动（如有必要）</li>
              </ul>

              <h3 className="font-semibold mt-6">申诉程序</h3>
              <p className="text-sm text-muted-foreground">
                如果您认为我们的处理有误，可以通过
                <a href="mailto:appeal@geo.fan" className="text-primary hover:underline">
                  appeal@geo.fan
                </a>
                提交申诉，我们将在7个工作日内回复。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-cyan-500" />
                条款修改
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">修改权利</h3>
              <p className="text-sm text-muted-foreground">
                我们保留随时修改这些条款的权利。重大修改将通过以下方式通知您：
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>在网站上发布通知</li>
                <li>向您的注册邮箱发送通知</li>
                <li>在您下次登录时显示更新提醒</li>
              </ul>

              <div className="bg-muted/50 p-4 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>生效时间：</strong>修改后的条款将在发布后30天生效。 继续使用服务即表示您接受修改后的条款。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-indigo-500" />
                联系信息
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">如果您对这些使用条款有任何疑问，请联系我们：</p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>邮箱：</strong>{" "}
                  <a href="mailto:mail@geo.fan" className="text-primary hover:underline">
                    mail@geo.fan
                  </a>
                </p>
                <p>
                  <strong>客服：</strong>{" "}
                  <a href="mailto:mail@geo.fan" className="text-primary hover:underline">
                    mail@geo.fan
                  </a>
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>适用法律：</strong>这些条款受中华人民共和国法律管辖。
                  任何争议将通过友好协商解决，协商不成的，提交上海仲裁委员会仲裁。
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
