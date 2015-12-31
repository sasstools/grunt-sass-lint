'use strict';
var path = require('path');
var lint = require('sass-lint');

module.exports = function (grunt) {
	grunt.verbose.writeln('\n' + lint.info + '\n');

	grunt.registerMultiTask('sasslint', 'Lint your Sass', function () {
		var opts = this.options({
			configFile: ''
		});

		var results = lint.lintFiles(this.data[0], opts, opts.configFile);

		grunt.log.writeln(lint.format(results, { options: opts }));
	});
};
