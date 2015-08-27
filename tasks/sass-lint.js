'use strict';
var path = require('path');
var lint = require('sass-lint');

module.exports = function (grunt) {
	grunt.verbose.writeln('\n' + lint.info + '\n');

	grunt.registerMultiTask('sasslint', 'Compile Sass to CSS', function () {

			var done = this.async(),
		      files = this.filesSrc,
		      fileCount = this.filesSrc.length,
		      target = this.target,
		      opts,
		      message;

      var results = lint.lintFiles(this.data[0], opts);

      grunt.log.writeln(lint.format(results));

	});
};
