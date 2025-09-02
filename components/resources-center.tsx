"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Download, BookOpen, Code, Zap, Search, Star, Heart, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

interface Resource {
  id: string
  title: string
  description: string
  category: string
  type: "tool" | "template" | "guide" | "external"
  url?: string
  downloadUrl?: string
  rating: number
  downloads: number
  tags: string[]
  featured: boolean
}

export function ResourcesCenter() {
  const [resources, setResources] = useState<Resource[]>([])
  const [filteredResources, setFilteredResources] = useState<Resource[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [favorites, setFavorites] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchResources()
  }, [])

  useEffect(() => {
    filterResources()
  }, [resources, searchQuery, selectedCategory, selectedType])

  const fetchResources = async () => {
    try {
      const response = await fetch("/api/resources")
      const data = await response.json()
      setResources(data.resources)
      setLoading(false)
    } catch (error) {
      console.error("Failed to fetch resources:", error)
      setLoading(false)
    }
  }

  const filterResources = () => {
    let filtered = resources

    if (searchQuery) {
      filtered = filtered.filter(
        (resource) =>
          resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((resource) => resource.category === selectedCategory)
    }

    if (selectedType !== "all") {
      filtered = filtered.filter((resource) => resource.type === selectedType)
    }

    setFilteredResources(filtered)
  }

  const handleDownload = async (resourceId: string) => {
    try {
      const response = await fetch(`/api/resources/${resourceId}/download`, {
        method: "POST",
      })
      const data = await response.json()

      if (data.downloadUrl) {
        window.open(data.downloadUrl, "_blank")
        // 更新下载次数
        setResources((prev) =>
          prev.map((resource) =>
            resource.id === resourceId ? { ...resource, downloads: resource.downloads + 1 } : resource,
          ),
        )
      }
    } catch (error) {
      console.error("Download failed:", error)
    }
  }

  const toggleFavorite = (resourceId: string) => {
    setFavorites((prev) => (prev.includes(resourceId) ? prev.filter((id) => id !== resourceId) : [...prev, resourceId]))
  }

  const categories = [
    { value: "all", label: "全部分类" },
    { value: "tools", label: "工具套件" },
    { value: "templates", label: "模板库" },
    { value: "guides", label: "学习指南" },
    { value: "external", label: "第三方工具" },
  ]

  const types = [
    { value: "all", label: "全部类型" },
    { value: "tool", label: "在线工具" },
    { value: "template", label: "模板文件" },
    { value: "guide", label: "指南文档" },
    { value: "external", label: "外部链接" },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* 搜索和筛选区域 */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="搜索资源、工具、模板..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-40">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">找到 {filteredResources.length} 个资源</p>
          <div className="flex gap-2">
            <Badge variant="secondary">{favorites.length} 个收藏</Badge>
          </div>
        </div>
      </div>

      {/* 精选资源 */}
      {filteredResources.some((r) => r.featured) && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">精选资源</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources
              .filter((resource) => resource.featured)
              .map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  isFavorite={favorites.includes(resource.id)}
                  onToggleFavorite={() => toggleFavorite(resource.id)}
                  onDownload={() => handleDownload(resource.id)}
                />
              ))}
          </div>
        </section>
      )}

      <Separator />

      {/* 资源列表 */}
      <Tabs defaultValue="grid" className="space-y-6">
        <TabsList>
          <TabsTrigger value="grid">网格视图</TabsTrigger>
          <TabsTrigger value="list">列表视图</TabsTrigger>
        </TabsList>

        <TabsContent value="grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources
              .filter((resource) => !resource.featured)
              .map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  isFavorite={favorites.includes(resource.id)}
                  onToggleFavorite={() => toggleFavorite(resource.id)}
                  onDownload={() => handleDownload(resource.id)}
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="list">
          <div className="space-y-4">
            {filteredResources
              .filter((resource) => !resource.featured)
              .map((resource) => (
                <ResourceListItem
                  key={resource.id}
                  resource={resource}
                  isFavorite={favorites.includes(resource.id)}
                  onToggleFavorite={() => toggleFavorite(resource.id)}
                  onDownload={() => handleDownload(resource.id)}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">没有找到匹配的资源</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("all")
              setSelectedType("all")
            }}
            className="mt-4"
          >
            清除筛选条件
          </Button>
        </div>
      )}
    </div>
  )
}

function ResourceCard({
  resource,
  isFavorite,
  onToggleFavorite,
  onDownload,
}: {
  resource: Resource
  isFavorite: boolean
  onToggleFavorite: () => void
  onDownload: () => void
}) {
  const getIcon = () => {
    switch (resource.type) {
      case "tool":
        return <Zap className="w-5 h-5" />
      case "template":
        return <Code className="w-5 h-5" />
      case "guide":
        return <BookOpen className="w-5 h-5" />
      case "external":
        return <ExternalLink className="w-5 h-5" />
      default:
        return <Zap className="w-5 h-5" />
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            {getIcon()}
            <Badge variant="secondary" className="text-xs">
              {resource.category}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleFavorite}
            className={cn(
              "opacity-0 group-hover:opacity-100 transition-opacity",
              isFavorite && "opacity-100 text-red-500",
            )}
          >
            <Heart className={cn("w-4 h-4", isFavorite && "fill-current")} />
          </Button>
        </div>
        <CardTitle className="text-lg">{resource.title}</CardTitle>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-current text-yellow-500" />
            <span>{resource.rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Download className="w-4 h-4" />
            <span>{resource.downloads}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {resource.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {resource.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{resource.tags.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex space-x-2">
          {resource.url && (
            <Button size="sm" asChild>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                使用
              </a>
            </Button>
          )}
          {resource.downloadUrl && (
            <Button variant="outline" size="sm" onClick={onDownload}>
              <Download className="w-4 h-4 mr-2" />
              下载
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function ResourceListItem({
  resource,
  isFavorite,
  onToggleFavorite,
  onDownload,
}: {
  resource: Resource
  isFavorite: boolean
  onToggleFavorite: () => void
  onDownload: () => void
}) {
  const getIcon = () => {
    switch (resource.type) {
      case "tool":
        return <Zap className="w-5 h-5" />
      case "template":
        return <Code className="w-5 h-5" />
      case "guide":
        return <BookOpen className="w-5 h-5" />
      case "external":
        return <ExternalLink className="w-5 h-5" />
      default:
        return <Zap className="w-5 h-5" />
    }
  }

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          {getIcon()}
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold">{resource.title}</h3>
              <Badge variant="secondary" className="text-xs">
                {resource.category}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 fill-current text-yellow-500" />
                <span>{resource.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Download className="w-3 h-3" />
                <span>{resource.downloads}</span>
              </div>
              <div className="flex space-x-1">
                {resource.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={onToggleFavorite} className={cn(isFavorite && "text-red-500")}>
            <Heart className={cn("w-4 h-4", isFavorite && "fill-current")} />
          </Button>
          {resource.url && (
            <Button size="sm" asChild>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                使用
              </a>
            </Button>
          )}
          {resource.downloadUrl && (
            <Button variant="outline" size="sm" onClick={onDownload}>
              <Download className="w-4 h-4 mr-2" />
              下载
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
