// 1. filter
Array.prototype.customFilter = function (filterCB) {
    let result = []
    for (let ele of this) {
        if (filterCB(ele)) {
            result.push(ele)
        }
    }
    // for (let i = 0; i < this.length; i++) {
    //     if (filterCB(this[i], i, this)){

    //     }
    // }
    return result
}

console.log([1, 2, 3].customFilter(n => n % 2 == 0))

const myFilter = function (arr, filterCB) {
    // instead of this use arr to compute the arr values
}

// 2. Map

Array.prototype.customMap = function (mapCB) {
    const result = []
    for (let ele of this) {
        result.push(mapCB(ele))
    }
    return result

}

console.log([1, 2, 3].customMap(n => n * 2))

// 3. Find

Array.prototype.customFind = function (findCB) {
    for (let ele of this) {
        if (findCB(ele)) {
            return ele   // return the element itself, not result.push(ele)
        }
    }
    return undefined     // just like native find()
}


console.log([1, 2, 3].customFind(n => n == 2))

// 4. Reduces

Array.prototype.customReduce = function (reduceCB, initialValue) {
    let accumulator = initialValue
    let startIndex = 0
    if (accumulator == undefined) {
        if (this.length == 0) {
            throw new TypeError("Type Reduce cannot be used on array of length 0")
        }
        accumulator = this[0]
        startIndex = 1
    }
    //  let accumulator = initialValue !== undefined ? initialValue : this[0]
    // let startIndex = initialValue !== undefined ? 0 : 1

    for (let i = startIndex; i < this.length; i++) {
        accumulator = reduceCB(accumulator, this[i], i, this)
    }

    return accumulator

}

console.log([1, 2, 3].customReduce((acc, curr) => acc + curr, 0))

// if we want to refer to array using this then we have to avoid using arrow functions