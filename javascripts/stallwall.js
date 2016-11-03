/*jshint esversion: 6 */

$("#clear").disabled = true;

$("#input").keypress(function(event) {
	let userInput = $("#input").val();

	if (!userInput) {
		$("#clear").disabled = false;
	}

	if (event.keyCode === 13) {
		Chatty.storeMsg(userInput);
        $("#input").value = '';
       	$("#clear").disabled = true;
	}
});

$("#output").click(function(event) {
	Chatty.deleteMsg(event.target);
});

$("#clear").click(function() {
	$("#output").innerHTML = "";
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
	console.log(selectedId);

	$("#cover").addClass(selectedId);

});



