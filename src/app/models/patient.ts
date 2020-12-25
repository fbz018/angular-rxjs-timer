import { DeviceMapping } from "./device-mapping";

export interface Patient {
  name: string;
  age: number;
  mrn: string;
  dateOfBirth: Date;
  deviceMappings: DeviceMapping[];
}
