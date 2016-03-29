
function findOutlier(integers) {
    if(!(integers && integers.length >= 3)){
        return null;
    }
    var temp = integers.slice(0, 3),
        remainder, parityOutlier;

    if(isOdd(temp[0] + temp[1])){
        //First and Second elements in array has different parity
        parityOutlier = isSameParity(temp[2], temp[0]) ? temp[1] : temp[0];
    }else{
        remainder = 1 - getRemainder(temp[0]);
        integers.some(function(elem) {
            if(getRemainder(elem) === remainder) {
                parityOutlier = elem;
                return true;
            }
            return false;
        });
    }

    return parityOutlier;
}

function getRemainder(number) {
    return Math.abs(number % 2);
}
function isOdd(number) {
    return getRemainder(number) === 1;
}
function isEven(number) {
    return getRemainder(number) === 0;
}
function isSameParity(a, b) {
    return getRemainder(a) === getRemainder(b);
}



//findOutlier([0, 1, 2]);
findOutlier([2,6,8,10,3]);