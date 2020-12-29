export const state = () => ({
    users: [],
})

export const actions = {
    async ADD_USER({ commit }, user) {
        const newUser = await this.$axios.$post('/users', user)
        console.log(newUser);
        commit('ADD_USER', newUser)
    }
}

export const mutations = {
    ADD_USER(state, user) {
        state.users.push(user)
    }
}

