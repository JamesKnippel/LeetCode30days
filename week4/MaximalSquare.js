let name = Symbol('Mike');
console.log(name);

let map = new Map();

map.set(name, 17);

map.set(Symbol('Mike'), 16);

console.log(map);


map.set('Jim', 7);
map.set('Jim', 8)

console.log(map)
