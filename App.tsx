/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CachedFetchProvider} from 'react-cached-fetch';
import {MainNavigator} from './src/navigators';
import {AuthHeaders} from './src/core/constants/api';

// @refresh reset

const App = () => {
  return (
    <CachedFetchProvider
      globalOptions={{
        headers: {
          ...AuthHeaders,
        },
      }}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </CachedFetchProvider>
  );
};

export default App;
