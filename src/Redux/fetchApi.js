import { api } from "../components/utilities/one";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "./userSlice";

export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try {
        const res = await api.post('/user/login', user);
        const test = await res.data
        // if (test!=='No user found' || test !== '') {
            
        // }
        dispatch(loginSuccess(res.data))
        console.log(res.data);
        return test;
    } catch (error) {
        console.log(error);
        dispatch(loginFailure())
    }
}