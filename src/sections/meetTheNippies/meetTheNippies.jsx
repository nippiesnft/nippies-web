import React, { useState } from 'react';
import Nippies from '../../nippiesData.json';
import { Card } from '../../components/card/card';
import { useIsMobile } from "../../hooks/useIsMobile";
import {
    Title,
    CardGrid,
    LoadMore,
    Sort,
    SortContainer
} from './styles';
import { getNippies } from '../../helpers/nippiesData';

const meetNippies = require("../../img/design/meet-nippies.png");

export const MeetTheNippies = ({ nippies, setNippies }) => {
    const pageSize = 6;
    const [count, setCount] = useState(pageSize);
    const [sortCopy, setSortCopy] = useState("Alphabetize");
    const isMobile = useIsMobile();

    const handleLoadMore = () => {
        setCount(count + pageSize)
    }
    const handleAlphabetize = () => {
        setSortCopy("Shuffle");
        setNippies(getNippies("Alphabetize"));
        if (count === pageSize) {
            // memoized - wont force update if numbers match
            setCount(0);
        }
        setCount(pageSize);
    }

    const handleShuffle = () => {
        setSortCopy("Alphabetize");
        setNippies(getNippies("Shuffle"));
        setCount(pageSize);
    }

    const handleSortViaKeyboard = (event) => {
        if (event.keyCode === 13) {
            return sortCopy === "Alphabetize" ? handleAlphabetize() : handleShuffle()
        }
    }

    const handleLoadMoreViaKeyboard = (event) => {
        if (event.keyCode === 13) {
            return handleLoadMore();
        }
    }

    if (!nippies) return null;

    const visibleNippies = nippies.slice(0, count);

    return (
        <>
            <Title src={meetNippies} alt="meet the nippies" isMobile={isMobile} tabIndex={0} />
            <SortContainer isMobile={isMobile}>
                <Sort
                    isMobile={isMobile}
                    tabIndex={0}
                    onClick={sortCopy === "Alphabetize" ? handleAlphabetize : handleShuffle}
                    onKeyDown={(event) => handleSortViaKeyboard(event)}
                >{sortCopy}</Sort>
            </SortContainer>
            <CardGrid isMobile={isMobile}>
                {visibleNippies.map((nippie, index) => (
                    <Card key={index} nippie={nippie} isMobile={isMobile} />
                ))}
            </CardGrid>
            {visibleNippies.length < Nippies.length &&
                <LoadMore
                    isMobile={isMobile}
                    tabIndex={0}
                    onClick={handleLoadMore}
                    onKeyDown={handleLoadMoreViaKeyboard}
                >
                    Load More...
                </LoadMore>
            }
        </>
    );
}