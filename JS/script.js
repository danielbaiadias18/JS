function mudaCor(cor) {
	var elemento = document.getElementById("body");
	elemento.style.background = cor;
}

function mudarTitle(txt, cor){
	document.getElementById("intxt").innerHTML = txt;
	var elemento = document.getElementById("intxt");
	elemento.style.color = cor;
}
function mudarFoto(foto){
	document.getElementById("img").src=foto;
}