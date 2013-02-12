function benchmarkStart(event, suite) {
	$('#status #progress #total').text(suite.length);
	$('#opsPerSec').text(Benchmark.options.maxTime);
	$('#estimatedTime').text(suite.length * Benchmark.options.maxTime);
}

function benchmarkCycle(event, suite) {
	var $template = $(
		'<tr>' +
			'<td class="number"></td>' +
			'<td class="name"></td>' +
			'<td class="hz"></td>' +
		'</tr>');

	if ( event.target.id == 1 ) {
		$('#starting').hide();
		$('#tests').show();
	}

	$('#estimatedTime').text(
		(suite.length - event.target.id) *
		Benchmark.options.maxTime);

	$template.find('.number').text(event.target.id);
	$template.find('.name').text(event.target.name);
	$template.find('.hz').text(humanize.numberFormat(event.target.hz / 1000.0));
	$('#tests tbody').append($template);
	$('#csv').append(
		event.target.id + ',"' +
		event.target.name + '","' +
		event.target.hz + '"\n');

	$('#status #progress #current').text(event.target.id + 1);
}

function benchmarkComplete(suite) {
	$('#status').remove();
	$('#report').text("All tests completed.");
	$('#report').addClass('text-success');
	$('#toggleCSV').show();
}
