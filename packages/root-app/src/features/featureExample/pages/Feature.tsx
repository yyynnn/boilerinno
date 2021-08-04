import { Container, Grid } from '@material-ui/core'
import React from 'react'

import { useFeaturePost } from '../queries/useFeaturePost'
import { FeatureTemplate } from '../templates/FeatureTemplate'
import { IListItemExample } from '../types'

const list: IListItemExample[] = [
    { id: 'id1', title: 'Woo' },
    { id: 'id2', title: 'Kill' },
    { id: 'id3', title: 'All' },
    { id: 'id4', title: 'Humans' },
]

export const Feature = () => {
    const { data, error, isFetching, status } = useFeaturePost('1')
    console.log('🐸 Pepe said => Feature => data', data)
    return (
        <Container>
            {!isFetching ? (
                <p>
                    Async data:
                    {data.title}
                </p>
            ) : null}
            <FeatureTemplate list={list} />
        </Container>
    )
}
