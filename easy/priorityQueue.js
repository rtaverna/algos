function Node (data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
  
  function PriorityQueue () {
    this.first = null;
  }
  
  PriorityQueue.prototype.peek = function() {
      return this.first.data
  }
  PriorityQueue.prototype.popMax = function() {
    let max = this.first
    this.first = this.first.next
    return max
  }
  
  PriorityQueue.prototype.insert = function(data,priority) {
    let newNode = new Node(data,priority)
    if (!this.first)  {
      this.first = newNode
    } else if (newNode.priority > this.first.priority) {
        let oldFirst = this.first
        this.first = newNode
        this.first.next = oldFirst
    } else  if (!this.first.next) {
      this.first.next = newNode
      } else  {
      let next = this.first.next
      while(next) {
        if (next.priority > newNode.priority) {
          next = next.next
        } else  {
          let newNext = next.next
          next.next = newNode
          newNode.next = newNext
  
        }
      }
    }
  }
  
  const pq = new PriorityQueue();
  pq.insert('Jill, concussion', 7);
  pq.insert('John, stomach pain', 5);
  pq.insert('Dave, sprained ankle', 1);
  pq.insert('Bob, breathing problems', 8)
  // pq.peek() // ==> 'Bob, breathing problems'
  pq.popMax()
  pq.popMax()
  pq.peek()
  