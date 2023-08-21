/**
 * Поиск k-того элемента по возрастанию в массиве.
 * 
 * @param {number[]} array входящий массив
 * @param {number} k искомый индекс в последовательности
 * @returns {number}  значение элемента который ищем
 */
export function nthElement(array: number[], k: number): number {
    let n = array.length
    let leftPart: number[] = []
    let rightPart: number[] = []
    let pivot = Math.floor(n / 2)

    for (let i = 0; i < n; i++) {
        if (array[i] <= array[pivot] && pivot !== i) {
            leftPart.push(array[i])
        } else if (array[i] > array[pivot]){
            rightPart.push(array[i])
        } 
    }

    let m = leftPart.length

    if (m === k) {
        return array[pivot] 
    } else if (k < m) {
        return nthElement(leftPart, k)
    } else {
        return nthElement(rightPart, k-m-1)
    }
}


let test: number[] = [1, 23, 23, 45, -101, -2, 0, 0, 5, 55, 2]

console.log(nthElement(test, 10)) // 55
