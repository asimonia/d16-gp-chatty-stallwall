/*jshint esversion: 6 */

var Chatty = (function(oldChatty){
	var returnedData = [];
	return {
		loadData: function(callback){
			var loader = new XMLHttpRequest();
			loader.addEventListener("load", function() {
			returnedData = JSON.parse(this.responseText).graffiti;
			callback(returnedData);
			});
			loader.open("GET", "javascripts/graffiti.json");
			loader.send();
		}
	}
		return oldChatty
})(Chatty || {});


