import { DarkMode, LightMode } from '@mui/icons-material';
import { useTheme } from 'next-themes';
import {useState, useEffect, useCallback} from 'react';

const CONSTANTS = {
    DARK: 'dark',
    LIGHT: 'light',
}

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    },[])

    const themeSwitcherHandler = (mode: string) => () => {
        console.log(theme, mode)
        setTheme(mode)
    }

    if(!mounted) return null;

    return (
        <>
            {theme === CONSTANTS.DARK ?
            <LightMode onClick={themeSwitcherHandler(CONSTANTS.LIGHT)}></LightMode>:
            <DarkMode onClick={themeSwitcherHandler(CONSTANTS.DARK)}></DarkMode>}
        </>
    )

}

export default ThemeSwitcher;