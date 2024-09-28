
# word-postfixes

This package returns all the postfixes of a given word.

## Installation

```bash
npm install word-postfixes
```

## Usage

```javascript
const getPostfixes = require('word-postfixes');

console.log(getPostfixes('postfix')); 
// Output: ['postfix', 'ostfix', 'stfix', 'tfix', 'fix', 'ix', 'x']

console.log(getPostfixes('a')); 
// Output: ['a']

console.log(getPostfixes('')); 
// Output: []

console.log(getPostfixes(123)); 
// Output: ['123', '23', '3']

// If a non-string or non-number is passed, an error will be thrown
try {
  console.log(getPostfixes({}));
} catch (error) {
  console.error(error.message); 
  // Output: Expected a string or a number
}
```

## Sample Results

### Input: `'postfix'`
```javascript
['postfix', 'ostfix', 'stfix', 'tfix', 'fix', 'ix', 'x']
```

### Input: `'a'`
```javascript
['a']
```

### Input: `''` (empty string)
```javascript
[]
```

### Input: `123` (number)
```javascript
['123', '23', '3']
```

### Input: `{}` (non-string/number)
```javascript
TypeError: Expected a string or a number
```

## License

MIT
