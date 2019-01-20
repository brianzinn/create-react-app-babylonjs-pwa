import React, { Component } from 'react';
import { Engine, Scene, HemisphericLight, ArcRotateCamera, Skybox } from 'react-babylonjs'
import ScaledModelWithProgress from './ScaledModelWithProgress'
import './App.css';
import { Vector3, Color3  } from 'babylonjs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Engine antialias={true} adaptToDeviceRatio={true} canvasId="game-canvas">
          <Scene>
            <ArcRotateCamera name="camera" alpha={Math.PI / 2} beta={Math.PI / 3}
              radius={3} target={Vector3.Zero()} minZ={0.001}
            />
            
            <HemisphericLight name="light" direction={Vector3.Up()} />
            <ScaledModelWithProgress
              rootUrl={`${process.env.PUBLIC_URL}/assets/glTF/`} sceneFilename="BoomBox.gltf"
              scaleTo={1} 
              progressBarColor={Color3.FromInts(255, 165, 0)} center={new Vector3(0, -0.2, 0)}
            />
            
            <Skybox rootUrl={`${process.env.PUBLIC_URL}/assets/skybox/TropicalSunnyDay`} />
          </Scene>
        </Engine>
      </div>
    );
  }
}

export default App;
