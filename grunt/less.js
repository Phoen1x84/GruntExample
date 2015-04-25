module.exports = {	
  dev: {
    options: {
      paths: ["assets/css"],
      sourceMap:true
    },
    files: {
      "css/production.css": "assets/less/main.less"
    }
  },
  prod: {
    options: {
      paths: ["css"],
      plugins: [
        //new require('less-plugin-autoprefix')({browsers: ["last 2 versions"]}),
        //new require('less-plugin-clean-css')(cleanCssOptions)
      ],      
    },
    files: {
      "css/production.css": "assets/less/main.less"
    }
  }	
};