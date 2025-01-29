class person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walk');
    }
}

class Teacher extends person {

    constructor(name , degree) {
       super(name);
       this.degree = degree
    }
    teach() {
        console.log('teach');
    }
}

const teacher = new Teacher('vainqueur', 'MSC')
console.log(teacher.degree);
 

