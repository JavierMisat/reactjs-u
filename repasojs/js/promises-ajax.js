const app = document.querySelector('#app');
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

function imprimirHTML(miembros) {
    let article = document.createElement('article');
    article.innerHTML = `<table style="width:100%">
          <tr>
                ${Object.keys(miembros[0]).map(key => {
        if (key === 'dob' || key === 'login'|| key === 'id' || key === 'registered') {
            return;
        }
        return `<th>${key.toUpperCase()}</th>`;
    }).join('')}      
          </tr>
          
         ${miembros.map(miembro => {
        return `
                    <tr>
                        ${Object.values(miembro).map(dato => {
            //Dato a devolver dependiendo typo e hijos
            let datoDevuelto;
            /**
             * @description Funcion que recorre y compara los tipos de datos
             * y los hijos que tenga dicho objeto para devolverlo y mostrarlo en html
             */
            if (typeof dato === 'object') {
                if (Object.keys(dato).map(key => {
                    console.log(key);
                    switch (key) {
                        case 'title':
                            const {first, last, title} = dato;
                            datoDevuelto = `<td>${title}. ${first} ${last}</td>`;
                            break;
                        case 'large':
                            datoDevuelto = `<td><img src="${dato.thumbnail}" alt="Imagen"></td>`;
                            break;
                        case 'street':
                            const {street, city, state} = dato;
                            datoDevuelto = `<td>${street}, ${city}, ${state}</td>`;
                            break;
                        case 'dob':
                            console.log(dato);
                            break;
                        case '':
                            break;
                        case '':
                            break;

                    }
                }).join('')) ;
            } else {
                datoDevuelto = `<td>${dato}</td>`;
            }

            return datoDevuelto;
        }).join('')}
                    </tr>
                `;
    }).join('')}

        </table>
    `;
    app.appendChild(article);
}

descargarUsuarios(500)
    .then(
        miembros => imprimirHTML(miembros),
        error => console.error(new Error(`Hubo un error : ${error}`))
    );
