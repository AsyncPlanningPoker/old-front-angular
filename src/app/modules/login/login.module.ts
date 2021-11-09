import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { SharedModule } from "src/app/shared/shared.module"
import { RouterModule } from "@angular/router"
import { UserService } from "src/app/core/services/user/user.service"
import { LoginComponent } from "./components/login/login.component"
import { LoginRoutingModule } from "./login-routing.module"

@NgModule({
	declarations: [LoginComponent],
	imports: [CommonModule, SharedModule, RouterModule, LoginRoutingModule],
	exports: []
})
export class LoginModule {}
