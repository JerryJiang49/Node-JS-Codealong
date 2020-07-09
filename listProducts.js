var faker = require("faker");
var product = faker.commerce.productName();

console.log(faker.fake("Welcome to my Shop!"));
for(var i = 0; i < 10; i++) {
	console.log(faker.fake("{{commerce.productName}} - {{commerce.price}}"));
}