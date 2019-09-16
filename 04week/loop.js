// Numero Uno
// let num = 0
// do {
//   num += 1;
//   console.log(num);
// } while (num < 1000);

// Numero Dos
let person = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'Female'
};

// Numero Tres
for (var birthDate in person) {
  if (person['birthDate'] % 2 != 0) {
    console.log(person['birthDate']);
    break;
  }
};

// Numero Quatro
let arrayOfPersons = [
  {
    firstName: 'Albert',
    lastName: 'Einstein',
    birthDate: 'March 14, 1879',
    gender: 'Male'
  },
  {
    firstName: 'Isaac',
    lastName: 'Newton',
    birthDate: 'Jan, 4 1643',
    gender: 'Male'
  },
  {
    firstName: 'Stephen',
    lastName: 'Hawking',
    birthDate: 'Jan 8, 1942',
    gender: 'Male'
  },
  {
    firstName: 'Marie',
    lastName: 'Curie',
    birthDate: 'Nov 7, 1867',
    gender: 'Female'
  }
]

// Numero Cinco
arrayOfPersons.map((input) => {
  console.log(input)
});

// Numero Seis
arrayOfPersons.filter((input) => {
  if (input.gender === 'Male') {
    console.log(input)
  }
});

// Numero Siete
arrayOfPersons.filter((input) => {
  if (input.birthDate.split(' ')[2] < 1990) {
    console.log(input);
  }
});



