import Image from "next/image"
import Link from "next/link"

export default function ImageFormatsPage() {
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
              Image Format Comparison
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              See how modern image formats like WebP and AVIF dramatically reduce file sizes while maintaining quality
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="font-semibold text-blue-900 mb-2">📊 File Size</div>
                <div>WebP: 25-35% smaller than JPEG<br/>AVIF: 50% smaller than JPEG</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="font-semibold text-green-900 mb-2">🖼️ Quality</div>
                <div>Modern formats maintain better quality at smaller file sizes</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="font-semibold text-purple-900 mb-2">⚡ Performance</div>
                <div>Faster loading improves LCP and user experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Format Comparison Grid */}
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Format Performance Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Same image in different formats - notice the file size differences in your Network tab
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* JPEG */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-red-700 mb-2">JPEG</h3>
                <span className="inline-block px-3 py-1 bg-red-200 text-red-800 text-sm rounded-full font-medium">
                  Legacy Format
                </span>
              </div>
              
              <div className="relative mb-4">
                <img
                  src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="JPEG format example"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                  100% size
                </div>
              </div>

              <div className="space-y-3 text-sm text-red-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span>Baseline file size</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span>Lossy compression</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>Universal browser support</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-red-100 rounded-lg">
                <div className="text-xs text-red-700">
                  <strong>Use case:</strong> Fallback for older browsers
                </div>
              </div>
            </div>

            {/* PNG */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-orange-700 mb-2">PNG</h3>
                <span className="inline-block px-3 py-1 bg-orange-200 text-orange-800 text-sm rounded-full font-medium">
                  Legacy Format
                </span>
              </div>
              
              <div className="relative mb-4">
                <img
                  src="https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=400&h=300"
                  alt="PNG format example"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium">
                  140% size
                </div>
              </div>

              <div className="space-y-3 text-sm text-orange-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span>Larger than JPEG</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>Lossless compression</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Transparency support</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                <div className="text-xs text-orange-700">
                  <strong>Use case:</strong> Images with transparency
                </div>
              </div>
            </div>

            {/* WebP */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">WebP</h3>
                <span className="inline-block px-3 py-1 bg-blue-200 text-blue-800 text-sm rounded-full font-medium">
                  Modern Format
                </span>
              </div>
              
              <div className="relative mb-4">
                <Image
                  src="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg"
                  alt="WebP format example - Next.js optimized"
                  width={4623}
                  height={3082}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                  65% size
                </div>
              </div>

              <div className="space-y-3 text-sm text-blue-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>35% smaller than JPEG</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>Better quality per byte</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>96% browser support</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <div className="text-xs text-blue-700">
                  <strong>Use case:</strong> Most web images today
                </div>
              </div>
            </div>

            {/* AVIF */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">AVIF</h3>
                <span className="inline-block px-3 py-1 bg-purple-200 text-purple-800 text-sm rounded-full font-medium">
                  Next-Gen Format
                </span>
              </div>
              
              <div className="relative mb-4">
                <Image
                  src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg"
                  alt="AVIF format example - Next.js optimized"
                  width={5472}
                  height={3648}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                  50% size
                </div>
              </div>

              <div className="space-y-3 text-sm text-purple-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>50% smaller than JPEG</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>Superior compression</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>Growing browser support</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                <div className="text-xs text-purple-700">
                  <strong>Use case:</strong> Future-ready optimization
                </div>
              </div>
            </div>
          </div>

          {/* Format Comparison Table */}
          <div className="mt-12 bg-gray-50 rounded-xl p-6 overflow-x-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Format Comparison Summary
            </h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Format</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">File Size</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Quality</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Browser Support</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Transparency</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Best Use</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium text-red-700">JPEG</td>
                  <td className="text-center py-3 px-4">100% (baseline)</td>
                  <td className="text-center py-3 px-4">Good</td>
                  <td className="text-center py-3 px-4">100% ✅</td>
                  <td className="text-center py-3 px-4">❌</td>
                  <td className="text-center py-3 px-4">Photos, fallback</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium text-orange-700">PNG</td>
                  <td className="text-center py-3 px-4">140% (larger)</td>
                  <td className="text-center py-3 px-4">Excellent</td>
                  <td className="text-center py-3 px-4">100% ✅</td>
                  <td className="text-center py-3 px-4">✅</td>
                  <td className="text-center py-3 px-4">Graphics, logos</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium text-blue-700">WebP</td>
                  <td className="text-center py-3 px-4">65% (35% smaller)</td>
                  <td className="text-center py-3 px-4">Excellent</td>
                  <td className="text-center py-3 px-4">96% ✅</td>
                  <td className="text-center py-3 px-4">✅</td>
                  <td className="text-center py-3 px-4">Most web images</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-purple-700">AVIF</td>
                  <td className="text-center py-3 px-4">50% (50% smaller)</td>
                  <td className="text-center py-3 px-4">Superior</td>
                  <td className="text-center py-3 px-4">90% ⚠️</td>
                  <td className="text-center py-3 px-4">✅</td>
                  <td className="text-center py-3 px-4">High-end optimization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quality vs File Size Demonstration */}
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quality vs File Size Analysis
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how modern formats maintain better quality at smaller file sizes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* High Quality Comparison */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-green-600 text-center">High Quality Settings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-3 text-center">JPEG (Quality: 85)</h4>
                  <img
                    src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&q=85"
                    alt="High quality JPEG"
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="text-center text-sm text-red-700">
                    <div className="font-medium">~45KB</div>
                    <div>Good quality, visible compression</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-3 text-center">WebP (Quality: 80)</h4>
                  <Image
                    src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                    alt="High quality WebP via Next.js"
                    width={4160}
                    height={6240}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="text-center text-sm text-blue-700">
                    <div className="font-medium">~28KB</div>
                    <div>Better quality, 38% smaller</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Low Quality Comparison */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-orange-600 text-center">Compressed Settings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-3 text-center">JPEG (Quality: 60)</h4>
                  <img
                    src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&q=60"
                    alt="Compressed JPEG"
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="text-center text-sm text-red-700">
                    <div className="font-medium">~22KB</div>
                    <div>Visible quality loss</div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-3 text-center">AVIF (Quality: 60)</h4>
                  <Image
                    src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                    alt="Compressed AVIF via Next.js"
                    width={4160}
                    height={6240}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="text-center text-sm text-purple-700">
                    <div className="font-medium">~15KB</div>
                    <div>Better quality, 32% smaller</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              💡 Key Insight: Quality per Byte
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">1.0</div>
                <div className="font-medium">JPEG Baseline</div>
                <div>Reference quality/size ratio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">1.6x</div>
                <div className="font-medium">WebP Efficiency</div>
                <div>60% more quality per byte</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">2.2x</div>
                <div className="font-medium">AVIF Efficiency</div>
                <div>120% more quality per byte</div>
              </div>
            </div>
          </div>
        </section>

        {/* Browser Support & Fallback Strategy */}
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browser Support & Fallback Strategy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Next.js automatically serves the best supported format for each browser
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Browser Support Chart */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Current Browser Support</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-xs font-bold">J</span>
                    </div>
                    <span className="font-medium text-gray-900">JPEG</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-green-600">100%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-xs font-bold">P</span>
                    </div>
                    <span className="font-medium text-gray-900">PNG</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-green-600">100%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">W</span>
                    </div>
                    <span className="font-medium text-gray-900">WebP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-19 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-600">96%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-xs font-bold">A</span>
                    </div>
                    <span className="font-medium text-gray-900">AVIF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-18 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium text-purple-600">90%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Next.js Automatic Optimization */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-6">Next.js Smart Serving</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🤖</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Automatic Detection</div>
                    <div className="text-sm text-gray-700">Next.js detects browser capabilities via Accept headers</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📱</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Format Priority</div>
                    <div className="text-sm text-gray-700">AVIF → WebP → JPEG (best supported format)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">⚡</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Zero Config</div>
                    <div className="text-sm text-gray-700">Works automatically - no manual format selection needed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Browser-Specific Examples */}
          <div className="mt-12 bg-gray-900 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">What Your Users Actually Receive</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-center mb-3">
                  <div className="text-blue-400 font-medium">Chrome/Edge (Latest)</div>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div>✅ AVIF (smallest files)</div>
                  <div>✅ WebP fallback</div>
                  <div>✅ JPEG fallback</div>
                  <div className="text-green-400 text-xs">Best performance</div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-center mb-3">
                  <div className="text-orange-400 font-medium">Safari (Latest)</div>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div>❌ No AVIF support</div>
                  <div>✅ WebP (since iOS 14)</div>
                  <div>✅ JPEG fallback</div>
                  <div className="text-yellow-400 text-xs">Good performance</div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-center mb-3">
                  <div className="text-red-400 font-medium">IE11/Older Browsers</div>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div>❌ No AVIF support</div>
                  <div>❌ No WebP support</div>
                  <div>✅ JPEG fallback</div>
                  <div className="text-orange-400 text-xs">Basic support</div>
                </div>
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
              How modern image formats directly improve your Core Web Vitals scores
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
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-green-800 mb-1">WebP Impact</div>
                  <div className="text-xs text-green-700">35% smaller files = 20-30% faster LCP</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-purple-800 mb-1">AVIF Impact</div>
                  <div className="text-xs text-purple-700">50% smaller files = 30-50% faster LCP</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-blue-800 mb-1">Hero Images</div>
                  <div className="text-xs text-blue-700">Critical for LCP optimization</div>
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
                <div className="bg-yellow-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-yellow-800 mb-1">Layout Stability</div>
                  <div className="text-xs text-yellow-700">Format doesn&apos;t affect CLS directly</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-orange-800 mb-1">Size Matters</div>
                  <div className="text-xs text-orange-700">Always specify width/height props</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-green-800 mb-1">Next.js Helps</div>
                  <div className="text-xs text-green-700">Automatic aspect ratio preservation</div>
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
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-blue-800 mb-1">Bandwidth Savings</div>
                  <div className="text-xs text-blue-700">Faster downloads = less blocking</div>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-indigo-800 mb-1">Resource Priority</div>
                  <div className="text-xs text-indigo-700">More bandwidth for interactions</div>
                </div>
                <div className="bg-cyan-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-cyan-800 mb-1">Mobile Impact</div>
                  <div className="text-xs text-cyan-700">Especially important on slow connections</div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics Comparison */}
          <div className="mt-12 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Real Performance Impact Example
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-red-600">❌ Using JPEG Only</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span>Hero image size:</span>
                    <span className="font-medium text-red-700">85KB</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span>LCP (3G connection):</span>
                    <span className="font-medium text-red-700">3.2s</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span>Page load time:</span>
                    <span className="font-medium text-red-700">4.8s</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span>Performance score:</span>
                    <span className="font-medium text-red-700">72/100</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-green-600">✅ Using WebP/AVIF</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <span>Hero image size:</span>
                    <span className="font-medium text-green-700">42KB</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <span>LCP (3G connection):</span>
                    <span className="font-medium text-green-700">2.1s</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <span>Page load time:</span>
                    <span className="font-medium text-green-700">3.4s</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <span>Performance score:</span>
                    <span className="font-medium text-green-700">89/100</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700 mb-2">50% File Size Reduction</div>
                <div className="text-sm text-gray-700">
                  Results in 34% faster LCP and 29% faster page load times
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DevTools Testing Guide */}
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Testing Image Formats with DevTools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn how to verify and measure your image format optimizations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Network Tab Analysis */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📊</span>
                  </div>
                  Network Tab Analysis
                </h3>
                <ol className="space-y-3 text-sm text-blue-800 list-decimal list-inside">
                  <li>Open DevTools (F12) → Network tab</li>
                  <li>Filter by &quot;Img&quot; to see only images</li>
                  <li>Clear cache and reload page</li>
                  <li>Check &quot;Type&quot; column for actual format served</li>
                  <li>Compare &quot;Size&quot; column between different formats</li>
                  <li>Look for &quot;image/webp&quot; or &quot;image/avif&quot; in Type</li>
                </ol>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-xs text-blue-700">
                    <strong>Pro tip:</strong> Use &quot;Disable cache&quot; and throttle to &quot;Slow 3G&quot; to see real impact
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🔍</span>
                  </div>
                  Format Detection
                </h3>
                <div className="space-y-3 text-sm text-green-800">
                  <div className="bg-white rounded-lg p-3">
                    <div className="font-medium mb-1">Next.js Optimized Images</div>
                    <code className="text-xs bg-green-100 px-2 py-1 rounded">
                      /_next/image?url=...&w=640&q=75
                    </code>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="font-medium mb-1">Response Headers</div>
                    <code className="text-xs bg-green-100 px-2 py-1 rounded">
                      content-type: image/webp
                    </code>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="font-medium mb-1">Regular Images</div>
                    <code className="text-xs bg-green-100 px-2 py-1 rounded">
                      https://example.com/image.jpg
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Testing */}
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">⚡</span>
                  </div>
                  Lighthouse Performance
                </h3>
                <ol className="space-y-3 text-sm text-purple-800 list-decimal list-inside">
                  <li>Open DevTools → Lighthouse tab</li>
                  <li>Select &quot;Performance&quot; category</li>
                  <li>Choose &quot;Mobile&quot; device simulation</li>
                  <li>Click &quot;Analyze page load&quot;</li>
                  <li>Check &quot;Serve images in next-gen formats&quot; audit</li>
                  <li>Review potential savings in KB and seconds</li>
                </ol>
                <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                  <p className="text-xs text-purple-700">
                    <strong>Target:</strong> 0KB potential savings = fully optimized
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📱</span>
                  </div>
                  Cross-Browser Testing
                </h3>
                <div className="space-y-3 text-sm text-orange-800">
                  <div className="bg-white rounded-lg p-3">
                    <div className="font-medium mb-1">Chrome/Edge</div>
                    <div className="text-xs">Should serve AVIF → WebP → JPEG</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="font-medium mb-1">Safari</div>
                    <div className="text-xs">Should serve WebP → JPEG</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="font-medium mb-1">Firefox</div>
                    <div className="text-xs">Should serve AVIF → WebP → JPEG</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                  <p className="text-xs text-orange-700">
                    <strong>Tip:</strong> Use DevTools Device Mode to simulate different browsers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Testing */}
          <div className="mt-12 bg-gray-900 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">
              🔬 Advanced Testing Commands
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-green-400 font-medium mb-3">cURL Format Testing</h4>
                <div className="bg-gray-800 rounded p-3 text-xs text-gray-300 overflow-x-auto">
                  <div className="mb-2"># Test WebP support</div>
                  <code>curl -H &quot;Accept: image/webp&quot; &quot;your-url&quot;</code>
                  <div className="mt-2 mb-2"># Test AVIF support</div>
                  <code>curl -H &quot;Accept: image/avif&quot; &quot;your-url&quot;</code>
                </div>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-3">Browser Console</h4>
                <div className="bg-gray-800 rounded p-3 text-xs text-gray-300 overflow-x-auto">
                  <div className="mb-2">{'// Check format support'}</div>
                  <code>document.createElement(&apos;canvas&apos;).toDataURL(&apos;image/webp&apos;).startsWith(&apos;data:image/webp&apos;)</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices Summary */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-sm p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Image Format Best Practices
            </h2>
            <p className="text-lg text-gray-600">
              Key recommendations for optimal image format strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Do's */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-6 flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✅</span>
                </div>
                Best Practices
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Use Next.js Image component for automatic format optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Let Next.js handle format selection automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Test across different browsers and devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Monitor Core Web Vitals improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Use appropriate quality settings (75-85 for most images)</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-red-700 mb-6 flex items-center gap-2">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm">❌</span>
                </div>
                Common Mistakes
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Don&apos;t serve only JPEG/PNG in modern browsers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Don&apos;t ignore browser compatibility for AVIF</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Don&apos;t manually specify formats - let Next.js decide</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Don&apos;t forget to test actual delivered formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Don&apos;t use overly aggressive compression (quality &lt; 60)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Final Implementation Example */}
          <div className="mt-8 bg-gray-900 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-400 mb-4">🚀 Perfect Implementation</h3>
            <pre className="text-gray-100 text-sm overflow-x-auto">
{`// Next.js handles all format optimization automatically
<Image
  src="/hero-image.jpg" // Can be any format
  alt="Hero content"
  width={1920}
  height={1080}
  className="w-full h-auto"
  priority // For above-the-fold images
  sizes="(max-width: 768px) 100vw, 80vw"
  quality={80} // Optional: adjust quality (default: 75)
/>

// Result: Browser automatically gets the best format:
// - Modern browsers: AVIF or WebP (50-65% smaller)
// - Older browsers: JPEG fallback
// - Perfect quality maintained
// - Zero configuration required`}
            </pre>
          </div>

          <div className="mt-6 p-6 bg-blue-50 rounded-xl">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-blue-900 mb-2">
                🎯 The Bottom Line
              </h4>
              <p className="text-blue-800 text-lg">
                Next.js Image component automatically serves WebP/AVIF to modern browsers and JPEG to older ones.
                <br />
                <strong className="text-blue-900">Just use it and get 30-50% smaller images with zero config!</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}