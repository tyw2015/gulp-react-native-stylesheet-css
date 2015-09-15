var Handle = require('./Handle');

var format = require('./properties/all'),
	margingAndPadding = require('./properties/marginAndPadding'),
	boxShadow = require('./properties/boxShadow'),
	flex = require('./properties/flex'),
	final = require('./saveAll');

module.exports = function (css) {
	var handle = new Handle(css);

	handle.use(['margin', 'padding'], margingAndPadding);
	handle.use(['box-shadow', 'boxShadow'], boxShadow);
	handle.use(['flex'], flex);
	handle.use(format);

	handle.final(final);

	return handle.do();
};
