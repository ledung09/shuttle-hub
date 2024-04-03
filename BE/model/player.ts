import { Schema, model } from "mongoose";
import type { PlayerType } from "../types/interface";

const userSchema = new Schema<PlayerType>({
  name: { type: String, required: [true, `name is missing?`], unique: true },
  gender: {
    type: String,
    enum: ["M", "F"],
    required: [true, `gender is missing?`],
  },
  potential: { type: Boolean, required: [true, `potential is missing?`] },
  payment: { type: [Boolean], default: Array(12).fill(false) },
  addDate: {
    type: Date,
    default: Date.now, // Set the default value to the current date
  },
});

userSchema.index({ name: 1 });

export const Player = model<PlayerType>("Player", userSchema);
