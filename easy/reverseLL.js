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


    let oldHead = head
    let oldNext = head.next
    let nodes = [head.val]
    while (head.next)   {
        nodes.push(head.next.val)
        head = head.next
    }
    console.log(nodes)
    
    let result = new ListNode(nodes[nodes.length - 1])
    for (let i = nodes.length - 2; i >= 0; i--) {
        result.next = new ListNode(nodes[i])
        result = result.next
    }
    result.next = oldHead
    return result


    //solution:
    var reverseList = function(head) {
        let node = head, reversed = null;
        while(node){
            let temp = node;
            node=node.next;
            temp.next = reversed;
            reversed = temp;
        }
        return reversed;
    }