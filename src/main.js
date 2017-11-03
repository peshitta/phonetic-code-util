/** @module phoneticCodeUtil */
import { hasDotting, clearDotting } from 'aramaic-mapper';

/**
 * Phonetic latin consonant name to value map
 * @constant
 * @type { Object.<string, string> }
*/
export const consonantsByName = Object.freeze(
  Object.create(null, {
    alaph: { value: '\u2019', enumerable: true },
    beth: { value: 'b', enumerable: true },
    gamal: { value: 'g', enumerable: true },
    dalath: { value: 'd', enumerable: true },

    he: { value: 'h', enumerable: true },
    waw: { value: 'w', enumerable: true },
    zayn: { value: 'z', enumerable: true },

    heth: { value: 'ḥ', enumerable: true },
    teth: { value: 'ṭ', enumerable: true },
    yod: { value: 'y', enumerable: true },

    kaph: { value: 'k', enumerable: true },
    lamadh: { value: 'l', enumerable: true },
    mim: { value: 'm', enumerable: true },
    nun: { value: 'n', enumerable: true },

    semkath: { value: 's', enumerable: true },
    e: { value: '\u2018', enumerable: true },
    pe: { value: 'p', enumerable: true },
    sadhe: { value: 'ṣ', enumerable: true },

    qoph: { value: 'q', enumerable: true },
    resh: { value: 'r', enumerable: true },
    shin: { value: 'š', enumerable: true },
    taw: { value: 't', enumerable: true }
  })
);

const l = consonantsByName;
/**
 * Semitic 22 base consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  // abgad
  l.alaph, // '\u2019', Ālaph - Glottal Stop
  l.beth, // 'b', Bēth - Voiced bilabial stop
  l.gamal, // 'g', Gāmal - Voiced velar stop
  l.dalath, // 'd', Dālath - Voiced alveolar stop

  // hawaz
  l.he, // 'h', Hē - Voiceless glottal fricative
  l.waw, // 'w', Waw - Voiced labio-velar approximant
  l.zayn, // 'z', Zain - Voiced alveolar fricative

  // ḥaṭy
  l.heth, // 'ḥ', Ḥēth - Voiceless pharyngeal fricative
  l.teth, // 'ṭ', Ṭēth - Emphatic pharyngealized T
  l.yod, // 'y', Yodh - Voiced palatal approximant

  // kalman
  l.kaph, // 'k', Kāph - Voiceless velar stop
  l.lamadh, // 'l', Lāmadh - Alveolar lateral approximant
  l.mim, // 'm', Mem - Bilabial nasal
  l.nun, // 'n', Nun - Alveolar nasal

  // saʿpac
  l.semkath, // 's', Semkath - Voiceless alveolar fricative
  l.e, // '\u2018', ʿĒ - Voiced pharyngeal fricative
  l.pe, // 'p', Pē - Voiceless bilabial stop
  l.sadhe, // 'ṣ', Ṣādhē - Emphatic pharyngealized s

  // qarshat
  l.qoph, // 'q', Qoph - Voiceless uvular stop
  l.resh, // 'r',  Rēsh - Alveolar trill
  l.shin, // 'š', Shin - Voiceless palato-alveolar sibilant
  l.taw // 't', Taw - Voiceless alveolar stop
]);

/**
 * Begadkepat consonants
 * @constant
 * @type { string[] }
 */
export const begadkepatConsonants = [
  l.beth, // 'b', Bēth - Voiced bilabial stop
  l.gamal, // 'g', Gāmal - Voiced velar stop
  l.dalath, // 'd', Dālath - Voiced alveolar stop
  l.kaph, // 'k', Kāph - Voiceless velar stop
  l.pe, // 'p', Pē - Voiceless bilabial stop
  l.taw // 't', Taw - Voiceless alveolar stop
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
 * Phonetic latin vowel name to value map
 * @constant
 * @type { Object.<string, string> }
*/
export const vowelsByName = Object.freeze(
  Object.create(null, {
    pthaha: { value: 'a', enumerable: true },
    zqapha: { value: 'ā', enumerable: true },
    rbasa: { value: 'ē', enumerable: true },
    hbasa: { value: 'ī', enumerable: true },
    esasa: { value: 'ū', enumerable: true },

    zlama: { value: 'e', enumerable: true },
    rwaha: { value: 'ō', enumerable: true }
  })
);

const v = vowelsByName;
/**
 * Common aramaic vowels
 * @constant
 * @type { string[] }
*/
export const commonVowels = Object.freeze([
  v.pthaha, // 'a', Pthāḥā - Open front unrounded vowel
  v.zqapha, // 'ā', Zqāphā - Open back unrounded vowel
  v.rbasa, // 'ē', Zlāmā qašyā - Close-mid front unrounded vowel
  v.hbasa, // 'ī', Ḥḇāṣā - Close front unrounded vowel
  v.esasa // 'ū' Rvāṣā - Close back rounded vowel
]);

/**
 * Eastern/hebrew only vowels
 * @constant
 * @type { string[] }
*/
export const easternVowels = Object.freeze([
  v.zlama, // 'e', Zlāmā pšīqā - Open-mid front unrounded - short version of e
  v.rwaha // 'ō' Rwāḥā - Close-mid back rounded vowel
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
 * Return true if input word has vowels
 * @param { string } word input word
 * @returns { boolean } true if word has vowels
 */
export const isDotted = hasDotting(isVowel);

/**
 * Remove vowels, leaving consonantal word only.
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeVowels = clearDotting(isVowel);

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
