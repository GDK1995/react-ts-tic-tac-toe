import { FigureNames } from "./Figure/Figure";

export class Player {
  id: number;
  role: FigureNames;

  constructor(role: FigureNames) {
    this.id = Math.random();
    this.role = role;
  }
}