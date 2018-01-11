// Node struct

function Node(value) {
    this.value = value; // stores a value
    this.next = null;   // points to the next node in a list
}

// Singly Linked List

function SinglyList() {
    this._length = 0;   // number of nodes in the list
    this.head = null;   // the first node of the list
}

// Add a node to the end of list, returning the added node
SinglyList.prototype.push = function(value) {
    var node = new Node(value),
        currentNode = this.head;

    // list is empty
    if (!this._length) {
        this.head = node;
    } else {
        // iterate through nodes until finds the last one
        while (currentNode.next)
            currentNode = currentNode.next;

        currentNode.next = node;
    }

    this._length++;

    return node;
}

// Insert a node to the list at a certain position moving the current node down 1 spot, returning the added node
SinglyList.prototype.insertAt = function(value, position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = { notexist: 'Invalid position to insert at.',
                    empty: 'List is empty. Use .add instead.' },
        newNode = new Node(value),
        prevNode = null;
        
    // invalid conditions
    if (length === 0)
        throw new Error(message.empty);
    if (length < 1 || position > length)
        throw new Error(message.notexist);

    // if position is the head (first node)
    if (position === 1) {
        newNode.next = currentNode;
        this.head = newNode;
    } else {
        // iterate through until reaches the position
        while (count < position) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            count++;
        }

        newNode.next = currentNode;
        prevNode.next = newNode;
    }

    this._length++;

    return newNode;
}

// Return a node from the list based on position
SinglyList.prototype.nodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = { notexist: 'Node does not exist in this list.',
                    empty: 'List is empty.' };

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

// removeAt a node from the list based on position, returning the deleted node
SinglyList.prototype.removeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = { notexist: 'Node does not exist in this list.',
                    empty: 'List is empty.' },
        prevNode = nodeToDelete = deletedNode = null;

    // invalid conditions
    if (length === 0)
        throw new Error(message.empty);
    if (position < 1 || position > length)
        throw new Error(message.notexist);

    // if position is the head (first node)
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
    } else {
        // otherwise iterate through until reaches the position
        while (count < position) {
            prevNode = currentNode;
            currentNode = nodeToDelete = currentNode.next;
            count++;
        }

        prevNode.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }

    this._length--;

    return deletedNode;
}


// some tests
var list = new SinglyList();                 // create new singly list

for (var i = 0; i < 5;) {                       // populate list
    console.log('+', list.push('Item ' + ++i))
}

console.log(JSON.stringify(list));           // display list as JSON to see everything
console.log('?', list.nodeAt(4));            // show position 4 "Item 4"
console.log('-', list.removeAt(4));          // removeAt position 4
console.log('?', list.nodeAt(4));            // show position 4 "Item 5"
console.log('+', list.push('Item 6'));        // add "Item 6" to end
console.log(JSON.stringify(list));           // display list as JSON to see everything
console.log('>', list.insertAt('Item 4', 4));// insert "Item 4" back into position 4
console.log('?', list.nodeAt(4));            // show position 4 "Item 4"
console.log(JSON.stringify(list));           // display list as JSON to see everything