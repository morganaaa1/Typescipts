const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj('john'))
console.log(isObj([1, 2, 3]))
console.log(isObj({ name: 'john'}))
console.log(isObj(null))