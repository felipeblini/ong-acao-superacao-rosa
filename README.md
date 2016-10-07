#Yeoman Express MVC/Handlebars/Grunt/Sass/MVC/MongoDb Generator and HTML5 Boilerplate Optimizations - grunt-wired ready

This is the same **Yeoman Generator-Express MVC**.

I've just added the task `grunt-wiredep` and `grunt-string-replace` to inject all dependencies installed via Bower.

I also have added the **HTML5 Boilerplate** customization files https://html5boilerplate.com/ and its Node.js server configs https://github.com/h5bp/server-configs-node.

To see it working run `gulp watch` or just `gulp` and in another console install any package like `bower install lato --save`.

You need to put the option `--save` because the watching task is whatching for changes at the `bower.json` file.

To see in the browser: run `gulp` and open `localhost:3000`