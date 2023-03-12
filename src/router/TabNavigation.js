import React from 'react';

import Header from '../components/header/Header';
import Convert from '../screens/Convert/Convert';
import Charts from '../screens/Charts/Charts';
import Comparison from '../screens/Comparison/Comparison';
import Historical from '../screens/Historical/Historical';
import History from '../screens/History/History';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, Platform} from 'react-native';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#0e80e6',
          tabBarStyle: {
            height: Platform.OS === 'android' ? 70 : 80,
            paddingBottom: Platform.OS === 'android' ? 15 : 23,
          },
          headerBackground: () => (
            <Image
              style={{height: '100%'}}
              source={require('../assets/img/back.png')}
            />
          ),
          tabBarLabelStyle: {
            fontFamily: 'Roboto-Black',
          },
        }}>
        <Tab.Screen
          name="Convert"
          component={Convert}
          options={{
            headerTitle: () => <Header name="Convert" />,
            tabBarLabel: 'CONVERT',
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('../assets/img/convert.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#0e80e6' : 'black',
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Charts"
          component={Charts}
          options={{
            headerTitle: () => <Header name="Charts" />,
            tabBarLabel: 'CHARTS',
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('../assets/img/charts.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#0e80e6' : 'black',
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Historical"
          component={Historical}
          options={{
            headerTitle: () => <Header name="Historical" />,
            tabBarLabel: 'HISTORICAL',
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('../assets/img/historical.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#0e80e6' : 'black',
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Comparison"
          component={Comparison}
          options={{
            headerTitle: () => <Header name="Comparison" />,
            tabBarLabel: 'COMPARISON',
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('../assets/img/comparison.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#0e80e6' : 'black',
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            headerTitle: () => <Header name="History" />,
            tabBarLabel: 'HISTORY',
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('../assets/img/history.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#0e80e6' : 'black',
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
