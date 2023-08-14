//input win/draw/lose/total match 
//logic win =+3, draw =+1, lose =+0
//output score

//V1 : Check win-draw-lose
// let matchPoint = result => {
//     let score = 0;
//     if (result == 'win') 
//         score += 3;
//     else if ('draw') score += 1;
//     return score;
// }
 
// console.log(matchPoint('win'))
// console.log(matchPoint('draw'))]

//V2 : Total score
let matchPoint = (win,draw) => win * 3 + draw;

console.log(matchPoint(20,10))


