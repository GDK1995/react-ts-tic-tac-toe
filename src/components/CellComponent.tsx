import { Cell } from "../modals/Cell";

interface CellProps {
  cell: Cell;
  click: (cell: Cell) => void;
}

const CellComponent = ({cell, click}: CellProps) => {

  return (
    <div className="cell" onClick={() => click(cell)}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </div>
  )
}

export default CellComponent;
