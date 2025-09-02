export default function TestPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">最小化测试环境</h1>

        <div className="space-y-4">
          <p className="text-gray-600">这是一个完全独立的测试环境，不依赖任何复杂的组件或样式系统。</p>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">测试基础样式</h2>
            <p className="text-sm text-gray-700">
              如果这个页面正常显示且没有样式错误，说明问题可能出现在复杂的组件中。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-medium text-blue-900">测试网格布局</h3>
              <p className="text-blue-700 text-sm">网格系统正常工作</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-medium text-green-900">测试响应式</h3>
              <p className="text-green-700 text-sm">响应式布局正常</p>
            </div>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">测试按钮</button>
        </div>
      </div>
    </div>
  )
}
