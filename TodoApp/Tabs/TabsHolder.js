import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WorkScreen from '../Screens/WorkScreen';
import StarsScreen from '../Screens/StarsScreen';
import Octicons from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();
const TabsHolder = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Work"
          component={WorkScreen}
          options={{
            tabBarIcon: () => (
              <Octicons name="checklist" size={20} color={'#FF7B54'} />
            ),
            headerStyle:{}
          }}
        />
        <Tab.Screen
          name="Stars"
          component={StarsScreen}
          options={{
            tabBarIcon: () => (
              <Octicons name="feed-star" size={20} color={'#FF7B54'} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabsHolder;
