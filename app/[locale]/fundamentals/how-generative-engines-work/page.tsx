"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Brain, Database, Zap, ArrowRight, Lightbulb, Cpu } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function HowGenerativeEnginesWorkPage() {
  const { t } = useLanguage()

  return (
    <DocsLayout>
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex-1 space-y-4">
          <Badge variant="outline">{t.pages.fundamentals.howGenerativeEnginesWork.badge}</Badge>
          <h1 className="font-bold text-4xl lg:text-5xl text-balance">
            {t.pages.fundamentals.howGenerativeEnginesWork.title}
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            {t.pages.fundamentals.howGenerativeEnginesWork.description}
          </p>
        </div>

        <div className="pb-12 pt-8">
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <Alert className="my-6">
              <Brain className="h-4 w-4" />
              <AlertDescription>
                <strong>{t.pages.fundamentals.howGenerativeEnginesWork.coreConceptLabel}：</strong>
                {t.pages.fundamentals.howGenerativeEnginesWork.coreConcept}
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              {t.pages.fundamentals.howGenerativeEnginesWork.coreArchitecture.title}
            </h2>

            <p className="leading-relaxed">
              {t.pages.fundamentals.howGenerativeEnginesWork.coreArchitecture.description}
            </p>

            <div className="grid gap-6 md:grid-cols-3 my-8">
              <Card>
                <CardHeader>
                  <Database className="h-8 w-8 text-blue-500" />
                  <CardTitle className="text-lg">
                    {t.pages.fundamentals.howGenerativeEnginesWork.coreArchitecture.pretraining.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    {t.pages.fundamentals.howGenerativeEnginesWork.coreArchitecture.pretraining.items.map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      ),
                    )}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Cpu className="h-8 w-8 text-green-500" />
                  <CardTitle className="text-lg">
                    {t.pages.fundamentals.howGenerativeEnginesWork.coreArchitecture.finetuning.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    {t.pages.fundamentals.howGenerativeEnginesWork.coreArchitecture.finetuning.items.map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      ),
                    )}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-purple-500" />
                  <CardTitle className="text-lg">
                    {t.pages.fundamentals.howGenerativeEnginesWork.coreArchitecture.inference.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    {t.pages.fundamentals.howGenerativeEnginesWork.coreArchitecture.inference.items.map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      ),
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-6">
              "{t.pages.fundamentals.howGenerativeEnginesWork.quote1}"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              {t.pages.fundamentals.howGenerativeEnginesWork.processFlow.title}
            </h2>

            <p className="leading-relaxed">{t.pages.fundamentals.howGenerativeEnginesWork.processFlow.description}</p>

            <div className="space-y-6 my-8">
              {t.pages.fundamentals.howGenerativeEnginesWork.processFlow.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`${step.color} rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Alert className="my-8">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>{t.pages.fundamentals.howGenerativeEnginesWork.geoInsightLabel}：</strong>
                {t.pages.fundamentals.howGenerativeEnginesWork.geoInsight}
              </AlertDescription>
            </Alert>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              {t.pages.fundamentals.howGenerativeEnginesWork.engineComparison.title}
            </h2>

            <p className="leading-relaxed mb-6">
              {t.pages.fundamentals.howGenerativeEnginesWork.engineComparison.description}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      {t.pages.fundamentals.howGenerativeEnginesWork.engineComparison.table.headers.engine}
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      {t.pages.fundamentals.howGenerativeEnginesWork.engineComparison.table.headers.strengths}
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      {t.pages.fundamentals.howGenerativeEnginesWork.engineComparison.table.headers.preferences}
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      {t.pages.fundamentals.howGenerativeEnginesWork.engineComparison.table.headers.geoFocus}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.pages.fundamentals.howGenerativeEnginesWork.engineComparison.table.rows.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">{row.engine}</td>
                      <td className="border border-gray-300 px-4 py-2">{row.strengths}</td>
                      <td className="border border-gray-300 px-4 py-2">{row.preferences}</td>
                      <td className="border border-gray-300 px-4 py-2">{row.geoFocus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <blockquote className="border-l-2 pl-6 italic text-muted-foreground my-8">
              "{t.pages.fundamentals.howGenerativeEnginesWork.quote2}"
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              {t.pages.fundamentals.howGenerativeEnginesWork.keyFactors.title}
            </h2>

            <p className="leading-relaxed">{t.pages.fundamentals.howGenerativeEnginesWork.keyFactors.description}</p>

            <div className="space-y-6 my-8">
              {t.pages.fundamentals.howGenerativeEnginesWork.keyFactors.factors.map((factor, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-2">{factor.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{factor.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              {t.pages.fundamentals.howGenerativeEnginesWork.practicalGuidance.title}
            </h2>

            <p className="leading-relaxed">
              {t.pages.fundamentals.howGenerativeEnginesWork.practicalGuidance.description}
            </p>

            <div className="grid gap-4 md:grid-cols-2 my-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {t.pages.fundamentals.howGenerativeEnginesWork.practicalGuidance.contentStrategy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    {t.pages.fundamentals.howGenerativeEnginesWork.practicalGuidance.contentStrategy.items.map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      ),
                    )}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {t.pages.fundamentals.howGenerativeEnginesWork.practicalGuidance.technicalOptimization.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    {t.pages.fundamentals.howGenerativeEnginesWork.practicalGuidance.technicalOptimization.items.map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      ),
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t.pages.fundamentals.howGenerativeEnginesWork.nextSteps.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t.pages.fundamentals.howGenerativeEnginesWork.nextSteps.description}
              </p>
              <Button asChild>
                <Link href="/fundamentals/geo-principles">
                  {t.pages.fundamentals.howGenerativeEnginesWork.nextSteps.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
