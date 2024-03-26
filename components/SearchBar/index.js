'use client'
import styled from "styled-components";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Container = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
`;

const SearchBarContainer = styled.div`
    border: 1px solid #00000010;
    border-radius: 8px;
    width: 100%;
`

const SearchBarInput = styled.input`
    padding: 10px 20px;
    width: 100%;
    border-radius: 8px;
    &:focus {
        outline: none;
    }
`;

const SearchBar = () => {
    const router = useRouter();
    const [queryParam, setQueryParam] = useState('');
    useEffect(()=> {
        console.log(queryParam)
    }, [queryParam])
    return (
        <Container>
            <SearchBarContainer>
                <SearchBarInput onInput={(e)=> {
                    setQueryParam(e.target.value.replace(" ", ""))
                }} placeholder="Enter Course CRN (EX: 20701, 20702, 20704)">
                </SearchBarInput>
            </SearchBarContainer>
            <Button onClick={()=> {
                router.push(`/?query=${queryParam}`)
            }}></Button>
        </Container>
        
    )
}

export default SearchBar