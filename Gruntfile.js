module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      all: ["_public/*.js", "*.js"]
    },

    jscs: {
      all: {
        src: ["public/*.js", "server.js", "test/**/*.js", '!public/bundle.js'],
        options: {
            config: ".jscsrc",
        }
      }
    },

    simplemocha: {
      src: ['test/**/*.js']
    }
  });

  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('default',  ['test']);
};
