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
    const { data, error, isFetching, status } = useFeaturePost('lala')
    console.log('🐸 Pepe said => Feature => data', data)
    return (
        <div>
            {isFetching ? <p>{data}</p> : null}
            <FeatureTemplate list={list} />
        </div>
    )
}
