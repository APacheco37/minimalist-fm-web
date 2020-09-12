export enum Position {
  GK = 'GK',
  DFL = 'DFL',
  DFC = 'DFC',
  DFR = 'DFR',
  ML = 'ML',
  MC = 'MC',
  MR = 'MR',
  FL = 'FL',
  FC = 'FC',
  FR = 'FR',
}

export class Player {
  Id: number;
  FirstName: string;
  LastName: string;
  Age: number;
  Skill: number;
  Position: Position;
}
