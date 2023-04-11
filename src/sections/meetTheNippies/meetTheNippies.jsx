import React, { useState, useEffect } from 'react';
import Nippies from '../../nippiesData.json';
import { Card } from '../../components/card/card';
import { useIsMobile } from "../../hooks/useIsMobile";
import {
    Title,
    CardGrid,
    LoadAll,
    LoadMore,
    ExploreCTA,
    ExploreContainer,
    Sort,
    SortContainer,
    SwapArtCTA,
    TwitterLink,
    TwitterLinkContainer,
} from './styles';
import { getNippies } from '../../helpers/nippiesData';

const meetNippies = require("../../img/design/meet-nippies.png");

export const MeetTheNippies = ({ nippies, setNippies }) => {
    const pageSize = 6;
    const [activeArt, setActiveArt] = useState("Nippies");
    const [count, setCount] = useState(pageSize);
    const [sortCopy, setSortCopy] = useState("Alphabetize");
    const isMobile = useIsMobile();

    const handleLoadMore = () => {
        setCount(count + pageSize)
    }

    const handleLoadAll = () => {
        setCount(nippies.length)
    }

    const handleAlphabetize = () => {
        setSortCopy("Shuffle");
        setNippies(getNippies("Alphabetize", activeArt));
        if (count === pageSize) {
            // memoized - wont force update if numbers match
            setCount(0);
        }
        setCount(count || pageSize);
    }

    const handleShuffle = () => {
        setSortCopy("Alphabetize");
        setNippies(getNippies("Shuffle", activeArt));
        setCount(count || pageSize);
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

    const handleLoadAllViaKeyboard = (event) => {
        if (event.keyCode === 13) {
            return handleLoadAll();
        }
    }

    useEffect(() => {
        const sortOrder = sortCopy === "Alphabetize" ? "Shuffle" : "Alphabetize";
        setNippies(getNippies(sortOrder, activeArt));
    }, [activeArt, setNippies, sortCopy])

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
                <SwapArtCTA
                    isMobile={isMobile}
                    onClick={() => activeArt === "Nippies" ? setActiveArt("BitNips") : setActiveArt("Nippies")}
                >
                    {activeArt === "Nippies" ? "Show BitNips" : "Show Nippies"}
                </SwapArtCTA>
            </SortContainer>
            <CardGrid isMobile={isMobile}>
                {visibleNippies.map((nippie, index) => (
                    <Card key={index} nippie={nippie} activeArt={activeArt} />
                ))}
            </CardGrid>
            {count < Nippies.length &&
                <LoadAll
                    isMobile={isMobile}
                    tabIndex={0}
                    onClick={handleLoadAll}
                    onKeyDown={handleLoadAllViaKeyboard}
                >
                    Load All
                </LoadAll>
            }
            {visibleNippies.length < Nippies.length &&
                <LoadMore
                    isMobile={isMobile}
                    tabIndex={0}
                    onClick={handleLoadMore}
                    onKeyDown={handleLoadMoreViaKeyboard}
                >
                    Load More
                </LoadMore>
            }
            {activeArt === "Nippies" &&
                <ExploreContainer>
                    <TwitterLinkContainer isMobile={isMobile}>
                        Nippies Artwork by {" "}
                        <TwitterLink
                            isMobile={isMobile}
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://twitter.com/@scubasteveart">
                            @ScubaSteveArt
                        </TwitterLink>.
                    </TwitterLinkContainer>
                </ExploreContainer>
            }
            {activeArt === "BitNips" &&
                <ExploreContainer>
                    <TwitterLinkContainer isMobile={isMobile}>
                        BitNip Artwork by {" "}
                        <TwitterLink
                            isMobile={isMobile}
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://twitter.com/@RippityDoo">
                            @RippityDoo
                        </TwitterLink>.
                    </TwitterLinkContainer>
                    <ExploreCTA
                        isMobile={isMobile}
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://ordinals.com/inscriptions/921903"
                    >
                        Explore our Ordinal Block
                    </ExploreCTA>
                </ExploreContainer>
            }
        </>
    );
}