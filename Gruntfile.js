'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		sasslint: {
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
