// Your JS goes here
function createSquare(){
    let square = document.createElement('div')
    square.style.width = '11.1%'
    square.style.paddingBottom = '11.1%'
    square.style.float = 'left';
    return square
}
 function redCheckerSpace(){
    let redSquare = createSquare()
    redSquare.style.backgroundColor = 'red'
    document.body.append(redSquare)
    
}
function blackCheckerspace(){
let blackSquare = createSquare()
blackSquare.style.backgroundColor = 'black'
document.body.append(blackSquare)
}

for(var i = 0 ; i < 40 ; i++){
    redCheckerSpace()
    blackCheckerspace()
}

redCheckerSpace()
