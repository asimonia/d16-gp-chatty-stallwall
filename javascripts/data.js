/*jshint esversion: 6 */


var Chatty = (function(oldChatty) {

	oldChatty.loadData = function(callback) {

			$.ajax({
				url: "javascripts/graffiti.json"
			}).done(function(json) { 
				console.log(json.graffiti);
				callback(json.graffiti);
			});
	};

	return oldChatty;

})(Chatty || {});


