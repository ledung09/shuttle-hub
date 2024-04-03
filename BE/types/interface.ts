export interface PlayerType {
  name: string;
  gender: "M" | "F";
  potential: boolean;
  addDate: Date;
  payment?: boolean[];
}