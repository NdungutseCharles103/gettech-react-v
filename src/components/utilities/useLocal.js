import { useState, useEffect } from 'react';

function getSavedValue(key, inValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

    if(savedValue instanceof Function) return inValue()
    return inValue
}

export default function useLocalStorage(key, inValue){
    const [value, setValue] = useState(()=>{
        return getSavedValue(key, inValue)
    })

    // useEffect(()=>{
    //     localStorage.setItem(key, JSON.stringify(value))
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [value])

    return [value, setValue]
}


// App
// const [name, setName] = useLocalStorage('name','')
// const [name, setName] = useLocalStorage('name', ()=>'')

export const getLocal = (key) =>{
    const savedValue = localStorage.getItem(key);
    if (savedValue) return savedValue;
    return 
}