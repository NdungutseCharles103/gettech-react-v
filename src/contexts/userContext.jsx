import React, { useContext, useState,useEffect } from "react";
import { api } from "../components/utilities/one";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

const UserContext = React.createContext()

export const useUser = ()=>{
    return useContext(UserContext)
}

export function UserProvider ({children}){
    const user = useSelector((state) => state.user.currentUser);
    const userinfo = jwtDecode(user)
    const [orders, setOrders] = useState([])
    
    

    const getOrders = async()=>{
        const res = await api.get(`/orders/${userinfo._id}`)
        console.log(res);
        setOrders(res.data)
    }

    useEffect(()=>{
        getOrders()
    },[])
    return (
        <UserContext.Provider value={{user, orders, setOrders}}>
          {children}  
        </UserContext.Provider>
    )
}