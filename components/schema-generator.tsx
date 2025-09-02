"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Copy, Download, Check } from "lucide-react"

interface SchemaData {
  [key: string]: any
}

const schemaTemplates = {
  Article: {
    name: "文章",
    description: "博客文章、新闻文章等内容",
    fields: [
      { key: "headline", label: "标题", type: "text", required: true },
      { key: "description", label: "描述", type: "textarea", required: true },
      { key: "author.name", label: "作者姓名", type: "text", required: true },
      { key: "author.url", label: "作者链接", type: "url", required: false },
      { key: "publisher.name", label: "发布者", type: "text", required: true },
      { key: "datePublished", label: "发布日期", type: "datetime-local", required: true },
      { key: "dateModified", label: "修改日期", type: "datetime-local", required: false },
      { key: "image", label: "文章图片URL", type: "url", required: false },
      { key: "keywords", label: "关键词（逗号分隔）", type: "text", required: false },
      { key: "wordCount", label: "字数", type: "number", required: false },
    ],
  },
  Product: {
    name: "产品",
    description: "电商产品、服务等",
    fields: [
      { key: "name", label: "产品名称", type: "text", required: true },
      { key: "description", label: "产品描述", type: "textarea", required: true },
      { key: "brand.name", label: "品牌名称", type: "text", required: true },
      { key: "image", label: "产品图片URL", type: "url", required: false },
      { key: "offers.price", label: "价格", type: "number", required: true },
      { key: "offers.priceCurrency", label: "货币", type: "select", options: ["CNY", "USD", "EUR"], required: true },
      {
        key: "offers.availability",
        label: "库存状态",
        type: "select",
        options: ["InStock", "OutOfStock", "PreOrder"],
        required: true,
      },
      { key: "aggregateRating.ratingValue", label: "评分", type: "number", required: false },
      { key: "aggregateRating.reviewCount", label: "评价数量", type: "number", required: false },
    ],
  },
  Organization: {
    name: "组织",
    description: "公司、机构等组织信息",
    fields: [
      { key: "name", label: "组织名称", type: "text", required: true },
      { key: "description", label: "组织描述", type: "textarea", required: true },
      { key: "url", label: "官方网站", type: "url", required: true },
      { key: "logo", label: "Logo URL", type: "url", required: false },
      { key: "address.streetAddress", label: "街道地址", type: "text", required: false },
      { key: "address.addressLocality", label: "城市", type: "text", required: false },
      { key: "address.addressRegion", label: "省份", type: "text", required: false },
      { key: "address.postalCode", label: "邮编", type: "text", required: false },
      { key: "telephone", label: "电话", type: "tel", required: false },
      { key: "email", label: "邮箱", type: "email", required: false },
    ],
  },
  FAQ: {
    name: "常见问题",
    description: "FAQ页面结构化数据",
    fields: [{ key: "questions", label: "问题列表", type: "faq", required: true }],
  },
  HowTo: {
    name: "操作指南",
    description: "步骤指导类内容",
    fields: [
      { key: "name", label: "指南标题", type: "text", required: true },
      { key: "description", label: "指南描述", type: "textarea", required: true },
      { key: "image", label: "指南图片URL", type: "url", required: false },
      { key: "totalTime", label: "总耗时（如PT2H30M）", type: "text", required: false },
      { key: "steps", label: "步骤列表", type: "steps", required: true },
    ],
  },
}

