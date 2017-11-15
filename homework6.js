const printDiamond = function (height, str) {
  if (height%2 === 0) {
    height = height + 1;
  }
  const printString = function (str, num){
    if (num <= 0) {
      return "";
    }
    return str + printString(str,num - 1);
  };
  const printHeight = function (numSpaces, numStrings, heightHelper) {
    if (heightHelper > height){
      return;
    }
    console.log(printString(" ", numSpaces) + printString(str, numStrings));
    if (heightHelper < height/2) {
      printHeight(numSpaces-1, numStrings+2, heightHelper + 1);
    }
    else if(heightHelper>height/2) {
      printHeight(numSpaces+1,numStrings-2,heightHelper+1);
    }
  };
  printHeight((height-1)/2, 1, 1);

};
printDiamond(6,"J");


//for loop
function printDiamond1(height,str){
let numSpaces = (height-1) / 2;
let numStrings = 1;

  const printString = function (str, n){
    let smth="";
    for(let smtg = 0;smtg < n; smtg++){
      smth += str;

    }
  return smth;

  };



for(let heightHelper = 1; !(heightHelper > height) ; heightHelper++)
{
  console.log(printString(" ",numSpaces) + printString(str,numStrings));
  if(heightHelper < height/2 ){
    numSpaces --;
    numStrings += 2;
  }
  else if(heightHelper > height/2){
    numSpaces ++;
    numStrings -= 2;
  }
}
}
printDiamond(5,"J");
//tic tac toe game

const random = function(num){
  return Math.floor(Math.random() * num);
}



const board = [
  ["","",""],
  ["","",""],
  ["","",""]
]
//nextMove
const nextMove = function(board, isX) {
  while(true){
const vandakX = random(3)
const vandakY = random(3)
if(board[vandakY][vandakX] === "" ) return [vandakY, vandakX];
}
}

//makeMove
const makeMove = function (board,location,isX){
const y = location[0];
const x = location[1];
if(board[y][x] !== "") return -1;
if(isX){
  board[y][x] = "x";
}
else board[y][x] = "o";

return 0;
}
//findWinner
const findWinner = function (board){
  if(board[0] === ["x","x","x"] || board[0] === ["o","o","o"] )
  return {
    winner: board[0][1],
    winningLocations: [[0, 0], [0, 1], [0, 2]] // locations of winning Xs and Os first line
} ;
 if(board[1] === ["x","x","x"] || board[1] === ["o","o","o"])
return {
  winner: board[1][1],
  winningLocations: [[1, 0], [1, 1], [1, 2]] // locations of winning Xs and Os second line
} ;
if(board[2] === ["x","x","x"] || board[2] === ["o","o","o"])
return {
  winner: board[2][2],
  winningLocations: [[2, 0], [2, 1], [2, 2]] // locations of winning Xs and Os third line
} ;

for(let i = 0; i<3 ;i++){
  if(board[i][0] === "x" && board[i][1] === "x" && board[i][2] === "x"){ // locations of winning Xs 1st 2nd 3rd columns
    return {winner: board[i][0],
    winningLocations: [[i, 0], [i, 1], [i, 2]]
  };
  }
}
for(let i = 0; i<3 ;i++){
  if(board[i][0] === "o" && board[i][1] === "o" && board[i][2] === "o"){ // locations of winning Xs 1st 2nd 3rd columns
    return {winner: board[i][0],
    winningLocations: [[i, 0], [i, 1], [i, 2]]
  };
  }
}




for(let i = 0; i<3 ;i++){
  if(board[0][i] === "x" && board[1][i] === "x" && board[2][i] === "x"){ // locations of winning Xs 1st 2nd 3rd columns
    return {winner: board[0][i],
    winningLocations: [[0, i], [1, i], [2, i]]
  };
  }
}
for(let i = 0; i<3 ;i++){
  if(board[0][i] === "o" && board[1][i] === "o" && board[2][i] === "o"){ // locations of winning Os 1st 2nd 3rd columns
    return {winner: board[0][i],
    winningLocations: [[0, i], [1, i], [2, i]]
  };
  }
}
if (board[0][0] !== "" && board[0][0] === board[1][1] && board[2][2] === board[1][1]){ //locations of winning Xs and Os diagonale
  return {winner: board[1][1],
  winningLocations: [[0, 0], [1, 1], [2, 2]]
};
}
if (board[0][2] !== "" && board[0][2] === board[1][1] && board[2][0] === board[1][1]){ //locations of winning Xs and Os diagonale
  return {winner: board[1][1],
  winningLocations: [[0, 2], [1, 1], [2, 0]]
};
}
let str="";
for(let i = 0;i<3;i++)
{
  for(let j = 0; j<3;j++)
  {
    str+=board[i][j];
  }
}
if(str.length ===9) return 1;

}


//loop
const loop = function(){
  let isX = true;
  let winner;
  while(true){
  const coordinat = nextMove(board);
  makeMove(board,coordinat,isX);
  isX = !isX;
  if(findWinner(board)===undefined){
    continue;
  }
  winner=findWinner(board);
  break;
  }
  if(winner === 1)
  {
    alert("No One Won");
  }
  else {
    console.log(winner.winner);
    alert("Congrats! " + winner.winner);
  }

}
const canvas = document.getElementById(('canvas'));
const ctx = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();
const draw = function(coorX,coorY,sign)
{

	if(!sign) ctx.fillStyle="blue";
	else ctx.fillStyle = "pink";

	ctx.fillRect(coorX*200+50,coorY*200+50,100,100);
}
const player = true;
const begin = function()
{
ctx.fillStyle = "white";
ctx.fillRect(200,0,3,600);
ctx.fillRect(400,0,3,600);
ctx.fillRect(0,200,600,3);
ctx.fillRect(0,400,600,3);
}

canvas.addEventListener('click', function(event) {

	const x = Math.floor((event.pageX-rect.left)/200);
	const y = Math.floor((event.pageY-rect.top)/200);
	if(makeMove(board,[y,x],player)===0)
  {

    draw(x,y,player);

    let winner = findWinner(board);
console.log(winner)
    if(winner === 1)
    {
      alert("No One Won");
    }
    else if(winner !==undefined){
      console.log(winner.winner);

      setTimeout(function(){alert("Congrats! " + winner.winner);},25);
      return;
    }
const move = nextMove(board);
    makeMove(board,move,!player);
    draw(move[1],move[0],!player);
    winner = findWinner(board);
    console.log(board);
    if(winner === 1)
    {
      alert("No One Won");
    }
    else if (winner!==undefined) {
      return;
      console.log(winner.winner);

    }

  }

})


begin();
