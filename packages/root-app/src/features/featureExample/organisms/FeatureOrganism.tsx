import React from 'react'

import { FeatureAtom } from '../atoms/FeatureAtom'
import { FeatureMolecule } from '../molecules/FeatureMolecule'

export const FeatureOrganism = ({ title }: { title: string }) => {
    return (
        <div>
            <p>
                Simple Organism Component. Title:
                {title}
            </p>
            <FeatureAtom />
            <FeatureMolecule />
        </div>
    )
}
