#Yeoman Express MVC/Handlebars/Grunt/Sass/MVC/MongoDb Generator - grunt-wired ready

This is the same yeoman *Generator-Express MVC*.

I've just added the task `grunt-wiredep` and `grunt-string-replace` to inject all dependencies installed via Bower

To see it working run `gulp watch` or just `gulp` and in another console install any package like `bower install lato --save`.

You need to put the option `--save` because the watching task is whatching for changes at the `bower.json` file.

To see in the browser: run `gulp` and open `localhost:3000`