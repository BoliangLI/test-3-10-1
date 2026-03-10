
import { useState, useEffect } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
      </div>

      {/* 主卡片 */}
      <div
        className={`relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full border border-white/20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* 顶部装饰条 */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-t-3xl"></div>

        {/* 图标 */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* 标题 */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 animate-fade-in">
          Hello World
        </h1>

        {/* 副标题 */}
        <p className="text-center text-purple-200 text-lg mb-8 animate-slide-up">
          欢迎使用 Vesa 创建的 React 应用
        </p>

        {/* 分隔线 */}
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8 rounded-full"></div>

        {/* 计数器 */}
        <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
          <div className="text-center">
            <p className="text-purple-200 text-sm mb-2">点击次数</p>
            <p className="text-5xl font-bold text-white mb-4">{count}</p>
            <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              点击我
            </button>
          </div>
        </div>

        {/* 技术栈标签 */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {['React', 'Vite', 'Tailwind CSS'].map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/10 text-purple-200 text-sm rounded-full border border-white/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 底部信息 */}
        <div className="text-center text-purple-300 text-sm">
          <p>由 Vesa 构建 ✨</p>
        </div>
      </div>
    </div>
  )
}

export default App
  