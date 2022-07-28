import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext()

export const useApp = ()=>{
    return useContext(AppContext)
}

export function AppProvider ({children}){

    

    return (
        <AppContext.Provider>
          {children}  
        </AppContext.Provider>
    )
}