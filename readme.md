# postxml-loader  [![Build Status][ci-img]][ci]
[Postxml] loader for [webpack]

[Postxml]: https://github.com/postxml/postxml
[webpack]: https://github.com/webpack/webpack
[ci-img]:  https://travis-ci.org/postxml/postxml-loader.svg
[ci]:      https://travis-ci.org/postxml/postxml-loader

## Install
`npm install postxml-loader --save-dev`


## Usage
Here is the example of using postxml-loader along with file-loader:
```js
// Load plugins
const pImport       = require('postxml-import');
const pImageSize = require('postxml-image-size');

// Config
module.exports = {
    module: {
        loaders: [
            {
                test:   /\.css$/,
                loaders: [
					'file?name=[name].[ext]',
					'postxml'
				]
            }
        ]
    },
	// Array of plugins
    postxml: [
		pImport(),
		pImageSize()
	]
}
```
