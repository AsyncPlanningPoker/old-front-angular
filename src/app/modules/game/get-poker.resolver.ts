import { Injectable } from "@angular/core"
import {
	Router,
	Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from "@angular/router"
import { Observable, of } from "rxjs"
import { map } from "rxjs/operators"
import { PokerService } from "src/app/core/services/poker/poker.service"

@Injectable({
	providedIn: "root"
})
export class LoadPokerResolver implements Resolve<Observable<any>> {
	constructor(private pokerService: PokerService) {}
	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<any> {
		return this.pokerService
			.getPokerById(route.params.idPoker)
			.pipe(map((resp) => resp.data))
	}
}
