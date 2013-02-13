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
	.add( "core: ready()", function() {
		$.ready(function() {});
	})
	.add( "core: slice()", function() {
		g.core.set_of_p.slice(2);
	})
	.add( "core: first()", function() {
		g.core.set_of_p.first();
	})
	.add( "core: last()", function() {
		g.core.set_of_p.last();
	})
	.add( "core: eq()", function() {
		g.core.set_of_p.eq(1);
	})
	.add( "core: map()", function() {
		g.core.set_of_p.map(function() {});
	})
	.add( "core: end()", function() {
		g.core.set_of_p.end();
	})

	// add listeners
	.on('start', function(event) { benchmarkStart(event, this); })
	.on('cycle', function(event) { benchmarkCycle(event, this); })
	.on('complete', function() { benchmarkComplete(this); });
});
