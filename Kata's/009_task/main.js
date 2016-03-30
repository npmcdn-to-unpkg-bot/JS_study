var names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];

function whoIsNext(names, r){
    var namesLength = names.length;
    var m = 0, step = 0;
    while (step < r) {
        m++;
        step += namesLength * Math.pow(2, m - 1);
    }
    /**
     * After somebody has drink cola with number {{step}}
     * the queue has the next structure:
     *
     * Array : [
     *     2**{{m}} of 'Sheldon',     (2 to be the power of {{m}} 'Sheldon' elements in a row)
     *     2**{{m}} of 'Leonard',     (2 to be the power of {{m}} 'Leonard' elements in a row)
     *     ...,
     *     2**{{m}} of 'Howard',      (2 to be the power of {{m}} 'Howard' elements in a row)
     *  ]
     *
     * So, the length of queue equals {{namesLength}} * 2**{{m}}
     */
    return names[namesLength - 1 - Math.floor( (step - r) / Math.pow(2, m - 1) )];
}

Test.run([
    Test.expect(whoIsNext(names, 1)).toEqual("Sheldon"),
    Test.expect(whoIsNext(names, 52)).toEqual("Penny"),
    Test.expect(whoIsNext(names, 7230702951)).toEqual("Leonard")
]);
