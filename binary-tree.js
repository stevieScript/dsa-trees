/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    const min = (node) => {
      if (!node) return 0;
      if (!node.left && !node.right) return 1;
      if (!node.left) return min(node.right) + 1;
      if (!node.right) return min(node.left) + 1;
      return Math.min(min(node.left), min(node.right)) + 1;
    }
    return min(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const max = (node) => {
      if (!node) return 0;
      if (!node.left && !node.right) return 1;
      if (!node.left) return max(node.right) + 1;
      if (!node.right) return max(node.left) + 1;
      return Math.max(max(node.left), max(node.right)) + 1;
    }
    return max(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    const max = (node) => {
      if (!node) return 0;
      let left = max(node.left);
      let right = max(node.right);
      let maxSum = Math.max(left, right, 0);
      return node.val + maxSum;
    }
    const maxPath = (node) => {
      if (!node) return 0;
      let left = max(node.left);
      let right = max(node.right);
      let maxSum = Math.max(left, right, 0);
      let maxPath = Math.max(left + right + node.val, maxSum);
      return maxPath;
    }
    return maxPath(this.root);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null;

    let queue = [this.root];
    let nextLarger = null;

    while(queue.length) {
      let node = queue.shift();
      if(node.val > lowerBound) {
        if(nextLarger === null || node.val < nextLarger) {
          nextLarger = node.val;
        }
      }
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return nextLarger;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {
    
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {
    
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
  
}

module.exports = { BinaryTree, BinaryTreeNode };
