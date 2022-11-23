import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

const Grid = ({grid, setGrid, color, snake, setSnake, direction, setDirection}) => {

    console.log('grid check', grid);

    const Board = ({grid, snake}) => {
        let rows = [];

        for (let rowsInTable = 0; rowsInTable < grid; rowsInTable++){
            // create rows
            let cell = [];
            for (let cellsInRow = 0; cellsInRow < grid; cellsInRow++){
                //create cells
                cell.push(<td id={[rowsInTable + ", " + cellsInRow]} key={cellsInRow}></td>)
            }
            // add cells to rows
            rows.push(<tr id={rowsInTable} key={rowsInTable}>{cell}</tr>)
        };

        // get snake pieces
        // snake.forEach(bodyPart => {
        //     console.log('this should be the snake', rows[bodyPart[0].props.children])
        // })



        return (
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
        
    };

    const Snake = ({snake}) => {
        console.log('snake in snake', snake)

        snake.forEach(segment => {
            // console.log('segment in snake', segment)
            return (
                <>
                <p>{segment[0]}</p>
                </>
            );
        });
    };

    return (
        <>
        <Board grid={grid} snake={snake}/>
        <Snake snake={snake} />
        </>

    )
};

export default Grid;