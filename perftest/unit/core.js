$(function() {
	g.suite
	.add( "core: $() empty div", function() {
		var html = '<div/>';
		var obj = $(html);
		obj.size();
	})
	.add( "core: $() div with text", function() {
		var html = '<div>test</div>';
		var obj = $(html);
		obj.size();
	})
	.add( "core: size()", function() {
		g.core.set_of_p.size();
	})
	.add( "core: toArray()", function() {
		g.core.set_of_p.toArray();
	})
	.add( "core: get()", function() {
		g.core.set_of_p.get(1);
	})
	.add( "core: pushStack()", function() {
		var html = '<div/>';
		jQuery([]).pushStack(html)
			.remove()
		.end();
	})
	.add( "core: each()", function() {
		g.core.set_of_p.each(function() {});
	})

	// add listeners
	.on('start', function(event) { benchmarkStart(event, this); })
	.on('cycle', function(event) { benchmarkCycle(event, this); })
	.on('complete', function() { benchmarkComplete(this); })

	// run async
	.run({ 'async': true });
});
