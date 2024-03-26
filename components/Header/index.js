'use client'

import styled from 'styled-components'

const Heading = styled.p`
    font-size: ${props=>props.size};
    color: ${props=>props.color};
`

const Header = ({text="Header", size="32px", color="#000000"}) => {
    return (
        <Heading color={color} size={size}>{text}</Heading>
    )
}

export default Header;