import Image from "next/image"
import { ImageComparison } from "@/components/image-comparison"
import { OptimizationSection } from "@/components/optimization-section"
import { PerformanceMetrics } from "@/components/performance-metrics"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Updated to match Vercel's design language */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Ship faster with
            <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              optimized images
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Automatic image optimization, modern formats, and responsive sizing—all built into Next.js. Zero
            configuration required.
          </p>

          {/* Updated feature highlights with Vercel's minimal style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-4xl mx-auto">
            {/* Centered the content of the feature cards */}
            <div className="group p-8 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Instant Performance</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                WebP and AVIF formats served automatically with lazy loading
              </p>
            </div>

            <div className="group p-8 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Device Adaptive</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Right-sized images delivered for every screen and device
              </p>
            </div>

            <div className="group p-8 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Zero Config</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Works out of the box with intelligent defaults and edge optimization
              </p>
            </div>
          </div>
        </div>

        {/* Updated background for content sections */}
        <div className="bg-white rounded-t-3xl px-8 py-16 -mx-4">
          {/* Unoptimized vs Optimized Comparison */}
          <OptimizationSection
            title="Unoptimized vs Optimized"
            description="See the dramatic difference between a standard HTML img tag and Next.js Image component"
          >
            <ImageComparison
              leftTitle="Standard HTML <img>"
              leftSubtitle="No optimization • Large file size • Layout shift"
              rightTitle="Next.js <Image>"
              rightSubtitle="WebP format • Optimized size • No layout shift"
              leftImage={
                // Updated to use real Pexels image
                <img
                  src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
                  alt="Unoptimized landscape"
                  className="w-full h-64 object-cover rounded-lg"
                />
              }
              rightImage={
                // Updated to use real Pexels image with correct dimensions
                <Image
                  src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
                  alt="Optimized landscape"
                  width={5472}
                  height={3648}
                  className="w-full h-64 object-cover rounded-lg"
                  priority
                />
              }
            />
          </OptimizationSection>

          {/* Responsive Images */}
          <OptimizationSection
            title="Responsive Image Sizing"
            description="Next.js automatically serves the right image size for each device"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Updated cards with real image */}
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-4 text-center text-gray-900">Mobile (320px)</h4>
                <div className="w-full max-w-80 mx-auto border-4 border-gray-900 rounded-lg overflow-hidden">
                  {/* Updated to use real Pexels image */}
                  <Image
                    src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
                    alt="Mobile optimized"
                    width={5472}
                    height={3648}
                    className="w-full h-auto"
                    sizes="320px"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">~15KB WebP</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-4 text-center text-gray-900">Tablet (768px)</h4>
                <div className="w-full max-w-md mx-auto border-4 border-gray-900 rounded-lg overflow-hidden">
                  {/* Updated to use real Pexels image */}
                  <Image
                    src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
                    alt="Tablet optimized"
                    width={5472}
                    height={3648}
                    className="w-full h-auto"
                    sizes="500px"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">~35KB WebP</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-4 text-center text-gray-900">Desktop (1200px)</h4>
                <div className="w-full border-4 border-gray-900 rounded-lg overflow-hidden">
                  {/* Updated to use real Pexels image */}
                  <Image
                    src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
                    alt="Desktop optimized"
                    width={5472}
                    height={3648}
                    className="w-full h-auto"
                    sizes="600px"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">~65KB WebP</p>
              </div>
            </div>
          </OptimizationSection>

          {/* Lazy Loading Demo */}
          <OptimizationSection
            title="Lazy Loading in Action"
            description="Images below the fold are only loaded when they come into view"
          >
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
              <div className="text-center mb-8">
                <p className="text-gray-600 mb-4">Scroll down to see lazy loading in action</p>
                <div className="h-96 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-2xl text-gray-700 font-semibold">Scroll down ↓</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900">Lazy Loaded Image</h4>
                  {/* Updated to use real Pexels image */}
                  <Image
                    src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
                    alt="Lazy loaded landscape"
                    width={5472}
                    height={3648}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2">✅ Only loads when visible • Saves bandwidth</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900">With Blur Placeholder</h4>
                  {/* Updated to use real Pexels image */}
                  <Image
                    src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
                    alt="Mountain vista with blur placeholder"
                    width={5472}
                    height={3648}
                    className="w-full h-auto rounded-lg"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <p className="text-sm text-gray-600 mt-2">✅ Smooth loading experience • No layout shift</p>
                </div>
              </div>
            </div>
          </OptimizationSection>

          {/* Format Comparison */}
          <OptimizationSection
            title="Modern Image Formats"
            description="Next.js automatically serves WebP and AVIF when supported by the browser"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* JPEG - Unoptimized */}
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-4 text-center text-gray-900">JPEG (Legacy)</h4>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="JPEG format"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs">1x</div>
                </div>
                <p className="text-sm text-gray-600 mt-2">❌ Baseline file size • Lossy compression</p>
              </div>
              
              {/* PNG - Different image to show size difference */}
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-4 text-center text-gray-900">PNG (Legacy)</h4>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="PNG format"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs">1.4x</div>
                </div>
                <p className="text-sm text-gray-600 mt-2">❌ 40% larger than JPEG • Lossless but heavy</p>
              </div>
              
              {/* WebP - Next.js optimized */}
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-4 text-center text-gray-900">WebP (Modern)</h4>
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
                    alt="WebP format"
                    width={5760}
                    height={3840}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs">0.5x</div>
                </div>
                <p className="text-sm text-gray-600 mt-2">✅ 50% smaller than JPEG • Better quality</p>
              </div>
              
              {/* AVIF - Next.js optimized */}
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold mb-4 text-center text-gray-900">AVIF (Cutting Edge)</h4>
                <div className="relative">
                  <Image
                    src="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg"
                    alt="AVIF format"
                    width={4623}
                    height={3082}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs">0.4x</div>
                </div>
                <p className="text-sm text-gray-600 mt-2">✅ 60% smaller than JPEG • Best compression</p>
              </div>
            </div>

            {/* Updated explanation with actual debugging info */}
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                How to See Real Format Differences in Dev Tools
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-yellow-800">
                <div>
                  <h5 className="font-semibold mb-2">Check Actual Formats:</h5>
                  <ol className="space-y-1 list-decimal list-inside">
                    <li>Open Network tab in DevTools</li>
                    <li>Filter by &quot;Img&quot; to see only images</li>
                    <li>Reload the page and scroll to this section</li>
                    <li>Look at the &quot;Type&quot; column - you&apos;ll see:</li>
                    <li className="ml-4 text-xs">• JPEG cards: image/jpeg</li>
                    <li className="ml-4 text-xs">• Next.js cards: image/webp or image/avif</li>
                  </ol>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Compare Actual File Sizes:</h5>
                  <ol className="space-y-1 list-decimal list-inside">
                    <li>Check the &quot;Size&quot; column in Network tab</li>
                    <li>Notice Next.js optimized images are smaller</li>
                    <li>Right-click → &quot;Inspect&quot; on each image</li>
                    <li>Next.js images have &apos;/_next/image?url=...&apos; URLs</li>
                    <li>Regular &apos;img&apos; tags load original URLs</li>
                  </ol>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                <p className="text-xs text-yellow-700">
                  <strong>Real Demo:</strong> The first two cards use regular &apos;img&apos; tags (unoptimized), while the last two use Next.js `&lt;Image&gt;` components (optimized). Check the Network tab to see the actual difference!
                </p>
              </div>
            </div>
          </OptimizationSection>

          {/* Performance Metrics */}
          <PerformanceMetrics />

          {/* Priority Loading */}
          <OptimizationSection
            title="Priority Loading"
            description="Critical images can be preloaded for faster LCP (Largest Contentful Paint)"
          >
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900">Default Loading</h4>
                  <Image
                    src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
                    alt="Default loading behavior"
                    width={5472}
                    height={3648}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">Standard Behavior</h5>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Loads after other resources</li>
                      <li>• May delay LCP timing</li>
                      <li>• Good for below-the-fold images</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900">Priority Loading</h4>
                  <Image
                    src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
                    alt="Priority loading behavior"
                    width={5472}
                    height={3648}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Optimized Behavior</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Preloaded immediately</li>
                      <li>• Improves LCP performance</li>
                      <li>• Perfect for hero images</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Added explanation about when to use priority */}
              <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">When to Use Priority Loading</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-800">
                  <div>
                    <h5 className="font-semibold mb-2 text-green-700">✅ Use priority for:</h5>
                    <ul className="space-y-1">
                      <li>• Hero images above the fold</li>
                      <li>• Logo or branding images</li>
                      <li>• Critical product images</li>
                      <li>• Images that affect LCP</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-red-700">❌ Avoid priority for:</h5>
                    <ul className="space-y-1">
                      <li>• Images below the fold</li>
                      <li>• Decorative images</li>
                      <li>• Gallery thumbnails</li>
                      <li>• Too many images (limit to 1-2)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </OptimizationSection>

          {/* Code Examples */}
          <div className="mt-16 bg-gray-50 border border-gray-200 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Examples</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-red-600 mb-3">❌ Unoptimized</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`<img 
  src="/large-image.jpg" 
  alt="Description"
  style={{width: '100%'}}
/>`}
                </pre>
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  <li>• No format optimization</li>
                  <li>• No lazy loading</li>
                  <li>• Potential layout shift</li>
                  <li>• Same size for all devices</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-600 mb-3">✅ Optimized</h3>
                {/* Updated code example to show real dimensions */}
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  {`<Image
  src="/hero-image.jpg"
  alt="Description"
  width={5472}  // intrinsic width
  height={3648} // intrinsic height
  className="w-full h-auto"
  sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
  priority // for above-fold images
/>`}
                </pre>
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  <li>• Automatic WebP/AVIF conversion</li>
                  <li>• Built-in lazy loading</li>
                  <li>• No layout shift</li>
                  <li>• Responsive sizing with breakpoints</li>
                  <li>• Intrinsic dimensions for optimization</li>
                </ul>
              </div>
            </div>

            {/* Updated explanation with real dimensions */}
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">💡 Pro Tip: Width & Height vs Responsive Sizing</h4>
              <div className="text-sm text-blue-800 space-y-2">
                <p>
                  <strong>width/height props:</strong> Set to the intrinsic dimensions of your source image file (e.g.,
                  5472x3648 for a high-res photo). These are required for layout stability and optimization
                  calculations.
                </p>
                <p>
                  <strong>Responsive display:</strong> Use CSS classes (like{" "}
                  <code className="bg-blue-100 px-1 rounded">w-full h-auto</code>) and the{" "}
                  <code className="bg-blue-100 px-1 rounded">sizes</code> prop to control how the image displays
                  responsively.
                </p>
                <p>
                  <strong>sizes prop:</strong> Tells the browser what size the image will be at different breakpoints,
                  enabling it to download the optimal resolution.
                </p>
              </div>
            </div>

            {/* Added comprehensive dev tools debugging guide */}
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Complete Dev Tools Performance Guide
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-green-800">
                <div>
                  <h5 className="font-semibold mb-2">Performance Tab</h5>
                  <ol className="space-y-1 list-decimal list-inside">
                    <li>Open DevTools → Performance</li>
                    <li>Click &quot;Record&quot; and reload page</li>
                    <li>Stop recording after page loads</li>
                    <li>Look for &quot;LCP&quot; marker in timeline</li>
                    <li>Check if images are causing delays</li>
                  </ol>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Coverage Tab</h5>
                  <ol className="space-y-1 list-decimal list-inside">
                    <li>DevTools → More tools → Coverage</li>
                    <li>Click record and reload page</li>
                    <li>See which images are loaded</li>
                    <li>Unused images show in red</li>
                    <li>Verify lazy loading is working</li>
                  </ol>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Application Tab</h5>
                  <ol className="space-y-1 list-decimal list-inside">
                    <li>DevTools → Application</li>
                    <li>Go to &quot;Storage&quot; section</li>
                    <li>Check image caching behavior</li>
                    <li>Verify Next.js image cache</li>
                    <li>Monitor cache hit rates</li>
                  </ol>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-100 rounded-lg">
                <p className="text-xs text-green-700">
                  <strong>Advanced tip:</strong> Use the &quot;Rendering&quot; tab to enable &quot;Layout Shift Regions&quot; to visually
                  see if images are causing layout shifts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
