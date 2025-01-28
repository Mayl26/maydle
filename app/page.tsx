import Row from "@/components/row";

export default function Home() {
  const letters = ['C', 'L', 'O', 'U', 'D'];
  const numberofrows = 6;

  return (
    <div className="flex justify-center h-screen items-center">
      {/* The container holding all the boxes */}
      <div className="flex-col space-y-1 ">
        {/* Making 6 columns of 5 rows */}
        {[...Array(numberofrows)].map((_, index) => (
          <Row 
            key={index} 
            letters={letters}
          /> 
        ))}
      </div>

    </div>
  );
}
