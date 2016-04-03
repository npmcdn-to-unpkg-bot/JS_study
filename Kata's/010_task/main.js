
function swap(str, i){
    return str.substr(0, i) + str.charAt(i + 1) + str.charAt(i) + str.substr(i + 2);
}

class Node {
    constructor(value) {
        let _parent = null;
        let _children = [];
        
        this.value = value;
        
        this.setParent = (parent) => _parent = parent;
        this.getParent = () => _parent;
        this.addChild = (child) => _children.push(child);
        this.removeChild = (index) => _children.splice(index, 1);
        this.setChildren = (children) => _children = children;
        this.getChildren = () => _children;
        this.getFirstChild = () => _children[0];
        this.getChildAfter = (child) => {
            let index = _children.indexOf(child);
            return index === -1 ? null : _children[index + 1];
        }
    }
    getRoot(){
        var currentNode = this;
        while(currentNode.parent){
            currentNode = currentNode.parent;
        }
        return currentNode;
    }
    generateChildren(){
        var i = 0, len = this.value.length, children = [];
        while(i < len - 1) {
            if(this.value[i] != this.value[i + 1]) {
                children.push(new Node(swap(this.value, i)));
            }
            i++;
        }
        children.forEach((child) => child.setParent(this));
        this.setChildren(children);
    }
    getNextNode(){
        var parent = this.getParent();
        if(parent && parent.getChildAfter(this)){
            return parent.getChildAfter(this);
        }
        if(parent && parent.getFirstChild()){
            let currentNode = parent.getFirstChild();
            if(currentNode.getChildren().length){

            }
        }
        if(this.getChildren()){

        }
        if(parent.getParent()){
            return parent.getNextNode();
        }
        return null;
    }
}


function permutations(string) {
    var cache = {};
    var root = new Node(string), currentNode = root;
    cache[string] = true;

    while(currentNode){
        currentNode.generateChildren();
        let children = currentNode.getChildren();
        children.forEach(function(child, index){
            if(cache[child.value]){
                currentNode.removeChild(index);
            }else{
                cache[child.value] = true;
            }
        });
        currentNode = currentNode.getNextNode();
        // let parent = currentNode.getParent();
        // if(!parent){
        //     currentNode = currentNode.getFirstChild();
        //     continue;
        // }
        // if(parent && parent.getChildAfter(currentNode)){
        //     currentNode = parent.getChildAfter(currentNode);
        //     continue;
        // }
        // if(parent && !parent.getChildAfter(currentNode)){
        //     // currentNode = parent.getFirstChild();
        //     // continue;
        // }
        // currentNode = false;
    }
    debugger;
    console.log(root);
    console.log(root.getChildren());
}

permutations('abcd');