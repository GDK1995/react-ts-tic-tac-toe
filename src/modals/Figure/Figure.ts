import tac from '../../assets/figures/tac.png';
import tic from '../../assets/figures/tic.png';

export enum FigureNames {
  TAC = 'Нолик',
  TIC = 'Крестик'
}

export class Figure {
  id: number;
  name: FigureNames;
  logo: typeof tac | null;  

  constructor(name: FigureNames) {
    this.id = Math.random();
    this.name = name;
    this.logo = null;
  }

  addFigure() {
    this.logo = this.name === FigureNames.TAC ? tac : tic
  }
}