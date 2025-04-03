const student = {
    name: 'sai ram',
    age: 12,
    skills: ['good', 'friedn', 'study'],

}

const update = { ...student, city: 'rjy'};
console.log(update);

const upper = update.skills.map(skills => skills.toUpperCase());
console.log(upper);

const {name, age, skills} = student;
console.log(name, age, skills);