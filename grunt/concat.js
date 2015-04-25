module.exports = {
	concat: {
	  options: {
	    // define a string to put between each file in the concatenated output
	    separator: ';'
	  },
	  prod: {
	    // the files to concatenate
	    src: ['assets/js/vendor/jquery/jquery-2.1.3.js'],
	    // the location of the resulting JS file
	    dest: 'scripts/app.min.js'
	  }
	},
};