import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext"
import { ChangeCssVariableRoot } from "../model/ChangeCssVariableRoot";
import { locStorage } from "../model/locStorage";

export const ThemeProvider = ({children,...props}) => {
    const [theme, setTheme] = useState(locStorage.getItem());
    
    ChangeCssVariableRoot(theme)

    function changeTheme(theme){
        setTheme(theme)
        ChangeCssVariableRoot(theme)
        locStorage.setItem(theme)
    }

    return <ThemeContext.Provider value = {{
        theme,
        changeTheme,
    }}>{children}</ThemeContext.Provider>
}