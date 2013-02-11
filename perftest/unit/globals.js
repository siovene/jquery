$(function() {
	window.g = {
		suite: new Benchmark.Suite,
		core: {
			set_of_p: $('<p>1</p> <p>2</p> <p>3</p>')
		}
	};

	Benchmark.options.maxTime = 2;
});
