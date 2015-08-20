module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./"],
                    yuicompress: true
                },
                files: {
                    "./style.css": "./style.less"
                }
            }
        },
        watch: {
            files: "./*.less",
            tasks: ["less"]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};