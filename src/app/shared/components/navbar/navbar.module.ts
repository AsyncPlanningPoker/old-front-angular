import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { NavbarComponent } from "./navbar.component"
import { MaterialModule } from "../../modules/material/material.module"
import { AuthService } from "src/app/core/services/auth/auth.service"

@NgModule({
	declarations: [NavbarComponent],
	imports: [CommonModule, MaterialModule],
	exports: [NavbarComponent],
	providers: [AuthService]
})
export class NavbarModule {}
