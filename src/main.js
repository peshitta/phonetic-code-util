/** @module phoneticCodeUtil */
/**
 * Semitic 22 base consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  // abgad
  '\u2019', // Ālaph - Glottal Stop
  'b', // Bēth - Voiced bilabial stop
  'g', // Gāmal - Voiced velar stop
  'd', // Dālath - Voiced alveolar stop

  // hawaz
  'h', // Hē - Voiceless glottal fricative
  'w', // Waw - Voiced labio-velar approximant
  'z', // Zain - Voiced alveolar fricative

  // ḥaṭy
  'ḥ', // Ḥēth - Voiceless pharyngeal fricative
  'ṭ', // Ṭēth - Emphatic pharyngealized T
  'y', // Yodh - Voiced palatal approximant

  // kalman
  'k', // Kāph - Voiceless velar stop
  'l', // Lāmadh - Alveolar lateral approximant
  'm', // Mem - Bilabial nasal
  'n', // Nun - Alveolar nasal

  // saʿpac
  's', // Semkath - Voiceless alveolar fricative
  '\u2018', // ʿĒ - Voiced pharyngeal fricative
  'p', // Pē - Voiceless bilabial stop
  'ṣ', // Ṣādhē - Emphatic pharyngealized s, ~ strike-through for pharyngealization

  // qarshat
  'q', // Qoph - Voiceless uvular stop
  'r', // Rēsh - Alveolar trill
  'š', // Shin - Voiceless palato-alveolar sibilant
  't' // Taw - Voiceless alveolar stop
]);

/**
 * Begadkepat consonants
 * @constant
 * @type { string[] }
 */
export const begadkepatConsonants = [
  'b', // Bēth - Voiced bilabial stop
  'g', // Gāmal - Voiced velar stop
  'd', // Dālath - Voiced alveolar stop
  'k', // Kāph - Voiceless velar stop
  'p', // Pē - Voiceless bilabial stop
  't' // Taw - Voiceless alveolar stop
];

/**
 * Veghadhkhefath consonants
 * @constant
 * @type { string[] }
 */
export const veghadhkhefathConsonants = [
  'ḇ', // Vēth - Voiced labiodental fricative
  'g̱', // Ghāmal - Voiced velar fricative
  'ḏ', // Dhālath - Voiced dental fricative
  'ḵ', // Khāph - Voiceless velar fricative
  'p̱', // Fē - voiceless labiodental fricative
  'ṯ' // Thaw - Voiceless dental fricative
];

/**
 * Begadkepat to veghadhkhefath map
 * @const
 * @type { Object.<string, string> }
 */
export const begadkepatMap = Object.freeze(
  Object.create(null, {
    b: { value: 'ḇ', enumerable: true },
    g: { value: 'g̱', enumerable: true },
    d: { value: 'ḏ', enumerable: true },
    k: { value: 'ḵ', enumerable: true },
    p: { value: 'p̱', enumerable: true },
    t: { value: 'ṯ', enumerable: true }
  })
);

/**
 * Other semitic consonants
 * @constant
 * @type { string[] }
 */
export const extraConsonants = [
  'ś', // Śin - Voiceless alveolar lateral fricative
  'ḍ', // Ḍād - Emphatic pharyngealized D, ~ strike-through for pharyngealization
  'ẓ' // Ẓā’ - Emphatic pharyngealized Dh, ~ strike-through for pharyngealization
];

/**
 * All consonants concatenated
 * @constant
 * @type { string[] }
 */
export const allConsonants = Object.freeze(
  consonants.concat(veghadhkhefathConsonants).concat(extraConsonants)
);

/**
 * Common aramaic vowels
 * @constant
 * @type { string[] }
*/
export const commonVowels = Object.freeze([
  'a', // Pthāḥā - Open front unrounded vowel
  'ā', // Zqāphā - Open back unrounded vowel
  'ē', // Zlāmā qašyā - Close-mid front unrounded vowel
  'ī', // Ḥḇāṣā - Close front unrounded vowel
  'ū' // Rvāṣā - Close back rounded vowel
]);

/**
 * Eastern/hebrew only vowels
 * @constant
 * @type { string[] }
*/
export const easternVowels = Object.freeze([
  'e', // Zlāmā pšīqā - Open-mid front unrounded - short version of e
  'ō' // Rwāḥā - Close-mid back rounded vowel
]);

/**
 * Other semitic vowels
 * @constant
 * @type { string[] }
*/
export const otherVowels = Object.freeze([
  'u', // Near-close near-back rounded vowel. Short version of u.
  'i', // Near-close near-front unrounded vowel. Short version of i.
  'o' // Open-mid back rounded vowel. Short version of o.
]);

/**
 * Semitic vowels including Eastern/Hebrew ones and other short vowels.
 * @constant
 * @type { string[] }
*/
export const allVowels = Object.freeze(
  commonVowels.concat(easternVowels).concat(otherVowels)
);

/**
 * The silent letter symbol
 * @const
 * @type { string }
 */
export const silent = '∅';

/**
 * Is character c a semitic consonant
 * @param { string } c input character
 * @returns { boolean } true if c is semitic consonant
 */
export const isConsonant = c => allConsonants.indexOf(c) > -1;

/**
 * Is character c a semitic vowel
 * @param { string } c input character
 * @returns { boolean } true if c is semitic vowel
 */
export const isVowel = c => allVowels.indexOf(c) > -1;

/**
 * Remove vowels, leaving consonantal word only.
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeVowels = word => {
  if (!word) {
    return word;
  }

  let hasVowels = false;
  const stack = [];
  for (let i = 0, len = word.length; i < len; i++) {
    const c = word.charAt(i);
    if (isVowel(c)) {
      hasVowels = true;
    } else {
      stack.push(c);
    }
  }
  return hasVowels ? stack.join('') : word;
};

/**
 * Returns true if c is a begadkepat consonant
 * @param { string } c input character
 * @returns { boolean } true if c is a begadkepat consonant
 */
export const isBegadkepat = c => begadkepatConsonants.indexOf(c) > -1;

/**
 * Returns true if c is a veghadhkhefath consonant
 * @param { string } c input character
 * @returns { boolean } true if c is a veghadhkhefath consonant
 */
export const isVeghadhkhefath = c => veghadhkhefathConsonants.indexOf(c) > -1;
