'use strict';
var toCamelCase = require('to-camel-case');

const corners = ['TopLeft', 'TopRight', 'BottomRight', 'BottomLeft'];

module.exports = function (keys) {
  var values = keys[0].value.split('/')[0].split(' ');

  var property = toCamelCase(keys[0].key);
  var length = values.length;

  if (length === 1) {
    return keys;
  }

  keys = [];

  if (property !== 'borderRadius') {
    keys.push({
      key: property,
      value: values[0]
    });
  } else {
    if (length === 2) {
      [corners[0], corners[2]].forEach(function (prop) {
        keys.push({
          key: `border${prop}Radius`,
          value: values[0]
        });
      });
      [corners[1], corners[3]].forEach(function (prop) {
        keys.push({
          key: `border${prop}Radius`,
          value: values[1]
        });
      });
    }
    
    else if (length === 3) {
      keys.push({
        key: `border${corners[0]}Radius`,
        value: values[0]
      });
      [corners[1], corners[4]].forEach(function (prop) {
        keys.push({
          key: `border${prop}Radius`,
          value: values[1]
        });
      });
      keys.push({
        key: `border${corners[3]}Radius`,
        value: values[2]
      });
    }
    
    else if (length === 4) {
      corners.forEach(function (prop, index) {
        keys.push({
          key: `border${prop}Radius`,
          value: values[index]
        });
      });
    }
  }

  return keys;
};