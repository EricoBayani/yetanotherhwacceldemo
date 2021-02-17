import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render(){
        return (
    <div className="App">
  
    <canvas id="webgl" width="600" height="600">
      Please use a browser that supports "canvas"
    </canvas>
    <br />

    <div>
      <button for="NormalView" id="NormalView">NormalView</button>
    </div>

    <div>
      <button for="LightingOn" id="LightingOn">Toggle Lighting</button>
    </div>

    <div>
      <label for="SetPlainCubes">Set Number of Plain Cubes</label>
      <input type="number" id="SetPlainCubes" name="SetPlainCubes" />
    </div>
    
    <div>
      <label for="fps">fps</label>
      <output type="text" id="fps" name="fps" />
    </div>

    <br />
    <div>
      <label for="mouseX">mouseX</label>
      <output type="text" id="mouseX" name="mouseX" />
    </div>
    Extras(?):
    <br />
    - This is just my old world. It runs a lot more efficiently though, and can handle about 500,000+ cubes on my computer. The sky I changed too. 
    </div>
                
        );
    }
}

export default App;
