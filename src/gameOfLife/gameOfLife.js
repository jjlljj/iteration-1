export class cell {
  constructor(isAlive = true, index) {
    this.isAlive,
    this.index
  }



}


export function gameOfLife(rowWidth) {
  const cells = buildGame(rowWidth)
  
  setTimeout(lifeCycle(rowWidth, cells), 200)
  //iterate through game every generation at some time leigngth
}


export function buildGame(rowWidth){
  const cellsLength = rowWidth*rowWidth

  const gameArray = []

  for ( let i = 0; i < cellsLength; i++) {
    let isAlive = i % 3 === 0 ? true : false 
    gameArray.push(new cell(isAlive, i))
  }
  return gameArray
}

export function lifeCycle(rowWidth, cells) {
  

  // track current  index.
  
  // track current + rowWidth
  // call checLR w/ prev and next rows

  //[ t, f, f, f, f, t, t, f ]
}

export function checkSurroundings(rowWidth, position, cells) {
  let above = []
  let below = []
  if (position - rowWidth > 0) {
    above = checkLeftRight(position, cells)
  }
}


//call this on currentRow, AboveRow, BelowRow
export function checkLeftRight(position, cells){ 
  const left = cells[position - 1].isAlive
  const center = cells[position].isAlive
  const right = cells[position + 1].isAlive

  return [ left, center, right ]
}

// setTimout(lifeCycle(), 800)
