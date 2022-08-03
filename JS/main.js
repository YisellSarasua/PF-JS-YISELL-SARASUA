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
        


        console.log (dataNombre);
        console.log (dataUsuario);
        console.log (dataEmail);
        console.log (dataPassword);
        
       
        

    }


    

})