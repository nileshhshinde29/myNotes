import './App.css';
import React, { Suspense } from 'react'
import { AppNavigator } from './AppNavigator/AppNavigator';


function App() {
  return (
    <div className='App'>
      <Suspense fallback={<>Loading</>}>
        <AppNavigator />
      </Suspense>
    </div>
  );
}
export default App;
