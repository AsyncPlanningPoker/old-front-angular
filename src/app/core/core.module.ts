import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { PokerService } from './services/poker/poker.service';
import { UserService } from './services/user/user.service';
import { BaseService } from './services/base.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    BaseService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
