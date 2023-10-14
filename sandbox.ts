// arrays

let names = ['luigi','mario', 'yoshi'];

//you can not do this
//names.push(15);

let numbers = [1,2,3,4,5]

//you can not do this again
//numbers.push('bison');

let mixed = [1, 'a', 2, 'canada', 3, 'eskişehir']

//now you can do that
mixed.push(5)
mixed.push('otronto')

//objects

let person = {

    name : "Abdullah",
    surname : "TATLICAK",
    title : "Web Developer",
    age : 39,
    skills : ['php','laravel','jquery']
}

//not allowed

//person.age = 'elli'

//person = "Test"

person.name = "rachel"

person.age = 25

//Allowed
person = {

    name : "Kerem",
    surname : "YALÇIN",
    title : "Mobile Developer",
    age : 32,
    skills : ['ios','flutter','android']
}

// Not Allowed

person = {

    name : "Kerem",
    surname : "YALÇIN",
    title : "Mobile Developer",
    skills : ['ios','flutter','android']
}