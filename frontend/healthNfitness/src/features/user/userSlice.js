import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    authenticated: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading.true
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.user = action.payload.user
            state.token = action.payload.token
            state.authenticated = true
        },
        loginFailure: (state, action) =>{
            state.loading = false,
            state.error =  action.payload
            state.authenticated = false
        },
        logout: (state)=>{
            state.user = null
            state.token = null
            state.authenticated = false
        }

    }
})

export const {startLoading, loginSuccess, loginFailure, logout} = userSlice.actions


export default userSlice.reducer