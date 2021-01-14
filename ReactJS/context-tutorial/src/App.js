import React from 'react';
import ColorBox from './Components/ColorBox';
import { ColorProvider } from './Contexts/color';
import SelectColors from './Components/SelectColors';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors/>
        <ColorBox/>
      </div>
    </ColorProvider>
  );
};

export default App;
