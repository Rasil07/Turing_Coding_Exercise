class BST {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  // method to insert key, value pair in binary search tree
  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BST(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BST(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  // method to return value of node with particular key in binary search tree

  searchValueOfKey(key) {
    if (this.key == null) {
      return null;
    } else if (key == this.key) {
      return this.value;
    } else if (key < this.key) {
      if (this.left == null) {
        return null;
      } else {
        return this.left.searchValueOfKey(key);
      }
    } else if (key > this.key) {
      if (this.right == null) {
        return null;
      } else {
        return this.right.searchValueOfKey(key);
      }
    }
  }

  // method to return node with particular key in binary search tree

  searchNode(key) {
    if (this.key == null) {
      return null;
    } else if (key == this.key) {
      return this;
    } else if (key < this.key) {
      if (this.left == null) {
        return null;
      } else {
        return this.left.searchNode(key);
      }
    } else if (key > this.key) {
      if (this.right == null) {
        return null;
      } else {
        return this.right.searchNode(key);
      }
    }
  }

  // method to print all the keys in binary search tree in ascending order
  printKeysInSortedOrder() {
    if (this.left !== null) {
      this.left.printKeysInSortedOrder();
    }
    console.log(this.key);

    if (this.right !== null) {
      this.right.printKeysInSortedOrder();
    }
  }

  // method to find successor of a node
  findSuccessor(node = this) {
    if (node.right) {
      return node.right.findMin();
    } else {
      let current = node;
      let ancestor = node.parent;
      while (ancestor && ancestor.left != current) {
        current = ancestor;
        ancestor = ancestor.parent;
      }
      return ancestor;
    }
  }

  // method to return the left most node in binary seach tree
  findMin() {
    if (!this.left) return this;
    return this.left.findMin();
  }

  // method to delete a node with particular key in binary search tree
  delete(key) {
    if (this.key == null) {
      return null;
    } else if (key < this.key) {
      this.left.delete(key);
    } else if (key > this.key) {
      this.right.delete(key);
    } else {
      // if node doesnot have any children puts the left and right value of its parent to null
      if (this.left == null && this.right == null) {
        if (this.parent.left == this) {
          this.parent.left = null;
        } else if (this.parent.right == this) {
          this.parent.right = null;
        }
      }
      // if node has right child only
      else if (this.left == null) {
        if (this.parent.left == this) {
          // if it is left-node of its parent
          this.parent.left = this.right;
        } else if (this.parent.right == this) {
          // if it is right-node of its parent
          this.parent.right = this.right;
        }
      }
      // if node has left child only
      else if (this.right == null) {
        if (this.parent.left == this) {
          // if it is left-node of its parent
          this.parent.left = this.left;
        } else if (this.parent.right == this) {
          // if it is right-node of its parent
          this.parent.right = this.left;
        }
      }
      // if node has both child nodes
      else {
        let successor = this.right._findMin(); // finds successor for the current node
        this.key = successor.key;
        this.value = successor.value;
        successor.delete(successor.key);
      }
    }
  }
}

module.exports = BST;
