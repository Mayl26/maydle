import React from 'react'

const Keyboard = ({ Row }: { Row: string[] }) => {
  return (
    <div className="flex justify-center space-x-1">
      {/* 1 row of boxes */}
      {Row.map((key, index) => {
        if (key === 'backspace') {
          return (
            <div key={index} className="flex bg-gray-300 rounded-lg text-xl font-bold text-slate-500 h-14 min-w-12 p-4 items-center justify-center">
              ⌫
            </div>
          )
        }
        return (
          <div key={index} className="flex bg-gray-300 rounded-lg text-xl font-bold text-slate-500 h-14 min-w-12 p-4 items-center justify-center">
            {key}
          </div>
        )
      })}         
    </div>
  )
}

export default Keyboard