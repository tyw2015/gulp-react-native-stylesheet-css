var through = require("through2"),
	gutil = require("gulp-util"),
	parseCss = require('./lib/parseCss');

var ext = gutil.replaceExtension;

module.exports = function (options) {
	"use strict";
	options = options || {};

	function reactNativeCss(file, enc, callback) {
		/*jshint validthis:true*/

		// Do nothing if no contents
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {
			// accepting streams is optional
			this.emit("error",
				new gutil.PluginError("gulp-react-native-sass", "Stream content is not supported"));
			return callback();
		}

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {
			var source = file.contents.toString();

			var style = parseCss(source.replace(/\r?\n|\r/g, ""));

			var prefix = "", suffix = "";
			if (options.outputPlainObject) {
				prefix = "module.exports = ";
			} else {
				prefix = "var React = require('react-native');\nvar { StyleSheet } = React;\nmodule.exports = StyleSheet.create(";
				suffix = ");";
			}

			file.contents = new Buffer(prefix + style + suffix);

			file.path = ext(file.path, '.js');

			this.push(file);

		}
		return callback();
	}

	return through.obj(reactNativeCss);
};
