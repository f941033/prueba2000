
function cambiar(){	
	if(terminos.checked){
		botonAceptar.disabled=false;
	}else{
		botonAceptar.disabled=true;
	}
	
}


function programa(){
	terminos.addEventListener("change",cambiar);
	botonAceptar.disabled=true;
}

window.addEventListener("load",programa);


