import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { PatientService } from "../services/patient.service";
import { Bed } from "../models/bed";
import { Observable } from "rxjs";
import { timer } from "rxjs";
import { exhaustMap } from "rxjs/operators";
import { DeviceMapping } from "../models/device-mapping";
import { Measurement } from "../models/measurement";

@Component({
  selector: "app-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnInit {
  private fecthingInterval = 2000;
  data$: Observable<Bed>;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.data$ = timer(0, this.fecthingInterval).pipe(
      exhaustMap(timerVal =>
        this.patientService.getPatientData((timerVal % 2) + 1)
      )
    );
  }

  getMeasurementsData(deviceMappings: DeviceMapping[] = []): Measurement[] {
    return deviceMappings.reduce((acc, deviceMapping) => {
      const deviceMeasurements = deviceMapping.device.measurements.reduce(
        (measurementAcc, measurement) => {
          measurementAcc.push(measurement);
          return measurementAcc;
        },
        []
      );
      return [...acc, ...deviceMeasurements];
    }, []);
  }
}
