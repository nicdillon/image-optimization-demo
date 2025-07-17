import type React from "react"
interface OptimizationSectionProps {
  title: string
  description: string
  children: React.ReactNode
}

export function OptimizationSection({ title, description, children }: OptimizationSectionProps) {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        {/* Updated typography to match Vercel's style */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>
      {children}
    </section>
  )
}
