/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Login from './app/screens/Login'
import { Provider, useDispatch } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import configureStore from './app/store/index'
const store = configureStore()
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Login />
        </NavigationContainer>
  </Provider>
    // <>
    //  <Login />
    // </>
  );
};

export default App;
