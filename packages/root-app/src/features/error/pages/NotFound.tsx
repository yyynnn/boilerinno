import React from 'react'

import { ErrorPage } from './ErrorPage'

export const NotFound = ({ noAccess = false }) => {
    return <ErrorPage error={false} noAccess={noAccess} />
}
