export function countingSort(sequence: number[]) {
    // создадим массив длинной 6 элементов. Мы можем делать смещение, но в данном случае чтобы не путаться, 
    // просто не будем трогать первый элемент массива с нулевым индексом
    let counter = new Array(6).fill(0)
    let result = new Array(sequence.length)
    let count = 0

    for (let i = 0; i < sequence.length; i++) {
        const element = sequence[i];
        counter[element]++
    }

    for (let i = 1; i < counter.length; i++) {
        const element = counter[i]
        const start = count
        const end = count + element + 1 // + 1 beacause index end not including in result
        count = count + element
        result.fill(i, start, end)
    }

    return result
}

const test = [1, 5, 5, 2, 3, 3, 5, 4, 3, 2, 5, 5, 1]

console.log(countingSort(test)) // [1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5, 5]