// export function someAction(/* context */) {}

export function setCards(context, cards) {
    context.commit('setCards', cards)
}

export function addCard (context, card) {
    context.commit('addCard', card)
}

export function setCurrentCard (context, card) {
    context.commit('setCurrentCard', card)
}

export function updateCard (context, card) {
    context.commit('updateCard', card)
}

export function cancelCard (context, card) {
    context.commit('cancelCard', card)
}