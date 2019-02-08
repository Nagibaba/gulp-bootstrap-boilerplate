// Include gulp
var gulp = require("gulp");

// Include Our Plugins
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var watch = require('gulp-watch');
var autoprefixer = require('autoprefixer-core');
var rigger = require('gulp-rigger');
var minify = require('gulp-minify');
var minifyCSS=require('gulp-minify-css');
var rename = require("gulp-rename"); 
var concat = require('gulp-concat'); 
var flatten = require('gulp-flatten'); 
var connect = require('gulp-connect');
var notify = require("gulp-notify");
const imagemin = require('gulp-imagemin');


var gulpJustStarted = true;
var lastCompile = new Date();

const babel = require('gulp-babel');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


var path = {
    build: { 
        html: 'build/',
        js: 'build/js/',
        vendor: 'build/js/vendor/', 
        css: 'build/css/main/',
        images: 'build/img/',
        fonts: 'build/fonts/',
    },
    src: {
        html: 'src/*.html', 
        js: 'src/js/main/**/*.js',
        vendor: 'src/js/vendor/*.js',
        css: 'src/css/main.sass',
        images: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
    },
    watch: { 
        html: 'src/**/*.html',
        js: 'src/js/main/*.js',
        vendor: 'src/js/vendor/*.js',
        css: 'src/css/**/*.sass',
        images: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
    },
};

var reload = function(){
    
    return connect.reload();                   
}

// var bNotify = function(t){
//     if(!gulpJustStarted && new Date() - lastCompile < 1000) {
//         notify(t)
//         gulpJustStarted = false;
//         lastCompile = new Date()
//     }
// }

gulp.task('html:build', function () {
    gulp.src(path.src.html) 
    .on('error', function(err) {
        console.log(err)
        this.emit('end')
    })
    .pipe(rigger()) 
    .pipe(gulp.dest(path.build.html)) 
    .pipe(reload())
    .pipe(
        notify({ message: "HTML compiled", onLast: true })
    );
});



gulp.task('js:build', function () {
    browserify({
        entries: ['./src/js/main/main.js'],
        debug: true
    })
    .transform(babelify)
    
    .transform("babelify", {
        presets: ["es2015"], 
        plugins: ["add-module-exports","transform-es2015-modules-umd"]}
    ) 
    .bundle()
    
    .pipe(source('all.js'))
    .pipe(gulp.dest(path.build.js))
    // .pipe(minify({
    //     ext:{

    //         min:'.min.js'
    //     },
    //     noSource:true 
    // }))
    // .pipe(gulp.dest(path.build.js))

    .pipe(reload())
    .pipe(notify({ message: "JS compiled", onLast: true }));

    
    });



gulp.task('css:build', function () {
    gulp.src(path.src.css) 
        .pipe(sass()) 
        .on('error', function(err) {
            console.log(err)
            this.emit('end')
        })
        .pipe(postcss([ autoprefixer({ browsers: ["> 0%", 'ie 11'] }) ]))
        .pipe(gulp.dest(path.build.css))
        .pipe(minifyCSS())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(path.build.css)) 
        .pipe(reload())
        .pipe(notify({ message: "CSS compiled", onLast: true }));
    });



gulp.task('image:build', function () {
    gulp.src(path.src.images) 
    .on('error', function(err) {
        console.log(err)
        this.emit('end')
    })
    .pipe(imagemin())
    .pipe(gulp.dest(path.build.images))
    .pipe(reload())
    
});




gulp.task('vendor:build', function () {
    gulp.src(path.src.vendor) 
    .on('error', function(err) {
        console.log(err)
        this.emit('end')
    })
    .pipe(gulp.dest(path.build.vendor))
    .pipe(reload())
    // .pipe(notify("VENDOR compiled"));
});



gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
    .on('error', function(err) {
        console.log(err)
        this.emit('end')
    })
    .pipe(flatten())
    .pipe(gulp.dest(path.build.fonts))
    .pipe(reload())
    // .pipe(notify("FONTS compiled"));
});


gulp.task('build', [
    'html:build',
    'js:build',
    'css:build',
    'fonts:build',
    'image:build',
    'vendor:build'
    ]);


gulp.task('watch', function(){
    

    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.css], function(event, cb) {
        gulp.start('css:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.images], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });


    watch([path.watch.vendor], function(event, cb) {
        gulp.start('vendor:build');
    });
});

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true,
    open: {browser: 'Google Chrome'}
  });
});

gulp.task('default', ['connect', 'build', 'watch']);