/*jshint esversion: 6 */

$("#clear").disabled = true;

$("#input").keypress(function(event) {
	let userInput = $("#input").val();

	if (!userInput) {
		$("#clear").disabled = false;
	}

	if (event.keyCode === 13 && $("#input").val() !== "") {
		Chatty.storeMsg(userInput);
        $("#input").val("");
       	$("#clear").disabled = true;
	}
});

$("#output").click(function(event) {
	Chatty.deleteMsg(event.target);
});

$("button#clear").click(function() {
	console.log("Clear has been clicked");
	$("p").empty();
});

$("#dark").click(function() {
	$("#wrapper").toggleClass("dim");
});

$("#largify").change(function() {
	$("#wrapper").toggleClass("largify");
});


$("#tag").change(function() {
	$("#output").toggleClass("tag");
});

$("#switchStalls").change(function() {
	$("#cover").removeClass();
	
	var selectedId = $(this).find(":selected").attr("id");

	$("#cover").addClass(selectedId);

});



