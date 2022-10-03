import React, { useEffect, useState } from 'react';
import Nippies from '../../nippiesData.json';
import { Card } from '../../components/card/card';
import { useIsMobile } from "../../hooks/useIsMobile";
import {
    Container,
    Title,
    CardGrid,
    LoadMore,
    Alphabetize
} from './styles';
import { getNippies } from '../../helpers/nippiesData';

const meetNippies = require("../../img/design/meet-nippies.png");

export const MeetTheNippies = ({ nippies, setNippies }) => {
    const pageSize = 6;
    const [count, setCount] = useState(pageSize);
    const [sortCopy, setSortCopy] = useState("alphabetize");
    const [currentScrollTop, setCurrentScrollTop] = useState(0)
    const isMobile = useIsMobile();

    const handleLoadMore = () => {
        setCurrentScrollTop(document.documentElement.scrollTop)
        setCount(count + pageSize)
    }
    const handleAlphabetize = () => {
        setSortCopy("shuffle");
        setNippies(getNippies("alphabetize"));
        setCount(nippies.length);
    }

    const handleShuffle = () => {
        setSortCopy("alphabetize");
        setNippies(getNippies("shuffle"));
        setCount(pageSize);
    }

    useEffect(() => {
        window.scrollTo(0, currentScrollTop)
    }, [currentScrollTop])

    if (!nippies) return null;

    const visibleNippies = nippies.slice(0, count);

    return (
        <Container>
            <Title src={meetNippies} alt="meet the nippies" isMobile={isMobile} />
            <Alphabetize onClick={sortCopy === "alphabetize" ? handleAlphabetize : handleShuffle}>{sortCopy}</Alphabetize>
            <CardGrid isMobile={isMobile}>
                {visibleNippies.map((nippie, index) => (
                    <Card key={index} nippie={nippie} isMobile={isMobile} />
                ))}
            </CardGrid>
            {visibleNippies.length < Nippies.length &&
                <LoadMore onClick={handleLoadMore}>Load More...</LoadMore>
            }
        </Container>
    );
}