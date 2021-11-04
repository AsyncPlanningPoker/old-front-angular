import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { newPoker } from "../../interfaces/poker/poker"

import { BaseService } from "../base.service"

@Injectable({
	providedIn: "root"
})
export class PokerService extends BaseService<newPoker> {
	constructor(protected httpClient: HttpClient) {
		super("/api/poker", httpClient)
	}
}
