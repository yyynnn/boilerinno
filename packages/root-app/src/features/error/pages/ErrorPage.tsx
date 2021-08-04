/* eslint-disable no-restricted-globals */
import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Spacer } from '../../uikit/atoms/Spacer'

export const ErrorPage = ({ error = true, noAccess = false }) => {
    const navigate = useNavigate()

    const gotoHomeHandler = () => navigate('/')

    const reloadHandler = () => location.reload()

    return (
        <>
            <Spacer space={48} />
            <Typography variant="h5">{noAccess ? 'Нет доступа' : 'Не найдено'}</Typography>
            <Spacer space={24} />
            <div>
                <Button variant="contained" color="primary" onClick={!noAccess ? gotoHomeHandler : reloadHandler}>
                    {!noAccess ? 'На главную' : 'Перезагрузить страницу'}
                </Button>
            </div>
        </>
    )
}
