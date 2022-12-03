
import './App.css';
import React from 'react';
import Particles from 'react-particles-js'

function App() {
  return (
    <div className="App">
      Yash Sharma
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
      />
   
    </div>
  );
}

export default App;
