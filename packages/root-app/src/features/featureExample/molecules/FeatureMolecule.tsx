import React from 'react'
import styled from 'styled-components'

import { FeatureAtom } from '../atoms/FeatureAtom'

export const FeatureMolecule = () => {
    return (
        <Wrapper>
            <p>Simple Molecule Component</p>
            <FeatureAtom />
            <button type="button">Press me</button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: aliceblue;
`
