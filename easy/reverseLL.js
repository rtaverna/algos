{
    let result = []
    while (head.next)   {
        result.push(head.val)
        head = head.next
    }
    return result
}
    // let newHead
    // if (!head.next) {
    //     newHead = new ListNode(head.val)
    //     newHead.next = 
    // }