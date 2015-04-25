module.exports = {
	options:{
		spawn: false,
		livereload:true
	},
	scripts:{
		files:[
			'assets/js/*.js'
		],
		taks:[
			'jshint',
			'uglify'
		]
	},
	styles:{
		files:[
			'assets/less/*.less'
		],
		tastks:[
			'less:dev'
		]
	},
};