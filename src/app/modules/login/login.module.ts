import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { SharedModule } from "src/app/shared/shared.module"
import { LoginRoutingModule } from "./login.routing.module"
import { SignUpComponent } from "./components/signUp/signUp.component"
import { LoginComponent } from "./login.component"
import { LoginFormComponent } from "./components/login-form/login-form.component"
import { RouterModule } from "@angular/router"
import { UserService } from "src/app/core/services/user/user.service"

@NgModule({
	declarations: [LoginFormComponent, LoginComponent, SignUpComponent],
	imports: [CommonModule, SharedModule, LoginRoutingModule, RouterModule],
	exports: [],
	providers: [UserService]
})
export class LoginModule {}
