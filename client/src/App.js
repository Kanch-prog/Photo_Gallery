import React from 'react';
import ImageUpload from './components/ImageUpload';
import ImageGrid from './components/ImageGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Unsplash Clone</h1>
      <ImageUpload />
      <ImageGrid />
    </div>
  );
}

export default App;
