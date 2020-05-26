export function updateMatrix(currentMatrix,matrixLength) {

  let newMatrix = [];
  for(let i=0; i<matrixLength; i++) {
    const newRow = [];
    for(let j=0; j<matrixLength; j++) {
    
      let liveNeighbors = 0

      if(j<(matrixLength-1) && currentMatrix[i][j+1]===1){ //next
        liveNeighbors++;
      }

      if (j>0 && currentMatrix[i][j-1]===1) { //prev
        liveNeighbors++;
      }
    

      if (i<(matrixLength-1) && currentMatrix[i+1][j]===1) { //above
        liveNeighbors++;
      }


      if (i>0 && currentMatrix[i-1][j]===1) { //underneath
        liveNeighbors++;
    
      }

      if (i<(matrixLength-1) && j<(matrixLength-1) && currentMatrix[i+1][j+1]) { // bottom right
        liveNeighbors++;
      }

      if (i<(matrixLength-1) && j>0 && currentMatrix[i+1][j-1]) { // bottom left
        liveNeighbors++;
      }

      if (i>0 && j<(matrixLength-1) && currentMatrix[i-1][j+1]) { // top right
        liveNeighbors++;
      }

      if (i>0 && j>0 && currentMatrix[i-1][j-1]) { // top left
        liveNeighbors++;
      }


      if (currentMatrix[i][j]===1) {

          if (liveNeighbors<2 || liveNeighbors>3) {
            newRow.push(0)

          }
          else{
            newRow.push(1)
          }

      } else {
          if (liveNeighbors===3) {
            newRow.push(1)
          }

          else{
            newRow.push(0)
          }

      }

    }
    newMatrix.push(newRow);
  }


  return newMatrix;
}

export function checkTwoMatrixEquality(firstMatrix, secondMatrix) {
  
  if (firstMatrix.length !== secondMatrix.length) return false;

    for (let i = 0; i < firstMatrix.length; i++) {
      let arr1 = firstMatrix[i];
      let arr2 = secondMatrix[i];
      
      if (arr1.length !== arr2.length) return false;

      for (let j = 0; j < arr1.length; j++) {
        if (arr1[j] !== arr2[j]) return false;
      }
     
    }
    
    return true;

  }