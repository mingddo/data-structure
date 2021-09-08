const stack = []
stack.push(1)
console.log(stack)
stack.push(2)
console.log(stack)
stack.push(3)
console.log(stack)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

// 한 방향으로만 삽입, 삭제가 가능
// .push() => length 반환
// .pop() => 해당 요소 반환
// LIFO 구조.