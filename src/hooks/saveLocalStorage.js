

export const saveLocalStorage = (data) => {
    console.log('kicked')
    window.localStorage.setItem('darkmode', JSON.stringify(data))
}

export default saveLocalStorage;