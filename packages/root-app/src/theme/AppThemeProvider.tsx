import { ThemeProvider } from '@material-ui/core'
import React, { ReactNode, useCallback, useContext, useMemo, useState } from 'react'
import { ThemeContext as StyledThemeContext, ThemeProvider as StyledThemeProvider, StyleSheetManager } from 'styled-components'

import { darkTheme, lightTheme } from './themes'

export { Theme } from '@material-ui/core'

const CommonWrapperContext = React.createContext<{ theme: 'light' | 'dark'; setTheme: (theme: 'light' | 'dark') => void }>({
    setTheme: () => {},
    theme: 'light',
})

export const AppThemeProvider: React.FC<{ theme?: 'light' | 'dark' }> = ({
    children,
    theme: initialTheme = 'light',
}: {
    children: ReactNode
    theme?: 'light' | 'dark'
}) => {
    const [theme, setTheme] = useState(initialTheme)
    const contextValues = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    )

    const themeObj = theme === 'light' ? lightTheme : darkTheme
    return (
        <CommonWrapperContext.Provider value={contextValues}>
            <ThemeProvider theme={themeObj}>
                <StyledThemeProvider theme={themeObj}>
                    <StyleSheetManager disableVendorPrefixes>{children || null}</StyleSheetManager>
                </StyledThemeProvider>
            </ThemeProvider>
        </CommonWrapperContext.Provider>
    )
}

export const useChangeCurrentTheme = () => {
    const { setTheme: changeCurrentTheme, theme: currentTheme } = useContext(CommonWrapperContext)
    return useCallback(() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light'), [changeCurrentTheme, currentTheme])
}

export const useGetCurrentTheme = () => {
    const { theme } = useContext(CommonWrapperContext)
    return theme
}
