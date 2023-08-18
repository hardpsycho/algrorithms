export function findSubstr(string: string, substring: string): number {
    const lengthSub = substring.length
    // добавляем искомую подстроку в начало строки и добавляем разделитель,
    // который точно не встретится в строке. В нашем случае разделитель #
    const fullString = substring + '#' + string
    const length = fullString.length
    const pi: number[] = new Array(length).fill(0)

    for (let i = 1; i < length; i++) {
        let j = pi[i-1]

        while(j > 0 && fullString[i] !== fullString[j]){
            j = pi[j-1]
        }

        if (fullString[i] === fullString[j]) {
            j++
        }
        if (j === lengthSub) {
            // как только j сопадет с длинной искомой подстроки, то значит наша подстока найдена
            // возвращаем индекс начала этой подстроки
            return i - lengthSub * 2
        }
        pi[i] = j
    }

    return -1
}

const testString = 'aaabbbxyzabc'
const testSubstring = 'xyz'

console.log(findSubstr(testString, testSubstring))