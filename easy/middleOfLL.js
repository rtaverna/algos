var middleNode = function(head) {
    let length = 1
    let oldHead = head
    while(head.next)    {
        length++
        head = head.next
    }
    
    let mid = length % 2 === 1 ? Math.ceil(length / 2) : Math.ceil(length / 2) + 1
    while (mid - 1) {
        oldHead = oldHead.next
        mid--
    }
    return oldHead
};