(function(){
	let lista = document.getElementById("lista"),
		tareaInput = document.getElementById("ewe"),
		btnNuevaTarea = document.getElementById("uwu"),
		moverNuevaTarea = document.getElementById("iwi");
 
	let agregarTarea = function(){
		let tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);
 
		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}
 
		enlace.appendChild(contenido);	
		enlace.setAttribute("href", "#");
		nuevaTarea.appendChild(enlace);
		lista.appendChild(nuevaTarea);
		tareaInput.value = "";
 
		for (let i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(event){ 
				let guardarTarea = event.target.innerText;
				 this.parentNode.removeChild(this);
				 let nuevaTarea = document.createElement("li"),
				 contenido = document.createTextNode(guardarTarea);
				 nuevaTarea.className = "tareas";
				 let link = document.createElement("a");
				 link.appendChild(contenido);
				 nuevaTarea.addEventListener("click", function (){
				this.parentNode.removeChild(this)
		});
				 nuevaTarea.appendChild(link);
				 moverNuevaTarea.appendChild(nuevaTarea);
			});
		}
 
	};
	let comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};


 
	let eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};


 
	
	btnNuevaTarea.addEventListener("click", agregarTarea);
 
	
	tareaInput.addEventListener("click", comprobarInput);
 


	for (let i = 0; i <= moverNuevaTarea.children.length -1; i++) { 
		moverNuevaTarea.children[i]
	}
}());
 