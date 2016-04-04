/**
 *   -----------------
 * 8 | | | | | | | | |
 *   -----------------
 * 7 | | | | | | | | |
 *   -----------------
 * 6 | | | | |x| |x| |
 *   -----------------
 * 5 | | | |x| | | |x|
 *   -----------------
 * 4 | | | | | |K| | |
 *   -----------------
 * 3 | | | |x| | | |x|
 *   -----------------
 * 2 | | | | |x| |x| |
 *   -----------------
 * 1 | | | | | | | | |
 *   -----------------
 *    1 2 3 4 5 6 7 8
 */

function canReach(from, to, movements) {
    var squares = knightEngine(from, movements);
    return squares.some((sq) => sq[0] === to[0] && sq[1] === to[1]);
}

function moveKnight(from) {
    var result = [];
    if(from[0] + 2 <= 8){
        from[1] + 1 <= 8 && result.push([from[0] + 2, from[1] + 1]);
        from[1] - 1 >= 1 && result.push([from[0] + 2, from[1] - 1]);
    }
    if(from[0] + 1 <= 8){
        from[1] + 2 <= 8 && result.push([from[0] + 1, from[1] + 2]);
        from[1] - 2 >= 1 && result.push([from[0] + 1, from[1] - 2]);
    }
    if(from[0] - 1 >= 1){
        from[1] + 2 <= 8 && result.push([from[0] - 1, from[1] + 2]);
        from[1] - 2 >= 1 && result.push([from[0] - 1, from[1] - 2]);
    }
    if(from[0] - 2 >= 1){
        from[1] + 1 <= 8 && result.push([from[0] - 2, from[1] + 1]);
        from[1] - 1 >= 1 && result.push([from[0] - 2, from[1] - 1]);
    }
    return result;
}

function moveKnightRandom(from) {
    var squares = moveKnight(from);
    return squares[Math.floor(Math.random() * squares.length)];
}

function moveKnightFromArray(fromPositions) {
    return fromPositions.reduce((prev, from) => prev.concat(moveKnight(from)), []);
}

function compose(...functions) {
    return (value) => functions.reduceRight((prev, fn) => fn(prev), value);
}

function bind(f) {
    return (values) => values.reduce((prev, v) => prev.concat( f(v) ), []);
}

function unit(value) {
    return [value];
}

function knightEngine(from, movements) {
    var currentMove = unit;
    for(let i = 0; i < movements; i++){
        currentMove = compose(bind(moveKnight), currentMove);
    }
    return currentMove(from);
}

console.log(knightEngine([6,2], 1));
console.log(knightEngine([6,2], 2));
console.log(knightEngine([6,2], 3));
