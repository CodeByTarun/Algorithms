function createNode(value, nextNode) {
    return {
        value: value ?? null,
        nextNode: nextNode ?? null,
    }
}


function createLinkedList(head) {
    if (head === null || head === undefined) return "Please input a node!";

    let _size = head === null ? 0 : 1;
    let _tail = head;

    while (_tail.nextNode !== null) {
        _size += 1;
        _tail = _tail.nextNode;
    }

    return {
        head: head ?? null,
        size: _size,
        tail: _tail,
        append(value) {
            this.tail.nextNode = value;
            this.tail = value;
            this.size += 1;
        },
        prepend(value) {
            value.nextNode = this.head;
            this.head = value;
            this.size += 1;
        },
        at(index) {
            if (head === null) return null;

            if (index >= this.size || index < 0) return null;

            let node = this.head;
            let count = 0;
            do {
                node = node.nextNode;
                count += 1;
            } while (count < index);

            return node;
        },
        pop() {
            let node = this.head;

            if (node.nextNode === null) {
                this.head = null;
                this.size -= 1;
                return node;
            } 

            let nextNode = node.nextNode;

            while (nextNode.nextNode !== null) {
                node = node.nextNode;
                nextNode = nextNode.nextNode;
            };

            node.nextNode = null;
            this.tail = node;
            this.size -= 1;

            return nextNode;
        },
        contains(value) {
            let node = head;

            while (node !== null) {
                if (node.value === value) {
                    return true;
                }
                node = node.nextNode;
            }

            return false;
        },
        find(value) {
            let node = head;
            let count = 0;
            while (node !== null) {
                if (node.value === value) {
                    return count;
                }
                node = node.nextNode;
                count += 1;
            }

            return null;
        },
        toString() {
            let node = head;
            let string = "";
            while (node !== null) {
                string += `(${node.value}) -> `;
                node = node.nextNode;
            }

            return string + 'null';
        },
        insertAt(value, index) {
            let node = head;
            let nextNode = node.nextNode;
            let count = 0;

            if (index < 0 || index >= this.size) return "Index out of range!"

            if (index === 0) {
                this.prepend(value);
            }

            if (index === this.size - 1) {
                this.append(value);
            }

            while (nextNode !== null) {
                if (count === index) {
                    node.nextNode = value;
                    value.nextNode = nextNode;
                    break;
                }
                node = node.nextNode;
                nextNode = nextNode.nextNode;
            }

            this.size += 1;

        },
        removeAt(index) {
            if (index < 0 || index >= this.size) return "Index out of range!"
            
            if (index === this.size - 1) this.pop();

            let node = head;
            let nextNode = node.nextNode;
            let count = 0;

            while (nextNode !== null) {
                if (count === index) {
                    node.nextNode = nextNode.nextNode;
                    break;
                }
                node = node.nextNode;
                nextNode = nextNode.nextNode;
            }
        },
    }
}

let node1 = createNode(3);
let node2 = createNode(6, node1);
let node3 = createNode(1, node2);
let node4 = createNode(9, node3);

let linkedList = createLinkedList(node4);

linkedList.append(createNode(12));
linkedList.prepend(createNode(34));

console.log(linkedList.toString());
console.log(linkedList.find(6));
console.log(linkedList.find(10));
