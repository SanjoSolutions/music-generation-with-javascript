export function generatePermutations(list, length) {
  let permutations = [[]]
  for (let currentLength = 0; currentLength < length; currentLength++) {
    const currentPermutations = []
    for (const value of list) {
      for (const permutation of permutations) {
        currentPermutations.push(permutation.concat([value]))
      }
    }
    permutations = currentPermutations
  }
  return permutations
}
