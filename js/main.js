document.getElementById("nome").oninvalid = function() {  
	this.setCustomValidity("");
	if (!this.validity.valid) {
		this.setCustomValidity("Insira seu nome completo.");
	}
};
			
document.getElementById("email").oninvalid = function() {  
	this.setCustomValidity("");
	if (!this.validity.valid) {
		this.setCustomValidity("Insira um email válido.");
	}
};
			
document.getElementById("msg").oninvalid = function() {  
	this.setCustomValidity("");
	if (!this.validity.valid) {
		this.setCustomValidity("A mensagem deve conter pelo menos 4 palavras e 20 caracteres.");
	}
};
			
			
