import { Cell } from "./Cell";
import { FigureNames } from "./Figure/Figure";

export class Board {
  cell: Cell[][] = []

  public initCell() {
    for (let i = 0; i < 3; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 3; j++) {
        row.push(new Cell(i, j, null))
      }        
      this.cell.push(row)
    }
  }

  add(cell: Cell) {
    if (cell.x % 2 === 0) {
      cell.addFigure(cell, FigureNames.TIC);
    } else {
        cell.addFigure(cell, FigureNames.TAC);
    }
  }
}