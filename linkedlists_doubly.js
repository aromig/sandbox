// Node struct

function Node(value) {
    this.value = value;     // stores a value
    this.previous = null;   // points to the previous node in a list
    this.next = null;       // points to the next node in a list
}

function DoublyList() {
    this._length = 0;       // number of nodes in the list
    this.head = null;       // the first node of the list
    this.tail = null;       // the last node of the list
}

// Add a node to the end of the list, returns added node
DoublyList.prototype.push = function(value) {
    var node = new Node(value);

    if (this._length) {                 // list is not empty
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {                            // list is empty
        this.head = this.tail = node;
    }

    this._length++;

    return node;
}

// Returns a node from the list based on position
DoublyList.prototype.nodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = { notexist: 'Node does not exist in this list.',
                    empty: 'List is empty' };
    
    // invalid conditions
    if (length === 0)
        throw new Error(message.empty);
    if (position < 1 || position > length)
        throw new Error(message.notexist);

    // iterate through until reaches the position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;        
}

DoublyList.prototype.insertAt = function(value, position) {
    var newNode = new Node(value),
        length = this._length,
        message = { notexist: 'Node does not exist in this list.',
                    empty: 'List is empty. Use .push instead.' };

    // invalid conditions
    if (length === 0)
        throw new Error(message.empty);
    if (position < 1 || position > length)
        throw new Error(message.notexist);

    var node = this.nodeAt(position);

    if (node.previous) {
        newNode.previous =node.previous;
        node.previous.next = newNode;
    } else {
        this.head = newNode;
    }

    newNode.next = node;
    node.previous = newNode;

    this._length++;

    return newNode;
}

// Removes a node from the list based on position, returns deleted node
DoublyList.prototype.removeAt = function(position) {
    var length = this._length,
        message = { notexist: 'Node does not exist in this list.',
                    empty: 'List is empty.' };

    // invalid conditions
    if (length === 0)
        throw new Error(message.empty);
    if (position < 1 || position > length)
        throw new Error(message.notexist);

    var node = this.nodeAt(position);

    if (node.previous) {
        node.previous.next = node.next;
    } else {
        this.head = node.next;
    }

    if (node.next) {
        node.next.previous = node.previous;
    } else {
        this.tail = node.previous;
    }

    this._length--;

    return node;
}


// some tests
var list = new DoublyList();

for (var i = 0; i < 5;) {
    list.push('Item ' + ++i);
}

console.log(list);
list.insertAt('Item 2.5', 3);
console.log(list.nodeAt(3).value); // Item 2.5
list.removeAt(3);
console.log(list.head.next.next.next.previous.next); // Item 4 node
console.log(list._length); // 5