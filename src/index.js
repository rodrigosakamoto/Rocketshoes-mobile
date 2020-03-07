import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import React from 'react';
import Routes from './routes';

import './config/ReactotronConfig';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Routes />
      <FlashMessage position="top" duration={3000} />
    </Provider>
  );
}
