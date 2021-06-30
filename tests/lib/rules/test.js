"use strict";

const rule = require("../../../lib/rules/test"),
    RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("test", rule, {
    valid: [
        {
            code: "var foo = true",
        }
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