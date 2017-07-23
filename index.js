function* createHello(options) {
	console.log('options', options);

	const testValue = yield 'first';

	console.log('testValue', testValue);

	const word = yield;

	console.log('word', word);

	return 'finish';
}

const hello = createHello('createHello options');

console.log(hello.next('test value'));
console.log(hello.next('Max'));
console.log(hello.next());
