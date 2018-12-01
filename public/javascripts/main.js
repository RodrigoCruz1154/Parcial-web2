document.querySelector('#formRegistrar').addEventListener('submit',function(ventana){
    ventana.preventDefault();
    let data = {
        marca: document.forms.formRegistrar.marca.value,
        modelo: document.forms.formRegistrar.modelo.value,
        annio: document.forms.formRegistrar.annio.value
    }
    fetch('/car',{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>res.json())
        .then(response =>{
            console.log("Registrado")
        })
        .catch(err=>{
            console.log(err)
        });
});

