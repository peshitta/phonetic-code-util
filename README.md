# phonetic-code-util

[![npm version](https://badge.fury.io/js/phonetic-code-util.svg)](https://badge.fury.io/js/phonetic-code-util)
[![npm module downloads](http://img.shields.io/npm/dt/phonetic-code-util.svg)](https://www.npmjs.org/package/phonetic-code-util)
[![Build Status](https://travis-ci.org/peshitta/phonetic-code-util.svg?branch=master)](https://travis-ci.org/peshitta/phonetic-code-util)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/phonetic-code-util/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/phonetic-code-util.svg)](https://david-dm.org/peshitta/phonetic-code-util)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/phonetic-code-util/badge.svg?branch=master)](https://coveralls.io/github/peshitta/phonetic-code-util?branch=master)
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Semitic Latin phonetic transliteration utilities

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install phonetic-code-util --save
```

Following bundles are available:
* `phonetic-code-util.js` - UMD ES5 version for use in browser, node, etc.
* `phonetic-code-util.min.js` - minified version of `phonetic-code-util.js`
* `phonetic-code-util.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/phonetic-code-util/-/phonetic-code-util-1.0.5.tgz](https://registry.npmjs.org/phonetic-code-util/-/phonetic-code-util-1.0.5.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/phonetic-code-util/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/phonetic-code-util/issues).

To read quick updates about Peshitta app or post questions or feedback, follow
[@peshittap](https://www.twitter.com/peshittap)
at [![@peshittap](http://i.imgur.com/wWzX9uB.png "@peshittap")](https://www.twitter.com/peshittap)or
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [phoneticCodeUtil](#module_phoneticCodeUtil)
    * [.consonantsByName](#module_phoneticCodeUtil.consonantsByName) : <code>Object.&lt;string, string&gt;</code>
    * [.consonants](#module_phoneticCodeUtil.consonants) : <code>Array.&lt;string&gt;</code>
    * [.begadkepatConsonants](#module_phoneticCodeUtil.begadkepatConsonants) : <code>Array.&lt;string&gt;</code>
    * [.veghadhkhefathConsonants](#module_phoneticCodeUtil.veghadhkhefathConsonants) : <code>Array.&lt;string&gt;</code>
    * [.begadkepatMap](#module_phoneticCodeUtil.begadkepatMap) : <code>Object.&lt;string, string&gt;</code>
    * [.extraConsonants](#module_phoneticCodeUtil.extraConsonants) : <code>Array.&lt;string&gt;</code>
    * [.allConsonants](#module_phoneticCodeUtil.allConsonants) : <code>Array.&lt;string&gt;</code>
    * [.vowelsByName](#module_phoneticCodeUtil.vowelsByName) : <code>Object.&lt;string, string&gt;</code>
    * [.commonVowels](#module_phoneticCodeUtil.commonVowels) : <code>Array.&lt;string&gt;</code>
    * [.easternVowels](#module_phoneticCodeUtil.easternVowels) : <code>Array.&lt;string&gt;</code>
    * [.otherVowels](#module_phoneticCodeUtil.otherVowels) : <code>Array.&lt;string&gt;</code>
    * [.allVowels](#module_phoneticCodeUtil.allVowels) : <code>Array.&lt;string&gt;</code>
    * [.silent](#module_phoneticCodeUtil.silent) : <code>string</code>
    * [.isConsonant](#module_phoneticCodeUtil.isConsonant) ⇒ <code>boolean</code>
    * [.isVowel](#module_phoneticCodeUtil.isVowel) ⇒ <code>boolean</code>
    * [.isDotted](#module_phoneticCodeUtil.isDotted) ⇒ <code>boolean</code>
    * [.removeVowels](#module_phoneticCodeUtil.removeVowels) ⇒ <code>string</code>
    * [.isBegadkepat](#module_phoneticCodeUtil.isBegadkepat) ⇒ <code>boolean</code>
    * [.isVeghadhkhefath](#module_phoneticCodeUtil.isVeghadhkhefath) ⇒ <code>boolean</code>

<a name="module_phoneticCodeUtil.consonantsByName"></a>

### phoneticCodeUtil.consonantsByName : <code>Object.&lt;string, string&gt;</code>
Phonetic latin consonant name to value map

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
<a name="module_phoneticCodeUtil.consonants"></a>

### phoneticCodeUtil.consonants : <code>Array.&lt;string&gt;</code>
Semitic 22 base consonants

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
<a name="module_phoneticCodeUtil.begadkepatConsonants"></a>

### phoneticCodeUtil.begadkepatConsonants : <code>Array.&lt;string&gt;</code>
Begadkepat consonants

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
<a name="module_phoneticCodeUtil.veghadhkhefathConsonants"></a>

### phoneticCodeUtil.veghadhkhefathConsonants : <code>Array.&lt;string&gt;</code>
Veghadhkhefath consonants

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
<a name="module_phoneticCodeUtil.begadkepatMap"></a>

### phoneticCodeUtil.begadkepatMap : <code>Object.&lt;string, string&gt;</code>
Begadkepat to veghadhkhefath map

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
<a name="module_phoneticCodeUtil.extraConsonants"></a>

### phoneticCodeUtil.extraConsonants : <code>Array.&lt;string&gt;</code>
Other semitic consonants

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
<a name="module_phoneticCodeUtil.allConsonants"></a>

### phoneticCodeUtil.allConsonants : <code>Array.&lt;string&gt;</code>
All consonants concatenated

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
<a name="module_phoneticCodeUtil.vowelsByName"></a>

### phoneticCodeUtil.vowelsByName : <code>Object.&lt;string, string&gt;</code>
Phonetic latin vowel name to value map

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
<a name="module_phoneticCodeUtil.commonVowels"></a>

### phoneticCodeUtil.commonVowels : <code>Array.&lt;string&gt;</code>
Common aramaic vowels

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
<a name="module_phoneticCodeUtil.easternVowels"></a>

### phoneticCodeUtil.easternVowels : <code>Array.&lt;string&gt;</code>
Eastern/hebrew only vowels

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
<a name="module_phoneticCodeUtil.otherVowels"></a>

### phoneticCodeUtil.otherVowels : <code>Array.&lt;string&gt;</code>
Other semitic vowels

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
<a name="module_phoneticCodeUtil.allVowels"></a>

### phoneticCodeUtil.allVowels : <code>Array.&lt;string&gt;</code>
Semitic vowels including Eastern/Hebrew ones and other short vowels.

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
<a name="module_phoneticCodeUtil.silent"></a>

### phoneticCodeUtil.silent : <code>string</code>
The silent letter symbol

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
<a name="module_phoneticCodeUtil.isConsonant"></a>

### phoneticCodeUtil.isConsonant ⇒ <code>boolean</code>
Is character c a semitic consonant

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
**Returns**: <code>boolean</code> - true if c is semitic consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_phoneticCodeUtil.isVowel"></a>

### phoneticCodeUtil.isVowel ⇒ <code>boolean</code>
Is character c a semitic vowel

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
**Returns**: <code>boolean</code> - true if c is semitic vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_phoneticCodeUtil.isDotted"></a>

### phoneticCodeUtil.isDotted ⇒ <code>boolean</code>
Return true if input word has vowels

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
**Returns**: <code>boolean</code> - true if word has vowels  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word |

<a name="module_phoneticCodeUtil.removeVowels"></a>

### phoneticCodeUtil.removeVowels ⇒ <code>string</code>
Remove vowels, leaving consonantal word only.

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
**Returns**: <code>string</code> - consonantal word  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word to be processed |

<a name="module_phoneticCodeUtil.isBegadkepat"></a>

### phoneticCodeUtil.isBegadkepat ⇒ <code>boolean</code>
Returns true if c is a begadkepat consonant

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
**Returns**: <code>boolean</code> - true if c is a begadkepat consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_phoneticCodeUtil.isVeghadhkhefath"></a>

### phoneticCodeUtil.isVeghadhkhefath ⇒ <code>boolean</code>
Returns true if c is a veghadhkhefath consonant

**Kind**: static constant of [<code>phoneticCodeUtil</code>](#module_phoneticCodeUtil)  
**Returns**: <code>boolean</code> - true if c is a veghadhkhefath consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

