function getPostfixes(word) {
	if (typeof word === "number") {
		word = word.toString(); 
	} else if (typeof word !== "string") {
		throw new TypeError("Expected a string or a number");
	}

	let postfixes = [];
	for (let i = 0; i < word.length; i++) {
		postfixes.push(word.substring(i));
	}

	return postfixes;
}

module.exports = getPostfixes;
