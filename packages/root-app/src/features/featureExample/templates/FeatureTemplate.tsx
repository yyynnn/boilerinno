import React from 'react'

import { FeatureOrganism } from '../organisms/FeatureOrganism'
import { IListItemExample } from '../types'

interface IProps {
    list: IListItemExample[]
}

export const FeatureTemplate = ({ list }: IProps) => {
    return (
        <div>
            {list?.map((item) => {
                return <FeatureOrganism title={item.title} key={item.id} />
            })}
        </div>
    )
}
