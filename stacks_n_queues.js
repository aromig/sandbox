// stack -> linear data structure where new items are pushed (added to the top) and popped (removed from the top.
// LIFO - Last In, First Out
// Sequential operation; can only remove most recent data

function Stack() {
    this._size = 0;
    this._storage = {};
}

Stack.prototype.push = function(value) {
    this._storage[++this._size] = value;
}

Stack.prototype.pop = function() {
    var size = this._size,
        deleted = null;

    if (size) {
        deleted = this._storage[size];
        delete this._storage[size];
        this._size--;
    }

    return deleted;
}

var groceries = new Stack();
groceries.push('Ice Cream');
groceries.push('Bananas');
groceries.push('Chocolate Syrup');
console.log(groceries);
console.log('-', groceries.pop());
console.log('~', groceries._storage[1] = 'Peanut Butter');
console.log(groceries);

// Queue -> linear data structure like a stack, except that only the oldest data is removed (vs the most recent)
// FIFO - First In, First Out

function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}

Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
}

Queue.prototype.enqueue = function(value) {
    this._storage[this._newestIndex++] = value;
}

Queue.prototype.dequeue = function() {
    var oldest = this._oldestIndex,
        newest = this._newestIndex,
        deleted = null;

    if (oldest !== newest) {
        deleted = this._storage[oldest];
        delete this._storage[oldest];
        this._oldestIndex++;
    }

    return deleted;
}

Queue.prototype.first = function() {
    return this._storage[this._oldestIndex];
}

Queue.prototype.last = function() {
    return this._storage[this._newestIndex-1];
}

var shield = new Queue();
shield.enqueue('Phil');
shield.enqueue('Melinda');
shield.enqueue('Daisy');
shield.enqueue('Leo');
shield.enqueue('Jemma');

console.log();
console.log(shield);
console.log('size:', shield.size());
console.log('first:', shield.first());
console.log('last:', shield.last());
console.log('-', shield.dequeue());
console.log('-', shield.dequeue());
console.log('-', shield.dequeue());
console.log();
console.log(shield);
console.log('size:', shield.size());
console.log('first:', shield.first());
console.log('last:', shield.last());
