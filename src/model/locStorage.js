export const locStorage = {
    setItem:(theme) => {
        localStorage.setItem('theme',`${theme}`)
    },
    getItem:() => {
        return localStorage.getItem('theme')
    }
}