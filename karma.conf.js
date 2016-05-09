module.exports = function(config) {
  config.set({
    autoWatch: true,
    browsers: ['PhantomJS'],
    files: [
      'src/*.js',
      'test/*.spec.js',
    ],
    frameworks: ['jasmine'],
    phantomjsLauncher: {
      exitOnResourceError: true
    },
    reporters: ['progress'],
    singleRun: false
  })
}
