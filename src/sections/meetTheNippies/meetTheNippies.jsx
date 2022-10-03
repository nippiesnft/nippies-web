import React, { useEffect, useState } from 'react';
import Nippies from '../../nippiesData.json';
import { Card } from '../../components/card/card';
import { useIsMobile } from "../../hooks/useIsMobile";
import {
    Title,
    CardGrid,
    LoadMore,
    Sort
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
        if (count === pageSize) {
            // memoized - wont force update if numbers match
            setCount(0);
        }
        setCount(pageSize);
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
        <>
            <Title src={meetNippies} alt="meet the nippies" isMobile={isMobile} />
            <Sort onClick={sortCopy === "alphabetize" ? handleAlphabetize : handleShuffle}>{sortCopy}</Sort>
            <CardGrid isMobile={isMobile}>
                {visibleNippies.map((nippie, index) => (
                    <Card key={index} nippie={nippie} isMobile={isMobile} />
                ))}
            </CardGrid>
            {visibleNippies.length < Nippies.length &&
                <LoadMore onClick={handleLoadMore}>Load More...</LoadMore>
            }
        </>
    );
}