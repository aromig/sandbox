var tree = `
        A\n
      /   \\\n
     B      C\n
   /   \\      \\\n
  D     E       F
`;

console.log(tree);

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

// create nodes
var root = new Node('A');
var n1 = new Node('B');
var n2 = new Node('C');
var n3 = new Node('D');
var n4 = new Node('E');
var n5 = new Node('F');

// setup children
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;
n2.right = n5;


/* ***** Depth-first Searches ***** */

/*  Pre-order traversal
    1. Return the root node value
    2. Traverse the left subtree by recursively calling the pre-order function
    3. Traverse the right subtree by recursively calling the pre-order function

    ex: nodes would output in this order: A, B, D, E, C
*/

function pre_order(root, nodes) {
    nodes.push(root.data);
    if (root && root.left)
        pre_order(root.left, nodes);
    if (root && root.right)
        pre_order(root.right, nodes);

    return nodes;
}

console.log('Pre-order:', pre_order(root, []));


/*  In-order traversal
    1. Traverse the left subtree by recursively calling the in-order function
    2. Return the root node value
    3. Traverse the rigth subtree by recursively calling the in-order function
    
    ex: nodes would output in this order: D, B, E, A, C
*/

function in_order(root, nodes) {
    if (root && root.left)
        in_order(root.left, nodes);
    nodes.push(root.data);
    if (root && root.right)
        in_order(root.right, nodes);

    return nodes;
}

console.log('In-order:', in_order(root, []));


/*  Post-order traversal
    1. Traverse the left subtree by recursively calling the post-order function
    2. Traverse the rigth subtree by recursively calling the post-order function
    3. Return the root node value

    ex: nodes would output in this order: D, E, B, C, A
*/

function post_order(root, nodes) {
    if (root && root.left)
        post_order(root.left, nodes);
    if (root && root.right)
        post_order(root.right, nodes);
    nodes.push(root.data);

    return nodes;
}

console.log('Post-order:', post_order(root, []));


/* ***** Breadth-first Search ***** */

/*  Level-order - Visits every node on a level before going to a lower level.
    1. Add the root to a queue
    2. Pop the oldest node from the queue, and return its value
    3. Add all children of poppped node to queue, and continue from step 2 until queue is empty

    ex: nodes would output in this order: A, B, C, D, E
*/

function level_order(root, nodes) {
    var queue = [root];
    while (queue.length > 0) {
        var n = queue.shift();
        nodes.push(n.data);
        if (n.left !== null)
            queue.push(n.left);
        if (n.right !== null)
            queue.push(n.right);
    }

    return nodes;
}

console.log('Level-order:', level_order(root, []));


// Constructing a tree from a given In-order and Pre-order traversals

var inorder = 'DBEACF'.split('');
var preorder = 'ABDECF'.split('');
var preIdx = 0;

function buildTree_in_pre(inOrder, preOrder, inStart, inEnd) {
    if (inStart > inEnd)
        return null;

    var n = new Node(preOrder[preIdx++]);
    if (inStart === inEnd)
        return n;

    var inIdx = inorder.indexOf(n.data);

    n.left = buildTree_in_pre(inOrder, preOrder, inStart, inIdx - 1);
    n.right = buildTree_in_pre(inOrder, preOrder, inIdx + 1, inEnd);

    return n;
}

var tree = buildTree_in_pre(inorder, preorder, 0, inorder.length - 1);

console.log('\n*****\n\nConstructing a tree from given in-order and pre-order traversals:');
console.log('In-order:', inorder);
console.log('Pre-order:', preorder, '\n');
console.log(tree);
console.log('\nVerify In-order:', in_order(tree, []));
console.log('Verify Pre-order:', pre_order(tree, []));


// Constructing a tree from a given In-order and Post-order traversals

var inorder = 'DBEACF'.split('');
var postorder = 'DEBFCA'.split('');
var postIdx = postorder.length - 1;

function buildTree_in_post(inOrder, postOrder, inStart, inEnd) {
    if (inStart > inEnd)
        return null;

    var n = new Node(postOrder[postIdx--]);
    if (inStart === inEnd)
        return n;

    var inIdx = inorder.indexOf(n.data);

    n.right = buildTree_in_post(inOrder, postOrder, inIdx + 1, inEnd);
    n.left = buildTree_in_post(inOrder, postOrder, inStart, inIdx - 1);
    

    return n;
}

var tree = buildTree_in_post(inorder, postorder, 0, inorder.length - 1);

console.log('\n*****\n\nConstructing a tree from given in-order and post-order traversals:');
console.log('In-order:', inorder);
console.log('Post-order:', postorder, '\n');
console.log(tree);
console.log('\nVerify In-order:', in_order(tree, []));
console.log('Verify Post-order:', post_order(tree, []));


// Constructing a tree from just a given Pre-order traversal

var preIdx = 0;

function buildTree_pre(preOrder, low, high, size) {
    if (preIdx >= size || low > high)
        return null;

    var n = new Node(preOrder[preIdx++]);

    if (low === high)
        return n;
    
    var i;
    for (i = low; i <= high; ++i) {
        if (preOrder[i] > n.data) {
            break;
        }
    }
    
    n.left = buildTree_pre(preOrder, preIdx, i - 1, size);
    n.right = buildTree_pre(preOrder, i, high, size);

    return n;
}

var preorder = 'JFAHKZ'.split('');
var size = preorder.length;
var tree = buildTree_pre(preorder, 0, size - 1, size);


console.log('\n*****\n\nConstructing a tree from just a given pre-order traversal:');
console.log('Pre-order:', preorder, '\n');
console.log(tree);
console.log('\nVerify In-order:', in_order(tree, []));
console.log('Verify Pre-order:', pre_order(tree, []));


// Check if binary tree is a subtree of another

var root_small = new Node('B');
var n1_small = new Node('D');
var n2_small = new Node('E');

root_small.left = n1_small;
root_small.right = n2_small;

function is_subtree(root_1, root_2) {
    var inorder_1 = in_order(root_1, []).join('-');
    var inorder_2 = in_order(root_2, []).join('-');

    var preorder_1 = pre_order(root_1, []).join('-');
    var preorder_2 = pre_order(root_2, []).join('-');

    return inorder_2.indexOf(inorder_1) !== -1 && preorder_2.indexOf(preorder_1) !== -1;
}

console.log('\n*****\n\nCheck if binary tree is a subtree of another:\n');
console.log('Larger tree:\n', root);
console.log('\nSmaller tree:\n', root_small);
console.log('\nSmaller tree is a subtree of larger tree?', is_subtree(root_small, root) ? 'Yes' : 'No');