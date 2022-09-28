import React, { useEffect, useState } from 'react';
import Nippies from '../nippiesData.json';
import { Card } from '../components/card';
import styled from 'styled-components';
import { useIsMobile } from "../hooks/useIsMobile";

const meetNippies = require("../img/design/meet-nippies.png");

const Container = styled.div`
margin-left: 15px;
`

const Title = styled.img`
max-width: ${props => props.isMobile ? '200px' : '500px'};
margin-top: ${props => props.isMobile ? '150px' : '250px'};
`

const CardGrid = styled.div`
margin-top: 50px;
margin-top: 60px;
margin-left: auto;
margin-right: auto;
display: grid;
gap: 1rem;
grid-template-columns: ${props => props.isMobile ? 'repeat(2, 2fr)' : 'repeat(3, 3fr)'};
max-width: ${props => props.isMobile ? '350px' : '800px'};
`

const LoadMore = styled.span`
font-size: 25px;
text-decoration: underline;
cursor: pointer;
`

const ShowAll = styled.div`
margin-top: 30px;
font-size: 18px;
text-decoration: underline;
cursor: pointer;
`

export const MeetTheNippies = ({ shuffledNippies }) => {
    const pageSize = 6;
    const [count, setCount] = useState(pageSize);
    const [currentScrollTop, setCurrentScrollTop] = useState(0)
    const isMobile = useIsMobile();

    const handleLoadMore = () => {
        setCurrentScrollTop(document.documentElement.scrollTop)
        setCount(count + pageSize)
    }

    useEffect(() => {
        window.scrollTo(0, currentScrollTop)
    }, [currentScrollTop])


    if (!shuffledNippies) {
        return null;
    }

    const visibleNippies = shuffledNippies.slice(0, count);

    return (
        <Container>
            <Title src={meetNippies} alt="meet the nippies" isMobile={isMobile} />
            <CardGrid isMobile={isMobile}>
                {visibleNippies.map((nippie, index) => (
                    <Card key={index} nippie={nippie} isMobile={isMobile} />
                ))}
            </CardGrid>
            {visibleNippies.length < Nippies.length &&
                <>
                    <LoadMore onClick={handleLoadMore}>Load More...</LoadMore>
                    <ShowAll onClick={() => setCount(count + Nippies.length)}>Show All</ShowAll>
                </>
            }
        </Container>
    );
}