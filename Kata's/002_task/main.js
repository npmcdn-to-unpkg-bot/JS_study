
function titleCase(title, minorWords) {
    var titleArr = title.toLowerCase().split(' '),
        rulesArr = minorWords ? minorWords.toLowerCase().split(' ') : [];

    if(titleArr.length === 0) {
        return '';
    }

    return titleArr.map(function(word, index){
        return (index === 0 || rulesArr.indexOf(word) < 0) ? capitalise(word) : word;
    }).join(' ');
}

function capitalise(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}




Test.run([
    Test.expect(titleCase('')).toBe(''),
    Test.expect(titleCase('a clash of KINGS', 'a an the of')).toBe('A Clash of Kings'),
    Test.expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).toBe('The Wind in the Willows'),
    Test.expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox')
]);