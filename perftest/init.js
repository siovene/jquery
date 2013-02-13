$(function() {
	$('#progress #total').text(g.suite.length);

	$('#toggleCSV').click(function() {
		$('#tests').toggle();
		$('#csv').toggle();

		if ( $('#csv').is(':visible') ) {
			$('#csv').height($('#csv')[0].scrollHeight);
		}
	});
});
