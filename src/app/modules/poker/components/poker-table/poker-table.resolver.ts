import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Poker } from 'src/app/core/interfaces/poker/poker';
import { PokerService } from 'src/app/core/services/poker/poker.service';

@Injectable({
  providedIn: 'root'
})
export class PokerTableResolver implements Resolve<Observable<Poker>> {
  constructor(
    private pokerService: PokerService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Poker> {
    return this.pokerService.getPokerRelatedToUser()
  }
}
