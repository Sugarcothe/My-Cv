import React from 'react';
import './App.css';
import Cover from './coverpage';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="bd App">
      <Navbar />
      <Cover />
    </div>
  );
}

export default App;
