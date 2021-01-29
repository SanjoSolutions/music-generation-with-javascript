import { generatePermutations } from './generatePermutations.js'

export function generateMusic(output) {
  const cMajorScale = generateMajorScale(60)
  const permutations = generatePermutations(cMajorScale, 4)
  let index = 0
  for (const permutation of permutations) {
    for (const note of permutation) {
      output.playNote(note, 1 / 4)
      output.pause(1 / 4)
    }
    output.pause(1 / 4)
  }
}

const majorSignature = [0, 2, 4, 5, 7, 9, 11, 12]

function generateMajorScale(rootNote) {
  return generateScale(rootNote, majorSignature)
}

function generateScale(rootNote, signature) {
  return signature.map(
    intervalRelativeToRootNote => rootNote + intervalRelativeToRootNote
  )
}
