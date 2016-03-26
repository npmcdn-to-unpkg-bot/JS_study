console.log('06. Classes');

class A {
    constructor(v) {
        this.value = v;
        A.count++;
    }
    getValue(){
        return this.value;
    }
    static getCount(){
        return A.count;
    }
}
A.count = 0;

class B extends A {
    constructor(v, type){
        super(v);
        this.type = type;
    }
}

var aObject = new A(44);
console.log(aObject);
console.log(aObject.getValue());
console.log(A.getCount());
var bObject = new B(13, 'basic');
console.log(bObject);
console.log(A.getCount());


console.log('---------------------------');
console.log();