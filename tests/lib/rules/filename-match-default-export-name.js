import rule from '../../../lib/rules/filename-match-default-export-name.js';
import { RuleTester } from 'eslint';

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
                    message: 'default export name and filename does not match',
                    column: 1,
                    line: 1,
                },
            ],
        },
    ],
});
