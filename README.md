# psn-validator

Playstation username validator

## Usage

```node.js
var checker = require('psn-validator');

checker.check('kingagdfgdfgdsfjksdklfjsdlf').then(function(result){
	console.log("kingagdfgdfgdsfjksdklfjsdlf", result);
});

checker.check('king').then(function(result){
	console.log("king", result);
});
```

## Authors

 * nemanjan00
