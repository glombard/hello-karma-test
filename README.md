All installation steps to prepare this sample Karma + PhantomJS test project:

```
brew install npm
npm init
npm install --global gulp-cli
npm install --global karma-cli
npm install --save-dev gulp

cat <<EOT > gulpfile.js
var gulp = require('gulp');
gulp.task('default', function() {
});
EOT

npm install karma --save-dev
npm install karma-jasmine karma-chrome-launcher --save-dev
npm install karma-phantomjs-launcher --save-dev
npm install phantomjs-prebuilt --save-dev
npm install jasmine-core --save-dev

cat <<EOT > karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS', 'PhantomJS_custom'],

    // you can define custom flags
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }
  })
}
EOT
```
I then edited the config further and added some code in `hello.js` and tests `hello.spec.js`.

