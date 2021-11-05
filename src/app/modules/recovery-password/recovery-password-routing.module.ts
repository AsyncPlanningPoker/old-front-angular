import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { RecoveryPasswordComponent } from "./recovery-password.component"
import { ResetPasswordComponent } from "./reset-password/reset-password.component"
import { SendedComponent } from "./sended/sended.component"
import { SolicitationComponent } from "./solicitation/solicitation.component"

const routes: Routes = [
	{
		path: "",
		component: RecoveryPasswordComponent,
		children: [
			{
				path: "solicitation",
				component: SolicitationComponent
			},
			{
				path: "sended",
				component: SendedComponent
			},
			{
				path: "reset-password/:token",
				component: ResetPasswordComponent
			},
			{
				path: "**",
				redirectTo: "solicitation"
			}
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RecoveryPasswordRoutingModule {}
