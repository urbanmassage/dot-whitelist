# dot-whitelist

Takes an array of dot-notated keys and only allows those keys to be included in the output object


### Example Usage


```
var whitelist = require('dot-whitelist');

var input = { 
    top: {
        safeProp: 'hi',
        unsafeProp: 'ho',
    },
};

console.log(whitelist(input, ['top.safeProp']));
```
