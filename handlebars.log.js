Handlebars.registerHelper('log', function(string){
	return console.log('log', 'handlebars', string) || '';
});
