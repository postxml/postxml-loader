const postxml = require('postxml')

module.exports = function (content) {

	this.cacheable && this.cacheable()

	const plugins = this.options.postxml

	if (!plugins) {
		return content
	}

	return postxml(plugins).process(content)
}
