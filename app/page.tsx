import Keyboard from "@/components/Keyboard";
import Row from "@/components/Row";

export default function Home() {
  const letters = ['C', 'L', 'O', 'U', 'D'];
  const numberofrows = 6;
  const topkeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keyboard = 1;
  const middlekeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const bottomkeys = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'backspace'];

  return (
    <div className="flex flex-col justify-center h-screen items-center">
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

      {/* The container holding the keyboard */}
      <div className="flex-row mt-4 space-y-0.5 ">
        {/* Making the top row */}
        {[...Array(keyboard)].map((_, index) => (
          <Keyboard 
            key={index} 
            Row={topkeys}
          /> 
        ))}

        {/* Making the middle row */}
        {[...Array(keyboard)].map((_, index) => (
          <Keyboard 
            key={index} 
            Row={middlekeys}
          /> 
        ))}

        {/* Making the bottom row */}
        {[...Array(keyboard)].map((_, index) => (
          <Keyboard 
            key={index} 
            Row={bottomkeys}
          /> 
        ))}
      </div>

    </div>
  );
}
