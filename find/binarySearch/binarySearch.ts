

/**
 * Бинарный поиск на отсортированном по возрастанию массиве.
 * 
 * @param {number[]} array входящий отсортированный массив
 * @param {number} query искомое число
 * @returns {number}  индекс элемента который ищем или -1, если не найдено
 */

function binarySearch(array: number[], query: number): number {
    let left = 0
    let right = array.length-1

    while(left <= right) {
        let middle = Math.floor((right + left) / 2)
        if (array[middle] === query) {
            return middle
        } else if (array[middle] > query) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

    return -1
}

const test = [-15, -3, -1, 0, 22, 23, 105, 122]
const query1 = -15
const query2 = 0
const query3 = 122
const query4 = 5

console.log(binarySearch(test, query1))  // 0
console.log(binarySearch(test, query2))  // 3
console.log(binarySearch(test, query3))  // 7
console.log(binarySearch(test, query4))  // -1