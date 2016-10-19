function validateForm(){
	/* Escribe tú código aquí*/ 
	var spans = document.getElementsByClassName("falla");
	while(spans.length>0){
		/*spans i getNodeName*/ 
	spans[0].parentElement.removeChild(spans[0]);
	}
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var mail = document.getElementById("input-email").value;
	var clave = document.getElementById("input-password").value;
	if (!(/^[A-Z][a-zA-Z]*$/.test (nombre))){
		var validacion = document.createElement("span");
		validacion.setAttribute("class","falla");
		validacion.appendChild(document.createTextNode("Debe ingresar su nombre y debe comenzar con mayuscula")); 
		document.getElementById("name").parentElement.appendChild(validacion);
	}
	if (!(/^[A-Z][a-zA-Z]*$/.test (apellido))){
		var validacion = document.createElement("span");
		validacion.setAttribute("class","falla");
		validacion.appendChild(document.createTextNode("Debe ingresar su apellido y debe comenzar con mayuscula")); 
		document.getElementById("lastname").parentElement.appendChild(validacion);
	}

console.log(!(/\w+@+w+\.+[a-z]/.test(mail)));
	if( mail==null || mail=="" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail))){
		var validacion = document.createElement("span");
		validacion.setAttribute("class","falla");
		validacion.appendChild(document.createTextNode("Verifique su email")); 
		document.getElementById("input-email").parentElement.appendChild(validacion);
	}
	campoPassword = document.getElementById("input-password").value;
	if (campoPassword < 6 || campoPassword == "password" || campoPassword == "123456" || campoPassword == "098765"){
		var validacion = document.createElement("span");
		validacion.setAttribute("class","falla");
		validacion.appendChild(document.createTextNode("Verifique su contraseña")); 
		document.getElementById("input-password").parentElement.appendChild(validacion);
	}
	camposSeleccion = document.getElementById("seleccion").selectedIndex;
	if (camposSeleccion == null || camposSeleccion == 0){
		var validacion = document.createElement("span");
		validacion.setAttribute("class","falla");
		validacion.appendChild(document.createTextNode("Seleccione algun tipo de bici")); 
		document.getElementById("seleccion").parentElement.appendChild(validacion);
	}
}

