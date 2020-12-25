import { MetaData } from "./meta-data";

export interface Alarm {
  id: string;
  value: string;
  metaData: MetaData;
}
