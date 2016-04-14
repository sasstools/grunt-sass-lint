'use strict';
var path = require('path'),
	lint = require('sass-lint');

module.exports = function (grunt) {
	grunt.verbose.writeln('\n' + lint.info + '\n');

	grunt.registerMultiTask('sasslint', 'Lint your Sass', function () {
		var opts = this.options({
				configFile: '',
				quiet: false // Makes the task not fail on warnings
			});
		var results = [];

		this.filesSrc.forEach(function (file) {
			results = results.concat(lint.lintFiles(file, opts, opts.configFile));
		});

		var warningCount = lint.warningCount(results).count,
			errorCount = lint.errorCount(results).count;
		var resultFormat = lint.format(results, { options: opts });
		if (warningCount + errorCount > 0) {
			if(opts['outputFile']) {
				opts['output-file'] = opts['outputFile'];
				lint.outputResults(results, { options: opts });
			} else {
				grunt.log.writeln(resultFormat);
			}
			// Only fail the task if there are errors or the quiet parameter is off
			if ((warningCount > 0 && !opts.quiet) ||
				errorCount > 0) {
				grunt.fail.warn('');
			}
		}
	});
};
