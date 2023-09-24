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
            localStorage.setItem("user", JSON.stringify({ ...state.user, islogged: false }))
            return { ...state, user: { ...state.user, isLogged: true } }
        },
        logout(state) {
            console.log("logout")
            localStorage.setItem("user", JSON.stringify({ ...state.user, isLogged: false }))
            return { ...state, user: { ...state.user, isLogged: false } }

        },
        createUser(state, { payload }) {
            return { ...state, user: payload }
        }
    }
})

export const { login, logout, createUser } = userSlice.actions

export default userSlice.reducer