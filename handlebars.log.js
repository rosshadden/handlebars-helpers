// Handlebars log helper.
Handlebars.registerHelper("log", function(string){
	var slice = Array.prototype.slice;
	var args = slice.call(arguments, 0, -1);
	var options = slice.call(arguments, -1)[0];
	if (!args.length) args.unshift(this);
	if (options.hash.write) {
		// Useful in Node.js environments, as it lets you log in a browser.
		return `<script>console.log("LOG:", ${JSON.stringify(args)});</script>`;
	}
	console.log("LOG:", args);
	return "";
});
