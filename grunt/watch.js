module.exports = {
	options:{
		spawn: false,
		livereload:true
	},
	scripts:{
		files:[
			'assets/js/*.js'
		],
		tasks:[
			'jshint',
			'uglify',
			//'concat'
		]
	},
	styles:{
		files:[
			'assets/less/*.less'
		],
		tasks:[
			'less:dev'
		]
	},
};