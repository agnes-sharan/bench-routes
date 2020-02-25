import React from 'react';
import './App.css';
import GlobalLayout from './components/layouts/GlobalLayout';
import Navigator from './router/Navigation';

function App() {
  return (
    <GlobalLayout>
      <Navigator />
    </GlobalLayout>
  );
}

export default App;
