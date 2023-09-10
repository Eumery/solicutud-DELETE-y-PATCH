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

// //FUNCION BORRAR UTILIZANDO EL METODO DELETE
function borrar() {
    fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265')
    .then(response => response.json())
    .then(datos => {
        let id = (datos[datos.length - 1]._id);
        fetch(`https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265/${id}`, {
            headers: {"Content-Type": "application/json; charset=utf-8"},
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert("Se ha borrado el elemento correctamente");
            } else if (response.status === 404) {
                alert("El recurso no existe");
            } else {
                console.error('Error al eliminar el recurso. Código de estado:', response.status);
            }
        })
        .catch(error => {
            console.error('Error al realizar la solicitud de borrado:', error);
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });
   
}


//FUNCION REEMPLAZAR UTILIZANDO EL METODO PUT
function reemplazar(){
    let name = document.getElementById('nombre').value;
    let age =  document.getElementById('edad').value;
    fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265')
    .then(response => response.json())
    .then(datos => {
        let id = datos[datos.length - 1]._id;
        fetch(`https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265/${id}`, {
            headers: {"Content-Type": "application/json; charset=utf-8"},
            method: 'PUT',
            body: JSON.stringify({ 
                nombre : name,
                edad: age
            })
        })
        .then(response => response.json())
        .then(data => {
            alert ("Se ha actualizado el elemento correctamente");
            document.getElementById('nombre').value = "";
            document.getElementById('edad').value = "";
        })
        .catch(error => {
            console.error('Error al realizar la solicitud de actualización:', error);
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });
}

// EJEMPLO DE FETCH CON GET
function lista(){
    fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265')
    .then(response => response.json())
    .then(datos => {
        let filas = "";
        
        for (let dato of datos){
            filas += "<tr> <td>" + dato.nombre + "</td><td>"+ dato.edad +"</td></tr>";
        }

        document.getElementById('tabla').innerHTML = filas;
    })
    
}

// INTENTO DE SOLICITUD PATCH PERO SE LOGRO POR POLICAS DE CORS.
// function actualizar() {
//     let name = document.getElementById('nombre').value;
//     let age = document.getElementById('edad').value;
    
//     fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265')
//     .then(response => response.json())
//     .then(datos => {
//         let id = datos[datos.length - 1]._id;
//         fetch(`https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265/${id}`, {
//             headers: {"Content-Type": "application/json; charset=utf-8"},
//             method: 'PATCH',
//             body: JSON.stringify({
//                 nombre: name,
//                 edad: age
//             })
//         })
//         .then(response => {
//             if (response.ok) {
//                 alert("Se ha actualizado el elemento correctamente");
//                 document.getElementById('nombre').value = "";
//                 document.getElementById('edad').value = "";
//             } else if (response.status === 404) {
//                 alert("El recurso no puede actualizarse");
//             } else {
//                 console.error('Error al actualizar el recurso. Código de estado:', response.status);
//             }
//         })
//         .catch(error => {
//             console.error('Error al realizar la solicitud de actualización:', error);
//         });
//     })
//     .catch(error => {
//         console.error('Error al obtener los datos:', error);
//     });
// }
