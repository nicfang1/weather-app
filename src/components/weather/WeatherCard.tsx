import React from 'react'
import styled from 'styled-components'

interface Props {
    temp: number | undefined    
    title: string; 
}

const Card = styled.div`
    border-radius: 10px; 
    display: flex; 
    flex-direction: column; 
    background-color: white; 
    padding: .5rem; 
`

const Title = styled.h3`
    font-weight: bold;
    font-size: 1rem; 
`


const WeatherCard: React.FC<Props> = (props) => {
    return (
        <Card>
            <Title>{props.title}</Title>
            <p>{props.temp}</p>
        </Card>
    )
}

export default WeatherCard