export function SchemaGenerator() {
  const [selectedType, setSelectedType] = useState<string>("Article")
  const [formData, setFormData] = useState<SchemaData>({})
  const [generatedSchema, setGeneratedSchema] = useState<string>("")
  const [copied, setCopied] = useState(false)
  const [faqItems, setFaqItems] = useState([{ question: "", answer: "" }])
  const [stepItems, setStepItems] = useState([{ name: "", text: "" }])

  const handleInputChange = (key: string, value: any) => {
    setFormData((prev) => {
      const newData = { ...prev }
      const keys = key.split(".")
      let current = newData

      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {}
        current = current[keys[i]]
      }

      current[keys[keys.length - 1]] = value
      return newData
    })
  }

  const generateSchema = () => {
    const template = schemaTemplates[selectedType as keyof typeof schemaTemplates]
    const schema: any = {
      "@context": "https://schema.org",
      "@type": selectedType,
    }

    // 处理基本字段
    template.fields.forEach((field) => {
      if (field.type === "faq") {
        schema.mainEntity = faqItems
          .filter((item) => item.question && item.answer)
          .map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          }))
        return
      }

      if (field.type === "steps") {
        schema.step = stepItems
          .filter((item) => item.name && item.text)
          .map((item, index) => ({
            "@type": "HowToStep",
            name: item.name,
            text: item.text,
            position: index + 1,
          }))
        return
      }

      const keys = field.key.split(".")
      const value = keys.reduce((obj, key) => obj?.[key], formData)

      if (value) {
        let current = schema
        for (let i = 0; i < keys.length - 1; i++) {
          if (!current[keys[i]]) current[keys[i]] = {}
          current = current[keys[i]]
        }

        // 特殊处理
        if (field.key === "keywords" && typeof value === "string") {
          current[keys[keys.length - 1]] = value
            .split(",")
            .map((k) => k.trim())
            .filter((k) => k)
        } else if (field.key === "datePublished" || field.key === "dateModified") {
          current[keys[keys.length - 1]] = new Date(value).toISOString()
        } else if (field.key === "offers.availability") {
          current[keys[keys.length - 1]] = `https://schema.org/${value}`
        } else {
          current[keys[keys.length - 1]] = value
        }
      }
    })

    // 特殊处理不同类型
    if (selectedType === "FAQ") {
      schema["@type"] = "FAQPage"
    }

    setGeneratedSchema(JSON.stringify(schema, null, 2))
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedSchema)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("复制失败:", err)
    }
  }

  const downloadSchema = () => {
    const blob = new Blob([generatedSchema], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `schema-${selectedType.toLowerCase()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const renderField = (field: any) => {
    const value = field.key.split(".").reduce((obj: any, key: string) => obj?.[key], formData) || ""

    if (field.type === "faq") {
      return (
        <div className="space-y-4">
          <Label className="text-base font-medium">FAQ 问题列表</Label>
          {faqItems.map((item, index) => (
            <Card key={index} className="p-4">
              <div className="space-y-3">
                <div>
                  <Label htmlFor={`question-${index}`}>问题 {index + 1}</Label>
                  <Input
                    id={`question-${index}`}
                    value={item.question}
                    onChange={(e) => {
                      const newItems = [...faqItems]
                      newItems[index].question = e.target.value
                      setFaqItems(newItems)
                    }}
                    placeholder="输入问题"
                  />
                </div>
                <div>
                  <Label htmlFor={`answer-${index}`}>答案 {index + 1}</Label>
                  <Textarea
                    id={`answer-${index}`}
                    value={item.answer}
                    onChange={(e) => {
                      const newItems = [...faqItems]
                      newItems[index].answer = e.target.value
                      setFaqItems(newItems)
                    }}
                    placeholder="输入答案"
                    rows={3}
                  />
                </div>
                {faqItems.length > 1 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const newItems = faqItems.filter((_, i) => i !== index)
                      setFaqItems(newItems)
                    }}
                  >
                    删除此问题
                  </Button>
                )}
              </div>
            </Card>
          ))}
          <Button variant="outline" onClick={() => setFaqItems([...faqItems, { question: "", answer: "" }])}>
            添加问题
          </Button>
        </div>
      )
    }

    if (field.type === "steps") {
      return (
        <div className="space-y-4">
          <Label className="text-base font-medium">操作步骤</Label>
          {stepItems.map((item, index) => (
            <Card key={index} className="p-4">
              <div className="space-y-3">
                <div>
                  <Label htmlFor={`step-name-${index}`}>步骤 {index + 1} 标题</Label>
                  <Input
                    id={`step-name-${index}`}
                    value={item.name}
                    onChange={(e) => {
                      const newItems = [...stepItems]
                      newItems[index].name = e.target.value
                      setStepItems(newItems)
                    }}
                    placeholder="输入步骤标题"
                  />
                </div>
                <div>
                  <Label htmlFor={`step-text-${index}`}>步骤 {index + 1} 描述</Label>
                  <Textarea
                    id={`step-text-${index}`}
                    value={item.text}
                    onChange={(e) => {
                      const newItems = [...stepItems]
                      newItems[index].text = e.target.value
                      setStepItems(newItems)
                    }}
                    placeholder="输入步骤描述"
                    rows={3}
                  />
                </div>
                {stepItems.length > 1 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const newItems = stepItems.filter((_, i) => i !== index)
                      setStepItems(newItems)
                    }}
                  >
                    删除此步骤
                  </Button>
                )}
              </div>
            </Card>
          ))}
          <Button variant="outline" onClick={() => setStepItems([...stepItems, { name: "", text: "" }])}>
            添加步骤
          </Button>
        </div>
      )
    }

    if (field.type === "select") {
      return (
        <div>
          <Label htmlFor={field.key}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </Label>
          <Select value={value} onValueChange={(val) => handleInputChange(field.key, val)}>
            <SelectTrigger>
              <SelectValue placeholder={`选择${field.label}`} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option: string) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )
    }

    if (field.type === "textarea") {
      return (
        <div>
          <Label htmlFor={field.key}>
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </Label>
          <Textarea
            id={field.key}
            value={value}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            placeholder={`输入${field.label}`}
            rows={3}
          />
        </div>
      )
    }

    return (
      <div>
        <Label htmlFor={field.key}>
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        <Input
          id={field.key}
          type={field.type}
          value={value}
          onChange={(e) => handleInputChange(field.key, e.target.value)}
          placeholder={`输入${field.label}`}
        />
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Schema.org 模板生成器</h2>
        <p className="text-lg text-muted-foreground">
          快速生成标准的 Schema.org 结构化数据标记，提升内容的机器可读性。
        </p>
      </div>

      <Tabs defaultValue="generator" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="generator">生成器</TabsTrigger>
          <TabsTrigger value="preview">预览和导出</TabsTrigger>
        </TabsList>

        <TabsContent value="generator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>选择 Schema 类型</CardTitle>
              <CardDescription>选择适合您内容的 Schema.org 类型</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(schemaTemplates).map(([key, template]) => (
                  <Card
                    key={key}
                    className={`cursor-pointer transition-colors ${
                      selectedType === key ? "ring-2 ring-primary" : "hover:bg-muted/50"
                    }`}
                    onClick={() => {
                      setSelectedType(key)
                      setFormData({})
                      setFaqItems([{ question: "", answer: "" }])
                      setStepItems([{ name: "", text: "" }])
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{template.name}</h3>
                        {selectedType === key && <Badge variant="default">已选择</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>填写 {schemaTemplates[selectedType as keyof typeof schemaTemplates].name} 信息</CardTitle>
              <CardDescription>填写必要的字段信息，生成标准的 Schema.org 标记</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {schemaTemplates[selectedType as keyof typeof schemaTemplates].fields.map((field) => (
                <div key={field.key}>{renderField(field)}</div>
              ))}

              <Button onClick={generateSchema} className="w-full">
                生成 Schema 标记
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                生成的 Schema.org 标记
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={copyToClipboard} disabled={!generatedSchema}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "已复制" : "复制"}
                  </Button>
                  <Button variant="outline" size="sm" onClick={downloadSchema} disabled={!generatedSchema}>
                    <Download className="h-4 w-4" />
                    下载
                  </Button>
                </div>
              </CardTitle>
              <CardDescription>将生成的 JSON-LD 代码添加到您的网页 &lt;head&gt; 部分</CardDescription>
            </CardHeader>
            <CardContent>
              {generatedSchema ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>{generatedSchema}</code>
                    </pre>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">使用方法：</h4>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>复制上面生成的 JSON-LD 代码</li>
                      <li>将代码包装在 &lt;script type="application/ld+json"&gt; 标签中</li>
                      <li>添加到网页的 &lt;head&gt; 部分</li>
                      <li>使用 Google 结构化数据测试工具验证</li>
                    </ol>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>请先在生成器标签页中填写信息并生成 Schema 标记</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
