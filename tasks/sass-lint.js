'use strict';
var path = require('path');
var lint = require('sass-lint');

module.exports = function (grunt) {
	grunt.verbose.writeln('\n' + lint.info + '\n');

	grunt.registerMultiTask('sasslint', 'Lint your Sass', function () {

			var opts;

      var results = lint.lintFiles(this.data[0], opts);

      grunt.log.writeln(lint.format(results));

	});
};
