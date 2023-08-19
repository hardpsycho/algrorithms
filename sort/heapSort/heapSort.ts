export function heapSort(sequence: number[]): void {
    let length = sequence.length

    const exchange = function(idx: number, max: number) {
        let left = idx * 2 + 1
        let right = idx * 2 + 2
        let maxId = left  // по умолчанию выставляем большим из детей левого потомка
        
        if (right < max && left < max) { // проверяем что оба потомка существуют
            if (sequence[right] > sequence[left]) { // если правый больше левого, то меняем их местами
                [sequence[right], sequence[left]] = [sequence[left], sequence[right]]
            } 
            // если потовков нет то ставим родителя самым большим, чтобы не было никаких обменов
        } else { 
            maxId = idx
        }

        // если больший из детей, больше родителя, то меняем их местами
        if (sequence[maxId] > sequence[idx]) { 
            [sequence[idx], sequence[maxId]] = [sequence[maxId], sequence[idx]]
        }
    }

    const heapify = function(from: number){
        for (let i = Math.floor(from / 2); i >= 0; i--) {
            exchange(i, from)
            ;[sequence[0], sequence[from]] = [sequence[from], sequence[0]]
        }
    }

    for (let i = length-1, max = length-1; i > 1; i--, max--){
        heapify(i)
    }
}

let test = [1, 23, 23, 45, -101, -2, 0, 0, 5, 55, 2]

heapSort(test) // [-101, -2,  0,  0, 1,  2,  5, 23, 23, 45, 55]
