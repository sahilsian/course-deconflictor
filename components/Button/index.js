'use client'
import styled from 'styled-components'

const ButtonContainer = styled.div`
    background-color: ${props=>props.primary ? "#71D175" : "488EE0"};
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.2s all ease;
    &:hover {
        background-color: #fff;
        transition: 0.2s all ease;
        cursor: pointer;
        border: 2px solid ${props=>props.primary ? "#71D175" : "488EE0"};
    }
`;

const ButtonText = styled.span`
    color: #fff;
    font-weight: bold;
    transition: 0.2s all ease;
    ${ButtonContainer}:hover & {
        transition: 0.2s all ease;
        color: ${props=>props.primary ? "#71D175" : "488EE0"};
    }
`;

const Button = ({text='Search', primary=true, onClick=()=>{}}) => {
    return (
        <ButtonContainer onClick={onClick} primary={primary}>
            <ButtonText primary={primary}>
                {text}
            </ButtonText>
        </ButtonContainer>
    )
}

export default Button