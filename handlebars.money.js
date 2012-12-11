Handlebars.registerHelper('money', function(string, options){
	var prefix = '$',
		numeric = (+string.replace(/[-,]/g, '')).toFixed(2) || '0.00',
		parts = numeric.split('.'),
		isNegative = /^-/.test(string);

	if(isNegative){
		prefix = '-$';
	}

	var result = [
		prefix,

		parts[0]
		.split('')
		.reverse()
		.reduce(function(acc, num, i){
			return num + (i && !(i % 3) ? ',' : '') + acc;
		}, '.'),

		parts[1]
	].join('');

	//	Strip out cents if not wanted.
	if(options.hash.cents === false){
		result = result.replace(/.{3}$/, '');
	}

	return result;
});
