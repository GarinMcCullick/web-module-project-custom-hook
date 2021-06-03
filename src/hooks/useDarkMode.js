import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)
}

export default useDarkMode