/**
 * @fileoverview default-export-name = default-import-name = filename
 * @author minseoksuh
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');

module.exports = { rules: requireIndex(__dirname + '/rules') };
