function createNode(value, left, right) {
    return {
        value: value ?? null,
        left: left ?? null,
        right: right ?? null,
    }
}

function createTree(array) {

    let set = new Set(array);
    let sortedArray = [...set].sort((a, b) => a - b);

    let _root = _buildTree(sortedArray, 0, sortedArray.length - 1);

    function _buildTree(sortedArray, L, R) {
        
        if (L > R) return null;
        
        let mid = Math.floor((L + R) / 2);
        
        return createNode(sortedArray[mid], _buildTree(sortedArray, L, mid - 1), _buildTree(sortedArray, mid + 1, R));
    }

    return {
        root: _root,
        buildTree: _buildTree,
        insert(node) {
            if (this.root === null) {
                this.root = node;
            }

            let head = this.root;

            while(true) {
                if (node.value < head.value) {
                    if (head.left === null) {
                        head.left = node;
                        break;
                    }
                    head = head.left;
                } else {
                    if (head.right === null) {
                        head.right = node;
                        break;
                    }
                    head = head.right;
                }
            }
        },
        delete(node) {
            // parent and one child behave the same
            // two children means that you have to replace the minimum value on the right side to get this done

        },
        find(node) {
            
        },
        levelOrder(func) {

        },
        inorder(func) {

        },
        preorder(func) {

        },
        postorder(func) {

        },
        height(node) {

        },
        depth(node) {

        },
        isBalanced() {

        },
        rebalance() {

        },
    }
}



let tree = createTree([1,3,56,2,4,8,99,23,543,32,1,32]);


const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

tree.insert(createNode(43));
prettyPrint(tree.root);
