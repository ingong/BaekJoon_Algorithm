/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  return dfs(root, 0);
};

function dfs(node, level){
  if(!node) return level;
  return Math.max(dfs(node.left, level + 1), dfs(node.right, level + 1))
}
