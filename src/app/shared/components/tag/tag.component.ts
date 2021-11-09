import { Component, Input, OnInit } from "@angular/core"
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"

@Component({
	selector: "app-tag",
	templateUrl: "./tag.component.html",
	styleUrls: ["./tag.component.css"]
})
export class TagComponent implements OnInit {
	@Input() text!: string
	@Input() color!: string

	theme$: Observable<string>
	theme!: string

	constructor(private store: Store<{ theme: string }>) {
		this.theme$ = store.select("theme")
	}

	ngOnInit(): void {
		this.theme$.subscribe((theme) => {
			this.theme = theme
		})
	}
}
