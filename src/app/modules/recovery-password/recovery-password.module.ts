import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { RecoveryPasswordRoutingModule } from "./recovery-password-routing.module"
import { RecoveryPasswordComponent } from "./recovery-password.component"
import { SharedModule } from "src/app/shared/shared.module";
import { SolicitationComponent } from './solicitation/solicitation.component';
import { SendedComponent } from './sended/sended.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component'

@NgModule({
	declarations: [RecoveryPasswordComponent, SolicitationComponent, SendedComponent, ResetPasswordComponent],
	imports: [CommonModule, SharedModule, RecoveryPasswordRoutingModule]
})
export class RecoveryPasswordModule {}
