import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/navigations/navigation';

export default function App() {
  console.disableYellowBox=true;  
  return (
    <Navigation/>
  );
}

