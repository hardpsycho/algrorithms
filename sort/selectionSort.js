function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        // выбираем первый элемент
        let minIndex = i
        for (let k = i+1; k < array.length; k++) {
            // во втором цикле ищем элемент который меньше его
            if (array[k] < array[minIndex]) {
                minIndex = k
            }
        }
        // меняем начальный i-тый элемент, на тот который оказался меньше
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }
    }
}

// сортировка происходит на месте. Если нужно, то создаем копию,
// сортируем копию и возвращаем копию, не мутируя исходынй массив


// проверочный массив
let test = [1, 23, 23, 45, -101, -2, 0, 0, 5, 55, 2]

selectionSort(test) // [-101, -2,  0,  0, 1,  2,  5, 23, 23, 45, 55]
