import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react'
import { AppNavigator } from './AppNavigator/AppNavigator';


function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <AppNavigator />
    </Suspense>
  );
}

export default App;
