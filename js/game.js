n = new Character({ align:"right", color:"#4099ff" });
m = new Character({ align:"left", color:"#ffffff" });

subscribe("/choose/done", function(message){
	n(message);
});

function Start(){

	n("I'm gonna study at Jon's tomorrow.");
	m("Really.");
	m("You spend a lot of time with him.");

	Choose({
		"Actually, he's... more than a friend.": function(message){
			
		},
		"Well yeah, that's what good pals do.": function(message){
			
		},
		"He's just a study buddy, that's all.": function(message){
			
		}
	});

}

