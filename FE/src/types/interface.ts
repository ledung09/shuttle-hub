export type Gender = "M" | "F";
export interface PlayerType {
  name: string;
  addDate: Date;
  gender: "M" | "F";
  potential: boolean;
  payment?: boolean[];
}

export type FormState = "filled" | "unfilled" | "dup_name" | "valid";
