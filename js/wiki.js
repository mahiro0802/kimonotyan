async function add(name,disp){
    console.log(name);
    var dd = document.getElementsByClassName("grid-item")[0];
    var di = document.createElement("div");
    di.setAttribute("class","item");
    di.setAttribute("id",name);
    document.getElementsByClassName("grid-item")[0].appendChild(di);
    
    var di = document.createElement("div");
    di.setAttribute("class","name");
    document.getElementsByClassName("item")[document.getElementsByClassName("item").length - 1].appendChild(di);
    
    var di = document.createElement("a");
    di.setAttribute("href","#" + name);
    di.textContent = name;
    document.getElementsByClassName("name")[document.getElementsByClassName("name").length - 1].appendChild(di);
    
    var di = document.createElement("div");
    di.setAttribute("class","disp-c");
    document.getElementsByClassName("item")[document.getElementsByClassName("item").length - 1].appendChild(di)

    for(o=0;o<disp.length;o++){
        console.log(disp[i]);
        var di = document.createElement("div");
        di.setAttribute("class","disp");
        di.innerHTML = disp[o];
        document.getElementsByClassName("disp-c")[document.getElementsByClassName("disp-c").length -1].appendChild(di);
        
    }
}

function load(){
    console.log(this.responseText);
    var jsss = JSON.parse(this.responseText);

    for(i=0;i<jsss.length;i++){
        console.log(jsss.length);
		add(jsss[i].name,jsss[i].disp);
	}
}
window.onload = function() {
    var req = new XMLHttpRequest();
    req.addEventListener("load",load);
    req.open("GET","../js/word.json");
    req.send();
}