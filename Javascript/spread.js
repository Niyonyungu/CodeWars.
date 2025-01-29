const first = [1, 2, 3]
const second = [4, 5, 6]

const combined1 = first.concat(second);
console.log("combined", combined1);

const combined2 = [...first , 'b', ...second , 'a'];
console.log("combined2", combined2);
 

//combining Object

const person = {
    name: 'vainqueur'
}

const job = {
    title: 'sd'
}

const identity = {...person , ...job, location: 'austraria'}
console.log("identity", identity);


