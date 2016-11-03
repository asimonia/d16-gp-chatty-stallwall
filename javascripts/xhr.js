/*jshint esversion: 6 */

function showData(returnedData){

	for (var i = 0; i < returnedData.length; i++) {
		console.log("Contents of XHR:", returnedData[i]);
		Chatty.storeMsg(returnedData[i]);
	}

};

Chatty.loadData(showData);