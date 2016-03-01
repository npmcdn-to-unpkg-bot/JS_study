console.log('05. Object Literals');

var foo = 'foo variable';
var prefix = '_';

var object = {
    foo,
    [prefix + 'property']: 'PropertyWithPrefix',
    show() {
        console.log(this);
    }
};

object.show();


console.log('---------------------------');
console.log();