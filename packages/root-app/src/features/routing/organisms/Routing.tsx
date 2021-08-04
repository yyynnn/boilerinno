import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { NotFound } from '../../error/pages/NotFound'
import { Feature } from '../../featureExample/pages/Feature'
import { FEATURE_PAGE } from '../../featureExample/paths'
import { PrivateRoute } from './PrivateRoute'

export const basicPages = [
    {
        path: '/NOT_FOUND_PAGE',
        type: 'private',
        menuIgnore: true,
        name: 'Не найдено',
        element: () => <NotFound />,
    },
    {
        path: '/NO_ACCESS_PAGE',
        type: 'private',
        menuIgnore: true,
        name: 'Нет доступа',
        element: () => <NotFound />,
    },
    {
        path: '/',
        type: 'private',
        menuIgnore: true,
        name: 'Root',
        element: () => <Feature />,
    },
]

export const routesConfig = [
    ...basicPages,

    {
        path: FEATURE_PAGE,
        type: 'private',
        name: 'feature1',
        element: () => <Feature />,
    },
]

export const Routing = () => {
    return (
        <Routes>
            {routesConfig.map((route, idx) => {
                return route.type === 'private' ? (
                    <PrivateRoute key={route.name} path={route.path} element={route.element()} />
                ) : (
                    <Route key={idx} path={route.path} element={route.element()} />
                )
            })}
        </Routes>
    )
}
