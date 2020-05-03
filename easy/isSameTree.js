var isSameTree = function(p, q) {
    if (!p && !q) {
        return true
    }
    if (!q || !p)   {
        return false
    } else if (p.val !== q.val) {
        return false
    }   else    {
        
        return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
    }
};