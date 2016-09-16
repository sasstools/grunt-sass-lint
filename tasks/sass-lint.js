'use strict';
var path = require('path'),
    lint = require('sass-lint');

module.exports = function(grunt) {
    grunt.verbose.writeln('\n' + lint.info + '\n');

    grunt.registerMultiTask('sasslint', 'Lint your Sass', function() {
        var opts = this.options({
            configFile: ''
        }),
        results = [];

        this.filesSrc.forEach(function(file) {
            results = results.concat(lint.lintFiles(file, opts, opts.configFile));
        });

        var resultCount = lint.resultCount(results),
            errorCount = lint.errorCount(results),
            warnCount = lint.warningCount(results),
            resultFormat = lint.format(results, { options: opts });

        if (resultCount > 0) {
            if (opts['outputFile']) {
                opts['output-file'] = opts['outputFile'];
                lint.outputResults(results, { options: opts });
            } else {
                grunt.log.writeln(resultFormat);
            }

            if (errorCount.count > 0 || warnCount.count > 0) {
                grunt.fail.warn('');
            }
        }
    });
};
