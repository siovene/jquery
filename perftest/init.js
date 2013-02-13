$(function() {
	$('#progress #total').text(g.suite.length);

	$('#run').click(function() {
		$(this).addClass('hidden');
		g.suite.run({'async': true});
	});

	$('#toggleCSV').click(function() {
		$('#tests').toggle();
		$('#csv').toggle();

		if ( $('#csv').is(':visible') ) {
			$('#csv').height($('#csv')[0].scrollHeight);
		}
	});
});
