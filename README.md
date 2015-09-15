# gulp-react-native-stylesheet-css

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

Example using SASS as a preprocessor:

__Input__

```scss
#header {
    margin-bottom: 20;
    box-shadow: 0 2px 4px rgba(52, 21, 23, 0.32);
    bounces: true;

    .btn {
        padding: 3 8;
        text-align: center;
    }
}
```

__Output__

```javascript
module.exports ={
    "header": {
        "marginBottom": 20,
        "shadowColor": "rgb(52,21,23)",
        "shadowOffset": {
            "width": 0,
            "height": 2
        },
        "shadowOpacity": 0.32,
        "shadowRadius": 4,
        "bounces": true
    },
    "header btn": {
        "paddingTop": 3,
        "paddingBottom": 3,
        "paddingRight": 8,
        "paddingLeft": 8,
        "textAlign": "center"
    }
}
```

# Properties supported

Any property found in your CSS will be camelCased. By default, this plugin will always output values as JavaScript Number or Boolean objects when appropriate. Values with units attached, including "em" and "px," will be output without their unit suffixes.

## Special-case properties

The following properties output different keys to satisfy React Native's requirements. Unless otherwise noted, the values for each correspond with CSS3.

Property | Example Values | Notes
---------|----------------|------
margin | 2px<br />2px 4px<br />3px 1px 5px<br />1px 3px 2px 6px |
padding | 2px<br />2px 4px<br />3px 1px 5px<br />1px 3px 2px 6px |
box-shadow | none<br />0 2px 4px rgba(52, 21, 23, 0.32) | Inset shadows are not supported.

# About

Licensed under MIT. Based off of the works of [gulp-react-native-css](https://github.com/soliury/gulp-react-native-css) and [react-native-css](https://github.com/sabeurthabti/react-native-css)
