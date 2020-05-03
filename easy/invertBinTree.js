if (!root)  return null
    if (root.left === root.right === null)  {
        return root
    }
    let newNode = new TreeNode(root.val)
    newNode.left = invertTree(root.right)
    newNode.right = invertTree(root.left)
    return newNode