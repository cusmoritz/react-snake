import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Grid from './Grid';

const App = () => {

    let snake = {
        body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],
        nextDirection: [0,1]
    };

    const [grid, setGrid] = useState(30)

  return (
    <div>
        Hello World!!!
        <Grid element={grid} setGrid={setGrid} grid={grid}></Grid>
    </div>
  )
};

// this loads the <App /> into the 'app' div
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);