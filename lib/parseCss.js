var Handle = require('./Handle');

var format = require('./properties/all'),
	margingAndPadding = require('./properties/marginAndPadding'),
	boxShadow = require('./properties/boxShadow'),
	flex = require('./properties/flex'),
	transform = require('./properties/transform'),
	lineHeight = require('./properties/lineHeight'),
	final = require('./saveAll');

module.exports = function (css) {
	var handle = new Handle(css);

	handle.use(['margin', 'padding'], margingAndPadding);
	handle.use(['box-shadow', 'boxShadow'], boxShadow);
	handle.use(['flex'], flex);
	handle.use(['transform'], transform);
	handle.use(['line-height'], lineHeight);
	handle.use(format);

	handle.final(final);

	return handle.do();
};
