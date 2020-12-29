import quotes from '../components/Quotes/QuoteGrid'

export const state = () => ({
    quotes: []
})

export const getters = {
    quotes(state) {
        return state.quotes
    }
}

export const mutations = {
    ADD_QUOTE(state, { newTitle, newId }) {
        state.quotes.push({ title: newTitle, id: newId });
    },
    REMOVE_QUOTE(state, payload) {
        const index = state.quotes.findIndex(quote => quote.id === payload);
        state.quotes.splice(index, 1);
    }
}
