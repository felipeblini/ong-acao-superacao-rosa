#Yeoman Express Grunt/Sass/MVC/MongoDb Generator - grunt-wired ready

This is the same yeoman generator for express project, i've just added `grunt-wiredep` to inject all dependencies installed via Bower

To see it working run `gulp` and install any package like `bower install lato --save`.

You need to put the option `--save` because the watching task is whatching for changes at the `bower.json` file.