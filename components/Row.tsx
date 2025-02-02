import React from 'react'

// Letters is an array of strings
const Row = ({ letters }: { letters: string[] }) => {
  return (
    <div className="flex space-x-1">
      {/* 1 row of boxes */}
      {letters.map((letter, index) => (
        <div key={index} className="flex border-gray-300 border-2 rounded-md text-4xl font-bold text-indigo-400 bg-white h-14 w-14 p-4 items-center justify-center">
          {letter}
        </div>
      ))}
    </div>
  )
}

export default Row