// Реализуйте функцию, которая сортирует массив целых чисел по следующему правилу —
// сначала расставить все нечетные, а за ними все четные числа из массива.Постарайтесь
// написать решение не создающее новых массивов и сложностью O(n).

const solution = (arr) => {
  const stackEven = []
  const stackOdd = []
  let i = 0
  let j = arr.length - 1
  while (i <= j) {
    if (arr[i] % 2 !== 0) {
      i += 1
    }
    else {
      stackEven.push(i)
      i += 1
    }

    if (arr[j] % 2 === 0) {
      j -= 1
    }
    else {
      stackOdd.push(j)
      j -= 1
    }

    if (stackEven.length > 0 && stackOdd.length > 0) {
      const ipop = stackEven.pop()
      const jpop = stackOdd.pop()
      const temp = arr[ipop]
      arr[ipop] = arr[jpop]
      arr[jpop] = temp
    }
  }
  return arr
}

export default solution

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 101]

console.log(solution(arr))
