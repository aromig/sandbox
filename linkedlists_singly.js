// Node struct

function Node(data) {
    this.data = data    // stores a value
    this.next = null;   // points to the next node in a list
}

// Singly Linked List

function SinglyList() {
    this._length = 0;   // number of nodes in the list
    this.head = null;   // the first node of the list
}

// Add a node to the list, returning the added node
SinglyList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;

    // list is empty (if head is null, make this node the head and return)
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    // iterate through nodes until finds the last one (which doesn't have a .next filled out)
    while (currentNode.next)
        currentNode = currentNode.next;

    currentNode.next = node;
    this._length++;

    return node;
}

// Insert a node to the list at a certain position moving the current node down 1 spot, returning the added node
SinglyList.prototype.insert = function(value, position) {
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
        this._length++;

        return newNode;
    }

    // iterate through until reaches the position
    while (count < position) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        count++;
    }

    newNode.next = currentNode;
    prevNode.next = newNode;
    this._length++;

    return newNode;
}

// Return a node from the list based on position
SinglyList.prototype.searchNodeAt = function(position) {
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

// Remove a node from the list based on position, returning the deleted node
SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = { notexist: 'Node does not exist in this list.',
                    empty: 'List is empty.' },
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

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
        this._length--;

        return deletedNode;
    }

    // otherwise iterate through until reaches the position
    while (count < position) {
        beforeNodeToDelete = currentNode;
        currentNode = nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
}


// some tests
var listFoo = new SinglyList();                 // create new singly list

for (var i = 0; i < 5;) {                       // populate list
    console.log('+', listFoo.add('Item ' + ++i))
}

console.log(JSON.stringify(listFoo));           // display list as JSON to see everything
console.log('?', listFoo.searchNodeAt(4));      // show position 4 "Item 4"
console.log('-', listFoo.remove(4));            // remove position 4
console.log('?', listFoo.searchNodeAt(4));      // show position 4 "Item 5"
console.log('+', listFoo.add('Item 6'));        // add "Item 6" to end
console.log(JSON.stringify(listFoo));           // display list as JSON to see everything
console.log('>', listFoo.insert('Item 4', 4));  // insert "Item 4" back into position 4
console.log('?', listFoo.searchNodeAt(4));      // show position 4 "Item 4"
console.log(JSON.stringify(listFoo));           // display list as JSON to see everything