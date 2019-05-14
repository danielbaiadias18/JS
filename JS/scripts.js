function valida(argument) {
	var nome = document.getElementById('nome');

	if (nome.value == "") {
		alert("Campo nome não pode estar em branco.");
	}else{
		alert("Formulário enviado com sucesso.");
	}
}