import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { ReactiveFormsModule } from "@angular/forms"
import { MaterialModule } from "./modules/material/material.module"
import { NavbarModule } from "./components/navbar/navbar.module";
import { FormComponent } from './components/form/form.component'

@NgModule({
	declarations: [
    FormComponent
  ],
	imports: [CommonModule],
	exports: [ReactiveFormsModule, MaterialModule, NavbarModule]
})
export class SharedModule {}
