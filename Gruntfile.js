

module.exports = function(grunt) {
  
  var path = require("path");
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
        all: ['Gruntfile.js', 'src/client/**/*.js'],
        options: {
            'esversion': 6
        }
    },
    watch: {
        src: {
            files: ['src/client/prefabs/*.js', 'src/client/states/*.js', 'src/client/*.js'],
            tasks: ['jshint','browserify']
        }
    },
    browserify: {
        dev: {
            src: [
                "src/client/**/*.js",
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
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-express');

  // Default task(s).
  grunt.registerTask('default', ['browserify', 'watch']);
  grunt.registerTask('restart', ['express:dev:stop', 'express:dev']);

};