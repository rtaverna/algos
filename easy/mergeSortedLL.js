var mergeTwoLists = function(l1, l2) {
    let resultNode
    let newHead
    let other
    let min
    let max
    if (!l1)    return l2
    if (!l2)    return l1
    if (l1.val < l2.val)    {
        newHead = l1
        other = l2
        min = l1.val
        max =l2.val
    }   else    {
        newHead = l2
        other = l1
        min = l2.val
        max = l1.val
    }
    resultNode = new ListNode(min)
    if (!l1.next && !l2.next)   {
        resultNode.next = other
        return resultNode
    }  else {
        resultNode.next = mergeTwoLists(newHead.next,other)
        return resultNode
        
    }
    
};