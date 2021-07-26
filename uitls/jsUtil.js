// ---------[ Add some method to Built-in Object ]------------------


// to capitalize only first character
String.prototype.toCapitalizeFirstChar = function() {
	return this.charAt(0).toUpperCase() + this.slice(1)
}

// to capitalize every first character of a word
String.prototype.toCapitalize = function() {
	return this.replace(/\b\w/g, (match) => match.toUpperCase() )	
}
