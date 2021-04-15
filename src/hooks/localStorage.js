import { useState } from 'react';

export const checkLocalStorage = () => {
    if (JSON.parse(window.localStorage.getItem('darkmode'))){
        return true
    }
    return false
}

export const saveLocalStorage = (data) => {
    console.log('kicked')
    window.localStorage.setItem('darkmode', JSON.stringify(data))
}

export default checkLocalStorage;