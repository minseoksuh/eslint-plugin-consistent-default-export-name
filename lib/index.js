/**
 * @fileoverview default-export-name = default-import-name = filename
 * @author minseoksuh
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const defaultExportMatchFilename = require('./rules/default-export-match-filename');
const defaultImportMatchFilename = require('./rules/default-import-match-filename');

module.exports = {
    configs: {
        fixed: {
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
    rules: {
        'default-export-match-filename': defaultExportMatchFilename,
        'default-import-match-filename': defaultImportMatchFilename,
    },
};
