import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Grid from './Grid';

const App = () => {

    const [grid, setGrid] = useState(30)
    const [snake, setSnake] = useState([ [10, 5], [10, 6], [10, 7], [10, 8] ] );
    const [direction, setDirection] = useState([ 0,1 ]);
    const [color, setColor] = useState("red");

  return (
    <div>
        Hello World!!!
        <Grid element={grid} setGrid={setGrid} grid={grid} snake={snake} setSnake={setSnake} direction={direction} setDirection={setDirection} color={color}></Grid>
    </div>
  )
};

// this loads the <App /> into the 'app' div
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);