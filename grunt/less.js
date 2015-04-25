module.exports = {	
  dev: {
    options: {
      paths: ["assets/css"],
      sourceMap:true,
      ieCompat:true
    },
    files: {
      "css/production.css": "assets/less/main.less"
    }
  },
  prod: {
    options: {
      paths: ["css"],
      plugins: [
        //require('grunt-autoprefixer')({browsers: ["last 4 versions"]}),
        //new require('less-plugin-clean-css')(cleanCssOptions)
      ],      
    },
    files: {
      "css/production.css": "assets/less/main.less"
    }
  }	
};