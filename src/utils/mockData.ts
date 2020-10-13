interface FireData {
    readonly temperature: Number
    readonly humidity: Number
    readonly units: 'fahrenheit'
}

interface WaterData {
    readonly waterLevel: Number
    readonly units: 'feet'
}

interface MockSensor  {
    readonly name: String
    readonly type: 'water' | 'fire'
    readonly lastUpdateTime?: String
    readonly latitude: Number
    readonly longitude: Number
}

interface MockWaterSensor extends MockSensor {
    readonly sensorData: WaterData
}

interface MockFireSensor extends MockSensor {
    readonly sensorData: FireData
}

export const mockWaterSensors: Array<MockWaterSensor> = [
    {
      name: 'Site 1',
      type: 'water',
      latitude: 29.745297,
      longitude: -95.351207,
      sensorData: {
          waterLevel: 24,
          units: 'feet'
      }
    },
    {
        name: 'Site 2',
        type: 'water',
        latitude: 29.771687,
        longitude: -95.367730,
        sensorData: {
            waterLevel: 4,
            units: 'feet'
        }
      },
      {
        name: 'Site 3',
        type: 'water',
        latitude: 29.750330,
        longitude: -95.295699,
        sensorData: {
            waterLevel: 19,
            units: 'feet'
        }
      },
      {
        name: 'Site 4',
        type: 'water',
        latitude: 29.691700,
        longitude: -95.433467,
        sensorData: {
            waterLevel: 0.3,
            units: 'feet'
        }
      },
      {
        name: 'Site 5',
        type: 'water',
        latitude: 29.695951,
        longitude: -95.373125,
        sensorData: {
            waterLevel: 13.37,
            units: 'feet'
        }
      },
      {
        name: 'Site 6',
        type: 'water',
        latitude: 29.745297,
        longitude: -95.351207,
        sensorData: {
            waterLevel: 24,
            units: 'feet'
        }
      },
      {
        name: 'Site 7',
        type: 'water',
        latitude: 29.738543,
        longitude:  -95.435499,
        sensorData: {
            waterLevel: 7,
            units: 'feet'
        }
      },
      {
        name: 'Site 8',
        type: 'water',
        latitude: 29.770589,
        longitude:-95.304995,
        sensorData: {
            waterLevel: 0.5,
            units: 'feet'
        }
      },
      {
        name: 'Site 9',
        type: 'water',
        latitude: 29.764301,
        longitude: -95.365226,
        sensorData: {
            waterLevel: 13.8,
            units: 'feet'
        }
      },
      {
        name: 'Site 10',
        type: 'water',
        latitude: 29.720550,
        longitude: -95.344424,
        sensorData: {
            waterLevel: 68.8,
            units: 'feet'
        }
      },
]
