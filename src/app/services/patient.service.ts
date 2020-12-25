import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Bed } from "../models/bed";

@Injectable()
export class PatientService {
  constructor(private http: HttpClient) {}

  getPatientData(subNumber: number): Observable<Bed> {
    return this.http
      .get(`assets/bed01SubscriptionResult${subNumber}.json`)
      .pipe(map((data: any) => data.data.bed));
  }
}
