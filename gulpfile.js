const browserSync = require("browser-sync");
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
// const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const changed = require("gulp-changed");
const htmlReplace = require("gulp-html-replace");
const htmlMin = require("gulp-htmlmin");
const del = require("del");
const sequence = require("gulp4-run-sequence");

const config = {
  dist: "dist/",
  src: "src/",
  cssin: "src/css/*.css",
  jsin: "src/js/*.js",
  imgin: "src/img/**/*.{jpg,jpeg,png,gif}",
  htmlin: "src/*.html",
  scssin: "src/scss/*.scss",
  cssout: "dist/css/",
  jsout: "dist/js/",
  imgout: "dist/img/",
  htmlout: "dist/",
  scssout: "src/css/",
  cssoutname: "style.css",
  jsoutname: "script.js",
  cssreplaceout: "css/style.css",
  jsreplaceout: "js/script.js",
};

//AUTOMATYCZNE PRZEŁADOWANIE PO ZMIANACH
gulp.task("reload", function () {
  browserSync.reload();
});

//ZAMIANA SCSS NA CSS, SOURCEMAPS ORAZ AUTOPREFIXER
gulp.task("sass", function () {
  return gulp
    .src(config.scssin)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.scssout))
    .pipe(browserSync.stream());
});

//MINIFIKACJA I KONKATENACJA CSS
gulp.task("css", function () {
  return gulp
    .src(config.cssin)
    .pipe(concat(config.cssoutname))
    .pipe(cleanCSS())
    .pipe(gulp.dest(config.cssout));
});

//MINIFIKACJA I KONKATENACJA JS
gulp.task("js", function () {
  return (
    gulp
      .src(config.jsin)
      .pipe(concat(config.jsoutname))
      // .pipe(uglify())
      .pipe(gulp.dest(config.jsout))
  );
});

//MINIFIKACJA OBRAZÓW
gulp.task("img", function () {
  return gulp
    .src(config.imgin)
    .pipe(changed(config.imgout))
    .pipe(imagemin())
    .pipe(gulp.dest(config.imgout));
});

//MINIFIKACJA HTML
gulp.task("html", function () {
  return gulp
    .src(config.htmlin)
    .pipe(
      htmlReplace({
        css: config.cssreplaceout,
        js: config.jsreplaceout,
      })
    )
    .pipe(
      htmlMin({
        sortAttributes: true,
        sortClassName: true,
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest(config.dist));
});

//USUWANIE FOLDERU DIST
gulp.task("clean", function () {
  return del([config.dist]);
});

//BUDOWANIE FOLDERU DIST
gulp.task("build", async function () {
  sequence("clean", ["html", "js", "css", "img"]);
});
//SERVER ONLINE
gulp.task(
  "serve",
  gulp.series("sass", function () {
    browserSync({
      server: config.dist,
    });
    gulp.watch(config.scssin, gulp.series("sass", "css"));
    gulp.watch(config.jsin, gulp.series("js"));
    gulp.watch(config.htmlin, gulp.series("html"));
    gulp.watch(
      [config.htmlout, config.jsout, config.cssout],
      gulp.series("reload")
    );
  })
);

gulp.task("default", gulp.series("serve"));
