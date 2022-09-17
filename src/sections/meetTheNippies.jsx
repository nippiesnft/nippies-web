import React, { useState } from 'react';
import Nippies from '../nippiesData.json';
import { Card } from '../components/card';

const meetNippies = require("../img/design/meet-nippies.png");

export const MeetTheNippies = ({ isMobile }) => {
    const pageSize = 6;
    const [count, setCount] = useState(pageSize);

    const meetNippiesStyles = {
        maxWidth: isMobile ? 200 : 500,
    };

    const visibleNippies = Nippies.slice(0, count)

    return (
        <div style={{ marginLeft: 20 }}>
            <img src={meetNippies} style={meetNippiesStyles} alt="meet the nippies" />
            <div className="card-grid" style={{ gridTemplateColumns: window.innerWidth < 700 ? 'repeat(2, 2fr)' : 'repeat(3, 3fr)', maxWidth: window.innerWidth < 700 ? 350 : 800 }}>
                {visibleNippies.map((nippie) => (
                    <Card nippie={nippie} isMobile={isMobile} />
                ))}
            </div>

            {visibleNippies.length < Nippies.length &&
                <>
                    <span className="load-more" onClick={() => setCount(count + pageSize)}>Load More...</span>
                    <div className="show-all" onClick={() => setCount(count + Nippies.length)}>Show All</div>
                </>
            }
        </div>
    );
}