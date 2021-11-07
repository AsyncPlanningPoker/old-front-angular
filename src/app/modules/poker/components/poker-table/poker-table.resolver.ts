import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PokerStatus } from 'src/app/core/enum/poker-status';
import { Poker } from 'src/app/core/interfaces/poker/poker';
import { PokerService } from 'src/app/core/services/poker/poker.service';

@Injectable({
  providedIn: 'root'
})
export class PokerTableResolver implements Resolve<Observable<Poker[]>> {
  constructor(
    private pokerService: PokerService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Poker[]> {
    // return this.pokerService.getPokerRelatedToUser()
    return new Observable(observer => {
      observer.next([
        { id: "1",
          name: "Poker Sprint 1",
          createdBy: "Eugenio",
          status: PokerStatus.Closed },
        { id: "2",
          name: "Poker Sprint 1 Versao 2",
          createdBy: "Eugenio",
          status: PokerStatus.Open },
        { id: "3",
          name: "Poker Sprint 2",
          createdBy: "Eugenio",
          status: PokerStatus.Open }
      ])
      observer.complete()
    })
  }
}
