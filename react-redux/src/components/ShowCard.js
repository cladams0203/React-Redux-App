import React from 'react'
import { Card, Image, SubCard, Summary } from './styles';

export function ShowCard(props) {
    
    const {name, image, summary, network } = props.data.show;
    const description = summary.replace(/<[^>]*>?/gm, '');
    
    return (
        <Card>
            <h3>{name}</h3>
            <SubCard>
            {image && <Image src={image.medium} />}
            <Summary>{description}</Summary>
            </SubCard>
            {network && <span>Network: {network.name} </span>}

        </Card>
    )
}