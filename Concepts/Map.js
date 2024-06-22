//Map using object
const USER_MAP = {
    1: { name: 'Nishant' },
    2: { name: 'John' }
}

//Using Maps in js(Array of arrays with key(object) and value(object)), provides methods.

const userMap = new Map([
    [1, { name: 'Nishant' }],
    [2, { name: 'John' }]
])
userMap.set({ userId: 1 }, { name: 'Doe' })
console.log(userMap.size);

console.log(userMap)