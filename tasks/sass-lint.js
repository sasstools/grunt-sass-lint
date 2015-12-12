'use strict';
var path = require('path'),
		lint = require('sass-lint');

module.exports = function (grunt) {
	grunt.verbose.writeln('\n' + lint.info + '\n');

	grunt.registerMultiTask('sasslint', 'Lint your Sass', function () {
		var opts = this.options({
					configFile: ''
				}),
				results = lint.lintFiles(this.data[0], opts, opts.configFile),
				failResultCount = lint.resultCount(results),
				resultFormat = lint.format(results);


		if (failResultCount > 0) {
			grunt.fail.warn('');

		} else {
			grunt.log.writeln(resultFormat);
		}
	});
};
