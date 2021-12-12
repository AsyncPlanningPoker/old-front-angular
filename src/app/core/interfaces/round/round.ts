export interface GetRoundResult{
    isPokerOwner: boolean,
    status: "Open" | "Closed",
    voteUser: Vote,
    voteId: string
    result: "Unique" | "NotUnique" | "NotDefined"
    max: Vote | null
    min: Vote | null           
    nextRoundCreate: boolean
}

export interface IResponseGetRoundById {
	id: string
	roundNumber: number
	status: "Open" | "Closed"
	createdAt: string
	updatedAt: string
	idStory: string
}

export interface Vote {
    voteNumber: number | null,
    voteComment: string
}