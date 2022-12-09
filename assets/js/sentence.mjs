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
  'be',
  'have',
  'do',
  'say',
  'go',
  'can',
  'get',
  'would',
  'make',
  'know',
  'will',
  'think',
  'take',
  'see',
  'come',
  'could',
  'want',
  'look',
  'use',
  'find',
  'give',
  'tell',
  'work',
  'may',
  'should',
  'call',
  'try',
  'ask',
  'need',
  'feel',
  'become',
  'leave',
  'put',
  'mean',
  'keep',
  'let',
  'begin',
  'seem',
  'help',
  'talk',
  'turn',
  'start',
  'might',
  'show',
  'hear',
  'play',
  'run',
  'move',
  'like',
  'live',
  'believe',
  'hold',
  'bring',
  'happen',
  'must',
  'write',
  'provide',
  'sit',
  'stand',
  'lose',
  'pay',
  'meet',
  'include',
  'continue',
  'set',
  'learn',
  'change',
  'lead',
  'understand',
  'watch',
  'follow',
  'stop',
  'create',
  'speak',
  'read',
  'allow',
  'add',
  'spend',
  'grow',
  'open',
  'walk',
  'win',
  'offer',
  'remember',
  'love',
  'consider',
  'appear',
  'buy',
  'wait',
  'serve',
  'die',
  'send',
  'expect',
  'build',
  'stay',
  'fall',
  'cut',
  'reach',
  'kill',
  'remain',
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
