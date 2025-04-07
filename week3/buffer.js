const buffer = Buffer.from("helloe worl");
console.log(buffer);
console.log(buffer.toString());

const kur = Buffer.alloc(10);
kur.write("vyshnavuduuuu");
console.log(kur.toString());

console.log(kur.length);
console.log(kur[2], buffer[3]);