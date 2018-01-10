function Node(data, next) {
    this.data = data
    this.next = next;
}

// setup some nodes and connect them to each other
// looks like:
// (head) n5 -> h4 -> n3 -> n2 -> n1
var n1 = new Node("Hello", null);
var n2 = new Node("21", n1);
var n3 = new Node("Green", n2);
var n4 = new Node("Blue", n3);
var n5 = new Node("Daniel", n4);

// assign n5 to the head which functions as the entry into the linked list
var head = n5;

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
console.log(slowPointer.data); // Green