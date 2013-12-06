node-isabspath
==============

Return true if path is an absolute pathname. 
On Unix, that means it begins with a slash, 
on Windows that it begins with a (back)slash after chopping off a potential drive letter.

## Usage

```js
var isabspath = require('isabspath')
isabspath('/root/path/to') // => true
isabspath('C:\\path\\to')  // => true
isabspath('C:/path/to')    // => true
isabspath('.')             // => false
isabspath('./path/to')     // => false
```