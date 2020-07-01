import React from 'react';
import './App.css';
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

function App() {
    return (
        <ColorContext.Provider value={{color1:'red'}}>
            <div>
                <ColorBox/>
            </div>
        </ColorContext.Provider>
    );
}

export default App;
