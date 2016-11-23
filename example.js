var checker = require('./index');

checker.check('kingagdfgdfgdsfjksdklfjsdlf').then(function(result){
	console.log("kingagdfgdfgdsfjksdklfjsdlf", result);
});

checker.check('king').then(function(result){
	console.log("king", result);
});

checker.check('tester').then(function(result){
	console.log("tester", result);
});

