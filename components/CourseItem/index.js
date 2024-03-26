'use client'

import styled from 'styled-components'
import Header from '../Header';
import Text from '../Text';
import Button from '../Button';
import { useRouter, useSearchParams } from 'next/navigation';

const Container = styled.div`
    border: 1px solid #DFE7F2;
    background-color: #fff;
    padding: 20px;
`;

const ColumnContainer = styled.div`
    display: flex;
    margin-bottom: 24px;
`;

const Column = styled.div`
    flex: ${props=>props.flex ? props.flex : "1"};
`;

const TimeslotsContainer = styled.div`
    background-color: ${props=>props.legend ? "none" : "#F8F8FB"};
    margin-bottom: ${props=>props.legend ? "8px" : "none"};
`;

const TimeslotRow = styled.div`
    display: flex;
`;

const TimeslotColumn = styled.div`
    padding: ${props=>props.legend ? "0px" : "10px 15px"};
    flex: 1;
    border: ${props=>props.legend ? "none" : "1px solid #D5DAE1"};
`;

const Credits = styled.span`
    padding: 0px 20px;
    color: #A9A9A9;
    font-weight: bold;
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;

`;

const CourseItem = ({ 
    isConflict=false, 
    title="Course Name", 
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    timeslots=[{days: "Monday", startTime: "2:30 PM AST", endTime: "3:30 PM AST"}],
    credits="3",
    showConflict=false,
    CRN="10101"
    }) => {

        const router = useRouter();

        const searchParam = useSearchParams('query');
    
    return (
        <Container>
            <ColumnContainer>
                <Column>
                    <FlexContainer>
                        <Header size='26px' text={title}></Header>
                        <Credits>{credits} Credits</Credits>
                    </FlexContainer>
                    <Text size='16px' text={description}></Text>
                    <Text size='16px' text={`CRN: ${CRN}`}></Text>
                </Column>
                <Column flex={"0.5"}>
                    {showConflict ?
                    <Header size='22px' color={isConflict ? "#E14646" : "#71D175"} text={isConflict ? "Conflicts" : "No Conflicts"}></Header>
                    :
                    <></>
                    }
                    
                </Column>
            </ColumnContainer>
            <TimeslotsContainer  legend>
                <TimeslotRow>
                    <TimeslotColumn legend>Date</TimeslotColumn>
                    <TimeslotColumn legend>Start</TimeslotColumn>
                    <TimeslotColumn legend>End</TimeslotColumn>
                </TimeslotRow>
            </TimeslotsContainer>
            <TimeslotsContainer>
            {
                timeslots?.map((item, index)=> {
                    return (
                        <TimeslotRow key={index}>
                            <TimeslotColumn>{item.days}</TimeslotColumn>
                            <TimeslotColumn>{item.startTime}</TimeslotColumn>
                            <TimeslotColumn>{item.endTime}</TimeslotColumn>
                        </TimeslotRow>
                    )
                })
            }
            </TimeslotsContainer>
            {/* <div className='mt-7'>
                <Button onClick={handleAddClassToSearch} text='Add Class to Search'></Button>
            </div> */}
        </Container>
    )
}

export default CourseItem;