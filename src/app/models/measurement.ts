import { MetaData } from "./meta-data";

export interface Measurement {
  id:
    | "Date"
    | "Time"
    | "SPO2"
    | "BPM"
    | "PA"
    | "MODE"
    | "POLLTIME"
    | "TZ"
    | "TZ_Offset";
  value: string;
  metaData: MetaData;
}
