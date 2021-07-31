
$(document).ready(function(){
	var agent = navigator.userAgent;
	if(agent.search(/iPhone/) != -1){
        var list_element = document.getElementById("cass");
		list_element.remove();
	}else if(agent.search(/Android/) != -1){
        var list_element = document.getElementById("cass");
		list_element.remove();
	}
});
