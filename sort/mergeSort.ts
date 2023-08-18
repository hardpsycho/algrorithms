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

    while(leftPart.length > 0 && rightPart.length > 0) {
        if (leftPart[0] < rightPart[0]){
            result.push(leftPart.shift() as number)
        } else {
            result.push(rightPart.shift() as number)
        }
    }   

    return result.concat(leftPart, rightPart)
}

let test: number[] = [1, 23, 23, 45, -101, -2, 0, 0, 5, 55, 2]

mergeSort(test) // [-101, -2,  0,  0, 1,  2,  5, 23, 23, 45, 55]
