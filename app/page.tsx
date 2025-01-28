export default function Home() {
  const letters = ['C', 'L', 'O', 'U', 'D'];

  return (
    <div className="flex justify-center h-screen items-center">
      {/* The container holding all the boxes */}
      <div className="flex space-x-1">

        {/* 1 row of boxes */}
        {letters.map((letter, index) => (
          <div key={index} className="flex text-2xl font-bold text-white bg-slate-500 h-10 w-10 p-4 items-center justify-center">
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}
