import React from 'react'

import { Spacer } from '../../uikit/atoms/Spacer'
import { FeatureOrganism } from '../organisms/FeatureOrganism'
import { IListItemExample } from '../types'

interface IProps {
    list: IListItemExample[]
}

export const FeatureTemplate = ({ list }: IProps) => {
    return (
        <div>
            {list?.map((item) => {
                return (
                    <div key={item.id}>
                        <FeatureOrganism title={item.title} />
                        <Spacer />
                    </div>
                )
            })}
        </div>
    )
}
