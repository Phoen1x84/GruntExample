module.exports = {

    // Task options
    options: {
        limit: 3
    },

    // Dev tasks
    devFirst: [
        //'clean',
        'jshint'
    ],
    devSecond: [
        'less:dev',
        'uglify'
    ],

    // Production tasks
    prodFirst: [
        //'clean',
        'jshint'
    ],
    prodSecond: [
        'less:prod',
        'uglify'
    ],

    // Image tasks
    imgFirst: [
        'imagemin'
    ]
};