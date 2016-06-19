module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			build: {
				src: ['js/src/jquery.jcarousel.js' , 'js/src/jquery.jcarousel-autoscroll.js' , 'js/src/jquery.jcarousel-control.js' , 'js/src/isotope.pkgd.js' , 'js/src/script.js'],
				dest: 'js/script.main.js'
			},
			dist: {
				src: ['css/src/reset.scss' , 'css/src/style.scss' , 'css/src/media.scss'],
				dest: 'css/style.main.scss'
			}
		},
		sass: {
			dist: {
				files: {
					'css/style.main.css': 'css/style.main.scss',
				}
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'js/script.main.js',
				dest: 'js/script.main.min.js'
			}
		},
		cssmin: {
			target: {
				files: {
					'css/style.main.min.css': ['css/style.main.css']
				}
			}
		},
		sprite:{
      all: {
        src: 'img/src/*.png',
        dest: 'img/spritesheet.png',
        destCss: 'css/sprites.css'
      }
    },
		watch: {
			sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['css/src/*.scss' ],
      tasks: ['concat' , 'sass' , 'cssmin'],
    }
  }
});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-spritesmith');

  // Default task(s).
  grunt.registerTask('default', ['concat' , 'sass' , 'uglify' , 'cssmin']);
  /*grunt.registerTask('watch', ['watch']);*/
};