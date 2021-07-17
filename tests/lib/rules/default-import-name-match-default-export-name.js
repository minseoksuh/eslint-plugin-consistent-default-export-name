const { RuleTester } = require('eslint');
// const path = require('path');

const rule = require('../../../lib/rules/default-import-name-match-default-export-name.js');

// function testFilePath(relativePath) {
//     return path.join(process.cwd(), './tests/files', relativePath);
// }

const ruleTester = new RuleTester({
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6,
    },
});

function getMessage(filename) {
    return `Default import name does not match filename "${filename}".`;
}

/**
 * @param {string} code
 * @param {string} expectedFilename
 * @param {string} [filename]
 */
function fail(code, expectedFilename, filename) {
    return {
        code,
        errors: [
            {
                message: getMessage(expectedFilename),
            },
        ],
        filename,
    };
}

// const parserOptions = {
//     ecmaVersion: 6,
//     sourceType: 'module',
// };

ruleTester.run('default-import-match-filename', rule, {
    valid: [
        'import Cat from "./cat"',
        'import cat from "./cat"',
        'import cat from "./Cat"',
        'import Cat from "./Cat"',
        'import cat from "./cat.js"',
        'import cat from "./cat.ts"',
    ],
    invalid: [
        fail('import cat0 from "./cat"', 'cat'),
        fail('import catfish from "./cat"', 'cat'),
        fail('import catfish, {cat} from "./cat"', 'cat'),
        fail('import catModel from "./models/cat"', 'cat'),
        fail('import cat from "./cat.model.js"', 'cat.model.js'),
        fail('import doge from "./cat/index"', 'cat/'),
    ],
});
