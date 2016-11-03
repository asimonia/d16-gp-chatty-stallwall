/*jshint esversion: 6 */

function showData(returnedData){
	//console.log(returnedData);
	for (var i = 0; i < returnedData.length; i++){
		// var origComment = "<p class='msg'>" + returnedData[i] + "<button class='btn'>SCRUB " + "</button>" + "</p>";
		// document.getElementById("output").innerHTML += origComment;
		Chatty.storeMsg(returnedData[i]);
	}

};

Chatty.loadData(showData);