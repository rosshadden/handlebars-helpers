Handlebars.registerHelper('log', function(string){
	var args = Array.prototype.slice.call(arguments);
	return console.log('LOG:', args.slice(0, -1)) || '';
});
