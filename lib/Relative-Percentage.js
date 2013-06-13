/*
 * Relative-Percentage
 * https://github.com/technicolorenvy/Relative-Percentage
 *
 * Copyright (c) 2013 Joseph (Jos) Smith
 * Licensed under the GNU GENERAL PUBLIC license.
 */

// @param {Number} value 
// @param {Number} istart
// @param {Number} istop
// @param {Number} ostart
// @param {Number} ostop

module.exports = function reMap(value, istart, istop, ostart, ostop) {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
};