function enviar(){

    let name = document.getElementById('nombre').value;
    let age =  document.getElementById('edad').value;
    //EJEMPLO DE FETCH CON POST
    fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265',{
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: 'POST',
        body: JSON.stringify({ // Cuerpo de la petición (request)
            nombre : name,
            edad: age
        })
    })
    .then(response => response.json())
    .then(data => { alert ("Enviado!!!");
    document.getElementById('nombre').value="";
    document.getElementById('edad').value="";
    })
    //lista();
}
// EJEMPLO DE FETCH CON GET
function lista(){
    fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265')
    // fetch me conecta con el ENDPOINT
    .then(response=>response.json())
    .then (datos => {
        let filas="";
        
        for (let dato of datos){
            filas += "<tr> <td>" + dato.nombre + "</td><td>"+ dato.edad +"</td></tr>";
         }

         document.getElementById('tabla').innerHTML=filas;
    })
};