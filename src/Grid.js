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
                cell.push(<td id={[rowsInTable + ", " + cellsInRow]} key={cellsInRow}></td>)
            }
            // add cells to rows
            rows.push(<tr id={rowsInTable} key={rowsInTable}>{cell}</tr>)
        }
    };

    // mapping over grid to draw snake instead


    const Snake = ({snake}) => {
        console.log(snake)
        //draw snake function
        const drawSnake = (snake) => {
        snake.forEach(segment => {
            console.log('segment', segment)
            console.log('this mess', rows)
            const rowsss = rows[segment[0]];
            console.log('this mess inside', rowsss)
            console.log('this mess double nested', rows[segment[0].props])

            return (
                <>
                <td className="snake" >{segment}</td>
                </>

            );
            
            // console.log('segment here', segment)
            // // console.log(rows[segment[0]]);
            // // console.log(rows[segment[1]]);
            // const row = rows[segment[0]];
            // console.log(`this is row ${segment[0]}`, row);
            // const piece = row.props.children[segment[1]];
            // console.log('this is piece', piece);

        });
    };
    drawSnake(snake);

    };


    buildBoard();

    return (
            <table>
                <tbody>

                {/* add rows to board */}
                {rows}
                <Snake snake={snake} grid={grid}/>
                </tbody>
            </table>
    )

};



export default Grid;