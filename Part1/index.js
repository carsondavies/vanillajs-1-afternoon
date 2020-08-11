const board = []
const play = (clickedId) => {
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)
    
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O' 
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    }
    else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }
    
    const topLeft = board[0]
    const topMiddle = board[1]
    const topRight = board[2]
    const middleLeft = board[3]
    const middleMiddle = board[4]
    const middleRight = board[5]
    const bottomLeft = board[6]
    const bottomMiddle = board[7]
    const bottomRight = board[8]
    
    if(topLeft !== undefined && topLeft === topMiddle && topMiddle === topRight) {
        alert(`${topLeft} is the winner!`)
        return;
    }
    if(topLeft !== undefined && topLeft === middleMiddle && middleMiddle === bottomRight) {
        alert(`${topLeft} is the winner!`)
        return;
    }
    if(topLeft !== undefined && topLeft === middleLeft && middleLeft === bottomLeft) {
        alert(`${topLeft} is the winner!`)
        return;
    }
    if(topMiddle !== undefined && topMiddle === middleMiddle && middleMiddle === bottomMiddle) {
        alert(`${topMiddle} is the winner!`)
        return;
    }
    if(topRight !== undefined && topRight === middleRight && middleRight === bottomRight) {
        alert(`${topRight} is the winner!`)
        return;
    }
    if(middleLeft !== undefined && middleLeft === middleMiddle && middleMiddle === middleRight) {
        alert(`${middleLeft} is the winner!`)
        return;
    }
    if(bottomLeft !== undefined && bottomLeft === middleMiddle && middleMiddle === topRight) {
        alert(`${bottomLeft} is the winner!`)
        return;
    }
    if(bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomMiddle === bottomRight) {
        alert(`${bottomLeft} is the winner!`)
        return;
    }
    let boardFull = true
    for(i = 0; i <= 8; i++) {
        if(board[i] === undefined){
            boardFull = false
        }
    }
    if(boardFull === true) {
    alert(`CATS GAME`)
    }

}

const resetGame = () => {
let resGame = document.getElementsByTagName('td')  
resGame[0].innerText = ''
resGame[1].innerText = ''
resGame[2].innerText = ''
resGame[3].innerText = ''
resGame[4].innerText = ''
resGame[5].innerText = ''
resGame[6].innerText = ''
resGame[7].innerText = ''
resGame[8].innerText = ''

    // let nodeList = document.getElementsByTagName('td')
// console.log(nodeList)
//     for(let j=0; j < nodeList.length; j++) {
//         // (nodeList[j] === 'X' || nodeList[j] === 'O') 
//        nodeList[j] = ''
//     }
//     console.log('gameReset')
}
