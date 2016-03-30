
function swap(str, i, j){
    return str.substr(0, i) + str.charAt(j) + str.charAt(i) + str.substr(j + 1);
}


function permutations(string) {
    // var items = string.split('').filter( (item, i, ar) => ar.indexOf(item) === i );
    // var m = string.length, n = items.length;
    //
    // console.log(items);
    var index = 0, temp_str = '';
    var length = string.length;
    var isEnd = false;
    var cache = {};

    index = length - 2;
    while(!isEnd){
        temp_str = swap(string, index, index + 1);
        if(!cache[temp_str]){
            cache[temp_str] = true;
            string = temp_str;
            index = length - 2;
        }else{
            index--;
            if(index == 0) {
                isEnd = true;
            }
        }
    }
    
    console.log(cache);

}

permutations('aaabbb');