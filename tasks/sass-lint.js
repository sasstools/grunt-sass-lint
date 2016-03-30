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
			resultFormat = lint.format(results, { options: opts });



		if (failResultCount > 0) {
			if(opts['outputFile']) {
				opts['output-file'] = opts['outputFile'];
				lint.outputResults(results, { options: opts });
				grunt.fail.warn('');
			} else {
				grunt.log.writeln(resultFormat);
				grunt.fail.warn('');
			}
		}
	});
};
