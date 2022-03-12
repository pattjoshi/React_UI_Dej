import React from 'react'
import styled from "styled-components";

// Square
const Square = styled.div`
 width: 60px;
  height: 60px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: square 25s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }

`

// Circle
const Circle = styled.div`
 width: 100px;
  height: 100px;
  border-radius:50%;
  background-color: #FFC0CB;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;
  animation: Circle 25s linear alternate infinite;

  @keyframes Circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }

`

//Rect
const Rect = styled.div`
 width: 50px;
  height: 100px;
  background-color:#90EE90;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: 50px;
  z-index: -1;
  animation: Rect 25s linear alternate infinite;

  @keyframes Rect {
    to {
      transform: translate(100vw, -50vh);
    }
  }

`

const AnimatedShapes = () => {
    return (
        <>
            <Square />
            <Circle />
            <Rect />
        </>
    )
}

export default AnimatedShapes