#!/usr/bin/env node
"use strict";
let util = require('util');
let Shape = require('../index.js');

console.log("calculo de area");

try {

  let arg = process.argv[2] || '{"width":9, "height":5}';
  let obj = JSON.parse(arg);
  let type = process.argv[3] || 'Triangle';
  let type2 = type.toLowerCase();
  let req = require('@alber7rp/ull-shape-' + type2 + '-alu0100825510');
  let t = new Shape(obj, type);
  let s = t.getArea();
  console.log('El area es: ' + s);
}
catch (e) {
  console.log(e.message);
}
