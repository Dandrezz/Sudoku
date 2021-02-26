import { useState } from "react";
import "./App.css";

function App() {

  const matrixIncial = [
    [0, 0, 3, 0, 4, 0, 0, 6, 7],
    [0, 0, 4, 0, 0, 8, 2, 0, 0],
    [0, 9, 6, 0, 0, 0, 3, 8, 0],
    [5, 0, 7, 8, 0, 0, 9, 0, 2],
    [0, 0, 9, 0, 0, 5, 4, 3, 0],
    [3, 0, 0, 0, 0, 0, 6, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 0, 0],
    [4, 3, 2, 0, 7, 0, 0, 0, 0],
    [0, 8, 0, 0, 2, 0, 5, 4, 0], 
  ]

  const [matrixA, setMatrixRes] = useState(matrixIncial);
  
  const llenarMatrix = () => {
    let matrixB = [], matrixC = [];
    let matrix = [...matrixA];
    for (let i = 0; i < 9; i++) {
      matrixB[i] = new Array(9).fill(0);
      matrixC[i] = new Array(9).fill(0);
    }
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        matrixB[i][j] = (matrix[j][i]);
      }
    }
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          matrixC[i][j * 3 + k] = (matrix[Math.floor(i / 3) * 3 + j][(i % 3) * 3 + k]);
        }
      }
    }
    let tmp = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if(matrix[i][j]===0){
          for (let k = 1; k < 10; k++) {
            if( !matrix[i].includes(k) && !matrixB[j].includes(k) && !matrixC[Math.floor(i/3)*3+Math.floor(j/3)].includes(k) ){
              tmp.push(k)
            }
          }
          if(tmp.length===1){
            matrix[i][j]=tmp[0];
            matrixB[j][i]=tmp[0];
            matrixC[Math.floor(i/3)*3+Math.floor(j/3)][(i%3)*3+j%3]=tmp[0];
          }
          tmp = [];
        }        
      }      
    }
    setMatrixRes([...matrix]);
  }

  const resolverMatrix = () => {
    llenarMatrix()
  }

  const limpiarSudoku = () => {
    setMatrixRes(matrixIncial);
  }

  return (
    <div className="App top-3">
      <h1 className="center">Sudoku</h1>
      <table 
        className="matrix-table top-3"
      >
        <tbody>
          {matrixA.map((row, indexRow) => (
            <tr key={indexRow}>
              {row.map((col, indexCol) => (
                <th
                  className={`${
                    parseInt((parseInt(indexRow / 3) * 3 + indexCol) / 3) %
                      2 ===
                    1
                      ? `light`
                      : `dark`
                  }`}
                  key={indexCol}
                >
                  {col !== 0 ? col : ""}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="centrar-btn top-3"
        onClick={()=>(resolverMatrix())}
      >Llenar Sudoku</button>
      <button
        className="centrar-btn top-3"
        onClick={()=>(limpiarSudoku())}
      >Limpiar Sudoku</button>
    </div>
  );
}

export default App;
