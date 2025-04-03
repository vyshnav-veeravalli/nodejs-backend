const user = {
    name: 'vyshnav',
    age: 52,
    contact: {
        country: 'india',
        phone: 1235754,
    }
}

console.log(user.name);
console.log(user.contact.country);

const {name, age} = user;
console.log(name, age);

const update = {...user, city: 'chennai'};
console.log(update);