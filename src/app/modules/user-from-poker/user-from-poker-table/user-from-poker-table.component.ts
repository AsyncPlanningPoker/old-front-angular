import { Component, Input, OnInit } from "@angular/core"

@Component({
	selector: "app-user-from-poker-table",
	templateUrl: "./user-from-poker-table.component.html",
	styleUrls: ["./user-from-poker-table.component.css"]
})
export class UserFromPokerTableComponent implements OnInit {
	@Input() players!: string[] | undefined

	constructor() {}

	ngOnInit(): void {}
}
