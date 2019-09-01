function validar() {
	var nome = meuFormulario.nome.value;
	var email = meuFormulario.email.value;
	var msg = meuFormulario.msg.value;

	if (nome == "") {
		document.getElementById("nome").oninvalid = function() {  
			this.setCustomValidity("");
			if (!this.validity.valid) {
				this.setCustomValidity("Insira seu nome completo.");
			}
		};
	
	}

	if (email == "" || email.indexOf('@') == /^[a-z0-9.]@[a-z0-9]?$/) {
		document.getElementById("email").oninvalid = function() {  
			this.setCustomValidity("");
			if (!this.validity.valid) {
				this.setCustomValidity("Insira um email válido.");
			}
		};
		
	}

	if (msg == "") {
		document.getElementById("msg").oninvalid = function() {  
			this.setCustomValidity("");
			if (!this.validity.valid) {
				this.setCustomValidity("A mensagem deve conter pelo menos 4 palavras e 20 caracteres.");
			}
		};
		
	}

}