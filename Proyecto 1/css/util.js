//Agregar, Editar y Eliminar Carrera
function agregarCarrera(){
 	alert("Carrera Agregada Existosamente");
  header("Location: carreras.html"); 
 }

 function editarCarrera(){
 	alert("Carrera Editada Existosamente");
  header("Location: carreras.html"); 
 }

function eliminarCarrera(){
    var r=confirm("¿Esta Seguro que desea eliminar esta Carrera?");

    if(r==true){
      alert("Carrera Eliminada Existosamente");
      header("Location: carreras.html"); 
    }
    else{
      header("Location: carreras.html"); 
    }
  }

//Agregar, Editar y Eliminar Estudiante 
function agregarEstudiante(){
 	alert("Estudiante Agregado Existosamente");
  header("Location: estudiantes.html"); 
 } 

 function editarEstudiante(){
 	alert("Estudiante Editado Existosamente");
  header("Location: estudiantes.html"); 
 }

function eliminarEstudiante(){
    var r=confirm("¿Esta Seguro que desea eliminar este Estudiante?");

    if(r==true){
      alert("Estudiante Eliminado Existosamente");
      header("Location: estudiantes.html"); 
    }
    else{
      header("Location: estudiantes.html"); 
    }
  }

//Agregar, Editar y Eliminar Usuario
function agregarUsuario(){
 	alert("Usuario Agregado Existosamente");
  header("Location: usuarios.html"); 
 }

 function editarUsuario(){
 	alert("Usuario Editado Existosamente");
  header("Location: usuarios.html"); 
 }

function eliminarUsuario(){
    var r=confirm("¿Esta Seguro que desea eliminar este Usuario?");

    if(r==true){
      alert("Usuario Eliminado Existosamente");
      header("Location: usuarios.html"); 
    }
    else{
      header("Location: usuarios.html"); 
    }
  }











