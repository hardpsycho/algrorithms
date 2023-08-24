/*
    Эффективность O(n log n)
    Затраты по памяти O(n)
*/

export function mergeSort(array: number[]) {
    const length = array.length
    // алгоритм рекурсивный, поэтому сразу делаем условие выхода из рекурсии
    if (length < 2) {
        return array
    }

    const middle = Math.floor(length / 2)
    const leftPart: number[] = mergeSort(array.slice(0, middle))
    const rightPart: number[] = mergeSort(array.slice(middle))

    let result: number[] = [] 
    let l = 0
    let r = 0

    while (l < leftPart.length && r < rightPart.length) {
        if (leftPart[l] < rightPart[r]) {
            result.push(leftPart[l]) 
            l++
        } else {
            result.push(rightPart[r])
            r++
        }
    }

    // сливаем остатки если есть в левом массиве
    while (l < leftPart.length) {
        result.push(leftPart[l]) 
        l++
    }

    // сливаем остатки если есть в правом массиве
    while (r < rightPart.length) {
        result.push(rightPart[r]) 
        r++
    }

    return result
}

let test: number[] = [1, 23, 23, 45, -101, -2, 0, 0, 5, 55, 2]

console.log(mergeSort(test)) // [-101, -2,  0,  0, 1,  2,  5, 23, 23, 45, 55]