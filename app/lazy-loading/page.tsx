import Image from "next/image"
import Link from "next/link"

export default function LazyLoadingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Main Demo
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Image Loading Priority Demo
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Understand how Next.js Image loading patterns impact Core Web Vitals and user experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="font-semibold text-blue-900 mb-2">🚀 LCP Impact</div>
                <div>Priority loading can improve Largest Contentful Paint by 20-40%</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="font-semibold text-green-900 mb-2">⚡ Performance</div>
                <div>Above-the-fold images load immediately with priority flag</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="font-semibold text-purple-900 mb-2">📊 Bandwidth</div>
                <div>Below-the-fold images lazy load to save bandwidth</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Priority vs Non-Priority Comparison */}
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Priority Loading Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the difference between priority and standard loading for above-the-fold content
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Without Priority */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-red-600 mb-2">Without Priority</h3>
                <p className="text-gray-600">Standard loading behavior</p>
              </div>
              
              <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-red-200 text-red-800 text-sm rounded-full font-medium">
                    Loading: Normal Queue
                  </span>
                </div>
                <Image
                  src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
                  alt="Normal loading priority"
                  width={5760}
                  height={3840}
                  className="w-full h-64 object-cover rounded-lg"
                  // No priority flag - standard loading
                />
                <div className="mt-4 text-sm text-gray-700 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span>Loads after other resources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span>May delay LCP timing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span>Standard network priority</span>
                  </div>
                </div>
              </div>
            </div>

            {/* With Priority */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-green-600 mb-2">With Priority</h3>
                <p className="text-gray-600">Optimized for above-the-fold</p>
              </div>
              
              <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-green-200 text-green-800 text-sm rounded-full font-medium">
                    Loading: High Priority
                  </span>
                </div>
                <Image
                  src="https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg"
                  alt="High priority loading"
                  width={6000}
                  height={4000}
                  className="w-full h-64 object-cover rounded-lg"
                  priority // High priority loading
                />
                <div className="mt-4 text-sm text-gray-700 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span>Preloaded immediately</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span>Improves LCP performance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span>High network priority</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Comparison */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <h4 className="text-red-400 font-semibold mb-3">❌ Without Priority</h4>
              <pre className="text-gray-100 text-sm overflow-x-auto">
{`<Image
  src="/hero-image.jpg"
  alt="Hero content"
  width={800}
  height={600}
  className="w-full h-auto"
  // No priority flag
/>`}
              </pre>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h4 className="text-green-400 font-semibold mb-3">✅ With Priority</h4>
              <pre className="text-gray-100 text-sm overflow-x-auto">
{`<Image
  src="/hero-image.jpg"
  alt="Hero content"
  width={800}
  height={600}
  className="w-full h-auto"
  priority // Preload immediately
/>`}
              </pre>
            </div>
          </div>
        </section>

        {/* Above vs Below the Fold */}
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Above vs Below the Fold Strategy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn when to use priority loading and when to rely on lazy loading
            </p>
          </div>

          {/* Above the Fold Examples */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              ⚡ Above the Fold - Use Priority Loading
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-4">Hero Images</h4>
                <Image
                  src="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg"
                  alt="Hero image example"
                  width={4623}
                  height={3082}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                  priority
                />
                <p className="text-sm text-blue-800">
                  Main banner images that users see immediately should always use priority loading
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-4">Logo & Branding</h4>
                <div className="w-full h-32 bg-green-200 rounded-lg mb-3 flex items-center justify-center">
                  <div className="text-2xl font-bold text-green-800">LOGO</div>
                </div>
                <p className="text-sm text-green-800">
                  Company logos and key branding elements in the header
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <h4 className="font-semibold text-purple-900 mb-4">Product Showcase</h4>
                <Image
                  src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
                  alt="Product showcase"
                  width={5472}
                  height={3648}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                  priority
                />
                <p className="text-sm text-purple-800">
                  Primary product images that affect purchasing decisions
                </p>
              </div>
            </div>
          </div>

          {/* Below the Fold Examples */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              🔄 Below the Fold - Use Lazy Loading
            </h3>
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg">
                👇 Scroll down to see lazy loading in action
              </div>
            </div>
            
            {/* Spacer to demonstrate below the fold */}
            <div className="h-96 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-12">
              <p className="text-2xl text-gray-600 font-semibold">Scroll down to load images ↓</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                <h4 className="font-semibold text-orange-900 mb-4">Gallery Images</h4>
                <Image
                  src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg"
                  alt="Gallery image lazy loaded"
                  width={4000}
                  height={6000}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                  loading="lazy"
                />
                <p className="text-sm text-orange-800">
                  ✅ Lazy loaded when scrolled into view • Saves initial bandwidth
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6">
                <h4 className="font-semibold text-teal-900 mb-4">Content Images</h4>
                <Image
                  src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                  alt="Content image lazy loaded"
                  width={4160}
                  height={6240}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                  loading="lazy"
                />
                <p className="text-sm text-teal-800">
                  ✅ Only loads when user scrolls down • Improves initial page speed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Web Vitals Impact */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-sm p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Web Vitals Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How image loading strategies directly affect your Core Web Vitals scores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* LCP */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl font-bold">LCP</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Largest Contentful Paint</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Priority loading reduces LCP by 20-40%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Hero images load immediately</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Improves perceived performance</span>
                </div>
              </div>
              <div className="mt-6 p-3 bg-green-50 rounded-lg">
                <div className="text-xs text-green-700">
                  <strong>Target:</strong> &lt; 2.5s for good LCP score
                </div>
              </div>
            </div>

            {/* CLS */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl font-bold">CLS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Cumulative Layout Shift</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Width/height prevent layout shifts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Placeholder prevents content jumping</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Proper sizing maintains stability</span>
                </div>
              </div>
              <div className="mt-6 p-3 bg-yellow-50 rounded-lg">
                <div className="text-xs text-yellow-700">
                  <strong>Target:</strong> &lt; 0.1 for good CLS score
                </div>
              </div>
            </div>

            {/* FID/INP */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl font-bold">INP</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Interaction to Next Paint</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Lazy loading reduces main thread blocking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Faster initial page interactions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Less JavaScript execution</span>
                </div>
              </div>
              <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                <div className="text-xs text-blue-700">
                  <strong>Target:</strong> &lt; 200ms for good INP score
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DevTools Testing Guide */}
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Testing with DevTools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn how to measure and verify your image loading optimizations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Network Tab */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
                Network Tab Analysis
              </h3>
              <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
                <li>Open DevTools → Network tab</li>
                <li>Filter by &quot;Img&quot; to see only images</li>
                <li>Reload page and observe loading order</li>
                <li>Priority images show &quot;High&quot; in Priority column</li>
                <li>Lazy images load only when scrolled into view</li>
              </ol>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-700">
                  <strong>Pro tip:</strong> Use &quot;Disable cache&quot; and throttle to 3G to see real differences
                </p>
              </div>
            </div>

            {/* Lighthouse Testing */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">⚡</span>
                </div>
                Lighthouse Performance
              </h3>
              <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
                <li>Open DevTools → Lighthouse tab</li>
                <li>Select &quot;Performance&quot; category</li>
                <li>Click &quot;Analyze page load&quot;</li>
                <li>Check LCP, CLS, and overall performance score</li>
                <li>Review &quot;Opportunities&quot; section for improvements</li>
              </ol>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-xs text-green-700">
                  <strong>Key metric:</strong> LCP should be &lt; 2.5s for good performance
                </p>
              </div>
            </div>
          </div>

          {/* Performance Timeline */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📈</span>
              </div>
              Performance Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold text-purple-900 mb-3">With Priority Loading</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-1 bg-green-400"></div>
                    <span>0-500ms: Priority images start loading</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-1 bg-blue-400"></div>
                    <span>500-1000ms: Hero content visible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-1 bg-purple-400"></div>
                    <span>1000ms+: Below-fold loads on scroll</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-red-900 mb-3">Without Priority Loading</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-1 bg-orange-400"></div>
                    <span>0-800ms: All images in loading queue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-1 bg-red-400"></div>
                    <span>800-2000ms: Hero content loads late</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-1 bg-gray-400"></div>
                    <span>2000ms+: Poor LCP timing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices Summary */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-sm p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Best Practices Summary
            </h2>
            <p className="text-lg text-gray-600">
              Key takeaways for optimal image loading performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Do's */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-6 flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✅</span>
                </div>
                Do These Things
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Use <code className="bg-green-100 px-1 rounded">priority</code> for above-the-fold images</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Always specify width and height to prevent CLS</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Let below-the-fold images lazy load naturally</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Use appropriate <code className="bg-green-100 px-1 rounded">sizes</code> prop for responsive images</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Test with Lighthouse and real network conditions</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-red-700 mb-6 flex items-center gap-2">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm">❌</span>
                </div>
                Avoid These Mistakes
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Don&apos;t use priority on too many images (limit 1-2)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Don&apos;t skip width/height props (causes layout shift)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Don&apos;t use priority for below-the-fold content</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Don&apos;t ignore Core Web Vitals impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Don&apos;t forget to test on slow connections</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Final Code Example */}
          <div className="mt-8 bg-gray-900 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-400 mb-4">🚀 Optimal Implementation</h3>
            <pre className="text-gray-100 text-sm overflow-x-auto">
{`// Hero image - above the fold
<Image
  src="/hero-banner.jpg"
  alt="Main hero content"
  width={1920}
  height={1080}
  className="w-full h-auto"
  priority // ✅ High priority for LCP
  sizes="100vw" // Full width on all screens
/>

// Gallery image - below the fold  
<Image
  src="/gallery-item.jpg"
  alt="Gallery image"
  width={800}
  height={600}
  className="w-full h-auto"
  // ✅ No priority = lazy loading
  sizes="(max-width: 768px) 100vw, 50vw"
/>`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}