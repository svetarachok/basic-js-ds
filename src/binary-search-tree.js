const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor () {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.treeRoot) {
      this.treeRoot = newNode;
      return;
    }

   let currentNode = this.treeRoot;
    while (currentNode) {
     if (newNode.data < currentNode.data) {
         if (!currentNode.left) {
             currentNode.left = newNode;
             return;
         }
         currentNode = currentNode.left;
     } else {
        if (!currentNode.right) {
            currentNode.right = newNode;
            return;
        }
        currentNode = currentNode.right;
     }
    } 
  }

  has(data) {
    let currentNode = this.treeRoot;

    if (!currentNode) {
      return null
    }
 
     while(currentNode) {
        if (data === currentNode.data) {
          return true
        } else if (data < currentNode.data && currentNode.left) {
             if (currentNode.left.data === data) {
                 return true
             }
             currentNode = currentNode.left;
         } else if (data > currentNode.data && currentNode.right) {
             if (currentNode.right.data === data) {
                 return true
             }                
             currentNode = currentNode.right;
         } else {
            return false
         }
     }
  }

  find(data) {
    let currentNode = this.treeRoot;

    if (!currentNode) {
      return null
    }
 
     while(currentNode) {
        if (data === currentNode.data) {
          return currentNode
        } else if (data < currentNode.data && currentNode.left) {
             if (currentNode.left.data === data) {
                 return currentNode.left
             }
             currentNode = currentNode.left;
         } else if (data > currentNode.data && currentNode.right) {
             if (currentNode.right.data === data) {
                 return currentNode.right
             }                
             currentNode = currentNode.right;
         } else {
            return null
         }
     }
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data); 
  

    function removeNode(currentNode, data) {
      if (!currentNode) {
      return null;
      } else if (data < currentNode.data) {
          currentNode.left = removeNode(currentNode.left, data);
          return currentNode;
      } else if (data > currentNode.data) {
          currentNode.right = removeNode(currentNode.right, data);
          return currentNode;
      } else {
        if (!currentNode.left && !currentNode.right) {
          return null;
        } 
        
        if (!currentNode.left) {
        currentNode = currentNode.right;
        return currentNode;
        } 
        
        if(!currentNode.right) {
        currentNode = currentNode.left;
        return currentNode;
        }

        let minRightNode = currentNode.right;
        while (minRightNode.left) {
          minRightNode = minRightNode.left
        }
        currentNode.data = minRightNode.data;
        currentNode.right = removeNode(currentNode.right, minRightNode.data)
        return currentNode;
    }
  }
}

  min() {
    if(!this.treeRoot) {
      return;
    }
    
    let currentNode = this.treeRoot;
  
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.data
  }

  max() {
    if(!this.treeRoot) {
      return;
    }
   let currentNode = this.treeRoot;
    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.data
  }
}

module.exports = {
  BinarySearchTree
};