import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Button } from '@repo/shared/button'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8">
          <a href="https://vite.dev" target="_blank" rel="noreferrer" className="hover:opacity-80">
            <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer" className="hover:opacity-80">
            <img src={reactLogo} className="h-16 w-16 motion-safe:animate-spin" alt="React logo" />
          </a>
        </div>
        <h1 className="text-4xl font-bold text-center mt-8 text-gray-900">Vite + React</h1>
        <div className="mt-8 text-center">
          {/*<Button>Click me</Button>*/}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => setCount(count => count + 1)}
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-600">
            Edit <code className="font-mono bg-gray-200 px-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
