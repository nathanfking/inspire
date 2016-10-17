(function () {
	var qc = this;
	var quoteService = new QuoteService();

	quoteService.getQuote(function (res) {
		quote = JSON.parse(res)
		console.log(quote);
		gimmeSomeQuotage(quote)
	})
	function gimmeSomeQuotage(quote) {
		var template = $("#quote").html()
		template = template
			.replace('{{author}}', quote.author)
			.replace('{{quote}}', quote.quote)

		$("#quote").empty().append($(template));
		console.log(template)

	}




} ())


