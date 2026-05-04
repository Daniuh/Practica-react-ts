const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
}

//const spiderman = {...ironman};

const spiderman = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName  = 'Parker';
spiderman.age       = 22;


console.log(ironman, spiderman);