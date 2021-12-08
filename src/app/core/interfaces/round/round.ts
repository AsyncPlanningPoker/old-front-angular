export interface GetRoundResult{
    status: 'Open' | 'Closed'
    result?: Vote
    max?: Vote 
    min?: Vote
    voteId ?: string
    voteOfUser?: Vote
    nextRoundCreate?: boolean
}

export interface ResponseRound {
	id: string
	roundNumber: number
	status: "Open" | "Closed"
	createdAt: string
	updatedAt: string
	idStory: string
}

export interface Vote {
    voteNumber: number,
    voteComment: string
}