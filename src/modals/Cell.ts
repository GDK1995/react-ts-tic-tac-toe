import { Figure, FigureNames } from "./Figure/Figure";

export class Cell {
  x: number;
  y: number;
  figure: Figure | null;
  available: boolean;
  id: number;

  constructor(x: number, y: number, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.id = Math.random()
    this.figure = figure;
    this.available = true;
  }

  addFigure(cell: Cell, name: FigureNames) {
    const figure = new Figure(name);
    this.available = false;
    this.figure = figure;
    this.figure.addFigure();
    console.log(cell, name);
  }
}