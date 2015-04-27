module.exports = {
autoprefixer: {
 
    options: {
      // Task-specific options go here. 
      browsers: ['last 6 versions']
    },
 
 
    // prefix the specified file 
    single_file: {
      options: {
        // Target-specific options go here. 
      },
      src: 'assets/less/main.less',
      dest: 'css/main.css'
    },
  }
};