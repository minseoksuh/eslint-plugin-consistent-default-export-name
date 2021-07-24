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
        fix: {
            plugins: ['consistent-default-export-name'],
            env: {
                browser: true,
                es6: true,
                node: true,
            },
            rules: {
                'consistent-default-export-name/default-export-match-filename':
                    'error',
                'consistent-default-export-name/default-import-match-filename':
                    'error',
            },
        },
    },
    rules: requireIndex(__dirname + '/rules'),
};
