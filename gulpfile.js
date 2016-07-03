var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'src';

elixir(function(mix)
{
	mix.browserify('index.js', 'dist/easiest-js-validator.js');
});