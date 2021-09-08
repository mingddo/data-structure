function linkedList(a) {
    this.val = a;
    this.next = null;
}
let head = new linkedList(0)
let node1 = new linkedList(1)
let node2 = new linkedList(2)

head.next = node1;
node1.next = node2;
console.log(head)
console.log(head.next)
console.log(node1)
console.log(node2)
