

module.exports = function(grunt) {
  
  var path = require("path");
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        src: {
            files: ['src/prefabs/*.js', 'src/states/*.js', 'src/*.js'],
            tasks: ['browserify']
        }
    },
    browserify: {
        dev: {
            src: [
                "src/**/*.js",
            ],
            dest: "./js/bundle.js",
            options: {
                browserifyOptions: { debug: true },
                transform: [["babelify", { "presets": ["es2015"] }]],
            }
        }
    },
    express: {
        "dev": {
            options: {
                server: path.resolve(__dirname, 'index.js')
            }
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-express');

  // Default task(s).
  grunt.registerTask('default', ['browserify', 'watch']);
  grunt.registerTask('restart', ['express:dev:stop', 'express:dev']);

};