module.exports = {

    // Task options
    options: {
        limit: 5
    },

    // Dev tasks
    devFirst: [
        'clean',
        'jshint'
    ],
    devSecond: [
        'less:dev',        
        'autoprefixer',        
        'concat',
        'uglify'         
    ],

    // Production tasks
    prodFirst: [
        'clean',
        'jshint'
    ],
    prodSecond: [
        'less:dev',        
        'autoprefixer',
        'concat',
        'uglify'
    ],

    // Image tasks
    imgFirst: [
        'imagemin'
    ]
};