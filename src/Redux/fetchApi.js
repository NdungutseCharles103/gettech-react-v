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
        dispatch(loginSuccess(res.data))
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        dispatch(loginFailure())
    }
}