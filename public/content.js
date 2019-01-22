$(document).ready(function(){
	$.get("/api").done(function(data){
	    data = JSON.parse(data);
	    console.log('No Key ',data);
	})
	$.get("/apiKey",{
		key: "" //steamKeyHere
	}).done(function(data){
	    data = JSON.parse(data);
	    console.log('With Key ',data);
	})
})