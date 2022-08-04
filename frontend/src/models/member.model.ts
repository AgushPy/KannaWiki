import { BaseModel } from "./base.model";

export interface Member extends BaseModel {
  username: string,
  name: string,
  discord: string,
  title?: string,
  birthday?: Date,
  nationality?: string,
  description: string,
  phrases?: string[],
  img: string
}