import { CircularProgress, Grid, Typography } from '@material-ui/core'
import React, { Suspense, useState } from 'react'
import { setConfiguration, ScreenClassProvider } from 'react-grid-system'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
// import { Scale } from 'react-scaling'

import { AppErrorBoundary } from './features/error/pages/ErrorBoundary'
import { Routing } from './features/routing/organisms/Routing'
import { AppThemeProvider } from './theme/AppThemeProvider'
import { Normalize } from './theme/Normalize'

setConfiguration({ maxScreenClass: 'xl', gridColumns: 14 })

const queryClient = new QueryClient()

const AppInitialFallback: React.FC = () => (
    <Grid container style={{ width: '100vw', height: '100vh' }} justify="center" alignItems="center">
        <Grid item style={{ textAlign: 'center' }}>
            <CircularProgress />
            <Typography variant="subtitle2">Инициализация приложения</Typography>
        </Grid>
    </Grid>
)

export const App = () => {
    const [scale, setScale] = useState(1980)

    return (
        <Suspense fallback={AppInitialFallback}>
            <ScreenClassProvider>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <AppErrorBoundary>
                            <AppThemeProvider>
                                <Routing />
                            </AppThemeProvider>
                        </AppErrorBoundary>
                    </BrowserRouter>
                </QueryClientProvider>
            </ScreenClassProvider>
            <Normalize />
        </Suspense>
    )
}
