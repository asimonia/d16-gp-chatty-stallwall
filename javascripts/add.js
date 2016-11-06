/*jshint esversion: 6 */


var Chatty = (function(oldChatty){
	var msgArray = [];
	var msgCount = 0;
	oldChatty.storeMsg = function(msg){
			msgCount++;
			var msgObj = {};
			msgObj.msg = msg;
			msgObj.id = "p" + msgCount;
			msgArray.push(msgObj);
        	var string = "<p class='msg' " + "id='p" + msgCount + "'>" + msg + "<button class='btn'>" + "SCRUB" + "</button>"  + "</p>";
			var spot = document.getElementById("output");
			spot.innerHTML += string;
		},

	oldChatty.readMsg = function(msg) {
			return msgArray += $("input").val();
		},

	oldChatty.deleteMsg = function(btnclicked) {
		if (event.target.className === "btn") {
			var parent = event.target.parentNode;
			var parentId = parent.id;
			parent.remove();
		}
		
		for (var t = 0; t < msgArray.length; t++){
			if (parentId === msgArray[t].id){
				var deleteThisOne = t;
				console.log(deleteThisOne);
			}
		}
		msgArray.splice(deleteThisOne, 1);
		}
		return oldChatty;
})(Chatty);
