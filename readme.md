# Grunt Sass Lint

[Grunt](http://gruntjs.com/) plugin for [Sass Lint](https://github.com/sasstools/sass-lint).

## Install

```
npm install grunt-sass-lint --save-dev
```

## Examples
```js
grunt.initConfig({
	sasslint: {
		options: {
			configFile: 'config/.sass-lint.yml',
		},
		target: ['location/*.scss']
	}
});
```

## Options
See the [sass-lint options](https://github.com/sasstools/sass-lint#options).

In addition the following options are supported:
### configFile

Type: `string`  
Default: ``

Will fallback to `.sass-lint.yml` or the file location set at the `"sasslintConfig"` key inside of `package.json`
