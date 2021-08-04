import { Card } from '@material-ui/core'
import React from 'react'

import { FeatureAtom } from '../atoms/FeatureAtom'
import { FeatureMolecule } from '../molecules/FeatureMolecule'

export const FeatureOrganism = ({ title }: { title: string }) => {
    return (
        <Card elevation={10}>
            <p>
                Simple Organism Component. Title:
                {title}
            </p>
            <FeatureAtom />
            <FeatureMolecule />
        </Card>
    )
}
