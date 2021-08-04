import React from 'react'
import { Navigate, Route } from 'react-router-dom'

// import { LOGIN_PAGE, LOGOUT_PAGE, APP_SELECTOR_PAGE, NO_ACCESS_PAGE } from './constants/paths'

// export const basicPages = [LOGIN_PAGE, LOGOUT_PAGE, APP_SELECTOR_PAGE, NO_ACCESS_PAGE]

export const PrivateRoute = ({ children, path, ...rest }: any) => {
    // const { isSignedIn } = useAuth()
    // const { current } = useRoles()
    const isSignedIn = true

    // const matchedRoleApp = path.includes(current?.application)
    // const matchedRoleProject = path.includes(current?.project)
    // const permitedRoute = matchedRoleProject && matchedRoleApp

    if (isSignedIn) {
        // if (permitedRoute || basicPages) {
        return <Route {...rest}>{children}</Route>
        // }
        // return <Navigate to={NO_ACCESS_PAGE} />
    }
    return <Navigate to="/login" />
}
