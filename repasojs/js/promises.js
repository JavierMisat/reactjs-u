/**
 * @description Promises - Promesas para realizar llamados asincronos a una api
 * cuando se realiza un llamado a una api solo hay dos opciones, que se ejecute bien
 * o que el llamado falle (resolve, reject)
 */

const aplicarDescuento = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        let descuento = false;
        if(descuento){
            resolve('Descuento aplicado');
        }else{
            reject('No se pudo aplicar el descuento');
        }
    }, 2000);
});

aplicarDescuento.then(resultado => console.log(resultado))
    .catch(error => console.log(error));
