import React, { useState, useEffect, useRef } from 'react';
import {updateMatrix} from '../helper_functions/matrix_calculation'
const Matrix = (props) => {
  const matrixLength = 50
  const [matrix, setMatrix] = useState(
    [...Array(matrixLength)].map(() => [...Array(matrixLength).fill(null).map(()=>Math.round(Math.random()))])

  );

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    const updatedMatrix = updateMatrix(matrix,matrixLength);
    setMatrix(updatedMatrix);
  }, 400);


  return (
    <div style={{marginBottom:30}}>

<h1>Seeking Alpha Home Task</h1>

    {matrix.map((row,i) => {
      return <div style={{display:'flex',justifyContent: 'center'}} key={i}>
       {row.map((cell,j)=>{
            return <div key={j} style={{backgroundColor:cell === 1 && 'black',border: '2px solid #e7e7e7', width: 12,height: 12}}>
            </div>
          })
        }

       </div>
       
     
    })
    }
    </div>
  );
};

export default Matrix;






