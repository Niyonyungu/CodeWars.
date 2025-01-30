const event = new Promise((resolve, reject) => {
    var name = 'Jamie'
    if (name == 'jamie') {
        resolve(`Suceesfully found ${name}`);
    } else {
        reject(`The Name is Not Jamie`);
    }
});
event.then((name) => {
    console.log(name);
})
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Promise finished');

    })



    
