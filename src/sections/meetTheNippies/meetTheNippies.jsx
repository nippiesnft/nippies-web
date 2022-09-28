import React, { useEffect, useState } from 'react';
import Nippies from '../../nippiesData.json';
import { Card } from '../../components/card/card';
import { useIsMobile } from "../../hooks/useIsMobile";
import { HiddenAnchor } from '../../globalStyles';
import {
    Container,
    Title,
    CardGrid,
    LoadMore,
    ShowAll
} from './styles';

const meetNippies = require("../../img/design/meet-nippies.png");

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