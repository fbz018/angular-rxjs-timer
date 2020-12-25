import { Alarm } from "./alarm";
import { Measurement } from "./measurement";

export interface Device {
  id: string;
  category: string;
  type: string;
  model: string;
  measurements: Measurement[];
  alarms: Alarm[];
}
