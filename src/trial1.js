// Реализуйте и функцию, которая объединяет два отсортированных массива в отсортированный
//  объединенный массив.Постарайтесь реализовать алгоритм с линейной сложностью O(n + m),
//  где n и m это длины массивов

const solution = (arr1, arr2) => {
  const result = []
  let a1 = 0
  let a2 = 0
  while (typeof arr1[a1] !== 'undefined' || typeof arr2[a2] !== 'undefined') {
    if (arr1[a1] > arr2[a2] || typeof arr1[a1] === 'undefined') {
      result.push(arr2[a2])
      a2 += 1
    }
    else if (arr1[a1] < arr2[a2] || typeof arr1[a2] === 'undefined') {
      result.push(arr1[a1])
      a1 += 1
    }
    else {
      result.push(arr1[a1], arr2[a2])
      a1 += 1
      a2 += 1
    }
  }
  return result
}

export default solution

const arr1 = [1, 3, 4, 5, 7]
const arr2 = [2, 3, 5, 8, 12]

console.log(solution(arr1, arr2)) // [1, 2, 3, 3, 4, 5, 5, 7, 8, 12]
