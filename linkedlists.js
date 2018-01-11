function Node(data) {
    this.data = data
    this.next = null;
}
/* 
// setup some nodes and connect them to each other
// looks like:
// (head) n5 -> h4 -> n3 -> n2 -> n1
var n1 = new Node("Hello");
var n2 = new Node("21"); n2.next = n1;
var n3 = new Node("Green"); n3.next = n2;
var n4 = new Node("Blue"); n4.next = n3;
var n5 = new Node("Daniel"); n5.next = n4;

// assign n5 to the head which functions as the entry into the linked list
var head = n5;

console.log(head);

// setup pointers to both start at the head
var fastPointer = head;
var slowPointer = head;

// loop through the linked list
// when fastPointer reaches the end, slowPointer will be at the middle
while (fastPointer.next !== null && fastPointer.next.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
}

// slowPointer is now at the middle node since it moved half as fast as fastPointer
console.log('\nMiddle Node:', slowPointer.data); // Green

// Adding a new node to the front

function list_push(self, new_data) {
    // Allocate the node & data
    var new_node = new Node(new_data);
    new_node.next = self;
    return new_node;
}

head = list_push(head, "NewNodeInFront");
console.log('\nInserted at front:', head);

// Inserting a new node after a given node

function list_insert(self, prev_node, new_data) {
    var new_node = new Node(new_data);
    new_node.next = prev_node.next
    prev_node.next = new_node;
}

list_insert(head, n5, "Inserted");

console.log('\nInserted after n5:', head);
 */
// Singly Linked List

function SinglyList() {
    this._length = 0;
    this.head = null;
}

SinglyList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;

    // list is empty (if head is null, make this node head and return)
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    // iterate through nodes until finds the last one (which doesn't have a .next filled out)
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return node;
}

SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = { failure: 'Failure: non-existant node in this list.'};

    // invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
}

var listFoo = new SinglyList();
console.log(listFoo);
listFoo.add('Foo');
console.log(listFoo);
listFoo.add('Bar');
console.log(listFoo);

console.log(listFoo.searchNodeAt(2).data); // Bar