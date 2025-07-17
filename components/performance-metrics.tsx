"use client"

export function PerformanceMetrics() {
  return (
    // Updated to focus on benefits rather than simulated metrics
    <div className="mb-16 bg-gray-50 border border-gray-200 p-8 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Performance Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Faster Loading</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Optimized images load significantly faster, improving Largest Contentful Paint (LCP) and overall page speed
          </p>
        </div>
        <div className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Reduced Bandwidth</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Modern formats like WebP and AVIF can reduce file sizes by 25-50% while maintaining visual quality
          </p>
        </div>
        <div className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Better UX</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Prevents layout shift and provides smooth loading experiences with blur placeholders and lazy loading
          </p>
        </div>
      </div>
      <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-3 text-center">Key Benefits of Next.js Image Optimization</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Automatic format selection based on browser support</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Responsive image sizing for different devices</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Built-in lazy loading for below-the-fold images</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>Prevents cumulative layout shift (CLS)</span>
          </div>
        </div>
      </div>

      {/* Added dev tools measurement guide */}
      <div className="mt-8 p-6 bg-indigo-50 border border-indigo-200 rounded-lg">
        <h4 className="font-semibold text-indigo-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9z"
            />
          </svg>
          Measuring Performance with Dev Tools
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-indigo-800">
          <div>
            <h5 className="font-semibold mb-2">Network Tab - File Sizes</h5>
            <ol className="space-y-1 list-decimal list-inside">
              <li>Open Chrome DevTools (F12)</li>
              <li>Go to Network tab</li>
              <li>Filter by "Img" to see only images</li>
              <li>Reload page and compare file sizes</li>
              <li>Look for WebP/AVIF formats being served</li>
            </ol>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Lighthouse - Core Web Vitals</h5>
            <ol className="space-y-1 list-decimal list-inside">
              <li>Open DevTools → Lighthouse tab</li>
              <li>Run Performance audit</li>
              <li>Check LCP, CLS, and FID scores</li>
              <li>Review "Opportunities" for image optimization</li>
              <li>Compare before/after optimization</li>
            </ol>
          </div>
        </div>
        <div className="mt-4 p-3 bg-indigo-100 rounded-lg">
          <p className="text-xs text-indigo-700">
            <strong>Pro tip:</strong> Use the Network tab's "Disable cache" option to see true load times, and throttle
            your connection to simulate slower networks.
          </p>
        </div>
      </div>
    </div>
  )
}
