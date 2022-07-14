import { BaseModel } from "./base.model";

export interface Member extends BaseModel {
  name: string,
  discord: string,
  title: string,
  birthday: Date,
  description: string,
  phrases: string[],
  img: string
}