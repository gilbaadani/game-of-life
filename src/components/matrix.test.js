import {updateMatrix, checkTwoMatrixEquality} from '../helper_functions/matrix_calculation'

test('matrix 4X4 calculation', () => {
  const oldMatrix = [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]
  const newMatrix = updateMatrix(oldMatrix,4)
  const expectedResult = [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]
  const compareToExpectedResult = checkTwoMatrixEquality(newMatrix,expectedResult);
  
  expect(compareToExpectedResult).toEqual(true);
});

test('matrix 5X5 calculation', () => {
  const oldMatrix = [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]]
  const newMatrix = updateMatrix(oldMatrix,5)
  const expectedResult = [[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]]  
  const compareToExpectedResult = checkTwoMatrixEquality(newMatrix,expectedResult);
  
  expect(compareToExpectedResult).toEqual(true);
});

test('matrix 6X6 calculation', () => {
  const oldMatrix = [[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,1,0,0,0],[0,0,0,1,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]]
  const newMatrix = updateMatrix(oldMatrix,6)
  const expectedResult = [[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]]
  const compareToExpectedResult = checkTwoMatrixEquality(newMatrix,expectedResult);
  
  expect(compareToExpectedResult).toEqual(true);
});

test('matrix 6X6 blinker calculation', () => {
  const oldMatrix = [[0,0,0,0,0,0],[0,0,0,1,0,0],[0,1,0,0,1,0],[0,1,0,0,1,0],[0,0,1,0,0,0],[0,0,0,0,0,0]]
  const newMatrix = updateMatrix(oldMatrix,6)
  const expectedResult = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,1,1,1,0],[0,1,1,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]
  const compareToExpectedResult = checkTwoMatrixEquality(newMatrix,expectedResult);
  
  expect(compareToExpectedResult).toEqual(true);
});
