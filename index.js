var fs = require('fs');
var Sass = require('sass.js');

Sass.importer(function(request, done) {
  // sass.js works in the "/sass/" directory, make that relative to CWD
  var path = '.' + request.resolved.replace(/^\/sass\//, '/' );
  var file = Sass.findPathVariation(fs.statSync, path);
  done({
    path: file,
    content: fs.readFileSync(file, {encoding: 'utf8'}),
  });
});

Sass.compile('@import "./node_modules/bulma/bulma.sass";', function(res) {
  console.log(res);
});

