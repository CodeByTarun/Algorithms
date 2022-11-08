// starting position to end positiion -> find shortest path
// use breadth first search

let possibleMoves = [[1, 2], [2, 1], [2, -1], [1, -2], 
                     [-1, -2], [-2, -1], [-2, 1], [-1, 2]];

function knightMoves(start, end) {

    if (start[0] === end[0] && start[1] === end[1]) return start;

    let queue = [[start]];
    let shortestPath = [];
    let indicator = false;

    function knightCheck(moves) {
        let currentPosition = moves.at(-1);

        if (currentPosition[0] === end[0] && currentPosition[1] === end[1])  {
            indicator = true;
            shortestPath = moves;
            return;
        }

        let nextMoves = [];
        
        for (const move of possibleMoves) {
            let checkMove = [currentPosition[0] + move[0], currentPosition[1] + move[1]];

            if (checkMove[0] <= 7 && checkMove[1] <= 7 && checkMove[0] >= 0 && checkMove[1] >= 0) {
                nextMoves.push(moves.concat([checkMove]));
            }
        }

        queue = queue.concat(nextMoves);
    }

    while (!indicator) {
        let nextCheck = queue.shift();
        knightCheck(nextCheck);
    }

    return shortestPath;
}

console.log(knightMoves([3,3],[0,0]));
console.log(knightMoves([0,0],[3,3]));
console.log(knightMoves([0,0],[1,2]));
console.log(knightMoves([3,3],[4,3]));



