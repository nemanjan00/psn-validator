var https = require('https');

var checker = {
	check: function(username){
		var promise = new Promise(function(resolve, reject){
			https.get('https://my.playstation.com/'+username, (res) => {
				var response = '';

				res.on('data', (data) => {
					response += data;
				});

				res.on('end', (d) => {
					resolve(response.indexOf("class=\"avatar\"") !== -1);
				});
			}).on('error', (e) => {
				reject(error);
			});
		});

		return promise;

	}
}

module.exports = checker;

