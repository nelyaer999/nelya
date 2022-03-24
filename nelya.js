@@ -1,187 +1,189 @@
var assert = require('assert')
  , crypto = require('crypto')
  , Path = require('path')
  , minimatch = require('minimatch')
  , Error = require('http-errors')
  , LocalList = require('./local-list')
  , utils = require('./utils')
var assert    = require('assert')
var Crypto    = require('crypto')
var Error     = require('http-errors')
var minimatch = require('minimatch')
var Path      = require('path')
var LocalList = require('./local-list')
var Utils     = require('./utils')

// [[a, [b, c]], d] -> [a, b, c, d]
function flatten(array) {
	var result = []
	for (var i=0; i<array.length; i++) {
		if (Array.isArray(array[i])) {
			result.push.apply(result, flatten(array[i]))
		} else {
			result.push(array[i])
		}
	}
	return result
