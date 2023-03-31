type One = string
type Two = string | number
type Three = "Hello"

// convert to more less specific types

let a: One = "Hello"
let b = a as Two // less specific type
let c = a as Three // more specific type

let d = <One>'World'
let e = <string | number>'World'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
        return '' + a + b
}

let myVal: string = addOrConcat(1, 2, 'concat') as string

// be careful! TS sees no problem here - but a string is returned
let nextVal: number = addOrConcat(1, 2, 'concat') as number

// 10 as string
(10 as unknown) as string

// The DOM
const img = document.querySelector('img') as HTMLImageElement
const myImg = document.getElementById('img') as HTMLImageElement

img.src
myImg.src