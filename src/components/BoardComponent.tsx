import { useState } from "react";
import { Board } from "../modals/Board";
import { Cell } from "../modals/Cell";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board
}

const BoardComponent = ({board}: BoardProps) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function click(cell: Cell) {
    if (cell.available && (selectedCell?.y !== cell.y || selectedCell?.x !== cell.x)) {
      board.add(cell);
      setSelectedCell(cell);
    }
  }

  return (
    <div className="board">
      {board.cell.map((row) => 
        <div className="">
          {row.map(cell =>
            <CellComponent
              cell={cell}
              key={cell.id}
              click={click}/>  
          )}
        </div>
      )}
    </div>
  )
}

export default BoardComponent;