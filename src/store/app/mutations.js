// export function someMutation(/* state */) {}

export function setCards(state, cards) {
    state.cards = cards
}
export function addCard (state, card) {
    state.cards.push(card)
}

export function setCurrentCard (state, card) {
    state.currentCard = card
}

export function updateCard (state, card) {
    for (const index in state.cards) {
        if (state.cards[index].cardNumber === card.cardNumber) {
            state.cards[index] = card
            return
        }
    }

    state.currentCard = card
}

export function cancelCard (state, card) {
    state.cards = state.cards.filter(item => item.cardNumber !== card.cardNumber)
    state.currentCard = state.cards[0]
}

export function getCurrentCardIndex (state) {
    return state.cards.indexOf(state.currentCard)
}
