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
                    empty: 'List is empty. Use .push instead.' },
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

// Removes a node from the list based on position, returning the deleted node
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
// Mutates the list to be in reversed in order (not a copy)
SinglyList.prototype.reverse = function() {
    if (!this.head || !this.head.next)
        return this;

    var nodes = [],
        currentNode = this.head;

    while (currentNode) {
        nodes.push(currentNode);
        currentNode = currentNode.next;
    }

    var reversed = new SinglyList();
    reversed._length = this._length;

    reversed.head = nodes.pop();
    currentNode = reversed.head;

    var node = nodes.pop();
    while (node) {
        node.next = null;
        currentNode.next = node;
        currentNode = currentNode.next;
        node = nodes.pop();
    }

    return reversed;
}

// some tests
var list = new SinglyList();                 // create new singly list

/* for (var i = 0; i < 5;) {                       // populate list
    console.log('+', list.push('Item ' + ++i))
} */

/* console.log(JSON.stringify(list));           // display list as JSON to see everything
console.log('?', list.nodeAt(4));            // show position 4 "Item 4"
console.log('-', list.removeAt(4));          // removeAt position 4
console.log('?', list.nodeAt(4));            // show position 4 "Item 5"
console.log('+', list.push('Item 6'));        // add "Item 6" to end
console.log(JSON.stringify(list));           // display list as JSON to see everything
console.log('>', list.insertAt('Item 4', 4));// insert "Item 4" back into position 4
console.log('?', list.nodeAt(4));            // show position 4 "Item 4"
console.log(JSON.stringify(list));           // display list as JSON to see everything
console.log(JSON.stringify(list.reverse()));*/

var list1 = new SinglyList();
list1.push(1);
list1.push(3);
list1.push(10);
list1.push(25);

var list2 = new SinglyList();
list2.push(5);
list2.push(6);
list2.push(9);
list2.push(13);
list2.push(50);

// Merges 2 already sorted Singly Lists into 1 Singly List
function merge(L1, L2) {
    var merged = new SinglyList(),
        n1 = L1.head,
        n2 = L2.head;

    while (n1 !== null && n2 !== null) {
        if (n1.value <= n2.value) {
            merged.push(n1.value);
            n1 = n1.next;
        } else {
            merged.push(n2.value);
            n2 = n2.next;
        }
    }

    if (n1 === null) {
        while (n2 !== null) {
            merged.push(n2.value);
            n2 = n2.next;
        }
    } else {
        while (n1 !== null) {
            merged.push(n1.value);
            n1 = n1.next;
        }
    }

    return merged;
}

console.log(JSON.stringify(merge(list1, list2)));