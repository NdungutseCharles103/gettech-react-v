import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        status: '',
        isLocal: true
    },
    reducers: {
        loginStart: (state)=> {
            state.isFetching = true;
        },
        loginSuccess: (state, action)=>{
            state.isFetching = false;
            state.error = false
            state.currentUser = action.payload;
            state.isLocal = false
        },
        loginFailure: (state, action)=>{
            state.isFetching = false;
            if (action) {
                console.log(action.payload);
                state.status = action.payload
            } else {
                console.log('no action');
                state.error = true;
                state.status = ''
            }
            
        },
    }
})

export const { loginStart, loginSuccess, loginFailure } =
  userSlice.actions;
export default userSlice.reducer;