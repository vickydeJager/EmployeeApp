var faker = require('faker');

var database = { employees: []};

var items = ['Los Angeles', 'Cape Town', 'London'];

for (var i = 1; i<= 20; i++) {
  database.employees.push({
    id: i,
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
    residentialAddress: faker.address.streetAddress(),
    workAddress: items[Math.floor(Math.random() * items.length)],
  });
}

console.log(JSON.stringify(database));
