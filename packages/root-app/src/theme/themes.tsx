/* eslint-disable @typescript-eslint/naming-convention */
import { createTheme, Theme } from '@material-ui/core/styles'
import { DefaultTheme } from 'styled-components'

export interface ThemeOverrides {
    errorLight: ErrorLight
    successLight: ErrorLight
    warningLight: ErrorLight
    menu: Menu
    neutral: Neutral
    tableErrorBG: ErrorLight
    tableSuccessBG: ErrorLight
    tableWarningBG: ErrorLight
    tableDefaultBG: ErrorLight
    typography: Typography
}

export interface ErrorLight {
    main: string
    light: string
    dark: string
    contrastText?: string
    icon?: string
}

export interface Menu {
    dark: string
    main: string
    light: string
    selected: string
    submenu: string
}

export interface Neutral {
    black: string
    white: string
    grey900: string
    grey800: string
    grey700: string
    grey600: string
    grey500: string
    grey400: string
    grey300: string
    grey200: string
    grey100: string
    grey50: string
}

export interface Typography {
    fontFamily: string
}

const lightNeutral: ThemeOverrides = {
    errorLight: {
        main: '#FFEAEA',
        light: '#FFF2F2',
        dark: '#FFD2D2',
        contrastText: '#001729',
    },
    successLight: {
        main: '#D8FBDB',
        light: '#F1FBF0',
        dark: '#BFF5C5',
        contrastText: '#001729',
    },
    warningLight: {
        main: '#FFE9BF',
        light: '#FFF7E8',
        dark: '#FFD079',
        contrastText: '#001729',
    },
    menu: {
        dark: '#112542',
        main: '#0b3461',
        light: '#005291',
        selected: '#005291',
        submenu: '#FFFFFF',
    },
    neutral: {
        black: '#000000',
        white: '#FFFFFF',
        grey900: '#001729',
        grey800: '#334554',
        grey700: '#4D5D69',
        grey600: '#66747E',
        grey500: '#808B94',
        grey400: '#99A2A9',
        grey300: '#B3B9BF',
        grey200: '#CCD1D4',
        grey100: '#E5E8EA',
        grey50: '#F2F3F4',
    },
    tableErrorBG: {
        dark: '#EB6D6D',
        main: '#F38585',
        light: '#FF9E9E',
    },
    tableSuccessBG: {
        icon: '#0D932B',
        dark: '#78C98B',
        main: '#92D9A3',
        light: '#B2E5BE',
    },
    tableWarningBG: {
        icon: '#D0710B',
        dark: '#EDB546',
        main: '#F9C662',
        light: '#FDDB99',
    },
    tableDefaultBG: {
        dark: '#3F4C5F',
        main: '#FFFFFF',
        light: '#636F7F',
    },
    typography: {
        fontFamily: 'PTRootUIWeb',
    },
}

const darkNeutral: ThemeOverrides = {
    errorLight: {
        main: '#FFEAEA',
        light: '#FFF2F2',
        dark: '#FFD2D2',
        contrastText: '#001729',
    },
    successLight: {
        main: '#D8FBDB',
        light: '#F1FBF0',
        dark: '#BFF5C5',
        contrastText: '#001729',
    },
    warningLight: {
        main: '#FFE9BF',
        light: '#FFF7E8',
        dark: '#FFD079',
        contrastText: '#001729',
    },
    menu: {
        dark: '#434D5E',
        main: '#4C586A',
        light: '#636F7F',
        selected: '#1492FF',
        submenu: '#455061',
    },
    neutral: {
        white: '#475363',
        black: '#E7E7E7',
        grey900: '#F2F3F4',
        grey800: '#E5E8EA',
        grey700: '#CCD1D4',
        grey600: '#B3B9BF',
        grey500: '#99A2A9',
        grey400: '#808B94',
        grey300: '#66747E',
        grey200: '#5E7383',
        grey100: '#40515F',
        grey50: '#374653',
    },
    tableErrorBG: {
        dark: '#996464',
        main: '#805353',
        light: '#664242',
    },
    tableSuccessBG: {
        dark: '#5EA687',
        main: '#4F8C72',
        light: '#41735D',
        icon: '#0D932B',
    },
    tableWarningBG: {
        dark: '#DBC98C',
        main: '#A89142',
        light: '#8C782F',
        icon: '#E48F33',
    },
    tableDefaultBG: {
        dark: '#3F4C5F',
        main: '#4C586A',
        light: '#636F7F',
    },
    typography: {
        fontFamily: 'PTRootUIWeb',
    },
}

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeOverrides, Theme {}
}

// @ts-ignore
export const lightTheme: DefaultTheme = createTheme({
    palette: {
        primary: {
            main: '#167ffb',
            light: '#1492ff',
            dark: '#0060d1',
        },
        secondary: {
            main: '#d0e9ff',
            light: '#e8f5ff',
            dark: '#aad5ff',
        },
        error: {
            main: '#FF4545',
            light: '#FF7A7A',
            dark: '#E00000',
        },
        warning: {
            main: '#FFAD0F',
            light: '#FFC30F',
            dark: '#FF8B0F',
        },
        success: {
            main: '#00CC11',
            light: '#3DDA2F',
            dark: '#00BD2F',
        },
        text: {
            primary: '#001729',
            secondary: 'rgba(0,23,41,0.75)',
            hint: 'rgba(0,23,41,0.6)',
            disabled: 'rgba(0,23,41,0.5)',
        },
        info: {
            dark: '#00B4F0',
            main: '#0FD1FF',
            light: '#4CDDFF',
        },
        background: {
            paper: '#ffffff',
            default: '#EDEEEF',
        },
        action: {
            selected: 'rgba(0, 23, 41, 0.08)',
            hover: 'rgba(0, 23, 41, 0.04)',
            active: '#ADB0B2',
        },
    },
    ...lightNeutral,
})
// @ts-ignore
export const darkTheme: DefaultTheme = createTheme({
    palette: {
        primary: {
            main: '#2A8CFF',
            light: '#36A1FF',
            dark: '#196CCE',
        },
        secondary: {
            main: '#3C5A74',
            light: '#385166',
            dark: '#AAD5FF',
        },
        error: {
            main: '#FF7A7A',
            light: '#FF9F9F',
            dark: '#FF4545',
        },
        warning: {
            main: '#FFAD0F',
            light: '#FFC30F',
            dark: '#FF8B0F',
        },
        success: {
            main: '#39CC59',
            light: '#47DC68',
            dark: '#B3B9BF',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#b3b9bf',
            hint: '#808B94',
            disabled: '#000000',
        },
        info: {
            dark: '#00B4F0',
            main: '#0FD1FF',
            light: '#4CDDFF',
        },
        background: {
            paper: '#4C586A',
            default: '#3c4854',
        },
        action: {
            selected: 'rgba(128, 139, 148, 0.24)',
            hover: 'rgba(128, 139, 148, 0.18)',
        },
    },
    ...darkNeutral,
})
