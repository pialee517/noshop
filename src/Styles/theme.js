import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const tokens = (mode) =>({
    ...(mode === 'dark'?
    {
    gray: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
    },
    primary: {
        100: "#0b1a13",
        200: "#153525",
        300: "#204f38",
        400: "#255c41",
        500: "#35845d",
        600: "#5d9c7d",
        700: "#86b59e",
        800: "#aecebe",
        900: "#d7e6df",
    },
    blue: {
        100: "#071e31",
        200: "#0d3c61",
        300: "#145a92",
        400: "#1a78c2",
        500: "#2196f3",
        600: "#4dabf5",
        700: "#7ac0f8",
        800: "#a6d5fa",
        900: "#d3eafd",   
    },
    green: {
        100: "#0b1a13",
        200: "#153525",
        300: "#204f38",
        400: "#255c41",
        500: "#35845d",
        600: "#5d9c7d",
        700: "#86b59e",
        800: "#aecebe",
        900: "#d7e6df",  
    },
    red: {
        100: "#310d0b",
        200: "#621b16",
        300: "#922820",
        400: "#c3362b",
        500: "#f44336",
        600: "#f6695e",
        700: "#f88e86",
        800: "#fbb4af",
        900: "#fdd9d7",  
    }
    } : {
    gray: {
        100: "#e0e0e0", 
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414", 
    },
    primary: {
        100: "#d7e6df",
        200: "#aecebe",
        300: "#86b59e",
        400: "#5d9c7d",
        500: "#35845d",
        600: "#255c41",
        700: "#204f38",
        800: "#153525",
        900: "#0b1a13",
    },
    blue: {
        100: "#d3eafd",
        200: "#a6d5fa",
        300: "#7ac0f8",
        400: "#4dabf5",
        500: "#2196f3",
        600: "#1a78c2",
        700: "#145a92",
        800: "#0d3c61",
        900: "#071e31",
    },
    green: {
        100: "#d7e6df",
        200: "#aecebe",
        300: "#86b59e",
        400: "#5d9c7d",
        500: "#35845d",
        600: "#255c41",
        700: "#204f38",
        800: "#153525",
        900: "#0b1a13",
    },
    red: {
        100: "#fdd9d7",
        200: "#fbb4af",
        300: "#f88e86",
        400: "#f6695e",
        500: "#f44336",
        600: "#c3362b",
        700: "#922820",
        800: "#621b16",
        900: "#310d0b",
        }
    })
})

export const themeSettings = (mode) =>{
    const colors = tokens(mode)
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark' ? 
            {
               primary: {
                dark: colors.gray[300],
                main: colors.gray[500],
                light: colors.gray[700],
               },
               secondary: {
                main: colors.gray[100]
               },
               netral: {
                dark: colors.gray[300],
                main: colors.gray[500],
                light: colors.gray[700]
               },
               background: {
                default: colors.gray[700]
               }
            } : 
            {
            primary: {
                dark: colors.primary[700],
                main: colors.primary[500],
                light: colors.primary[300]
                },
            secondary: {
                main: colors.green[500]
                },
            netral: {
                dark: colors.gray[700],
                main: colors.gray[500],
                light: colors.gray[300]
                },
            background: {
                default: '#eef4f7'
                },
            }),
            typography: {
                // fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                fontSize: 12,
                h1:{
                    // fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                    fontSize: 40,
                },
                h2:{
                    // fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                    fontSize: 32,
                },
                h3:{
                    // fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                    fontSize: 24,
                },
                h4:{
                    // fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                    fontSize: 20,
                },
                h5:{
                    // fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                    fontSize: 16,
                },
                h6:{
                    // fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                    fontSize: 14,
                },
            }
        }
    }
}

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
})

export const useMode = () =>{
    const [mode, setMode] = useState('light')

    const colorMode = useMemo(
        ()=>({
            toggleColorMode: ()=> {
                setMode((prev) => (prev === "light"? 'dark': 'light'))
            }
        })
    )
    const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode]
}



