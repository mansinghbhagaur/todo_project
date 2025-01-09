import {ThemeProvider as MuiThemeProvider, createTheme} from '@mui/material/styles'
import {  useEffect, useState } from "react";
import { ThemeContext } from './Store.jsx';
export const ThemeProvider = ({children}) =>{

    const [inputText, setInputText] = useState("");
    const [inputDate, setInputDate] = useState("");
    const [editLogo, setEditLogo] = useState(true);
    const [editIndex, setEditIndex] = useState(null);
    const [data, setData] = useState([]); 
    useEffect(() =>{

const storedTheme = localStorage.getItem('themeMode')
setMode(storedTheme)
    } , [])
    const [mode , setMode] = useState('light');
    const toggleTheme = () =>{
        const newTheme = mode === 'light' ? 'dark' : 'light'
        setMode(newTheme)
        localStorage.setItem('themeMode', newTheme)
    }


    const lightTheme = createTheme({
        palette:{
            mode:"light",
            primary:{
                main:'#1976d2'
            },
            background:{
                default:'#f4f4f4'
            }
        }
    })

    const darkTheme = createTheme({
        palette:{
            mode:"dark",
            primary:{
                main:'#ccc'
            },
            background:{
                default:'#121212'
            }
        }
    })

const theme =  mode === 'light' ? darkTheme : lightTheme;
console.log(theme)
    return(
        <>
        <ThemeContext.Provider value={{mode ,data, setData, editIndex, setEditIndex,toggleTheme,inputText, setInputText,inputDate, setInputDate,editLogo, setEditLogo}}>
                <MuiThemeProvider theme={theme}>
                    {children}
                </MuiThemeProvider>
        </ThemeContext.Provider>
        </>
    )
}