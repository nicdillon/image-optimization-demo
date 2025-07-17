import type React from "react"
interface ImageComparisonProps {
  leftTitle: string
  leftSubtitle: string
  rightTitle: string
  rightSubtitle: string
  leftImage: React.ReactNode
  rightImage: React.ReactNode
}

export function ImageComparison({
  leftTitle,
  leftSubtitle,
  rightTitle,
  rightSubtitle,
  leftImage,
  rightImage,
}: ImageComparisonProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Updated with Vercel styling */}
      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-red-600">{leftTitle}</h3>
          <p className="text-sm text-gray-600">{leftSubtitle}</p>
        </div>
        {leftImage}
      </div>
      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-green-600">{rightTitle}</h3>
          <p className="text-sm text-gray-600">{rightSubtitle}</p>
        </div>
        {rightImage}
      </div>
    </div>
  )
}
