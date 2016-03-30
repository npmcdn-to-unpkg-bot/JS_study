

function undoRedo( object ) {
    var undos = [];
    var redos = [];

    var onChange = function (prop, oldVal, newVal) {
        undos.push({
            undo: () => oldVal === undefined ? delete object[prop] : object[prop] = oldVal,
            redo: () => newVal === undefined ? delete object[prop] : object[prop] = newVal
        });
        redos = [];
    };

    return {
        get: (key) => object[key],
        set: (key, value) => {
            onChange(key, object[key], value);
            object[key] = value;
        },
        del: (key) => {
            onChange(key, object[key], undefined);
            delete object[key];
        },
        undo: () => {
            var obj = undos.pop();
            obj.undo();
            redos.push(obj);
        },
        redo: () => {
            var obj = redos.pop();
            obj.redo();
            undos.push(obj);
        }
    };
}

Test.run(
    [
        (function(){
            var arrayToReturn = [];
            var obj = {
                x: 1,
                y: 2
            };
            var unRe = undoRedo(obj);
            arrayToReturn.push(Test.expect(unRe.get('x')).toBe(1));
            unRe.set('x', 3);
            arrayToReturn.push(Test.expect(unRe.get('x')).toBe(3));
            return arrayToReturn;
        })(),

        (function(){
            var arrayToReturn = [];
            var obj = {
                x: 1,
                y: 2
            };
            var unRe = undoRedo(obj);
            unRe.set('y', 10);
            arrayToReturn.push(Test.expect(unRe.get('y')).toBe(10));
            unRe.undo();
            arrayToReturn.push(Test.expect(unRe.get('y')).toBe(2));
            try {
                unRe.undo();
            } catch (e) {
                arrayToReturn.push(Test.expect(unRe.get('y')).toBe(2));
            }
            return arrayToReturn;
        })(),

        (function(){
            var arrayToReturn = [];
            var obj = {
                x: 1,
                y: 2
            };
            var unRe = undoRedo(obj);
            unRe.set('y', 10);
            arrayToReturn.push(Test.expect(unRe.get('y')).toBe(10));
            unRe.undo();
            arrayToReturn.push(Test.expect(unRe.get('y')).toBe(2));
            unRe.redo();
            arrayToReturn.push(Test.expect(unRe.get('y')).toBe(10));
            try {
                unRe.redo();
            } catch (e) {
                arrayToReturn.push(Test.expect(unRe.get('y')).toBe(10));
            }
            return arrayToReturn;
        })(),

        (function(){
            var arrayToReturn = [];
            var obj = {
                x: 1,
                y: 2
            };
            var unRe = undoRedo(obj);
            unRe.set('y', 10);
            unRe.set('y', 100);
            unRe.set('x', 150);
            unRe.set('x', 50);
            arrayToReturn.push(Test.expect(unRe.get('y')).toBe(100));
            arrayToReturn.push(Test.expect(unRe.get('x')).toBe(50));
            unRe.undo();
            arrayToReturn.push(Test.expect(unRe.get('x')).toBe(150));
            arrayToReturn.push(Test.expect(unRe.get('y')).toBe(100));
            unRe.redo();
            arrayToReturn.push(Test.expect(unRe.get('x')).toBe(50));
            arrayToReturn.push(Test.expect(unRe.get('y')).toBe(100));
            unRe.undo();
            unRe.undo();
            arrayToReturn.push(Test.expect(unRe.get('x')).toBe(1));
            arrayToReturn.push(Test.expect(unRe.get('y')).toBe(100));
            unRe.undo();
            unRe.undo();
            arrayToReturn.push(Test.expect(unRe.get('y')).toBe(2));
            arrayToReturn.push(Test.expect(unRe.get('x')).toBe(1));
            unRe.redo();
            unRe.redo();
            unRe.redo();
            unRe.redo();
            arrayToReturn.push(Test.expect(unRe.get('y')).toBe(100));
            arrayToReturn.push(Test.expect(unRe.get('x')).toBe(50));
            return arrayToReturn;
        })(),

        (function(){
            var arrayToReturn = [];
            var obj = {
                x: 1,
                y: 2
            };
            var unRe = undoRedo(obj);
            unRe.set('z', 10);
            arrayToReturn.push(Test.expect(unRe.get('z')).toBe(10));
            unRe.undo();
            arrayToReturn.push(Test.expect(unRe.get('z')).toBe(undefined));
            unRe.redo();
            arrayToReturn.push(Test.expect(unRe.get('z')).toBe(10));
            return arrayToReturn;
        })(),

        (function(){
            var arrayToReturn = [];
            var obj = {
                x: 1,
                y: 2
            };
            var unRe = undoRedo(obj);
            unRe.del('x');
            arrayToReturn.push(Test.expect(unRe.get('x')).toBe(undefined));
            arrayToReturn.push(Test.expect(obj.hasOwnProperty('x')).toBe(false));
            unRe.undo();
            arrayToReturn.push(Test.expect(unRe.get('x')).toBe(1));
            unRe.redo();
            arrayToReturn.push(Test.expect(unRe.get('x')).toBe(undefined));
            arrayToReturn.push(Test.expect(obj.hasOwnProperty('x')).toBe(false));
            return arrayToReturn;
        })()

    ].reduce( (a, b) => a.concat(b) )
);
