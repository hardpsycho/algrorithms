/*
    быстрый алгоритм сортировки, так же известный как алгоритм Хоара
    Эффектинвость O(n*logn)

    Важно выбирать опорный элемент (pivot) случайно или из середины,
    потому что крайнии элементы в худшем случае приведут эффективность к O(n^2)
*/

function quickSort(array) {
    const n = array.length

    // алгоритм рекурсивный, поэтому сразу напишем выход из рекурсии
    // пишем меньше 2, а не равно 1, потому что может быть пустой массив слева или справа
    if (n < 2) {
        return array
    }

    const pivot = Math.floor(n / 2)
    let leftPart = []
    let rightPart = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] <= array[pivot] && i !== pivot) {
            leftPart.push(array[i])
        } else if (array[i] > array[pivot] && i !== pivot){
            rightPart.push(array[i])
        }
    }

    return [...quickSort(leftPart), array[pivot], ...quickSort(rightPart)]
}

let test = [1, 23, 23, 45, -101, -2, 0, 0, 5, 55, 2]

console.log(quickSort(test)) // [-101, -2,  0,  0, 1,  2,  5, 23, 23, 45, 55]