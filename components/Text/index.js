'use client'

import styled from 'styled-components'

const Para = styled.p`
    font-size: ${props=>props.size};
`

const Text = ({text="Paragraph", size="18px"}) => {
    return (
        <Para size={size}>{text}</Para>
    )
}

export default Text;