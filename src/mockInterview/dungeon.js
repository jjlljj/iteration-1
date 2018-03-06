const buildDungeon = (size) => {

  const dungeonArray = []

  for ( let i = 0; i < size; i++ ) {
    let rowArray = []
    for ( let j = 0; j < size; j++ ) {
       rowArray.push(buildCell( dungeonArray, size, i, j, rowArray ))
    }
   dungeonArray.push(rowArray)
  }

  return dungeonArray
}

const buildCell = ( dungeonArray, size, i, j, rowArray ) => {
  
  const surroundingCells = []

  if ( j > 0 ) {
    surroundingCells.push(rowArray[j-1])
  }
  if ( i > 0 ) {
    surroundingCells.push(dungeonArray[i-1][j])
    surroundingCells.push(dungeonArray[i-1][j-1])
    surroundingCells.push(dungeonArray[i-1][j+1])
  }
 

  const possibilities = [ ' ', ' ', ' ', 'M']

  if (surroundingCells.includes('M')) {
    possibilities.pop()
  } 

  const random = Math.floor(Math.random()*possibilities.length)
  return  possibilities[random] 
} 


console.log(buildDungeon(15))

// const buildDungeon = (size) => {

//   const dungeonArray = []

//   for ( let i = 0; i < size*size; i++ ) {
//     dungeonArray.push(buildCell( dungeonArray, size, i ))
//   }

//   return dungeonArray
// }

// const buildCell = ( dungeonArray, size, i ) => {
//   const surroundingCells = []

//   surroundingCells.push(dungeonArray[i-1])
//   surroundingCells.push(dungeonArray[i-size])
//   surroundingCells.push(dungeonArray[i-size-1])
//   surroundingCells.push(dungeonArray[i-size+1])

//   const possibilities = [ 't', '#', '_', 'M']

//   if (surroundingCells.includes('M')) {
//     possiblities.pop()
//   } 

//   const random = Math.floor(Math.random()*possibilities.length)
//   return  possibilities[random] 
// } 

// look up, only care about the first monster found before you

// interview questions are problems where n2 is the answer --> checking on a grid






// //Write a method that takes in a parameter `size` which builds and returns a two-dimensional square grid where each side of the grid is `size` cells.

// Next, your method should populate the dungeon with one of four markers:

// `M` indicates a monster
// `t` indicates treasure
// `#` indicates a rock pile
// `_` indicates empty space
// All markers on the map should have an approximately equal chance of appearing on the map.

// We want to avoid an overrun of monsters in our game world. Your map should not contain any cells where a monster exists in any cells around another monster (including diagonally).

// Output of the map should look something like this, depending on your programming language, where size is 4:
