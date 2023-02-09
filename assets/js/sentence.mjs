// initialize variables
let verbs, nouns, adjectives, adverbs, preposition

// set of nouns
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
  'account',
  'middle',
  'act',
  'milk',
  'adjustment',
  'mind',
  'advertisement',
  'mine',
  'agreement',
  'minute',
  'air',
  'mist',
  'amount',
  'money',
  'amusement',
  'month',
  'animal',
  'morning',
  'answer',
  'mother',
  'apparatus',
  'motion',
  'approval',
  'mountain',
  'argument',
  'move',
  'attack',
  'name',
  'attempt',
  'nation',
  'attention',
  'need',
  'attraction',
  'news',
  'authority',
  'night',
  'back',
  'noise',
  'balance',
  'note',
  'base',
  'number',
  'behavior',
  'observation',
  'belief',
  'offer',
  'birth',
  'oil',
  'bit',
  'operation',
  'bite',
  'opinion',
  'breath',
  'pain',
  'brother',
  'paint',
  'building',
  'paper',
  'burn',
  'part',
  'burst',
  'paste',
  'business',
  'payment',
  'butter',
  'peace',
  'canvas',
  'person',
  'care',
  'place',
  'cause',
  'plant',
  'chalk',
  'play',
  'chance',
  'pleasure',
  'change',
  'point',
  'force',
  'song',
  'form',
  'sort',
  'friend',
  'sound',
  'front',
  'soup',
  'fruit',
  'space',
  'glass',
  'stage',
]

// set of verbs
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

// set of adjectives
adjectives = [
  'accurate',
  'agreeable',
  'affectionate',
  'ambitious',
  'approachable',
  'articulate',
  'artistic',
  'attractive',
  'brave',
  'calm',
  'cautious',
  'careful',
  'charming',
  'cheerful',
  'clean',
  'comfortable',
  'confident',
  'clever',
  'cool',
  'competent',
  'considerate',
  'contented',
  'cultured',
  'decisive',
  'dependable',
  'dynamic',
  'direct',
  'discreet',
  'discontented',
  'delightful',
  'detailed',
  'dedicated',
  'determined',
  'dazzling',
  'easy-going',
  'efficient',
  'enthusiastic',
  'excitable',
  'faithful',
  'fair',
  'flexible',
  'friendly',
  'fun',
  'funny',
  'generous',
  'gentle',
  'great',
  'generous',
  'hard-working',
  'happy',
  'helpful',
  'honest',
  'humorous',
  'imaginative',
  'intelligent',
  'interesting',
  'kind',
  'likable',
  'logical',
  'loveable',
  'loving',
  'loyal',
  'mature',
  'modest',
  'obedient',
  'open-minded',
  'optimistic',
  'organized',
  'passionate',
  'patient',
  'pleasant',
  'polite',
  'positive',
  'powerful',
  'practical',
  'quiet',
  'romantic',
  'relaxed',
  'reserved',
  'respectful',
  'responsive',
  'rational',
  'realistic',
  'reasonable',
  'relaxed',
  'reliable',
  'resourceful',
  'sane',
  'sensible',
  'sensitive',
  'sincere',
  'smart',
  'sociable',
  'strong',
  'tactful',
  'thoughtful',
  'trustworthy',
  'unique',
  'willing',
  'youthful'
]

// set of adverbs
adverbs = [
  'accidentally',
  'always',
  'angrily',
  'arrogantly',
  'badly',
  'beautifully',
  'bitterly',
  'blindly',
  'boldly',
  'bravely',
  'briefly',
  'busily',
  'boastfully',
  'boldly',
  'bashfully',
  'brightly',
  'carefully',
  'certainly',
  'clearly',
  'courageously',
  'cruelly',
  'curiously',
  'commonly',
  'calmly',
  'carelessly',
  'cautiously',
  'cheerfully',
  'cleverly',
  'closely',
  'coaxingly',
  'colorfully',
  'continually',
  'correctly',
  'crossly',
  'daily',
  'delightfully',
  'easily',
  'enthusiastically',
  'eventually',
  'exactly',
  'excitedly',
  'extremely',
  'fairly',
  'faithfully',
  'fast',
  'foolishly',
  'fortunately',
  'frankly',
  'generally',
  'generously',
  'gently',
  'gracefully',
  'gladly',
  'gleefully',
  'gratefully',
  'greatly',
  'greedily',
  'happily',
  'highly',
  'honestly',
  'hopelessly',
  'immediately',
  'innocently',
  'instantly',
  'interestingly',
  'jealously',
  'joyfully',
  'kindly',
  'keenly',
  'kiddingly',
  'kindheartedly',
  'kookily',
  'knowingly',
  'knavishly',
  'lively',
  'lazily',
  'less',
  'loudly',
  'lovingly',
  'loyally',
  'loosely',
  'madly',
  'more',
  'mysteriously',
  'naturally',
  'nearly',
  'nervously',
  'never',
  'obediently',
  'officially',
  'often',
  'openly',
  'painfully',
  'patiently',
  'politely',
  'poorly',
  'positively',
  'properly',
  'quickly',
  'quietly'
]

// set of prepositions
preposition = [
  'about',
  'above',
  'across',
  'after',
  'against',
  'among',
  'around',
  'at',
  'before',
  'behind',
  'below',
  'beside',
  'between',
  'by',
  'down',
  'during',
  'for',
  'from',
  'in',
  'inside',
  'into',
  'near',
  'of',
  'off',
  'on',
  'out',
  'over',
  'through',
  'to',
  'toward',
  'under',
  'up',
  'with',
  'aboard',
  'along',
  'amid',
  'as',
  'beneath',
  'beyond',
  'but',
  'concerning',
  'considering',
  'despite',
  'except',
  'following',
  'like',
  'minus',
  'next',
  'onto',
  'opposite',
  'outside',
  'past',
  'per',
  'plus',
  'regarding',
  'round',
  'save',
  'since',
  'than',
  'till',
  'underneath',
  'unlike',
  'until',
  'upon',
  'versus',
  'via',
  'within',
  'without',
  'ask out',
  'back up',
  'break up',
  'break in',
  'call off',
  'call on',
  'check in',
  'dress up',
  'drop in',
  'drop off',
  'fall down',
  'fill in',
  'fill out',
  'find out',
  'get around',
  'give away',
  'give in',
  'hand out',
  'hang up',
  'keep up',
  'make up',
  'put down',
  'set up',
  'show off',
  'take back',
  'take off',
  'turn down',
  'try out',
  'work out',
  'because of',
  'as a result of',
  'is due to'
]

// function to make a sentence
export const makeSentence = (level, quoteLength) => {
  // get random numbers
  let rand1 = Math.floor(Math.random() * 100)
  let rand2 = Math.floor(Math.random() * 100)
  let rand3 = Math.floor(Math.random() * 100)
  let rand4 = Math.floor(Math.random() * 100)
  let rand5 = Math.floor(Math.random() * 100)
  let rand6 = Math.floor(Math.random() * 100)

  // create a easy sentence
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

  // create a medium sentence
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

  // create a hard sentence
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

  let easyLevelSentence = ""
  let mediumLevelSentence = ""
  let hardLevelSentence = ""

  for (let i = 0; i < quoteLength; i = i + 11) {
    easyLevelSentence += easySentence + " "
  }
  for (let i = 0; i < quoteLength; i = i + 21) {
    mediumLevelSentence += mediumSentence + " "
  }
  for (let i = 0; i < quoteLength; i = i + 21) {
    hardLevelSentence += hardSentence + " "
  }

  // return the sentence
  if (level === "easy") {
    return easyLevelSentence;
  }
  else if (level === "medium") {
    return mediumLevelSentence;
  }
  else {
    return hardLevelSentence;
  }

}
