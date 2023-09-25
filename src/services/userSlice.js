import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
    name: "",
    email: "",
    password: "",
    isLogged: false
}

const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: user ? { ...user } : initialUser,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state) {
            localStorage.setItem("user", JSON.stringify({ ...state.user, isLogged: false }))
            return { ...state, user: { ...state.user, isLogged: true } }
        },
        logout(state) {
            localStorage.setItem("user", JSON.stringify({ ...state.user, isLogged: false }))
            return { ...state, user: { ...state.user, isLogged: false } }

        },
        createUser(state, { payload }) {
            return { ...state, user: payload }
        },
        deleteUser(state) {
            localStorage.clear()
            return { ...state, user: initialUser }
        },
        updateUser(state, { payload }) {
            localStorage.setItem("user", JSON.stringify({ ...payload, isLogged: true }))
            return { ...state, user: { ...payload, isLogged: true } }
        }
    }
})

export const { login, logout, createUser, deleteUser, updateUser } = userSlice.actions

export default userSlice.reducer