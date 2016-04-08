
// Return the nth triangular number
function triangular( n ) {
    if(n <= 0){
        return 0;
    }
    return n + triangular(n - 1);
}


Test.run([
    Test.expect(triangular(2)).toBe(3),
    Test.expect(triangular(4)).toBe(10)
]);