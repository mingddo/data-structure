const map = new Map();
map.set('apple', 1300)
map.set('lemon', 4500)
console.log(map)
console.log(map.get('lemon'))
console.log(map.get('apple'))

// ES6 이전에는 {} dictionary를 사용.
// ES6 부터는 Map 자료구조가 추가됨.
// O(1)의 접근성을 가짐.