import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { MockWaterSensor } from '../../../utils/mockData'
import {SensorCard, SensorCardProps} from '../SensorCard/SensorCard';

interface SensorListProps {
    sensorList: MockWaterSensor[];
}

function SensorList({ sensorList }: SensorListProps) {
    const arrayOfSensorCards = sensorList.map(waterSensor => {
        const sensorCardProps: SensorCardProps = {
            name: waterSensor.name,
            temperature: waterSensor.sensorData.temperature,
            waterLevel: waterSensor.sensorData.waterLevel
        }
        return (
            <ListItem button>
               <SensorCard {...sensorCardProps} />
            </ListItem>
        )
    });

    return (
        <List style={{ maxHeight: '95vh', overflowY: 'scroll'}} aria-label="list of sensors">
            {arrayOfSensorCards}
        </List>
    )
}

export default SensorList