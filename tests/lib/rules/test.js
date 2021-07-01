"use strict";

const rule = require("../../../lib/rules/test"),
    RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

const exportedEs6VariableCode = "export default exported;"

ruleTester.run("test", rule, {
    valid: [
        {
            code: exportedEs6VariableCode,
            filename: "/some/dir/exported.js",
            parserOptions: { ecmaVersion: 6, sourceType: "module" },
        },
    ],

    invalid: [
        {
            code: "var invalidVariable = true",
        },
        {
            code: "var invalidVariable = true",
        }
    ]
});