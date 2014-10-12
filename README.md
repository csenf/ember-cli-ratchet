ember-cli-ratchet
===================

###Warning - this is still a WIP

###ember-cli-ratchet requires ember-cli version '0.0.41' or later

###You will need to have bower installed globablly to use this addon.
If you don't have bower installed, install it with:
`npm install -g bower`

This is an ember-cli addon that includes styles from [Ratchet](http://goratchet.com/) into your ember-cli project.

#Usage

In the root of your ember-cli project directory, run:
```bash
npm install --save-dev ember-cli-ratchet
```

You should now have access to the ratchet styles and scripts.

## Importing specific theme from Ratchet

Ratchet comes with two themes, ios and android. You may configure, which theme to include in your app.

```javascript
//your-ratchet-app/Brocfile.js

/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  'ember-cli-ratchet': {
    'theme': 'ios'
  }
});

module.exports = app.toTree();
```

## Importing ratchet.js

You can optionally import the ratchet JavaScript library.

```javascript
//your-ratchet-app/Brocfile.js

/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  'ember-cli-ratchet': {
    'importRatchetJs': true
  }
});

module.exports = app.toTree();
```

### JavaScript - Components
Per default all available JavaScript - Files are imported. Optionally you can select some components.

```javascript
//your-ratchet-app/Brocfile.js

/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  'ember-cli-ratchet': {
    'jsComponents': ['toggles', 'sliders']
  }
});
```