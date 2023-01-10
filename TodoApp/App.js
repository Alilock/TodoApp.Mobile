import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsHolder from './Tabs/TabsHolder';
import {TodosProvider} from './store/TodosContext';
const App = () => {
  return (
    <>
      <TodosProvider>
        <NavigationContainer>
          <TabsHolder />
        </NavigationContainer>
      </TodosProvider>
    </>
  );
};

export default App;
