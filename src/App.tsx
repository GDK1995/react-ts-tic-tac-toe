import { useEffect, useState } from 'react';
import BoardComponent from './components/BoardComponent';
import { Board } from './modals/Board';

function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCell();
    setBoard(newBoard);
  }

  return (
    <div className="app">
      <BoardComponent board={board}/>
    </div>
  );
}

export default App;
