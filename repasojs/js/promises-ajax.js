const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    //Pasar la cantidad a la api
    const apiUrl = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    /**
     * @description llamado ajax costa de 3 o 4 partes:
     * 1 Crear el llamado
     * 2 Abrir la conexion
     * 3 Agregar los datos (querys) (opcional)
     * 4 Eviar la peticion
     */
    const xhr = new XMLHttpRequest();

    //Abrimos la conexion (Metodo, Url, Asincrono = si|no)
    xhr.open('GET', apiUrl, true);

    //On load
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    };

    //Opcional (on error)
    xhr.onerror = (error) => reject(error);

    //Send
    xhr.send();
});

descargarUsuarios(2)
.then(
  miembros => console.log(miembros),
    error => console.error(new Error(`Hubo un error : ${error}`))
);
