# gulp-react-native-sas

Gulp plugin for converting CSS files to React Native StyleSheets.


# Install

```
npm install gulp-react-native-stylesheet-css --save-dev
```

# Basic usage

```javascript
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    reactNativeStylesheetCss = require('gulp-react-native-stylesheet-css');

gulp.task('styles', function() {
    gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(reactNativeStylesheetCss())
        .pipe(gulp.dest('./dist/sass/'));
});
```

SASS or any other CSS preprocessor is not required. Plain .CSS files may be used.

# Example output

# About

Licensed under MIT. Based off of the works of [gulp-react-native-css](https://github.com/soliury/gulp-react-native-css) and [react-native-css](https://github.com/sabeurthabti/react-native-css)
