let verbs, nouns, adjectives, adverbs, preposition
nouns = [
  'bird',
  'clock',
  'boy',
  'plastic',
  'duck',
  'teacher',
  'old lady',
  'professor',
  'hamster',
  'dog',
]
verbs = [
  'kicked',
  'ran',
  'flew',
  'dodged',
  'sliced',
  'rolled',
  'died',
  'breathed',
  'slept',
  'killed',
]
adjectives = [
  'beautiful',
  'lazy',
  'professional',
  'lovely',
  'dumb',
  'rough',
  'soft',
  'hot',
  'vibrating',
  'slimy',
]
adverbs = [
  'slowly',
  'elegantly',
  'precisely',
  'quickly',
  'sadly',
  'humbly',
  'proudly',
  'shockingly',
  'calmly',
  'passionately',
]
preposition = [
  'down',
  'into',
  'up',
  'on',
  'upon',
  'below',
  'above',
  'through',
  'across',
  'towards',
]

export const makeSentence = (level) => {
  let rand1 = Math.floor(Math.random() * 10)
  let rand2 = Math.floor(Math.random() * 10)
  let rand3 = Math.floor(Math.random() * 10)
  let rand4 = Math.floor(Math.random() * 10)
  let rand5 = Math.floor(Math.random() * 10)
  let rand6 = Math.floor(Math.random() * 10)

  let easySentence =
    'the ' +
    adjectives[rand1] +
    ' ' +
    nouns[rand2] +
    ' ' +
    adverbs[rand3] +
    ' ' +
    verbs[rand4] +
    ' ' +
    adverbs[rand1] +
    ' ' +
    verbs[rand1] +
    ' ' +
    preposition[rand1] +
    ' a ' +
    adjectives[rand2] +
    ' ' +
    nouns[rand5]
  
  let mediumSentence =
    'the ' +
    adjectives[rand1] +
    ' ' +
    nouns[rand2] +
    ' ' +
    adverbs[rand3] +
    ' ' +
    verbs[rand4] +
    ' because some ' +
    nouns[rand1] +
    ' ' +
    adverbs[rand1] +
    ' ' +
    verbs[rand1] +
    ' ' +
    preposition[rand1] +
    ' a ' +
    adjectives[rand2] +
    ' ' +
    nouns[rand5] +
    ' which, became a ' +
    adjectives[rand3] +
    ', ' +
    adjectives[rand4] +
    ' ' +
    nouns[rand6] +
    '.'
  
  let hardSentence =
    'The ' +
    adjectives[rand1] +
    ' ' +
    nouns[rand2] +
    ' ' +
     adverbs[rand3] +
    ' ' +
    verbs[rand4] +
    ' because some ' +
    nouns[rand1] +
    ' ' +
    adverbs[rand1] +
    ' ' +
    verbs[rand1] +
    ' ' +
    preposition[rand1] +
    ' a ' +
    adjectives[rand2] +
    ' ' +
    nouns[rand5] +
    ' which, became a ' +
    adjectives[rand3] +
    ', ' +
    adjectives[rand4] +
    ' ' +
    nouns[rand6] +
    '.'
  
  if (level === "easy") {
    return easySentence;
  }
  else if (level === "medium") {
    return mediumSentence;
  }
  else {
    return hardSentence;
  }
  
}
