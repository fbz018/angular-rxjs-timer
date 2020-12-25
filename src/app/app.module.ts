import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PatientService } from "./services/patient.service";
import { HttpClientModule } from "@angular/common/http";
import { PatientsComponent } from "./patients/patients.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, PatientsComponent],
  bootstrap: [AppComponent],
  providers: [PatientService]
})
export class AppModule {}
