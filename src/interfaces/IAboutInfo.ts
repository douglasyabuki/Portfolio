// Interface import
import { IAboutSection } from "./IAboutSection";

// Interface of object in about-info.ts
export interface IAboutInfo {
  title: string,
  content: string,
  infoList: IAboutSection[],
}
