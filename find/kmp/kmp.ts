export function kmp(string: string) {
    const length = string.length
    const pi: number[] = new Array(length).fill(0)
    
    for (let i = 1; i < length; i++) {
        let j = pi[i-1]

        while(j > 0 && string[i] !== string[j]){
            j = pi[j-1]
        }

        if (string[i] === string[j]) {
            j++
        }

        pi[i] = j
    }

    return pi
}

const test = 'abcabdabc'

console.log(kmp(test))  // [0, 0, 0, 1, 2, 0, 1, 2, 3]