import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { ReactiveFormsModule } from "@angular/forms"
import { MaterialModule } from "./modules/material/material.module"
import { NavbarModule } from "./components/navbar/navbar.module";
import { FormComponent } from './components/form/form.component';
import { LogoScreenComponent } from './components/logo-screen/logo-screen.component'
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
	declarations: [
    FormComponent,
    LogoScreenComponent
  ],
	imports: [CommonModule, MaterialModule],
	exports: [ReactiveFormsModule, MaterialModule, NavbarModule, LogoScreenComponent, HttpClientModule]
})
export class SharedModule {}
