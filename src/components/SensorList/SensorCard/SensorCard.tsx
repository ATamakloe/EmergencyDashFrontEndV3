import React from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography } from '@material-ui/core';
import { mockWaterImageURL } from '../../../utils/mockData'


export interface SensorCardProps {
    name: string;
    temperature: number;
    waterLevel: number;
}

export function SensorCard({name, temperature, waterLevel} : SensorCardProps) {
    return (
        <Card style={{width: 350}}>
            <CardHeader title={name}/>
            <div style={{display:"flex", flexDirection:'row'}}>
            <CardMedia title="Site Snapshot" image={mockWaterImageURL} style={{ height:120, width:120 }}/>
            <CardContent>
            <Typography>Water Height: {waterLevel}ft </Typography>
            <Typography>Temperature: {temperature}°F </Typography>
            </CardContent>
            </div>
        </Card>
    )
}

