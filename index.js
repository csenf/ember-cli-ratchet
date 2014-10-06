var fs   = require('fs');
var path = require('path');

module.exports = {
    name: 'ember-cli-ratchet',
    included: function included(app) {
        this.app = app;

        var options         = app.options['ember-cli-ratchet'] || {};
        var modulePath      = path.relative(app.project.root, __dirname);
        var ratchetPath   = 'vendor/ratchet/dist/';

        // Import css from bootstrap
        app.import(path.join(ratchetPath, 'css/ratchet.css'));

        if (options.theme) {
            app.import(path.join(ratchetPath, 'css/ratchet-theme-'+options.theme+'.css'));
        }

        // Import javascript files
        if (options.importRatchetJs) {
            app.import('vendor/ratchet/js/modals.js');
            app.import('vendor/ratchet/js/popovers.js');
            app.import('vendor/ratchet/js/segmented-controllers.js');
            app.import('vendor/ratchet/js/sliders.js');
            app.import('vendor/ratchet/js/toggles.js');
        }

        // Import glyphicons
        app.import(path.join(ratchetPath, 'fonts/ratchicons.eot'), { destDir: '/fonts' });
        app.import(path.join(ratchetPath, 'fonts/ratchicons.svg'), { destDir: '/fonts' });
        app.import(path.join(ratchetPath, 'fonts/ratchicons.ttf'), { destDir: '/fonts' });
        app.import(path.join(ratchetPath, 'fonts/ratchicons.woff'), { destDir: '/fonts' });
    }
};
