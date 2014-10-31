var fs = require('fs');
var path = require('path');

module.exports = {
    name: 'ember-cli-ratchet',
    included: function included(app) {
        this.app = app;

        var options = app.options['ember-cli-ratchet'] || {};
        var modulePath = path.relative(app.project.root, __dirname);
        var ratchetPath = 'bower_components/ratchet/';
        var cssPath = path.join(ratchetPath, 'dist/css')
        var javascriptsPath = path.join(ratchetPath, 'js');

        var jsFiles = options.jsComponents ? options.jsComponents : fs.readdirSync(path.join(modulePath, javascriptsPath));

        // Import css from bootstrap
        app.import(path.join(cssPath, 'ratchet.css'));

        if (options.theme) {
            app.import(path.join(cssPath, 'ratchet-theme-' + options.theme + '.css'));
        }

        // Import javascript files
        if (options.importRatchetJs) {
            jsFiles.forEach(function (file) {
                var fileName = file.split('.')[0];
                if (fileName.length > 0) {
                    app.import(path.join(javascriptsPath, fileName + '.js'));
                }
            });
        }

        // Import glyphicons
        app.import(path.join(ratchetPath, 'dist/fonts/ratchicons.eot'), {
            destDir: '/fonts'
        });
        app.import(path.join(ratchetPath, 'dist/fonts/ratchicons.svg'), {
            destDir: '/fonts'
        });
        app.import(path.join(ratchetPath, 'dist/fonts/ratchicons.ttf'), {
            destDir: '/fonts'
        });
        app.import(path.join(ratchetPath, 'dist/fonts/ratchicons.woff'), {
            destDir: '/fonts'
        });
    }
};