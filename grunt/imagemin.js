module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'assets/images',
            src: ['images/*.{png,jpg,gif}'],
            dest: 'images'
        }]
    }
};