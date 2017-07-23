function* createLogger() {
	console.log('start');

	yield;

	console.log('Second block');


	yield;

	console.log('Third block');

	yield;

	console.log('end');
}

const logger = createLogger();

console.log(logger.next());
console.log(logger.next());
console.log(logger.next());
console.log(logger.next());
console.log(logger.next());
