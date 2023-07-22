this.logueado = true;
$("#Entrada").click(function(){
    if($("#Usuario").val()== "Admin" && $("#Contraseña").val()=='12345'){
        logueado = true;
        if(logueado == true){
            //swal.fire('Usuario Correcto')
            window.location = './Formulario.html'
        }
    }
    else{
        swal.fire('Usuario Incorrecto')
    }
})