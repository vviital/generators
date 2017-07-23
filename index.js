const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
const fetch = require('node-fetch');

function* createQuoteFetcher() {
	const response = yield fetch(url);
	const quote = yield response.json();
	return `${quote.quoteText} - ${quote.quoteAuthor}`;
}

function coroutine(gen) {
	const generator = gen();

	function handler(result) {
		if (result.done) return Promise.resolve(result.value);

		return Promise.resolve(result.value)
			.then(res => handler(generator.next(res)));
	}

	return handler(generator.next());
}

const quoteFetcher = coroutine(createQuoteFetcher);

quoteFetcher
	.then(quote => console.log(quote))
	.catch(err => console.log(err));
