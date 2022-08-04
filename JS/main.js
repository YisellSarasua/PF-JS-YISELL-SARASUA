window.addEventListener ('load', () => {
    const registro = document.getElementById('formulario');
    const nombre = document.getElementById('nombre');
    const usuario = document.getElementById ('usuario');
    const email = document.getElementById ('email');
    const password = document.getElementById ('password');

    registro.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log ('enviar');
        validarDatos();
    })


    function validarDatos(){
        const dataNombre = nombre.value;
        const dataUsuario = usuario.value;
        const dataEmail = email.value;
        const dataPassword = password .value;

        if(!dataNombre){

            validacionErronea (nombre,'* Campo obligatorio');
        } else {
            console.log (dataNombre);
            validacionCorrecta(nombre);
        }

        if(!dataUsuario){
            validacionErronea (usuario,'* Campo obligatorio');
        } else {
            validacionCorrecta(usuario);
        }

        if(!dataEmail){
        
            validacionErronea (email,'* Campo obligatorio');

        } else if (!emailValido(dataEmail)) {
            validacionErronea (email,'Email ingresado no es valido');

        } else {
            
            validacionCorrecta(email);
        }





        
        console.log (dataNombre);
        console.log (dataUsuario);
        console.log (dataEmail);
        console.log (dataPassword); 

    }

    function validacionErronea (input , mensaje) {
        const validacionForm = input.parentElement;
        const aviso = validacionForm.querySelector ('p');
        aviso.innerText = mensaje;
        validacionForm.className = 'mensaje falla';

    }

    function validacionCorrecta (input){
        const validacionForm = input.parentElement;
        validacionForm.className = 'mensaje falla';
    }

    function emailValido(email){
        return /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }


    

})