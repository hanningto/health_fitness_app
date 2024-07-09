import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
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
        },
        loginFailure: (state, action) =>{
            state.loading = false,
            state.error =  action.payload
        },
        logout: (state)=>{
            state.user = null
            state.token = null
        }

    }
})

export const {startLoading, loginSuccess, loginFailure, logout} = userSlice.actions


export default userSlice.reducer