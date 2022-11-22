import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

const Grid = ({grid, setGrid, color, snake, setSnake, direction, setDirection}) => {

    console.log('grid check', grid);

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
        drawSnake();
    };

    //draw snake function
    const drawSnake = () => {
        snake.forEach(segment => {
            console.log('segment here', segment)
            // console.log(rows[segment[0]]);
            // console.log(rows[segment[1]]);
            const row = rows[segment[0]];
            console.log(`this is row ${segment[0]}`, row);
            const piece = row.props.children[segment[1]];
            console.log('this is piece', piece);
            piece.props.className="snake";
            // at segment[0] and segment[1]
            
            // console.log('this might be piece', piece)     
        });
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