interface FireData {
    readonly temperature: number
    readonly humidity: number
    readonly units: 'fahrenheit'
}

interface WaterData {
    readonly temperature: number
    readonly waterLevel: number
    readonly units: 'feet'
}

interface MockSensor  {
    readonly name: string
    readonly type: 'water' | 'fire'
    readonly lastUpdateTime?: string
    readonly latitude: number
    readonly longitude: number
}

export interface MockWaterSensor extends MockSensor {
    readonly sensorData: WaterData
}

export interface MockFireSensor extends MockSensor {
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
          temperature: 77.3,
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
            temperature: 75,
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
            temperature: 71.2,
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
            temperature: 78.2,
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
            temperature: 79.1,
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
            temperature: 76.2,
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
            temperature: 77,
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
            temperature: 75.5,
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
            temperature: 79,
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
            temperature: 75.5,
            units: 'feet'
        }
      },
]

export const mockWaterImageURL: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7-DAjTiBOYvn6N2td3geA18RopkxasPN1bg&usqp=CAU"
export const mockMapBackground: string = "https://s.hdnux.com/photos/55/36/77/11923416/3/1200x0.jpg"