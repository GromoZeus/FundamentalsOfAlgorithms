// Реализуйте функцию, которая сортирует массив целых чисел по следующему правилу —
// сначала расставить все нечетные, а за ними все четные числа из массива.Постарайтесь
// написать решение не создающее новых массивов и сложностью O(n).

const solution = (arr) => {
  const stackEven = []
  const stackOdd = []
  let i = 0
  let j = arr.length - 1
  while (i <= j) {
    if (arr[i] % 2 === 0) {
      stackEven.push(i)
    }

    if (arr[j] % 2 !== 0) {
      stackOdd.push(j)
    }

    if (stackEven.length > 0 && stackOdd.length > 0) {
      const ipop = stackEven.pop()
      const jpop = stackOdd.pop()
      const temp = arr[ipop]
      arr[ipop] = arr[jpop]
      arr[jpop] = temp
    }

    i += 1
    j -= 1
  }
  return arr
}

export default solution

const arr = [3, 1, 12, 7, 8, 1, 6, 4]

console.log(solution(arr))
