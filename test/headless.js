global.window = global;
global.assert = require('chai').assert;
global.expect = require('chai').expect;
global.firebase = require('firebase');
require('../src/js/data');
require('./data.spec.js');
