import React from 'react';
import DashboardHeader from '../src/components/DashboardHeader/DashboardHeader'
import SensorList from '../src/components/SensorList/SensorList/SensorList'
import MapBox from '../src/components/MapBox/MapBox'
import { mockWaterSensors } from './utils/mockData'
function App() {
  return (
  <div style={{ height: '100vh', overflowY:"hidden"}}>
    <DashboardHeader/>
    <div style={{display:"flex", flexDirection:'row', overflowX:"hidden", overflowY: 'hidden'}}>
    <SensorList sensorList={mockWaterSensors} />
    <MapBox />
    </div>
    </div>
  );
}

export default App;
