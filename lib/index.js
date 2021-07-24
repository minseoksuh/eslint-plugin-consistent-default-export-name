/**
 * @fileoverview default-export-name = default-import-name = filename
 * @author minseoksuh
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');

module.exports = {
    configs: {
        enforce: {
            plugins: ['consistent-default-export-name'],
            env: ['node', 'es6'],
            rules: {
                'default-export-match-filename': 'error',
                'default-import-match-filename': 'error',
            },
        },
    },
    rules: requireIndex(__dirname + '/rules'),
};
