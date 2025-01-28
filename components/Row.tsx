import React from 'react'

// Letters is an array of strings
const Row = ({ letters }: { letters: string[] }) => {
  return (
    <div className="flex space-x-1">
      {/* 1 row of boxes */}
      {letters.map((letter, index) => (
        <div key={index} className="flex shadow-inner shadow-slate-500/50 rounded-md text-4xl font-bold text-blue-200 bg-white h-16 w-16 p-4 items-center justify-center">
          {letter}
        </div>
      ))}
    </div>
  )
}

export default Row