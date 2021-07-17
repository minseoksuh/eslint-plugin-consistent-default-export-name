const rule = require('../../../lib/rules/filename.js');
const { RuleTester } = require('eslint');

console.log({ rule });

const ruleTester = new RuleTester();

const exportedEs6VariableCode = 'export default exported;';

ruleTester.run('test', rule, {
    valid: [
        {
            code: exportedEs6VariableCode,
            filename: '/some/dir/exported.js',
            parserOptions: { ecmaVersion: 6, sourceType: 'module' },
        },
    ],

    invalid: [
        {
            code: exportedEs6VariableCode,
            filename: '/some/dir/fooBar.js',
            parserOptions: { ecmaVersion: 6, sourceType: 'module' },
            errors: [
                {
                    message: 'filename does not match default export name',
                    column: 1,
                    line: 1,
                },
            ],
        },
    ],
});
