'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		sasslint: {
			options: {
				configFile: 'config/.sass-lint.yml',
			},
			test: [
				'test/fixtures/*.scss'
			]
		},
		nodeunit: {
			tasks: ['test/test.js']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('default', ['sasslint']);
};
