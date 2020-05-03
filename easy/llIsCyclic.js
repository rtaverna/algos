var hasCycle = function(head) {
    let memo = []
    while (head)   {
        if (memo.includes(head)) {
            console.log('true',head)
            return true
        }   else    {
            memo.push(head)
            console.log('lie',head)
            head = head.next
        }

    }
    return false
};


//pointer sol
var hasCycle = function(head) {
    let fast = head
    let slow = head
    while (fast != null && fast.next !== null)   {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow)  {
            return true
        }
    }
    return false
};