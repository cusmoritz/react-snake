import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

const Grid = ({grid, setGrid}) => {

    console.log(grid);

    let rows = [];


    const buildBoard = () => {
        for (let rowsInTable = 0; rowsInTable < grid; rowsInTable++){
            // create rows
            let cell = [];
            for (let cellsInRow = 0; cellsInRow < grid; cellsInRow++){
                //create cells
                cell.push(<td id={cellsInRow} key={cellsInRow}></td>)
            }
            // add cells to rows
            rows.push(<tr id={rowsInTable} key={rowsInTable}>{cell}</tr>)
        }
    };
    buildBoard();
    return (
            <table>
                <tbody>
                {/* add rows to board */}
                {rows}
                </tbody>
            </table>
    )

}

export default Grid;