
function VigenèreAutokeyCipher(key, abc) {
    var _key = key, _abc = abc,
        _tempKey, _position = 0,
        init = ()  => {
            _tempKey = _key;
            _position = 0;
        },
        doStep = (char, isEncode) => {
            var initIndex = _abc.indexOf(char);
            var step = _abc.indexOf( _tempKey.charAt(_position) );
            if(initIndex === -1 || step === -1){
                return char;
            }
            _position++;
            var newIndex = (_abc.length + initIndex + (isEncode ? step : -1 * step)) % _abc.length;
            var newChar = _abc.charAt( newIndex );
            _tempKey += isEncode ? char : newChar;
            return newChar;
        };
    
    this.encode = function (str) {
        init();
        return str.split('').reduce((result, item) => result += doStep(item, true), '');
    };
    this.decode = function (str) {
        init();
        return str.split('').reduce((result, item) => result += doStep(item, false), '');
    };
}


var key = 'password';
var abc = 'abcdefghijklmnopqrstuvwxyz';

var c = new VigenèreAutokeyCipher(key, abc);

Test.run([
    Test.expect(c.encode('codewars')).toEqual('rovwsoiv'),
    Test.expect(c.decode('laxxhsj')).toEqual('waffles'),
    Test.expect(c.encode('aaaaaaaapasswordaaaaaaaa')).toEqual('passwordpasswordpassword'),
    Test.expect(c.decode('passwordpasswordpassword')).toEqual('aaaaaaaapasswordaaaaaaaa')
]);
