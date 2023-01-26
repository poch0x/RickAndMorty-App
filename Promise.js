// Promesas

const result = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 0){
            resolve(5 / num);
        }else {
            reject(new Error('Error: El numero no puede ser 0 o menor a 0.'))
        }
    })
}

result(0)
.then( response => {console.log(response)})
.catch( error => console.error(error))