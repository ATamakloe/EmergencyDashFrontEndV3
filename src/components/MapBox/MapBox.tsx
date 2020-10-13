import React from 'react';
import { mockMapBackground } from '../../utils/mockData';

function MapBox() {
    return (
        <div style={{ overflowY:"hidden", overflowX:"hidden"}}>
            <img src={mockMapBackground} alt="Downtown Houston Satellite"/>
        </div>
    )
}

export default MapBox